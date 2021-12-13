<?php

namespace SEOPressPro\Helpers\Settings;

defined('ABSPATH') or exit('Cheatin&#8217; uh?');

abstract class LocalBusinessHelper {
    public static function getListTypes() {
        $types = [
            ['value' => 'LocalBusiness', 'label' => __('Local Business (default)', 'wp-seopress-pro')],
            ['value' => 'AnimalShelter', 'label' => __('Animal Shelter', 'wp-seopress-pro')],
            ['value' => 'AutomotiveBusiness', 'label' => __('Automotive Business', 'wp-seopress-pro')],
            ['value' => 'AutoBodyShop', 'label' => __('|-Auto Body Shop', 'wp-seopress-pro')],
            ['value' => 'AutoDealer', 'label' => __('|-Auto Dealer', 'wp-seopress-pro')],
            ['value' => 'AutoPartsStore', 'label' => __('|-Auto Parts Store', 'wp-seopress-pro')],
            ['value' => 'AutoRental', 'label' => __('|-Auto Rental', 'wp-seopress-pro')],
            ['value' => 'AutoRepair', 'label' => __('|-Auto Repair', 'wp-seopress-pro')],
            ['value' => 'Auto Wash', 'label' => __('|-AutoWash', 'wp-seopress-pro')],
            ['value' => 'GasStation', 'label' => __('|-Gas Station', 'wp-seopress-pro')],
            ['value' => 'MotorcycleDealer', 'label' => __('|-Motorcycle Dealer', 'wp-seopress-pro')],
            ['value' => 'MotorcycleRepair', 'label' => __('|-Motorcycle Repair', 'wp-seopress-pro')],
            ['value' => 'ChildCare', 'label' => __('Child Care', 'wp-seopress-pro')],
            ['value' => 'DryCleaningOrLaundry', 'label' => __('Dry Cleaning Or Laundry', 'wp-seopress-pro')],
            ['value' => 'EmergencyService', 'label' => __('Emergency Service', 'wp-seopress-pro')],
            ['value' => 'FireStation', 'label' => __('|-Fire Station', 'wp-seopress-pro')],
            ['value' => 'Hospital', 'label' => __('|-Hospital', 'wp-seopress-pro')],
            ['value' => 'PoliceStation', 'label' => __('|-Police Station', 'wp-seopress-pro')],
            ['value' => 'EmploymentAgency', 'label' => __('Employment Agency', 'wp-seopress-pro')],
            ['value' => 'EntertainmentBusiness', 'label' => __('Entertainment Business', 'wp-seopress-pro')],
            ['value' => 'AdultEntertainment', 'label' => __('|-Adult Entertainment', 'wp-seopress-pro')],
            ['value' => 'AmusementPark', 'label' => __('|-Amusement Park', 'wp-seopress-pro')],
            ['value' => 'ArtGallery', 'label' => __('|-Art Gallery', 'wp-seopress-pro')],
            ['value' => 'Casino', 'label' => __('|-Casino', 'wp-seopress-pro')],
            ['value' => 'ComedyClub', 'label' => __('|-Comedy Club', 'wp-seopress-pro')],
            ['value' => 'MovieTheater', 'label' => __('|-Movie Theater', 'wp-seopress-pro')],
            ['value' => 'NightClub', 'label' => __('|-Night Club', 'wp-seopress-pro')],
            ['value' => 'FinancialService', 'label' => __('Financial Service', 'wp-seopress-pro')],
            ['value' => 'AccountingService', 'label' => __('|-Accounting Service', 'wp-seopress-pro')],
            ['value' => 'AutomatedTeller', 'label' => __('|-Automated Teller', 'wp-seopress-pro')],
            ['value' => 'BankOrCreditUnion', 'label' => __('|-Bank Or Credit Union', 'wp-seopress-pro')],
            ['value' => 'InsuranceAgency', 'label' => __('|-Insurance Agency', 'wp-seopress-pro')],
            ['value' => 'FoodEstablishment', 'label' => __('Food Establishment', 'wp-seopress-pro')],
            ['value' => 'Bakery', 'label' => __('|-Bakery', 'wp-seopress-pro')],
            ['value' => 'BarOrPub', 'label' => __('|-Bar Or Pub', 'wp-seopress-pro')],
            ['value' => 'Brewery', 'label' => __('|-Brewery', 'wp-seopress-pro')],
            ['value' => 'CafeOrCoffeeShop', 'label' => __('|-Cafe Or Coffee Shop', 'wp-seopress-pro')],
            ['value' => 'FastFoodRestaurant', 'label' => __('|-Fast Food Restaurant', 'wp-seopress-pro')],
            ['value' => 'IceCreamShop', 'label' => __('|-Ice Cream Shop', 'wp-seopress-pro')],
            ['value' => 'Restaurant', 'label' => __('|-Restaurant', 'wp-seopress-pro')],
            ['value' => 'Winery', 'label' => __('|-Winery', 'wp-seopress-pro')],
            ['value' => 'GovernmentOffice', 'label' => __('Government Office', 'wp-seopress-pro')],
            ['value' => 'PostOffice', 'label' => __('|-PostOffice', 'wp-seopress-pro')],
            ['value' => 'HealthAndBeautyBusiness', 'label' => __('Health And Beauty Business', 'wp-seopress-pro')],
            ['value' => 'BeautySalon', 'label' => __('|-Beauty Salon', 'wp-seopress-pro')],
            ['value' => 'DaySpa', 'label' => __('|-Day Spa', 'wp-seopress-pro')],
            ['value' => 'HairSalon', 'label' => __('|-Hair Salon', 'wp-seopress-pro')],
            ['value' => 'HealthClub', 'label' => __('|-Health Club', 'wp-seopress-pro')],
            ['value' => 'NailSalon', 'label' => __('|-Nail Salon', 'wp-seopress-pro')],
            ['value' => 'TattooParlor', 'label' => __('|-Tattoo Parlor', 'wp-seopress-pro')],
            ['value' => 'HomeAndConstructionBusiness', 'label' => __('Home And Construction Business', 'wp-seopress-pro')],
            ['value' => 'Electrician', 'label' => __('|-Electrician', 'wp-seopress-pro')],
            ['value' => 'HVACBusiness', 'label' => __('|-HVAC Business', 'wp-seopress-pro')],
            ['value' => 'HousePainter', 'label' => __('|-House Painter', 'wp-seopress-pro')],
            ['value' => 'Locksmith', 'label' => __('|-Locksmith', 'wp-seopress-pro')],
            ['value' => 'MovingCompany', 'label' => __('|-Moving Company', 'wp-seopress-pro')],
            ['value' => 'Plumber', 'label' => __('|-Plumber', 'wp-seopress-pro')],
            ['value' => 'RoofingContractor', 'label' => __('|-Roofing Contractor', 'wp-seopress-pro')],
            ['value' => 'InternetCafe', 'label' => __('Internet Cafe', 'wp-seopress-pro')],
            ['value' => 'MedicalBusiness', 'label' => __('Medical Business', 'wp-seopress-pro')],
            ['value' => 'CommunityHealth', 'label' => __('|-Community Health', 'wp-seopress-pro')],
            ['value' => 'Dentist', 'label' => __('|-Dentist', 'wp-seopress-pro')],
            ['value' => 'Dermatology', 'label' => __('|-Dermatology', 'wp-seopress-pro')],
            ['value' => 'DietNutrition', 'label' => __('|-Diet Nutrition', 'wp-seopress-pro')],
            ['value' => 'Emergency', 'label' => __('|-Emergency', 'wp-seopress-pro')],
            ['value' => 'Gynecologic', 'label' => __('|-Gynecologic', 'wp-seopress-pro')],
            ['value' => 'MedicalClinic', 'label' => __('|-Medical Clinic', 'wp-seopress-pro')],
            ['value' => 'Midwifery', 'label' => __('|-Midwifery', 'wp-seopress-pro')],
            ['value' => 'Nursing', 'label' => __('|-Nursing', 'wp-seopress-pro')],
            ['value' => 'Obstetric', 'label' => __('|-Obstetric', 'wp-seopress-pro')],
            ['value' => 'Oncologic', 'label' => __('|-Oncologic', 'wp-seopress-pro')],
            ['value' => 'Optician', 'label' => __('|-Optician', 'wp-seopress-pro')],
            ['value' => 'Optometric', 'label' => __('|-Optometric', 'wp-seopress-pro')],
            ['value' => 'Otolaryngologic', 'label' => __('|-Otolaryngologic', 'wp-seopress-pro')],
            ['value' => 'Pediatric', 'label' => __('|-Pediatric', 'wp-seopress-pro')],
            ['value' => 'Pharmacy', 'label' => __('|-Pharmacy', 'wp-seopress-pro')],
            ['value' => 'Physician', 'label' => __('|-Physician', 'wp-seopress-pro')],
            ['value' => 'Physiotherapy', 'label' => __('|-Physiotherapy', 'wp-seopress-pro')],
            ['value' => 'PlasticSurgery', 'label' => __('|-Plastic Surgery', 'wp-seopress-pro')],
            ['value' => 'Podiatric', 'label' => __('|-Podiatric', 'wp-seopress-pro')],
            ['value' => 'PrimaryCare', 'label' => __('|-Primary Care', 'wp-seopress-pro')],
            ['value' => 'Psychiatric', 'label' => __('|-Psychiatric', 'wp-seopress-pro')],
            ['value' => 'PublicHealth', 'label' => __('|-Public Health', 'wp-seopress-pro')],
            ['value' => 'VeterinaryCare', 'label' => __('|-Veterinary Care', 'wp-seopress-pro')],
            ['value' => 'LegalService', 'label' => __('Legal Service', 'wp-seopress-pro')],
            ['value' => 'Attorney', 'label' => __('|-Attorney', 'wp-seopress-pro')],
            ['value' => 'Notary', 'label' => __('|-Notary', 'wp-seopress-pro')],
            ['value' => 'Library', 'label' => __('Library', 'wp-seopress-pro')],
            ['value' => 'LodgingBusiness', 'label' => __('Lodging Business', 'wp-seopress-pro')],
            ['value' => 'BedAndBreakfast', 'label' => __('|-Bed And Breakfast', 'wp-seopress-pro')],
            ['value' => 'Campground', 'label' => __('|-Campground', 'wp-seopress-pro')],
            ['value' => 'Hostel', 'label' => __('|-Hostel', 'wp-seopress-pro')],
            ['value' => 'Hotel', 'label' => __('|-Hotel', 'wp-seopress-pro')],
            ['value' => 'Motel', 'label' => __('|-Motel', 'wp-seopress-pro')],
            ['value' => 'Resort', 'label' => __('|-Resort', 'wp-seopress-pro')],
            ['value' => 'ProfessionalService', 'label' => __('Professional Service', 'wp-seopress-pro')],
            ['value' => 'RadioStation', 'label' => __('Radio Station', 'wp-seopress-pro')],
            ['value' => 'RealEstateAgent', 'label' => __('Real Estate Agent', 'wp-seopress-pro')],
            ['value' => 'RecyclingCenter', 'label' => __('Recycling Center', 'wp-seopress-pro')],
            ['value' => 'SelfStorage', 'label' => __('Real Self Storage', 'wp-seopress-pro')],
            ['value' => 'ShoppingCenter', 'label' => __('Shopping Center', 'wp-seopress-pro')],
            ['value' => 'SportsActivityLocation', 'label' => __('Sports Activity Location', 'wp-seopress-pro')],
            ['value' => 'BowlingAlley', 'label' => __('|-Bowling Alley', 'wp-seopress-pro')],
            ['value' => 'ExerciseGym', 'label' => __('|-Exercise Gym', 'wp-seopress-pro')],
            ['value' => 'GolfCourse', 'label' => __('|-Golf Course', 'wp-seopress-pro')],
            ['value' => 'HealthClub', 'label' => __('|-Health Club', 'wp-seopress-pro')],
            ['value' => 'PublicSwimmingPool', 'label' => __('|-Public Swimming Pool', 'wp-seopress-pro')],
            ['value' => 'SkiResort', 'label' => __('|-Ski Resort', 'wp-seopress-pro')],
            ['value' => 'SportsClub', 'label' => __('|-Sports Club', 'wp-seopress-pro')],
            ['value' => 'StadiumOrArena', 'label' => __('|-Stadium Or Arena', 'wp-seopress-pro')],
            ['value' => 'TennisComplex', 'label' => __('|-Tennis Complex', 'wp-seopress-pro')],
            ['value' => 'Store', 'label' => __('Store', 'wp-seopress-pro')],
            ['value' => 'AutoPartsStore', 'label' => __('|-Auto Parts Store', 'wp-seopress-pro')],
            ['value' => 'BikeStore', 'label' => __('|-Bike Store', 'wp-seopress-pro')],
            ['value' => 'BookStore', 'label' => __('|-Book Store', 'wp-seopress-pro')],
            ['value' => 'ClothingStore', 'label' => __('|-Clothing Store', 'wp-seopress-pro')],
            ['value' => 'ComputerStore', 'label' => __('|-Computer Store', 'wp-seopress-pro')],
            ['value' => 'ConvenienceStore', 'label' => __('|-Convenience Store', 'wp-seopress-pro')],
            ['value' => 'DepartmentStore', 'label' => __('|-Department Store', 'wp-seopress-pro')],
            ['value' => 'ElectronicsStore', 'label' => __('|-Electronics Store', 'wp-seopress-pro')],
            ['value' => 'Florist', 'label' => __('|-Florist', 'wp-seopress-pro')],
            ['value' => 'FurnitureStore', 'label' => __('|-Furniture Store', 'wp-seopress-pro')],
            ['value' => 'GardenStore', 'label' => __('|-Garden Store', 'wp-seopress-pro')],
            ['value' => 'GroceryStore', 'label' => __('|-Grocery Store', 'wp-seopress-pro')],
            ['value' => 'HardwareStore', 'label' => __('|-Hardware Store', 'wp-seopress-pro')],
            ['value' => 'HobbyShop', 'label' => __('|-Hobby Shop', 'wp-seopress-pro')],
            ['value' => 'HomeGoodsStore', 'label' => __('|-Home Goods Store', 'wp-seopress-pro')],
            ['value' => 'JewelryStore', 'label' => __('|-Jewelry Store', 'wp-seopress-pro')],
            ['value' => 'LiquorStore', 'label' => __('|-Liquor Store', 'wp-seopress-pro')],
            ['value' => 'MensClothingStore', 'label' => __('|-Mens Clothing Store', 'wp-seopress-pro')],
            ['value' => 'MobilePhoneStore', 'label' => __('|-Mobile Phone Store', 'wp-seopress-pro')],
            ['value' => 'MovieRentalStore', 'label' => __('|-Movie Rental Store', 'wp-seopress-pro')],
            ['value' => 'MusicStore', 'label' => __('|-Music Store', 'wp-seopress-pro')],
            ['value' => 'OfficeEquipmentStore', 'label' => __('|-Office Equipment Store', 'wp-seopress-pro')],
            ['value' => 'OutletStore', 'label' => __('|-Outlet Store', 'wp-seopress-pro')],
            ['value' => 'PawnShop', 'label' => __('|-Pawn Shop', 'wp-seopress-pro')],
            ['value' => 'PetStore', 'label' => __('|-Pet Store', 'wp-seopress-pro')],
            ['value' => 'ShoeStore', 'label' => __('|-Shoe Store', 'wp-seopress-pro')],
            ['value' => 'SportingGoodsStore', 'label' => __('|-Sporting Goods Store', 'wp-seopress-pro')],
            ['value' => 'TireShop', 'label' => __('|-Tire Shop', 'wp-seopress-pro')],
            ['value' => 'ToyStore', 'label' => __('|-Toy Store', 'wp-seopress-pro')],
            ['value' => 'WholesaleStore', 'label' => __('|-Wholesale Store', 'wp-seopress-pro')],
            ['value' => 'TelevisionStation', 'label' => __('|-Wholesale Store', 'wp-seopress-pro')],
            ['value' => 'TouristInformationCenter', 'label' => __('Tourist Information Center', 'wp-seopress-pro')],
            ['value' => 'TravelAgency', 'label' => __('Travel Agency', 'wp-seopress-pro')],
        ];

        return apply_filters('seopress_schemas_local_business_types', $types);
    }

