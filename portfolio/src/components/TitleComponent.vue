<template>
    <header>
        <section id="titre" class="mb-3 mt-3 w-100">
            <h1 class="text-primary">{{ title }}</h1>
        </section>
    </header>
</template>

<script>
export default {
    name: 'TitleComponent',

    props: {
        title: String
    }
}
</script>
