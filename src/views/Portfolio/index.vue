<template>
  <div>
    <div class="container-fluid pt-5">
      <card class="bg-dark">
        <div class="row">
          <div class="col filterBtns">
            <base-button
              :type="currentTag == 'all' ? 'success' : 'primary'"
              @click="filterByTag('all')"
              >All</base-button
            >
            <base-button
              :type="currentTag == 'web' ? 'success' : 'primary'"
              @click="filterByTag('web')"
              >Web</base-button
            >
            <base-button
              :type="currentTag == 'mobile' ? 'success' : 'primary'"
              @click="filterByTag('mobile')"
              >Moblie</base-button
            >
            <base-button
              :type="currentTag == 'desktop' ? 'success' : 'primary'"
              @click="filterByTag('desktop')"
              >Desktop</base-button
            >
            <base-button
              :type="currentTag == 'game' ? 'success' : 'primary'"
              @click="filterByTag('game')"
              >Games</base-button
            >
            <!-- <base-button class="d-inline m-2" type="warning" @click="filterByTag('cloud')">Cloud</base-button>
            <base-button class="d-inline m-2" type="success" @click="filterByTag('ml')">ML</base-button>-->
          </div>
        </div>
      </card>
      <div class="mt-2">
        <transition-group
          name="list-complete"
          class="row list-complete"
          tag="section"
        >
          <div
            class="col-lg-4 mb-3 list-complete-item"
            v-for="i in filteredProjects"
            :key="i.name"
          >
            <Project class="shine h-100 hover-bounce" :project="i"></Project>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project";

import projects from "../../assets/data/projects.json";

export default {
  components: {
    Project,
  },
  data() {
    return {
      projects: projects,
      currentTag: "all",
    };
  },
  computed: {
    filteredProjects: function () {
      var filter = this.currentTag;
      if (filter === "all") {
        return this.projects;
      }
      return this.projects.filter(function (item) {
        return item.type === filter;
      });
    },
  },
  methods: {
    filterByTag: function (tag) {
      this.currentTag = tag;
    },
  },
};
</script>

<style style="scss" scoped>
.filterBtns .btn {
  display: inline;
  margin: 0 1em 0 0;
}
.filterBtns .btn:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  transition: none;
}
.filterBtns .btn:hover:after {
  width: 120%;
  background-color: rgba(255, 255, 255, 0);
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.list-complete {
  width: 100%;
  position: relative;
}
.list-complete-move {
  -webkit-transition: all 600ms ease-in-out 50ms;
  transition: all 600ms ease-in-out 50ms;
}
.list-complete-enter-active {
  -webkit-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
}
.list-complete-leave-active {
  -webkit-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
}
.list-complete-enter {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
</style>