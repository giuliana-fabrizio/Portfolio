<template>
    <div class="circle-degree m-3 p-3 rounded-circle">
        <div v-if="item.img" class="circle-degree-img">
            <img :src="item.img" alt="Image">
        </div>

        <div id="degree-content" class="d-flex flex-column justify-content-center h-100" :style="item.style">
            <h5 class="fw-bold m-0 mb-3 p-0 subtitle text-center">{{ item.title }}</h5>

            <p class="text-blue mb-1">{{ item.school }}</p>
            <p class="circle-degree-description fst-italic">{{ item.description }}</p>

            <div class="circle-degree-footer d-flex justify-content-between align-items-center">
                <div class="d-flex m-0 p-0 text-gray">
                    <i class="bi bi-pin-angle"></i>
                    <span class="ms-2">{{ item.place }}</span>
                </div>

                <p class="badge-degree m-0">
                    <i class="bi bi-clock"></i>
                    <span class="ms-2">{{ item.date }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DegreeCardComponent',

    props: {
        item: {
            type: Object,
            required: true
        }
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
@media screen and (max-width: 450px) {
    .circle-degree {
        width: 325px;
    }

    .circle-degree-description {
        display: none;
    }

    .circle-degree-footer {
        flex-direction: column;
        padding: 0px 0px !important;
    }

    .badge-degree {
        margin-top: 10px !important;
    }
}

.badge-degree {
    background-color: var(--dark-blue);
    /* border: 2px solid #f0f6fe; */
    border-radius: 30px;

    color: var(--white);
    font-weight: bold;
    font-size: small;
    padding: 0px 12px;
}

.circle-degree {
    aspect-ratio: 1/1;
    background-color: var(--blue-1);
    border: 3px solid var(--blue-1);
    color: black;
    position: relative;
    width: 400px;
}

.circle-degree-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 30%;
    width: 100%;
    overflow: hidden;
}

.circle-degree-img img {
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
}

.circle-degree-description {
    padding-left: 15px;
}

.circle-degree-footer {
    padding: 0px 50px;
}

.place-degree {
    color: var(--blue-1);
}
</style>
