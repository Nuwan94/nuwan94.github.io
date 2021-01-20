<template>
  <div class="card shadow">
    <div class="card-header bg-transparent border-0 pb-0">
      <h3 class="mb-0">
        Top Skill IQs
        <a href="" class="small float-right" title="View Full List on Pluralsight"
          ><em class="fa fa-external-link"></em
        ></a>
      </h3>
    </div>
    <div class="card-body text-center">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="i in iq" v-bind:key="i.name">
          <SkillCard :skill="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iq from "../../assets/data/iq.json";
import SkillCard from "./SkillCard";
export default {
  data() {
    return {
      iq: iq.filter((i) => i.show),
    };
  },
  components: {
    SkillCard,
  },
};
</script>

<style scoped>
</style>