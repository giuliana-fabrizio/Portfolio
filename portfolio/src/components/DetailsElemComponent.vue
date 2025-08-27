<template>
    <div>
        <h3 v-if="elem.title && type === 'h3'" class="text-dark mt-5 mb-3">{{ elem.title }}</h3>
        <h5 v-if="elem.title && type === 'h5'" class="fw-bold text-dark mt-2 mb-2">{{ elem.title }}</h5>

        <p v-if="elem.text" v-html="formattedText(String(elem.text))" class="text-start text-secondary mb-4"></p>

        <ul v-if="elem.list">
            <li v-for="(item, item_key) in elem.list" :key="item_key" class="text-secondary text-start"
                v-html="formattedText(String(item))">
            </li>
        </ul>

        <div v-for="(image, image_key) in elem.images" :key="image_key" class="row justify-content-center">
            <div class="col-12 col-md-9">
                <img :src="image.path" :alt="image.alt" class="img-fluid img-page-details mt-5">
                <p class="text-muted text-center mt-2 fst-italic">{{ image.legend }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsElem',

    props: {
        elem: undefined,
        type: String
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
