<template>
  <div>
    <card shadow class="p-0 mb-2" v-for="pr in pullRequests" :key="pr.id">
      <PullReuqest :pullRequest="pr"></PullReuqest>
    </card>
  </div>
</template>

<script>
import PullReuqest from "./PullReuqest";
import pullRequests from "../../assets/data/foss.json";

export default {
  data() {
    return {
      pullRequests,
    };
  },
  components: {
    PullReuqest,
  },
};
</script>