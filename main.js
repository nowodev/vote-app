Vue.createApp({
    data() {
        return {
            stories: Feed.stories
        }
    },

    computed: {
        sortedStories() {
            return this.stories.sort((a, b) => b.votes - a.votes);
        }
    },

    methods: {
        upVote(storyId) {
            const index = this.stories.findIndex(story => story.id === storyId)
            this.stories[index].votes++
        }
    },
}).mount('#app')