<template>
  <div>
    <v-hover>
      <v-img :src="image" class="image-card shadow" slot-scope="{ hover }">
        <div class="pa-4 white" v-if="hover">
          <p class="title primary--text py-0 my-0">{{ name }}, 24</p>
          <small class="dark--text"
            ><v-icon small color="dark">place</v-icon>{{ location }}</small
          >
          <v-row no-gutters class="mt-2">
            <v-col>
              <v-btn block class="error mr-1" small 
                ><v-icon small>far fa-heart</v-icon></v-btn
              >
            </v-col>
            <v-col>
              <v-btn block class="primary ml-1" small
                ><v-icon small>far fa-thumbs-down</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </div>
        <div class="pa-4" v-else>
          <p class="title white--text py-0 my-0">
            {{ name }}, {{ totalPhotos }}
          </p>
          <small class="white--text"
            ><v-icon small color="white">place</v-icon>{{ location }}</small
          >
        </div>
      </v-img>
    </v-hover>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['image', 'name', 'age', 'location', 'imageId', 'totalPhotos'],
}
</script>
<style lang="scss" scoped>
.image-card {
  border-radius: 15px;
  width: 200px;
  height: 300px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}
.shadow {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
