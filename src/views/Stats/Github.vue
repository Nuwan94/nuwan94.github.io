<template>
  <stats-card
    title="GitHub"
    type="gradient-gray"
    :sub-title="github.public_repos + ' Repositories'"
    url="https://github.com/nuwan94"
    icon="fab fa-github"
    class="mb-4 mb-xl-0"
  >
    <template slot="footer">
      <span class="text-dark font-weight-bold mr-3">
        <i class="fa fa-fw fa-users mr-1"></i>
        {{leadingZero(github.followers)}} Followers
      </span><br>
      <span class="text-dark font-weight-bold mr-3">
        <i class="fab fa-fw fa-github-alt mr-1"></i>
        {{leadingZero(github.public_gists)}} gists
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