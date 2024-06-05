<template>
    <div>
        <header id="projects_header" class="text-center">
            <section id="titre" class="w-100">
                <h1 class="mt-5 text-primary">{{ elem.title }}</h1>
            </section>
        </header>
  
        <main id="projects_main" class="py-5">
            <div class="container">

            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'ProjectsView',

    props: {
        elem: Object
    },

    methods: {}
}
</script>
