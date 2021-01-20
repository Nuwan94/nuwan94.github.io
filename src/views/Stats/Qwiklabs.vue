<template>
  <stats-card
    title="Qwiklabs"
    type="gradient-dark"
    :sub-title="leadingZero(qwiklabs.quests) + ' Quests'"
    icon="nsa94-qwiklabs"
    url="https://www.qwiklabs.com/public_profiles/efc8d645-af9d-4af3-befe-b6472f2c7b3b"
    class="mb-4 mb-xl-0"
  >
    <template slot="footer">
      <span class="text-dark font-weight-bold mr-3">
        <em class="fa fa-fw fa-flask mr-1"></em>
        {{ leadingZero(qwiklabs.labs) }}
        Labs Taken
      </span>
    </template>
  </stats-card>
</template>

<script>
export default {
  computed: {
    qwiklabs: function () {
      return this.$store.state.qwiklabs;
    },
  },
};
</script>