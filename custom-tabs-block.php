<?php
/**
 * Plugin Name: Custom Tabs Block
 * Description: A Gutenberg block that allows dynamic tabs with SVG icons.
 * Version: 1.0
 * Author: Sakibur Rahman Safat
 */

if (!defined('ABSPATH'))
    exit;

// Register block
function custom_tabs_block_init()
{
    wp_register_script(
        'custom-tabs-block-editor',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-editor', 'wp-element', 'wp-components', 'wp-i18n')
    );

    wp_register_style(
        'custom-tabs-block-style',
        plugins_url('style.css', __FILE__)
    );

    register_block_type('custom/tabs', array(
        'editor_script' => 'custom-tabs-block-editor',
        'style' => 'custom-tabs-block-style'
    ));
}
add_action('init', 'custom_tabs_block_init');
