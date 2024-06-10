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
                <p>for: {{ projectInfo.client_name }}</p>
                <p class="card-text">{{ projectInfo.summary }}</p>
            </div>
        </div>
    </div>
</template>