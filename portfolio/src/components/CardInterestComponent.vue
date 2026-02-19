<template>
    <div class="card-interest p-4" :class="card_style">
        <h5 class="subtitle mb-2 text-start"><strong>{{ item.title }}</strong></h5>
        <p class="text-start m-0">{{ item.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'CardInterestComponent',

    props: {
        item: Object,
        card_style: String
    }
}
</script>

<style scoped>
.card-interest {
    background-color: var(--blue-1);
}

.card-interest-left {
    border-radius: 50px 0px;
}

.card-interest-right {
    border-radius: 0px 50px;
}
</style>
