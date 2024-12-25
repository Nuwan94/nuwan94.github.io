<template>
  <div class="row p-3">
    <div class="col-12 pb-2 pb-lg-0 text-center">
      <!-- <h2>
        <badge
          class="float-right h2"
          type="success"
        >{{ company.start | moment("YYYY") }} - {{ company.end | moment("YYYY") }}</badge>
      </h2>-->
      <img class="img-fluid iLogo" :src="company.icon" alt/>
    </div>
    <div class="col-12 p-2 text-center">
      <div>
        <h2>
          {{ company.name }}
          <br/>
          <badge
              type="success"
          >
            {{ company.start | moment("MMM YYYY") }} -
            {{ company.end === 'present' ? new Date() : company.end | moment("MMM YYYY") }}
          </badge>
          <br/>
          <badge type="dark">
            {{ duration }}
          </badge>
        </h2>
        <h3>
          <i class="ni ni-badge p-1"></i>
          {{ company.designation }}
        </h3>
        <h4>
          <i class="ni ni-pin-3 p-1"></i>
          {{ company.location }}
        </h4>
      </div>
      <p class="text-justify font-weight-normal">{{ company.description }}</p>
      <div class="font-weight-bold">
        <ul class="pl-3">
          <li class="pb-2 text-justify" v-for="i in company.points" :key="i">{{ i }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    company: Object,
  },
  computed: {
    moment() {
      return moment
    },
    duration() {
      const startDate = moment(this.company.start);
      const endDate = this.company.end === 'present' ? moment() : moment(this.company.end);
      const duration = moment.duration(endDate.diff(startDate));
      return duration.humanize();
    }
  },
};
</script>

<style scoped>
.iLogo {
  max-height: 120px;
  max-width: 250px;
}
</style>