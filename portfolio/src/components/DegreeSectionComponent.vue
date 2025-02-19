<template>
    <section :class="[margin ? '' : 'mt-md-0', 'mt-5', 'row']">
        <h5><strong class="subtitle">{{ title }}</strong></h5>
        <div v-for="(item, key) in items" :key="key" class="col-6 col-lg-4 mt-3">
            <div class="card h-100 p-3">
                <div class="d-flex align-items-center flex-column justify-content-center">
                    <img
                        :src="item.logo"
                        alt="Logo"
                        class="img-fluid mb-1"
                        style="max-height: 125px;">
                    <p class="mb-0">{{ item.title }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'DegreeSectionComponent',

    props: {
        title: {
            type: String,
            required: true,
        },
        margin: {
            type: Boolean,
            required: false
        },
        items: {
            type: Object,
            required: true
        }
    }
};
</script>
