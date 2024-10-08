// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: ['./theme', '@bloggrify/core'],
    compatibilityDate: '2024-07-11',
    modules: ['@nuxtjs/tailwindcss'],
    routeRules: {
        '/feed.xml': {
            redirect: { to: '/rss.xml', statusCode: 301 },
        },
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        // Suppress warning about legacy JS API in Sass
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },
    },
})
