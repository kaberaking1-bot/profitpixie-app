# WordPress Headless CMS Setup Guide

Your React app is now configured to fetch content from WordPress REST API. Follow these steps to complete the setup:

## 1. Set Your WordPress URL

Create a `.env.local` file in your project root and add:

```
VITE_WORDPRESS_URL=https://your-wordpress-site.com
```

Replace `https://your-wordpress-site.com` with your actual WordPress site URL.

## 2. WordPress Requirements

Your WordPress site needs:

### A. Enable REST API
The WordPress REST API is enabled by default in WordPress 4.7+. No action needed unless you've disabled it.

### B. Install Required Plugins

For **Products** functionality, you need to create a custom post type. Install one of these plugins:

**Option 1: Custom Post Type UI** (Recommended for custom products)
1. Install "Custom Post Type UI" plugin
2. Create a custom post type called `products`
3. Set the REST API slug to `products`
4. Enable REST API support

**Option 2: WooCommerce** (If you want full e-commerce)
1. Install WooCommerce plugin
2. The API will be available at `/wp-json/wc/v3/products`
3. You'll need to update the WordPress service file to use WooCommerce API

### C. Add Custom Fields (for Products)

Install **Advanced Custom Fields (ACF)** plugin and create these fields for the `products` post type:

- `price` (Number field)
- `affiliate_link` (URL field)
- `rating` (Number field, 0-5)
- `featured` (True/False field)

Make sure to expose these fields to REST API in ACF settings.

### D. Create Product Categories

1. Register a custom taxonomy called `product_category` for your products post type
2. Make sure it's exposed to REST API

## 3. WordPress Content Structure

### Blog Posts (Default)
- Use the standard WordPress Posts
- Add featured images
- The REST API is at: `/wp-json/wp/v2/posts`

### Products (Custom Post Type)
- Create products using your custom post type
- Add featured images
- Fill in the custom fields (price, affiliate_link, rating, featured)
- Assign to product categories
- The REST API is at: `/wp-json/wp/v2/products`

### Categories
- Create product categories
- The REST API is at: `/wp-json/wp/v2/product_category`

## 4. Test Your Setup

Once configured, test these endpoints in your browser:

- Blog posts: `https://your-site.com/wp-json/wp/v2/posts?_embed`
- Products: `https://your-site.com/wp-json/wp/v2/products?_embed`
- Categories: `https://your-site.com/wp-json/wp/v2/product_category`

## 5. CORS Configuration

If you encounter CORS issues, add this to your WordPress theme's `functions.php`:

```php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
});
```

## Alternative: Simple WordPress Custom Post Type Code

If you prefer not to use plugins, add this to your theme's `functions.php`:

```php
// Register Products Post Type
function create_products_post_type() {
    register_post_type('products',
        array(
            'labels' => array(
                'name' => __('Products'),
                'singular_name' => __('Product')
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'rest_base' => 'products',
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields')
        )
    );
}
add_action('init', 'create_products_post_type');

// Register Product Category Taxonomy
function create_product_category_taxonomy() {
    register_taxonomy(
        'product_category',
        'products',
        array(
            'label' => __('Product Categories'),
            'rewrite' => array('slug' => 'product-category'),
            'hierarchical' => true,
            'show_in_rest' => true,
            'rest_base' => 'product_category'
        )
    );
}
add_action('init', 'create_product_category_taxonomy');
```

## Need Help?

If you need assistance setting up WordPress, consider:
- WordPress.com (managed hosting with built-in setup)
- Bluehost, SiteGround, or WP Engine (WordPress-optimized hosting)
- Local development with Local by Flywheel

## Current Fallback

Until WordPress is configured, the app will show empty results. The WordPress service is configured to handle errors gracefully and return empty arrays.
