import { Store } from 'vuex'

export const state = () => ({
  photos: [],
  url: 'https://api.unsplash.com/photos?per_page=20'
})

export const mutations = {
  allphotos(state, payload) {
    state.photos = payload
  },
  setUrl(state, payload){
    state.url = payload
  }
}
export const getters = {
  photos(state) {
    return state.photos
  },
  url(state){
    return state.url
  }
}

export const actions = {}
