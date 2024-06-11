<script>
export default {
    name: 'SingleProject',
    props: {
        projectInfo: Object
    }

}
</script>

<template>
    <div class="col">
        <div class="card my-3" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h3>{{ projectInfo.name }}</h3>
                <p class="card-text">{{ projectInfo.summary }}</p>
                <router-link :to="{ name: 'project-description', params: { slug: projectInfo.slug } }" class="btn btn-primary">
                    View More
                </router-link>
            </div>
        </div>
    </div>
</template>