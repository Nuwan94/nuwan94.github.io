<template>
  <div>
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-lg-6" v-for="i in experience" :key="i.name">
          <card shadow class="mt-2 p-0">
            <Company :company="i"></Company>
          </card>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-12">
          <h1 class="p-3 text-white">Skills</h1>
        </div>
        <div class="col-lg-4">
          <card shadow class="mt-2 p-0">
            <Skills title="Web Developement" :skills="skills.web" type="green"></Skills>
          </card>
        </div>
        <div class="col-lg-4">
          <card shadow class="mt-2 p-0">
            <Skills title="Java Developement" :skills="skills.java" type="red"></Skills>
          </card>
        </div>
        <div class="col-lg-4">
          <card shadow class="mt-2 p-0">
            <Skills title="Mobile App Developement" :skills="skills.mobile" type="warning"></Skills>
          </card>
          <card shadow class="mt-2 p-0">
            <Skills title="Games and VR/AR" :skills="skills.game" type="purple"></Skills>
          </card>
        </div>
        <div class="col-lg-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Company from "./Company";
import Skills from "./Skills";

import experience from "../../assets/data/experience.json";
import skills from "../../assets/data/skills.json";

export default {
  components: {
    Company,
    Skills,
  },
  data: () => {
    return {
      experience,
      skills,
    };
  },
};
</script>