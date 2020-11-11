<template>
  <stats-card
    title="Stackoverflow"
    type="gradient-orange"
    :sub-title="stackoverflow.reputation + ' Reputations'"
    url="https://stackoverflow.com/users/3125964/nuwan94"
    icon="fab fa-stack-overflow"
    class="mb-4 mb-xl-0"
  >
    <template slot="body">
      <div class="text-dark font-weight-bold">
        <span class="stack-badge gold"></span>
        {{ leadingZero(stackoverflow.badge_counts.gold) }}
        <div class="vhr"></div>
        <span class="stack-badge silver"></span>
        {{ leadingZero(stackoverflow.badge_counts.silver) }}
        <div class="vhr"></div>
        <span class="stack-badge bronze"></span>
        {{ leadingZero(stackoverflow.badge_counts.bronze) }}
      </div>
    </template>
    <template slot="footer">
      <span class="text-success font-weight-bold mr-1">
        <i class="fa fa-arrow-up"></i>
        {{ leadingZero(stackoverflow.reputation_change_year) }}
      </span>
      <span class="text-dark font-weight-bold"
        >reputations gained in {{ new Date().getFullYear() }}</span
      >
    </template>
  </stats-card>
</template>

<script>
export default {
  computed: {
    stackoverflow: function () {
      return this.$store.state.stackoverflow;
    },
  },
};
</script>

<style scoped>
.stack-badge {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}
.gold {
  background: #ffcc01;
}
.silver {
  background: #b4b8bc;
}
.bronze {
  background: #d1a684;
}
.vhr {
  border-right: 1px solid #ddd;
  height: 90%;
  margin: 0 1em;
  display: inline;
}
</style>