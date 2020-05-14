<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Nuwan"
      title="Nuwan"
      logo="Nuwan"
      class="mobile-navbar"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Profile',
            icon: 'ni ni-circle-08 text-primary',
            path: '/profile'
          }"
        />
        <sidebar-item :link="{name: 'Stats', icon: 'ni ni-chart-pie-35 text-red', path: '/stats'}" />
        <sidebar-item
          :link="{name: 'Education', icon: 'ni ni-books text-green', path: '/education'}"
        />
        <sidebar-item
          :link="{name: 'Experience', icon: 'ni ni-briefcase-24 text-orange', path: '/experience'}"
        />
        <sidebar-item :link="{name: 'Portfolio', icon: 'ni ni-app text-blue', path: '/portfolio'}" />
        <sidebar-item
          :link="{name: 'Communities', icon: 'ni ni-planet text-default', path: '/communities'}"
        />
        <sidebar-item
          :link="{name: 'Hobbies', icon: 'ni ni-palette text-purple', path: '/hobbies'}"
        />
        <sidebar-item :link="{name: 'Contact', icon: 'ni ni-send text-yellow', path: '/contact'}" />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import ContentFooter from "./ContentFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    ContentFooter,
    FadeTransition
  },
  data() {
    return {
      sidebarBackground: "vue"
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style scoped>
@media (max-width: 762px) {
  .mobile-navbar {
    position: sticky;
    z-index: 999999;
    top: 0;
  }
}
</style>
