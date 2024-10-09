// 11ty links had a trailing slash, but nuxt doesn't like that.

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path !== '/' && to.path.endsWith('/')) {
        const { path, query, hash } = to
        const nextPath = path.replace(/\/+$/, '') || '/'
        const nextRoute = { path: nextPath, query, hash }
        return navigateTo(nextRoute, { redirectCode: 301 })
    }
})
