<?php

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_uri(),
        array( 'parenthandle' ), 
        wp_get_theme()->get('Version') // this only works if you have Version in the style header
    );
}

function prefix_bootstrap() 
{       
    // JS
    wp_register_script('prefix_bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js');
    wp_enqueue_script('prefix_bootstrap');
    wp_register_script('prefix_bootstrap_bundle', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js');
    wp_enqueue_script('prefix_bootstrap_bundle');

    // CSS
    wp_register_style('prefix_bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
    wp_enqueue_style('prefix_bootstrap');
}
add_action("admin_enqueue_scripts" ,"prefix_bootstrap");

function woocommerce_support() {
  add_theme_support( 'woocommerce' );
}

add_action( 'after_setup_theme', 'woocommerce_support' );