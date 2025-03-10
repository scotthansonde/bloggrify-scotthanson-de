<template>
    <h1>RSS Feed</h1>
    <!-- <pre>{{ items }}</pre> -->
    <ul>
        <li v-for="item in items" :key="item.id">
            <p>{{ item.description.join(' ') }} <a :href="item.link" target="_blank">(Link)</a></p>
            <small>Published: {{ new Date(item.pubDate).toLocaleString() }}</small>
        </li>
    </ul>
</template>

<script setup>
const { data, status, error, refresh, clear } = await useFetch('/api/linkblog-rss')
const items = data.value.rss.channel[0].item
</script>
