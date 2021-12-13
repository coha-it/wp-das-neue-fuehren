<?php

namespace SEOPressPro\Actions\FiltersFree;

if ( ! defined('ABSPATH')) {
    exit;
}

use SEOPress\Core\Hooks\ExecuteHooks;

class SubTabsVideoSitemap implements ExecuteHooks {
    public function hooks() {
        add_filter('seopress_active_video_sitemap', '__return_true');
    }
}
