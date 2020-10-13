<template>
  <div>
    <base-progress
      v-for="lang in languages"
      v-bind:key="lang.name"
      :type="lang.type"
      :height="16"
      :showPercentage="false"
      :value="lang.precentage"
      :label="lang.name"
    ></base-progress>
  </div>
</template>

<script>
import languages from "../../assets/data/languages.json";

export default {
  data() {
    return {
      languages,
    };
  },
};
</script>

<style>
</style>