<script>
import axios from 'axios';

export default {
    name: 'ProjectDescription',
    data() {
        return {
            post: null
        };
    },
    methods: {
        getPostDetails() {
            axios.get(`http://127.0.0.1:8000/api/posts/${this.$route.params.slug}`)
            .then((response) => {
                this.post = response.data.post;
            });
        }
    },
    mounted() {
        this.getPostDetails();
    }
}
</script>

<template>
    test test singolo progetto
</template>