<template>
    <div>
        <h2>Заливка варенья в банки</h2>
        <form @submit.prevent="submit">
            <label>Сколько грамм варенья вы сварили?</label>
            <br>
            <input type="text" placeholder="Укажите" v-model="size">
            <br>
            <label>Какое варенье вы сварили?</label>
            <br>
            <select v-model="jam">
                <option>Клубничное</option>
                <option>Вишневое</option>
                <option>Абрикосовое</option>
            </select>

            <button type="submit">Залить варенье</button>
        </form>

    </div>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        name: "FillBank",
        data() {
            return {
                jam: "",
                size: 0
            };
        },
        methods: {
            ...mapActions(["fillJamInBank"]),
            submit() {
                this.fillJamInBank({
                    jamName: this.jam,
                    jamSize: this.size
                });
            }
        }

    }
</script>

<style scoped>
    input, select {
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
