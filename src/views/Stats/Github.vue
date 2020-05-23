<template>
  <stats-card
    title="GitHub"
    type="gradient-gray"
    :sub-title="github.public_repos + ' Repos'"
    icon="fab fa-github"
    class="mb-4 mb-xl-0"
  >
    <template slot="footer">
      <span class="text-secondry mr-3">
        <i class="fab fa-github-alt mr-1"></i>
        {{github.public_gists.toString()}} gists
      </span>
      <span class="text-secondry mr-3">
        <i class="fa fa-users mr-1"></i>
        {{github.followers}} Follwers
      </span>
    </template>
  </stats-card>
</template>

<script>
export default {
  computed: {
    github: function() {
      return this.$store.state.github;
    }
  }
};
</script>

<style scoped>
</style>