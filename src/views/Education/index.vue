<template>
  <div>
    <base-header type="gradient-gray" class="pb-6 pb-8 pt-5 pt-md-5">
      <div class="row">
        <div class="col-lg-6">
          <card shadow v-for="i in institues.colleges" :key="i.key" class="mt-2">
            <Institute :institute="i"></Institute>
          </card>
        </div>
        <div class="col-lg-6 pt-2 pt-lg-0">
          <card shadow v-for="i in institues.schools" :key="i.key" class="mt-2">
            <Institute :institute="i"></Institute>
          </card>
        </div>
      </div>
    </base-header>

    <!-- <div class="container-fluid mt--7">

    </div>-->
  </div>
</template>

<script>
import Institute from "./Institute";

export default {
  components: {
    Institute
  },
  data: () => {
    return {
      institues: {
        colleges: [
          {
            id: 1,
            name: "University of Kelaniya, Sri Lanka",
            program: "BSc. (Hons.) in Software Engineering",
            start: "2017",
            end: "2021",
            icon: "./img/logos/uok.webp",
            result: ["3.72 out of 4.0 GPA (May 2020)"],
            subjects: [
              {
                name: "Net Centric Applications"
              },
              {
                name: "Data Science and Engineering"
              },
              {
                name: "Digital Gaming and Animation Applications"
              },
              {
                name: "Health Informatics Applications"
              }
            ],
            activities: [
              {
                name: "IEEE Student Branch UoK",
                title: "Editor"
              },
              {
                name: "Software Engineering Students Association UoK",
                title: "Member"
              }
            ]
          }
        ],
        schools: [
          {
            id: 1,
            name: "Royal College, Colombo 07, Sri Lanka",
            program: "G.C.E. Advanced Level - Mathematics Stream",
            start: "2005",
            end: "2014",
            icon: "./img/logos/rc.webp",
            result: [
              "Z-Score of 1.7702",
              "	1477 - Island Rank",
              "	152 - District Rank (Gampaha)"
            ],
            subjects: [
              {
                grade: "A",
                name: "Physics"
              },
              {
                grade: "B",
                name: "Chemistry"
              },
              {
                grade: "C",
                name: "Combined Maths"
              },
              {
                grade: "A",
                name: "General English"
              },
              {
                grade: "A",
                name: "General Information Technology"
              },
              {
                grade: "83%",
                name: "Common General Test"
              }
            ],
            activities: [
              {
                name: "Young Inventors Club",
                title: "Member"
              },
              {
                name: "Envionmental Conversation Society",
                title: "Member"
              }
            ]
          },
          {
            id: 1,
            name: "Pitiyegedara Primary School, Bemmulla, Sri Lanka",
            program: "Grade 5 Scholarship Examination",
            start: "2000",
            end: "2004",
            icon: "https://placeholder.pics/svg/120x120/eeeeee/eeeeee/",
            result: ["167 out of 200"]
          }
        ]
      }
    };
  }
};
</script>