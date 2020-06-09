<template>
  <div class="row p-3">
    <div class="col-md-3 pb-2 pb-lg-0 text-center">
      <img class="img-fluid iLogo" :src="company.icon" alt />
    </div>
    <div class="col-md-9 p-2">
      <div>
        <h2>
          <badge
            class="float-right"
            type="success"
          >{{ company.start | moment("YYYY") }} - {{ company.end | moment("YYYY") }}</badge>
          {{ company.name }}
        </h2>
        <h3>{{ company.designation }}</h3>
        <h4>{{ duration }}</h4>
      </div>
      <p class="text-justify">{{ company.description }}</p>
      <div>
        <ul class="pl-3">
          <li class="pb-2 text-justify" v-for="i in company.points" :key="i">{{ i }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    company: Object
  }
};
</script>

<style scoped>
.iLogo {
  max-height: 120px;
}
</style>