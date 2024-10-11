import { ref } from 'vue'

export function useLinkblogFeed() {
    const feedItems = ref([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const fetchFeed = async () => {
        loading.value = true
        error.value = null

        try {
            const response = await fetch('/api/linkblog-rss')
            const data = await response.json()

            if (data.error) {
                throw new Error(data.error)
            }
            console.log(data.rss.channel[0].item)
            feedItems.value = data.rss.channel[0].item.map((item: any) => ({
                // title: item.title[0],
                description: item.description[0],
                link: item.link[0],
                pubDate: item.pubDate[0],
            }))
        } catch (err) {
            error.value = err instanceof Error ? err.message : String(err)
        } finally {
            loading.value = false
        }
    }

    return {
        feedItems,
        loading,
        error,
        fetchFeed,
    }
}
