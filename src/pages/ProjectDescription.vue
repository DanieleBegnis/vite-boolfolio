<script>
import axios from 'axios';

export default {
    name: 'ProjectDescription',
    data() {
        return {
            project: null
        };
    },
    methods: {
        getProjectDetails() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                console.log(response)
                this.project = response.data.results;
            });
        }
    },
    mounted() {
        this.getProjectDetails();
    }
}
</script>

<template>
    <!-- test test singolo progetto chiamato {{ project.slug }} -->
     
     <div v-if="project">
        <h1>test descrizione {{ project.slug }}</h1>
     </div>
</template>