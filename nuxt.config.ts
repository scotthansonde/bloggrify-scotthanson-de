// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        '@bloggrify/core',
        '@bloggrify/mistral',
    ],
    compatibilityDate: '2024-07-11',
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