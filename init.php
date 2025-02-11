<?php
if (!defined('ABSPATH')) {
    exit;
}

// Register block
function custom_tabs_block_init()
{
    register_block_type(__DIR__, array(
        'script' => 'custom-tabs-frontend-script',
        'style' => 'custom-tabs-block-style',
    ));
}

// Register frontend script and styles
function custom_tabs_enqueue_assets()
{
    wp_register_script(
        'custom-tabs-frontend-script',
        plugins_url('tabs.js', __FILE__),
        array('jquery'), // Add jQuery as dependency (optional)
        false,
        true // Load in footer
    );

    wp_register_style(
        'custom-tabs-block-style',
        plugins_url('style.css', __FILE__)
    );
}
add_action('wp_enqueue_scripts', 'custom_tabs_enqueue_assets');
add_action('init', 'custom_tabs_block_init');
