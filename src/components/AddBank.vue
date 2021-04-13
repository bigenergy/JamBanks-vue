<template>
    <div>
        <h2>Добавление банки</h2>
        <form @submit.prevent="submit">
            <input type="text" placeholder="Номер банки" v-model="bankName">
            <input type="number" placeholder="Объём банки" v-model="bankSize">

            <button type="submit">Добавить</button>
        </form>

    </div>
</template>

<script>
    import { mapMutations } from "vuex";
    export default {
        name: "AddBank",
        data() {
            return {
                bankName: "",
                bankSize: ""
            }
        },
        methods: {
            ...mapMutations(["createBank"]),
            submit() {
                this.createBank({
                    name: this.bankName,
                    size: this.bankSize,
                    jamSize: 0,
                    jam: ""
                });
                this.bankName = this.bankSize = "";
            }
        }
    }
</script>

<style scoped>
    input {
        padding: 5px;
        margin: 5px;
    }
    button {
        padding: 5px;
        margin: 5px;
        background-color: #42b983;
        border-radius: 5px;
        color: aliceblue;
    }
</style>
