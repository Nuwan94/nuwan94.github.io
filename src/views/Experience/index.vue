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
    </div>
  </div>
</template>

<script>
import Company from "./Company";

import experience from "../../assets/data/experience.json";

export default {
  components: {
    Company
  },
  data: () => {
    return {
      experience
    };
  }
};
</script>