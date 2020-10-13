<template>
  <card shadow>
    <div class="d-flex align-items-center" slot="header">
      <i :id="project.name" :class="[lang.icon, 'lang-icon']"></i>
      <b-tooltip placement="top" :target="project.name" triggers="hover">{{
        lang.name
      }}</b-tooltip>

      <div class="text-left">
        <h2 class="pb-0 mb-0">{{ project.name }}</h2>
        <small
          >{{ project.start | moment("MMMM YYYY") }} -
          {{ project.end | moment("MMMM YYYY") }}</small
        >
      </div>
    </div>
    <div class="d-flex justify-content-center" v-if="project.repo">
      <!-- <gh-btns-star :slug="project.repo" show-count></gh-btns-star>
      <gh-btns-fork :slug="project.repo" show-count></gh-btns-fork>-->
      <br />
    </div>

    <p class="mt-3 text-center font-weight-normal">{{ project.desc }}</p>
    <div class="text-center">
      <base-button
        v-if="project.repo"
        tag="a"
        :href="'https://github.com/' + project.repo"
        target="_blank"
        icon="fa fa-eye"
        type="link"
        >Source</base-button
      >
      <base-button
        v-if="project.demo"
        tag="a"
        :href="project.demo"
        target="_blank"
        icon="fa fa-link"
        type="link"
        >Demo</base-button
      ><base-button
        v-if="project.article"
        tag="a"
        :href="project.article"
        target="_blank"
        icon="fa fa-rss"
        type="link"
        >Blog</base-button
      ><base-button
        v-if="project.readme"
        tag="a"
        :href="project.readme"
        target="_blank"
        icon="fa fa-file"
        type="link"
        >Readme</base-button
      >
    </div>

    <div class="text-center" slot="footer">
      <i
        :class="[i.icon, 'tech-icon']"
        :id="project.name + '-' + i.key"
        v-for="i in tech"
        :key="i.name"
      >
        <b-tooltip
          placement="top"
          :target="project.name + '-' + i.key"
          triggers="hover"
          >{{ i.name }}</b-tooltip
        >
      </i>
    </div>
  </card>
</template>

<script>
import { devIcons } from "./langIcon";
export default {
  props: {
    project: Object,
  },
  computed: {
    lang: function () {
      return devIcons.find((f) => f.key === this.project.language);
    },
    tech: function () {
      return this.project.tech.map((t) => {
        let i = devIcons.find((f) => f.key === t);
        return i ? i : t;
      });
    },
  },
};
</script>

<style scoped>
.lang-icon {
  font-size: 4em;
  margin-right: 10px;
}
.tech-icon {
  font-size: 2em;
  margin: 10px;
  line-height: 1.5em;
}
.nsa94-android1 {
  color: #3ddc84;
}
</style>