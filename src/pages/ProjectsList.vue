<script>
import axios from 'axios';
import SingleProject from '../components/SingleProject.vue';

export default {
    name: 'ProjectsList',
    components: {
        SingleProject
    },
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
        <SingleProject v-for="project in projects" :projectInfo="project"></SingleProject>
    </div>
</template>

<style scoped lang="scss"></style>