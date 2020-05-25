<template>
  <div class="row p-3">
    <div class="col-3 text-center">
      <img class="img-fluid iLogo" :src="institute.icon" alt />
    </div>
    <div class="col-9">
      <div class="p-2">
        <h2>
          <badge class="float-right m-1" type="success">{{ institute.start }} - {{ institute.end }}</badge>
          {{ institute.name }}
        </h2>
        <i class="ni ni-bold-right p-1 text-primary"></i>
        {{ institute.program}}
      </div>
      <div class="p-1 pb-2" v-for="r in  institute.result" :key="r">
        <i class="ni ni-fat-add p-1 text-danger"></i>
        {{ r }}
      </div>
      <div class="pt-1 h5">
        <span class="pl-1 pr-1" v-for="a in institute.subjects" :key="a">
          <base-button class="btnSubject" outline type="primary" size="sm">
            <span>{{a.name}}</span>
            <badge type="primary">{{a.grade}}</badge>
          </base-button>
          <!-- <badge pill class="m-1" type="primary">{{a.grade}}</badge> -->
        </span>
      </div>
      <!-- <p class="pt-3">During the {{ institute.end - institute.start }} years</p> -->
      <div class="pt-1 h5">
        <div v-for="a in institute.activities" :key="a">
          <badge pill class="m-1" type="primary">{{a.title}}</badge>
          {{a.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    institute: Object
  }
};
</script>

<style scoped>
.iLogo {
  max-height: 120px;
}
.btnSubject {
  font-size: 1em;
  margin: 0.5em auto;
}
</style>