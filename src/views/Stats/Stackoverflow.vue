<template>
  <stats-card
    title="Stackoverflow"
    type="gradient-orange"
    :sub-title="stackoverflow.reputation + ' Reps'"
    icon="fab fa-stack-overflow"
    class="mb-4 mb-xl-0"
  >
    <template slot="footer">
      <span class="text-success mr-1">
        <i class="fa fa-arrow-up"></i>
        {{stackoverflow.reputation_change_month}}
      </span>
      <span class="text-nowrap">in this Month</span>
    </template>
  </stats-card>
</template>

<script>
export default {
  computed: {
    stackoverflow: function() {
      return this.$store.state.stackoverflow;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>