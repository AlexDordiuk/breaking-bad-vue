import axios from "axios";

export default {
    state: {
        charactersArr: []
    },
    getters: {
        getAllCharacters: state => state.charactersArr
    },
    actions: {
        async fetchChars(ctx) {
            try {
                const resp = await axios.get(`https://breakingbadapi.com/api/characters`)
                ctx.commit('getFetchChars', resp.data)
            } catch (e) {
                console.log(e)
            }
        },
        async searchChar(ctx, searchValue) {
            if (searchValue.length) {
                try {
                    const resp = await axios.get(`https://breakingbadapi.com/api/characters?name=${searchValue}`);
                    const arr = [];
                    for (let i in resp.data) {
                        arr.push(resp.data[i]);
                    }
                    ctx.commit('getFetchChars', arr)
                } catch (e) {
                    console.log(e)
                }
            } else {
                this.dispatch('fetchChars')
            }
        }
    },
    mutations: {
        getFetchChars(state, charactersArr) {
            state.charactersArr = charactersArr
        }
    }
}