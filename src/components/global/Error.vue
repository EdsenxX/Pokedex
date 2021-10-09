<template>
    <div class="error">
        <p>{{ msg }}</p>
        <button @click="close">x</button>
    </div>
</template>

<script>
export default {
    name: "Error",
    props: ['msg'],
    methods: {
        close(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .error{
        background: #D32F2F;
        width: 100%;
        font-size: 1.2rem;
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        display: flex;
        align-items: center;
    }
    p{
        width: 95%;
    }
    button{
        widows: 5%;
        margin: 0 auto;
    }
</style>