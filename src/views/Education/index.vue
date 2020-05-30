<template>
  <div>
    <base-header type="gradient-gray" class="pb-6 pb-8 pt-2 pt-md-2"></base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-lg-6">
          <card shadow v-for="i in colleges" :key="i.name" class="mt-2 p-0">
            <Institute :institute="i"></Institute>
          </card>
        </div>
        <div class="col-lg-6">
          <card shadow v-for="i in schools" :key="i.name" class="mt-2">
            <Institute :institute="i"></Institute>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col pt-2 pt-lg-0">
          <h1 class="p-3">Certifications</h1>
          <div class="row">
            <div class="col-lg-6" v-for="i in certificates" :key="i.name">
              <card shadow class="m-1" :class="i.specialization ? 'bg-gradient-success' : ''">
                <Certificate @clicked="viewPdf" :certificate="i"></Certificate>
              </card>
            </div>
            <modal modalClasses="modal-lg" showClose :show.sync="modals.showPdf">
              <div>
                <img class="img-fluid" :src.sync="selectedPDF" />
              </div>
            </modal>
          </div>

          <h1 class="p-3">Courses</h1>
          <div class="row">
            <div class="col-lg-6" v-for="i in courses" :key="i.name">
              <card shadow class="m-1">
                <Course :course="i"></Course>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Institute from "./Institute";
import Certificate from "./Certificate";
import Course from "./Course";

import colleges from "../../assets/data/colleges.json";
import schools from "../../assets/data/schools.json";
import certificates from "../../assets/data/certificates.json";
import courses from "../../assets/data/courses.json";

let sortByDate = arr => {
  return arr.sort((a, b) => {
    let c = new Date(a.date);
    let d = new Date(b.date);
    return c < d;
  });
};

export default {
  components: {
    Institute,
    Certificate,
    Course
  },
  data: () => {
    return {
      modals: { showPdf: false },
      selectedPDF: "",
      colleges,
      schools,
      certificates: sortByDate(certificates),
      courses: sortByDate(courses)
    };
  },
  methods: {
    viewPdf(pdf) {
      this.selectedPDF = "";
      this.modals.showPdf = true;
      this.selectedPDF = pdf;
    }
  }
};
</script>