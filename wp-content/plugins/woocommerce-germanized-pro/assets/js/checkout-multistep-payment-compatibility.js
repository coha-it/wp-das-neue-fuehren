window.germanized = window.germanized || {};

( function( $, germanized ) {

    germanized.multistep_checkout_payment_compatibility = {
        params: {},

        init: function() {
            $( document )
                .on( 'click', '.next-step-button', this.onClickNextStep )
                .on( 'click', '.prev-step-button', this.onClickPrevStep )
                .on( 'refresh', '.step-wrapper', this.onClickNextStep );

            $( document.body )
                .on( 'wc_gzdp_step_changed', this.onStepChanged )
                .on( 'updated_checkout', this.onUpdateCheckout );
        },

        maybeAddPlaceholderCheckbox: function( stepId ) {
            var $wrapper = $( '.step-wrapper-active' ),
                $form = $( 'form.woocommerce-checkout' );

            if ( $form.find( '.wc-gzdp-cc-terms-placeholder' ).length > 0 ) {
                $form.find( '.wc-gzdp-cc-terms-placeholder' ).remove();
            }

            /**
             * Temporarily append a terms placeholder checkbox to
             * improve compatibility with payment plugins explicitly checking for terms
             */
            if ( 'payment' === stepId ) {
                $form.prepend( '<input class="wc-gzdp-cc-terms-placeholder" type="checkbox" name="terms" value="1" style="display: none" checked />' );
            }
        },

        onUpdateCheckout: function() {
            var self = germanized.multistep_checkout_payment_compatibility,
                $wrapper = $( '.step-wrapper-active' );

            self.maybeAddPlaceholderCheckbox( $wrapper.data( 'id' ) );
        },

        /**
         * After refreshing the step, make sure we are removing the placeholder if payment step
         * is the active step. Try to set current payment method to the "old" value.
         */
        onStepChanged: function() {
            var self = germanized.multistep_checkout_payment_compatibility,
                $currentStep = $( '.step-wrapper-active' ),
                $form = $( 'form.woocommerce-checkout' ),
                currentStepId = $currentStep.data( 'id' );

            self.maybeAddPlaceholderCheckbox( currentStepId );

            if ( currentStepId === 'payment' ) {
                var current = $form.find( ".wc-gzdp-payment-method-placeholder" ).data( 'current' );

                if ( current && $form.find( 'input#' + current ).length > 0 ) {
                    $form.find( 'input#' + current ).trigger( 'change' );
                }

                $form.find( ".wc-gzdp-payment-method-placeholder" ).remove();
            } else if ( currentStepId === 'order' ) {
                $form.find( '.wc-gzdp-cc-terms-placeholder' ).remove();
            }
        },

        maybeInitPaymentPlaceholders: function( stepId ) {
            if ( stepId !== 'payment' ) {
                var $current = $( 'input[name=payment_method]:checked' ),
                    $form    = $( 'form.woocommerce-checkout' );

                if ( $form.find( '.wc-gzdp-payment-method-placeholder' ).length === 0 ) {
                    var id = $current.length > 0 ? $current.attr( 'id' ) : '';

                    $form.append( '<input type="radio" style="display: none;" name="payment_method" data-current="' + id + '" class="wc-gzdp-payment-method-placeholder" value="placeholder" checked="checked" />' );
                }
            }
        },

        onClickPrevStep: function() {
            var self         = germanized.multistep_checkout_payment_compatibility,
                stepToChange = $( this ).data( 'href' );

            self.maybeInitPaymentPlaceholders( stepToChange );
            self.maybeAddPlaceholderCheckbox( stepToChange );
        },

        onClickNextStep: function( e ) {
            var $wrapper = $( '.step-wrapper-active' ),
                self     = germanized.multistep_checkout_payment_compatibility,
                currentStepId = $wrapper.data( 'id' );

            self.maybeInitPaymentPlaceholders( currentStepId );
            self.maybeAddPlaceholderCheckbox( currentStepId );

            /**
             * Fake pay now button click for improved compatibility
             */
            if ( 'payment' === currentStepId ) {
                $( '#place_order' ).trigger( 'click' );
                e.preventDefault();
            }
        }
    };

    $( document ).ready( function() {
        germanized.multistep_checkout_payment_compatibility.init();
    });

})( jQuery, window.germanized );
