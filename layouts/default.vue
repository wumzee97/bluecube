<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      color="offwhite"
      fixed
      app
    >
      <div class="pa-4">
        <nuxt-link to="/">
          <img src="../static/assets/Bluecube (1).jpeg" width="180" alt="" />
        </nuxt-link>
      </div>
      <v-list class="px-6">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon small>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <h4 class="px-8 py-4">SHARE</h4>

      <v-list class="px-6">
        <v-list-item
          v-for="(item, i) in menus"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon small>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
      height="100"
      class="offwhite navbar px-6"
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />

      <search-photo class="hidden-xs-only"></search-photo>

      <v-menu
        bottom
        left
        offset-y
        max-width="300"
        origin="top right"
        transition="scale-transition"
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn icon v-bind="attrs" v-on="on" class="ml-6">
            <v-icon color="primary">fas fa-bell</v-icon>
            <div class="notification-badge error">3</div>
          </v-btn>
        </template>

        <v-list two-line subheader>
          <v-list-item
            v-for="(i, index) in notifications"
            :key="index"
            class="notifications"
          >
            <v-list-item-avatar>
              <v-avatar>
                <v-img :src="i.avatar"></v-img>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="i.title"></v-list-item-title>

              <v-list-item-subtitle v-text="i.subtitle"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon small :color="i.color">{{ i.icon }}</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-avatar class="ml-6">
        <v-img :src="require('../static/assets/2.jpg')"> </v-img>
      </v-avatar>
      <v-icon color="success" small style="margin-left: -15px; margin-top: 30px"
        >fiber_manual_record</v-icon
      >

      <v-menu
        bottom
        left
        offset-y
        min-width="180"
        origin="top right"
        transition="scale-transition"
      >
        <template v-slot:activator="{ attrs, on }">
          <p v-bind="attrs" class="primary--text ml-6 mt-3" v-on="on">
            Abigail<v-icon color="primary">arrow_drop_down</v-icon>
          </p>
        </template>

        <v-list class="py-0">
          <v-list-item class="py-0 my-0">
            <v-list-item-content class="py-0 my-0">
              <v-list-item-title>My Account </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="py-0 my-0">
            <v-list-item-content class="py-0 my-0">
              <v-list-item-title>Settings </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="py-0 my-0">
            <v-list-item-content class="py-0 my-0">
              <v-list-item-title>Logout </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-app-bar  class="offwhite hidden-sm-and-up" flat fixed style="margin-top: 90px !important">
      <search-photo></search-photo>
    </v-app-bar>

    <v-main class="offwhite">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import searchPhoto from '@/components/SearchPhoto.vue'
export default {
  components: {
    searchPhoto,
  },
  data() {
    return {
      clipped: false,
      drawer: null,
      fixed: false,
      items: [
        {
          icon: 'fas fa-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'fas fa-sticky-note',
          title: 'Message',
          to: '/message',
        },
      ],
      menus: [
        {
          icon: 'fas fa-chart-bar',
          title: 'Ranking',
          to: '/ranking',
        },
        {
          icon: 'fas fa-vihara',
          title: 'Challenge',
          to: '/challenge',
        },
        {
          icon: 'fas fa-birthday-cake',
          title: 'Party',
          to: '/party',
        },
        {
          icon: 'fas fa-link',
          title: 'Connect',
          to: '/connect',
        },
        {
          icon: 'fas fa-walking',
          title: 'Parade',
          to: '/parade',
        },
        {
          icon: 'fas fa-users',
          title: 'Group',
          to: '/group',
        },
      ],
      notifications: [
        {
          avatar: require('../static/assets/1.jpg'),
          title: 'Michael liked you!',
          subtitle: 'About 20 minutes ago',
          icon: 'fas fa-heart',
          color: 'grey lighten-1',
        },
        {
          avatar: require('../static/assets/2.jpg'),
          title: 'Jack liked you!',
          subtitle: 'About 40 minutes ago',
          icon: 'fas fa-heart',
          color: 'error',
        },
        {
          avatar: require('../static/assets/3.jpg'),
          title: 'Martin commented on your photo!',
          subtitle: 'About 20 minutes ago',
          icon: 'chat_bubble',
          color: 'primary',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.notifications:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
</style>
