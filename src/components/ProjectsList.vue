<script>
import axios from 'axios';
export default {
    name: 'ProjectsList',
    data() {
        return {
            projects: []
        };
    },
    methods: {
        getProjectsFromApi() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    this.projects = response.data.results
                });
        }
    },
    mounted() {
        this.getProjectsFromApi();
    }
}



</script>

<template>
    <h1>Progetti realizzati da Noi</h1>
    <div class="row">
        <div v-for="project in projects" class="col">
            <div class="card my-3" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h3>{{ project.name }}</h3>
                    <p>for: {{ project.client_name }}</p>
                    <p class="card-text">{{ project.summary }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>