<template>
  <div>
    <h1>{{title}}</h1>
    <hr>
    <base-progress
      v-for="skill in skills"
      v-bind:key="skill.name"
      :type="type"
      :height="10"
      :showPercentage="false"
      :value="skill.precentage"
      :label="skill.name"
      :icon="skill.icon"
    >
    </base-progress>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    title: String,
    skills: Array,
  },
};
</script>

<style scoped>
</style>