    /**
     * @since 4.5.0
     *
     * @param string|stdObject $classCallback
     *
     * @return void
     */
    public static function getSettingsSection($classCallback) {
        $idSection = 'seopress_setting_section_local_business';
        $page = 'seopress-settings-admin-local-business';

        $settings = [
            'section' => [
                'id' => $idSection,
                'title' => '',
                'callback' => [$classCallback, 'renderSection'],
                'page' => $page,
            ],
            'fields' => [
                [
                    'id' => 'seopress_local_business_page',
                    'title' => __('Where to display the schema?', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldPage'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_type',
                    'title' => __('Business type', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldType'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_street_address',
                    'title' => __('Street Address', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldStreetAddress'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_address_locality',
                    'title' => __('City', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldAddressLocality'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_address_region',
                    'title' => __('State', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldAddressRegion'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_postal_code',
                    'title' => __('Postal code', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldPostalCode'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_address_country',
                    'title' => __('Country', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldAddressCountry'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_lat',
                    'title' => __('Latitude', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldLatitude'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_lon',
                    'title' => __('Longitude', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldLongitude'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_place_id',
                    'title' => __('Place ID', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldPlaceId'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_url',
                    'title' => __('URL', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldUrl'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_phone',
                    'title' => __('Telephone', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldPhone'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_price_range',
                    'title' => __('Price range', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldPriceRange'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_cuisine',
                    'title' => __('Cuisine served', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldCuisine'],
                    'page' => $page,
                    'section' => $idSection,
                ],
                [
                    'id' => 'seopress_local_business_opening_hours',
                    'title' => __('Opening hours', 'wp-seopress-pro'),
                    'callback' => [$classCallback, 'renderFieldOpeningHours'],
                    'page' => $page,
                    'section' => $idSection,
                ],
            ],
        ];

        return $settings;
    }
}
