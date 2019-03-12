<template>
    <div class="border border-grey-light border-4 shadow-md p-4"
        :class="`bg-${color} text-${text} rounded-${rounded} ${hover ? 'hover:shadow-lg' : ''}`"
    >
        <h2 class="text-grey-dark uppercase"><slot name="title"/></h2>
        <main class="p-4 text-justify leading-normal">
            <slot/>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'card',
        props: {
            color: { default: 'white', type: String },
            text: { default: 'black', type: String },
            rounded: { default: 'lg', type: String },
            hover: { default: false, type: Boolean },
        },
    }
</script>

<style scoped>

</style>