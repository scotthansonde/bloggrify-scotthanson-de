export default defineNuxtRouteMiddleware((to) => {
    // Only handle paths under /archives/ but not /archives itself
    if (to.path.startsWith('/archives/') && to.path !== '/archives/') {
        return navigateTo(to.path.replace('/archives/', '/'), {
            redirectCode: 301,
            replace: true,
        })
    }
    // Forgot the date in the path
    if (to.path === '/2025/03/beautiful-things') {
        return navigateTo('/2025/03/10/beautiful-things/', {
            redirectCode: 301,
            replace: true,
        })
    }
})
