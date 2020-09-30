<template>
  <div>
    <div class="container-fluid pt-5">
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
      <div class="row mt-5">
        <div class="col-lg-7">
          <GitHubGraph />
        </div>
        <div class="col-lg-5">
          <HackTheBox />
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
import HackTheBox from "./HackTheBox";

export default {
  components: {
    GitHub,
    GitHubGraph,
    Stackoverflow,
    Medium,
    HackTheBox,
  },
};
</script>
<style></style>
