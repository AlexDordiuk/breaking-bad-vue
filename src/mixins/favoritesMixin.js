export default {
    data() {
        return {
            favoritesArr: []
        }
    },
    mounted() {
        const favoritesData = localStorage.getItem('favorites')
        favoritesData ? this.favoritesArr = JSON.parse(favoritesData) : []
    },
    watch: {
        favoritesArr() {
            localStorage.setItem('favorites', JSON.stringify(this.favoritesArr))
        }
    }
}