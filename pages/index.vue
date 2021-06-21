<template>
  <v-container px-7>
    <div class="page-nav justify-space-between white hidden-sm-and-down">
      <div class="px-6">
        World <v-icon small class="ml-2">fas fa-angle-down</v-icon>
      </div>
      <div class="px-6">
        Following <v-icon small class="ml-2">fas fa-angle-down</v-icon>
      </div>
      <div class="px-6">
        Popular <v-icon small class="ml-2">fas fa-angle-down</v-icon>
      </div>
      <div class="px-6">
        Post <v-icon small class="ml-2">fas fa-angle-down</v-icon>
      </div>
      <div class="px-6">
        Gender <v-icon small class="ml-2">fas fa-angle-down</v-icon>
      </div>
      <div class="px-6">
        Location <v-icon small class="ml-2">fas fa-angle-down</v-icon>
      </div>
      <div class="px-6">
        Profession <v-icon small class="ml-2">fas fa-angle-down</v-icon>
      </div>
      <div class="px-6">
        Profession <v-icon small class="ml-2">fas fa-angle-down</v-icon>
      </div>
    </div>

    <v-row class="mt-6">
      <v-col class="hidden-sm-and-down" v-for="i in photos" :key="i.id">
        <image-card
          v-if="i.urls"
          :image="i.urls.small"
          :name="i.user.name"
          :location="i.user.location || 'No location'"
          :imageId="i.id"
          :totalPhotos="i.user.total_photos"
        ></image-card>
      </v-col>
      <v-col
        cols="6"
        sm="4"
        class="hidden-md-and-up"
        v-for="(i, index) in photos"
        :key="index"
      >
        <image-card
          v-if="i.urls"
          :image="i.urls.small"
          :name="i.user.name"
          :location="i.user.location || 'No location'"
          :imageId="i.id"
          :totalPhotos="i.user.total_photos"
        ></image-card>
      </v-col>
    </v-row>

    <div class="d-flex mt-8 justify-space-between">
      <v-btn :disabled="page == 1" large @click=";(page -= 1), getPhotos()">
        <v-icon> fas fa-chevron-left </v-icon>&nbsp;Previous
      </v-btn>
      <v-btn @click=";(page += 1), getPhotos()" large
        >Next &nbsp;
        <v-icon> fas fa-chevron-right </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      page: 1,
      length: 1,
    }
  },
  mounted() {
    this.getPhotos()
  },
  computed: {
    ...mapGetters('photos', ['photos', 'url']),
  },
  methods: {
    getPhotos() {
      axios
        .get(`${this.url}&page=${this.page}`, {
          headers: {
            Authorization:
              'Client-ID VOKC5ojja4hEtL3gdPcTyQpyYCRjE76jDxSNjz84S0Q',
          },
        })
        .then((response) => {
          this.$store.commit('photos/allphotos', response.data)
          if (response.data.results) {
            this.$store.commit('photos/allphotos', response.data.results)
          }
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.page-nav {
  height: 50px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  div:not(:last-child) {
    height: 100%;
    border-right: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
