<?php

// Defines
define( 'FL_CHILD_THEME_DIR', get_stylesheet_directory() );
define( 'FL_CHILD_THEME_URL', get_stylesheet_directory_uri() );

// Classes
require_once 'classes/class-fl-child-theme.php';

// Actions
add_action( 'wp_enqueue_scripts', 'FLChildTheme::enqueue_scripts', 1000 );

function _marco_assets() {
    wp_enqueue_style( '_marco-admin-stylesheet', get_stylesheet_directory_uri() . '/dist/css/admin.css', array(), '1.0.0', 'all' );
    wp_enqueue_style( '_slick-stylesheet', get_stylesheet_directory_uri() . '/dist/css/slick.css' );
    wp_enqueue_style( '_marco-stylesheet', get_stylesheet_directory_uri() . '/dist/css/bundle.css', array(), '1.0.0', 'all' );

    // wp_enqueue_script( '_gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js', array(), '1.0.0', true );
    wp_enqueue_script( '_slick', get_stylesheet_directory_uri() . '/dist/js/slick.min.js' );
    wp_enqueue_script( '_marco-scripts', get_stylesheet_directory_uri() . '/dist/js/bundle.js', array(), '1.0.0', true );
}

// function load_custom_templates() { 
// }

// function my_global_builder_posts( $post_ids ) {
//     $post_ids[] = '360';
//     $post_ids[] = '417';
//     $post_ids[] = '439';
//     $post_ids[] = '441';
//     $post_ids[] = '443';
//     $post_ids[] = '445';
//     $post_ids[] = '447';
//     $post_ids[] = '449';
//     $post_ids[] = '451';
//     $post_ids[] = '453';
//     $post_ids[] = '455';
//     $post_ids[] = '457';
//     $post_ids[] = '459';
//     return $post_ids;
//   }

// add_filter( 'fl_builder_global_posts', 'my_global_builder_posts' );

// add_action( 'customize_register', 'vive_market_customize_register' );

// add_action( 'fl_before_header', 'load_custom_templates' );
add_action('wp_enqueue_scripts', '_marco_assets', 1000 );



add_action( 'wp_enqueue_scripts', function(){
    wp_enqueue_script( 'wp-api' );
} );

// defer js
function defer_parsing_of_js( $url ) {
    if ( is_user_logged_in() ) return $url; //don't break WP Admin
    if ( FALSE === strpos( $url, '.js' ) ) return $url;
    if ( strpos( $url, 'jquery.js' ) ) return $url;
    return str_replace( ' src', ' defer src', $url );
}
// add_filter( 'script_loader_tag', 'defer_parsing_of_js', 10 );

// add_action( 'init', 'wpse325327_add_excerpts_to_pages' );
// function wpse325327_add_excerpts_to_pages() {
//     add_post_type_support( 'floorplans', 'excerpt' );
// }

function my_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/dist/images/Mar-Co-Products-Logo.svg);
            height:105px;
            width:320px;
            background-size: contain;
            background-repeat: no-repeat;
            padding-bottom: 30px; 
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );