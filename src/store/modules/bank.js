export default {
    actions: {
        async banksArray({ commit }, banks) {
            commit('updateBanks', banks)
        },
        async fillJamInBank({ state, commit }, jam) {

            let distributeInteger = function* (total, divider) {
                if (divider === 0) {
                    yield 0
                } else {
                    let rest = total % divider
                    let result = total / divider

                    for (let i = 0; i < divider; i++) {
                        if (rest-- >0) {
                            yield Math.ceil(result)
                        } else {
                            yield Math.floor(result)
                        }
                    }
                }
            }

            this.banksForFilling = state.banks;

            const availableBanks = this.banksForFilling.filter(function (e) {
                if (e.jam !== "") {
                    return e.size >= jam.jamSize && jam.jamName === e.jam && jam.jamSize < e.size;
                } else {
                    return e.size >= jam.jamSize && jam.jamSize < e.size;
                }
            });

            if (availableBanks.length === 0) {
                return alert('Нет доступных банок для заливки варенья')
            }

            for (let fill of distributeInteger(jam.jamSize, availableBanks.length)) {
                availableBanks.forEach((element, index) => {
                    this.banksForFilling[index] = {
                        name: element.name,
                        size: element.size,
                        jamSize: fill + parseInt(element.jamSize),
                        jam: jam.jamName
                    };
                });
            }

            commit('updateBanks', this.banksForFilling)
        }
    },
    mutations: {
        updateBanks(state, banks) {
            state.banks = banks
        },
        createBank(state, newBank){
            state.banks.unshift(newBank)
        }
    },
    state: {
        banks: []
    },
    getters: {
        allBanks(state) {
            return state.banks;
        }
    }
}
