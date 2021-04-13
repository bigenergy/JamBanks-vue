<template>
    <div>
        <h2>Список банок</h2>
        <button @click="showBanks">Показать банки</button>
        <div v-if="showInfo">
            <ul>
                <li v-for="item in allBanks" :key="item.name">
                    Банка: {{ item.name }} | Объем: {{ item.size }} ||
                    <span v-if="item.jam === ''">
                        Содержимое: пустая банка
                    </span>
                    <span v-else>
                        Содержимое: {{ item.jamName }} ({{ item.jam }} гр.)
                    </span>
                </li>
            </ul>
            <br>
            <button @click="hideBanks">Скрыть банки</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "CheckBank",
        data() {
            return {
                showInfo: false
            }
        },
        computed: mapGetters(["allBanks"]),
        watch: {
            allBanks: function () {
                mapGetters(["allBanks"])
            },

        },
        methods: {
            showBanks() {
                this.showInfo = true;
            },
            hideBanks() {
                this.showInfo = false;
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
