<template>
  <stats-card
    title="Medium"
    type="gradient-cyan"
    :sub-title="medium.articles + ' Article'"
    icon="fab fa-medium"
    class="mb-4 mb-xl-0"
  >
    <template slot="footer">
      <span class="text-danger mr-1">
        <i class="fa fa-users mr-1"></i>
        {{ medium.followers }}
      </span>
      <span class="text-nowrap">Followers</span>
    </template>
  </stats-card>
</template>

<script>
export default {
  data() {
    return {
      medium: {
        articles: "10",
        followers: "52",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>