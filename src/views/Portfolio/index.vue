<template>
  <div>
    <base-header type="gradient-gray" class="pb-8 pt-5">
      <card shadow>
        <div class="row">
          <div class="col d-flex align-items-middle flex-wrap">
            <base-button class="d-inline m-2" type="black" @click="filterByTag('all')">All</base-button>
            <base-button class="d-inline m-2" type="default" @click="filterByTag('web')">Web</base-button>
            <base-button class="d-inline m-2" type="primary" @click="filterByTag('mobile')">Moblie</base-button>
            <base-button class="d-inline m-2" type="success" @click="filterByTag('desktop')">Desktop</base-button>
            <base-button class="d-inline m-2" type="danger" @click="filterByTag('game')">Games</base-button>
            <!-- <base-button class="d-inline m-2" type="warning" @click="filterByTag('cloud')">Cloud</base-button>
            <base-button class="d-inline m-2" type="success" @click="filterByTag('ml')">ML</base-button>-->
          </div>
        </div>
      </card>
    </base-header>
    <div class="container-fluid mt--7">
      <div>
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
import { sortByDate } from "@/helpers/dateFunc";

import projects from "../../assets/data/projects.json";

export default {
  components: {
    Project
  },
  data() {
    return {
      projects: sortByDate(projects, "start"),
      currentTag: "all"
    };
  },
  computed: {
    filteredProjects: function() {
      var filter = this.currentTag;
      if (filter === "all") {
        return this.projects;
      }
      return this.projects.filter(function(item) {
        return item.type === filter;
      });
    }
  },
  methods: {
    filterByTag: function(tag) {
      this.currentTag = tag;
    }
  }
};
</script>

<style scoped>
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