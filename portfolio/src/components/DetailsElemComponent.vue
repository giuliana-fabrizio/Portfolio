<template>
    <div class="row">
        <div :class="[elem.images ? elem.img_style : 'col-12']">
            <h5 v-if="display_subtitle" class="fw-bold text-dark text-start mt-2 mb-2">{{ elem.title
            }}</h5>

            <p v-if="elem.text" v-html="formattedText(String(elem.text))" class="m-0 text-start text-gray"></p>

            <ul v-if="elem.list">
                <li v-for="(item, item_key) in elem.list" :key="item_key" class="text-gray text-start"
                    v-html="formattedText(String(item))">
                </li>
            </ul>
        </div>

        <div :class="[elem.list ? elem.img_style : 'col-12', 'd-flex', 'justify-content-center', 'my-auto']">
            <div v-for="(image, image_key) in elem.images" :key="image_key" class="mx-3 my-3 my-lg-0">
                <img :src="image.path" :alt="image.alt" class="img-fluid rounded" :style="image.style">
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
