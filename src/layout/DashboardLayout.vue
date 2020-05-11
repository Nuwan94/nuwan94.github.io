<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar :background-color="sidebarBackground" short-title="Nuwan" title="Nuwan" logo="Nuwan">
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Profile',
            icon: 'ni ni-circle-08 text-primary',
            path: '/profile'
          }"
        />

        <sidebar-item :link="{name: 'Resume', icon: 'ni ni-hat-3 text-orange', path: '/resume'}" />
        <sidebar-item :link="{name: 'Stats', icon: 'ni ni-chart-pie-35 text-red', path: '/stats'}" />
        <sidebar-item
          :link="{name: 'Portfolio', icon: 'ni ni-collection text-green', path: '/portfolio'}"
        />
        <sidebar-item :link="{name: 'Hobbies', icon: 'ni ni-world text-purple', path: '/hobbies'}" />
        <sidebar-item :link="{name: 'Contact', icon: 'ni ni-send text-yellow', path: '/contact'}" />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <!-- <dashboard-navbar></dashboard-navbar> -->

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
      sidebarBackground: "vue" //vue|blue|orange|green|red|primary
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
<style lang="scss">
</style>
