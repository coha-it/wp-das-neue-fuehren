<?php

namespace SEOPressPro\Actions\FiltersFree;

if ( ! defined('ABSPATH')) {
    exit;
}

use SEOPress\Core\Hooks\ExecuteHooks;

class SubTabsGoogleNews implements ExecuteHooks {
    public function hooks() {
        add_filter('seopress_active_google_news', '__return_true');
    }
}
