export default defineNuxtRouteMiddleware((to) => {
    // Only handle paths under /archives/ but not /archives itself
    if (to.path.startsWith('/archives/') && to.path !== '/archives/') {
        return navigateTo(to.path.replace('/archives/', '/'), {
            redirectCode: 301,
            replace: true,
        })
    }
})
