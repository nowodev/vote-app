const StoryComponent = {
    template: `
            <div class="card">
                <img class="card-img-top" v-bind:src="story.storyImage" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">
                        <a v-bind:href="story.url">
                            {{ story.title }}
                        </a>
                    </h5>
                    <p class="card-text">{{ story.text }}</p>
                    <p class="card-text"><small class="text-muted">published {{ story.postedAt }}</small></p>
                    <button class="btn btn-primary" v-on:click="upVote(story.id)">UpVote</button>
                    <span
                        v-bind:class="story.votes > 0 ? 'badge-success' : 'badge-secondary'" 
                        class="badge float-right">
                        {{ story.votes }}
                    </span>
                </div>
            </div>
    `,

    props: ['story', 'stories'],

    methods: {
        upVote(storyId) {
            const index = this.stories.findIndex(story => story.id === storyId)
            this.stories[index].votes++
        }
    },
};

Vue.createApp({
    components: { 'story-component': StoryComponent },

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
}).mount('#app')