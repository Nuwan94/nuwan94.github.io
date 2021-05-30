<template>
  <div>
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-xl-6 col-lg-12" v-for="i in experience" :key="i.name">
          <card shadow class="mt-2 p-0">
            <Company :company="i"></Company>
          </card>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-xl-4">
          <h1 class="pl-3 mb-4 text-white">From the Spotlight</h1>
          <Featured></Featured>
        </div>
        <div class="col-xl-8">
          <h1 class="pl-3 mt-5 mt-xl-0 mb-4 text-white">Free and Open Source</h1>
          <OpenSource></OpenSource>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Company from "./Company";
// import Skills from "./Skills";
import Featured from "./Featured";
import OpenSource from "./OpenSource";

import experience from "../../assets/data/experience.json";
// import skills from "../../assets/data/skills.json";

export default {
  components: {
    Company,
    Featured,
    OpenSource,
  },
  data: () => {
    return {
      experience,
      // skills,
    };
  },
};
</script>