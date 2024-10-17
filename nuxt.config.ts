import { resolvePath } from 'nuxt/kit'

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
    image: {
        cloudflare: {
            baseURL: 'https://images.scotthanson.de',
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
    hooks: {
        'nitro:config': (nitroConfig) => {
            nitroConfig.publicAssets ||= []
            nitroConfig.publicAssets.push({
                dir: `${process.cwd()}/content`,
                baseURL: '/markdown/',
                maxAge: 60 * 60 * 24 * 365, // 1 year
            })
        },
    },
})
