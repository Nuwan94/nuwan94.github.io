<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 col-lg-6 mt-5">
          <Stackoverflow class="h-100" />
        </div>
        <div class="col-xl-4 col-lg-6 mt-5">
          <GitHub class="h-100" />
        </div>
        <div class="col-xl-4 col-lg-6 mt-5">
          <Medium class="h-100" />
        </div>
      </div>
      <div class="row ">
        <div class="col-lg-8">
          <GitHubGraph class="mt-5" />
          <Pluralsight class="mt-5" />
        </div>
        <div class="col-lg-4">
          <Xtreme class="mt-5" />
          <Qwiklabs class="mt-5" />
          <HackTheBox class="mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GitHub from "./Github";
import GitHubGraph from "./GithubGraph";
import Pluralsight from "./Pluralsight";
import Stackoverflow from "./Stackoverflow";
import Medium from "./Medium";
import HackTheBox from "./HackTheBox";
import Qwiklabs from "./Qwiklabs";
import Xtreme from "./Xtreme";

export default {
  components: {
    GitHub,
    GitHubGraph,
    Pluralsight,
    Stackoverflow,
    Medium,
    HackTheBox,
    Qwiklabs,
    Xtreme,
  },
};
</script>
<style></style>
