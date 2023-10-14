<template>
    <div>
        <h2 class="text-primary m-1" >{{ count }}</h2>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            if(this.count > 0) {
                this.count--;
            }
        }
    }
}
</script>

<style scoped lang="scss">
</style>