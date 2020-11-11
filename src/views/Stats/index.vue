<template>
  <div>
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-xl-4 col-lg-6">
          <Stackoverflow class="h-100" />
        </div>
        <div class="col-xl-4 col-lg-6">
          <GitHub class="h-100" />
        </div>
        <div class="col-xl-4 col-lg-6">
          <Medium class="h-100" />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-8">
          <GitHubGraph />
        </div>
        <div class="col-lg-4"><Qwiklabs/><HackTheBox  class="mt-5" /></div>
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
import Qwiklabs from "./Qwiklabs";

export default {
  components: {
    GitHub,
    GitHubGraph,
    Stackoverflow,
    Medium,
    HackTheBox,
    Qwiklabs,
  },
};
</script>
<style></style>
