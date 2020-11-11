<template>
  <stats-card
    title="Medium"
    type="gradient-dark"
    :sub-title="leadingZero(medium.article_count) + ' Articles'"
    icon="fab fa-medium"
    url="https://nsa94.medium.com"
    class="mb-4 mb-xl-0"
  >
    <template slot="footer">
      <span class="text-dark font-weight-bold mr-3">
        <i class="fa fa-fw fa-users mr-1"></i>
        {{ leadingZero(medium.followers) }} Followers
      </span><br>
      <span class="text-dark font-weight-bold mr-">
        <i class="fa fa-fw fa-eye mr-1"></i>
        {{ leadingZero(medium.following) }} Following
      </span>
    </template>
  </stats-card>
</template>

<script>
export default {
  computed: {
    medium: function() {
      return this.$store.state.medium;
    }
  }
};
</script>