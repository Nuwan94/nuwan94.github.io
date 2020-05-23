<template>
  <div>
    <base-header type="gradient-gray" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-4 col-lg-6">
          <Stackoverflow />
        </div>
        <div class="col-xl-4 col-lg-6">
          <GitHub />
        </div>
        <div class="col-xl-4 col-lg-6">
          <Medium />
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-lg-7">
          <GitHubGraph />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GitHub from "./Github";
import GitHubGraph from "./GithubGraph";
import Stackoverflow from "./Stackoverflow";
import Medium from "./Medium";

export default {
  components: {
    GitHub,
    GitHubGraph,
    Stackoverflow,
    Medium
  }
};
</script>
<style></style>
