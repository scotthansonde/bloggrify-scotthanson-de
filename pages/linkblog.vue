<template>
    <div>
        <h1>RSS Feed</h1>
        <button @click="fetchFeed" :disabled="loading">Refresh Feed</button>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <!-- <pre v-else>{{ feedItems }}</pre> -->
        <ul v-else>
            <li v-for="item in feedItems" :key="item.id">
                <p>{{ item.description }} <a :href="item.link" target="_blank">(Link)</a></p>
                <small>Published: {{ new Date(item.pubDate).toLocaleString() }}</small>
            </li>
        </ul>
    </div>
</template>

<script setup>
// import { onMounted } from 'vue'
// import { useLinkblogFeed } from '~/composables/useLinkblogFeed'

const { feedItems, loading, error, fetchFeed } = useLinkblogFeed()

onMounted(() => {
    fetchFeed()
})
</script>
