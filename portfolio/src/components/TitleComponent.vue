<template>
    <section id="titre" class="mb-3 mt-5 w-100">
        <h1 class="text-primary">{{ title }}</h1>
    </section>
</template>

<script>
export default {
    name: 'TitleComponent',

    props: {
        title: String
    }
}
</script>
