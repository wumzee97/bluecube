<template>
  <v-text-field
    placeholder="Find Something"
    height="60"
    class="mt-7" 
    @keyup="changeUrl()"
    flat
    v-model="search"
    @keypress.native.enter="searchPhotos()"
    solo
    prepend-inner-icon="search"
  >
    <template #append>
      <v-btn
        color="primary"
        @click="searchPhotos()"
        type="submit"
        value="Subscribe"
      >
        Search
      </v-btn>
    </template>
  </v-text-field>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    searchPhotos() {
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${this.search}`,
          {
            headers: {
              Authorization:
                'Client-ID VOKC5ojja4hEtL3gdPcTyQpyYCRjE76jDxSNjz84S0Q',
            },
          }
        )
        .then((response) => {
          this.$store.commit('photos/allphotos', response.data.results)
        })
    },
    changeUrl() {
      this.$store.commit(
        'photos/setUrl',
        `https://api.unsplash.com/search/photos?&per_page=20&query=${this.search}`
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.full-width {
  width: 100% !important;
}
</style>
