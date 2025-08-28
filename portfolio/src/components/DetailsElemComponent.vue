<template>
    <div class="row">
        <div :class="[elem.images ? 'col-md-6' : 'col-12']">
            <h5 v-if="display_subtitle" class="fw-bold text-dark text-start mt-2 mb-2">{{ elem.title
            }}</h5>

            <ul v-if="elem.list">
                <li v-for="(item, item_key) in elem.list" :key="item_key" class="text-secondary text-start"
                    v-html="formattedText(String(item))">
                </li>
            </ul>
        </div>

        <div :class="[elem.list ? 'col-md-6' : 'col-12']">
            <div v-for="(image, image_key) in elem.images" :key="image_key">
                <img :src="image.path" :alt="image.alt" class="img-fluid img-page-details">
                <p class="m-0 mt-1 text-muted text-center fst-italic">{{ image.legend }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsElem',

    props: {
        elem: undefined,
        display_subtitle: Boolean
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
