Vue.createApp({
    data() {
        return {
            stories: Feed.stories
        }
    },
    methods: {
        upVote(storyId) {
            const index = this.stories.findIndex(story => story.id === storyId)
            this.stories[index].votes++
        }
    },
}).mount('#app')