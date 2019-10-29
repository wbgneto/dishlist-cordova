const routes = [
    {
        path: '/',
        component: () => import('layouts/Default.vue'),
        children: [
            {
                name: 'restaurant.menu',
                path: 'restaurant/:restaurantId/menu',
                component: () => import('pages/Menu.vue'),
            },
            {
                name: 'restaurant.menu.dish',
                path: 'restaurant/:restaurantId/dish/:dishId',
                component: () => import('pages/Dish.vue'),
                meta: {
                    showBackButton: true,
                    showNavigation: false,
                },
            },
            {
                name: 'restaurant.review',
                path: 'restaurant/:restaurantId/dish/:dishId/review',
                component: () => import('pages/AddReview.vue'),
                meta: {
                    showBackButton: true,
                    showNavigation: false,
                },
            },
            {
                name: 'home',
                path: '/',
                component: () => import('pages/Home.vue'),
            },
            {
                name: 'restaurant.search',
                path: 'restaurant/search',
                component: () => import('pages/SearchRestaurant.vue'),
            },
        ],
    },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue'),
    });
}

export default routes;
