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
    <div v-if="project">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <p class="card-text">{{ project.summary }}</p>
                <p class="card-text">{{ project.client_name }}</p>
            </div>
        </div>
    </div>
</template>