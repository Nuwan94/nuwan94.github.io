<template>
  <div>
    <div class="container-fluid pt-5">
      <card class="bg-dark">
        <div class="row">
          <div class="col filterBtns">
            <base-button
              :type="(currentTag=='all') ? 'danger' : 'primary'"
              @click="filterByTag('all')"
            >All</base-button>
            <base-button
              :type="(currentTag=='web') ? 'danger' : 'primary'"
              @click="filterByTag('web')"
            >Web</base-button>
            <base-button
              :type="(currentTag=='mobile') ? 'danger' : 'primary'"
              @click="filterByTag('mobile')"
            >Moblie</base-button>
            <base-button
              :type="(currentTag=='desktop') ? 'danger' : 'primary'"
              @click="filterByTag('desktop')"
            >Desktop</base-button>
            <base-button
              :type="(currentTag=='game') ? 'danger' : 'primary'"
              @click="filterByTag('game')"
            >Games</base-button>
            <!-- <base-button class="d-inline m-2" type="warning" @click="filterByTag('cloud')">Cloud</base-button>
            <base-button class="d-inline m-2" type="success" @click="filterByTag('ml')">ML</base-button>-->
          </div>
        </div>
      </card>
      <div class="mt-2">
        <transition-group name="list-complete" class="row list-complete" tag="section">
          <div class="col-lg-4 mb-3 list-complete-item" v-for="i in filteredProjects" :key="i.name">
            <Project class="h-100" :project="i"></Project>
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

<style scoped>
.filterBtns .btn {
  display: inline;
  margin: 0 1em 0 0;
}
.list-complete {
  width: 100%;
}
.list-complete-item {
  transition: opacity 0.5s, transform 1s;
  opacity: 1;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  /* transform: translateY(10px); */
}
.list-complete-leave-active {
  position: absolute;
}
</style>