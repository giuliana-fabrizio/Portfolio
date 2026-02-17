<template>
    <div v-if="elem.title">
        <h3 v-if="!isSection" class="bg-white fw-bold text-dark mt-5">{{ elem.title }}</h3>

        <div class="row align-items-center">
            <div :class="[elem.images ? elem.images_style : 'col-12', elem.list ? 'card mt-3 p-4' : '']">
                <h5 v-if="isSection" class="fw-bold text-dark mb-2">{{ elem.title }}</h5>

                <p v-if="elem.text" v-html="formattedText(String(elem.text))"
                    :class="[elem.list ? '' : 'bg-white', 'm-0', 'text-gray']"></p>

                <ul v-if="elem.list" class="mb-0">
                    <li v-for="(item, key) in elem.list" :key="key" class="text-gray"
                        v-html="formattedText(String(item))">
                    </li>
                </ul>
            </div>

            <div
                :class="[elem.list ? elem.images_style : 'col-12', 'd-flex', 'justify-content-center', 'mt-3', 'my-lg-auto']">
                <div v-for="(image, key) in elem.images" :key="key" class="bg-white">
                    <img :src="image.path" :alt="image.alt" class="img-fluid mx-auto" :style="image.style">
                    <p class="m-0 mt-1 text-center text-muted fst-italic">{{ image.legend }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsElem',

    props: {
        elem: Object,
        isSection: Boolean
    },

    methods: {
        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        }
    }
};
</script>

<style scoped>
.card {
    background: var(--blue-7);
    border-radius: var(--card-radius);
}

li::marker {
    color: var(--blue-6);
    font-size: 1.2rem;
}
</style>
