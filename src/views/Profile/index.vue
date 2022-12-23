<template>
  <div>
    <div class="container-fluid pt-5">
      <base-button
        id="resume-btn"
        class="shinner position-absolute top-5 right-5 p-3 bg-gradient-danger d-none d-lg-block hover-bounce"
        tag="a"
        role="button"
        target="_blank"
        icon="fa fa-3x fa-download"
        href="https://go.nuwan.dev/cv"
      ></base-button>
      <b-tooltip placement="top" target="resume-btn" triggers="hover"
        >Nuwan's Resume</b-tooltip
      >
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-12 col-md-12 d-none d-md-block">
            <h1 class="display-2 text-white">
              Hello I'm {{ personal.firstName }} {{ personal.lastName }}
            </h1>
            <p class="text-white mt-0 mb-5">{{ personal.title }}</p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-xl-4 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <img
                    src="img/profile.jpg"
                    class="rounded-circle"
                    alt="Profile Image"
                  />
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <div class="d-flex justify-content-between">
                <base-button
                  size="lg"
                  type="danger"
                  icon="fa fa-phone"
                  iconOnly
                  rounded
                  @click="onCall"
                ></base-button>
                <base-button
                  size="lg"
                  type="default"
                  class="float-right"
                  icon="fa fa-envelope"
                  iconOnly
                  rounded
                  @click="onMessage"
                ></base-button>
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="text-center mt-md-6">
                <h2>{{ fullname }}</h2>
                <div class="h4 font-weight-500">{{ personal.location }}</div>
                <div class="h3 font-weight-400 mt-2">
                  {{ personal.currentPosition }}
                  <br />
                  {{ personal.department }}
                </div>
                <div>{{ personal.company }}</div>
              </div>
              <p
                class="font-weight-normal bg-dark rounded p-3 text-white text-center mt-3 position-relative"
              >
              <em class="fa fa-2x fa-quote-left text-white opacity-1 position-absolute top-1 left-1"></em>
                {{ personal.quote }}
                <em class="fa fa-2x fa-quote-right text-white opacity-1 position-absolute bottom-1 right-1"></em>
              </p>
            </div>
          </div>

          <div class="card card-profile shadow mt-2">
            <div class="card-header text-center">Language Proficiency</div>

            <div class="card-body mt-0 pt-0">
              <Languages />
            </div>
          </div>
        </div>

        <div class="col-xl-8">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">About {{ personal.firstName }}</h3>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">
                  Find me on the internet
                </h6>
                <Profiles />
                <hr class="my-4" />
                <!-- <h6 class="heading-small text-muted mb-4">Personal Details</h6>
                <Personal />
                <hr class="my-4" /> -->
                <h6 class="heading-small text-muted mb-4">Developer Details</h6>
                <Developer />
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profiles from "./Profiles";
// import Personal from "./Personal";
import Languages from "./Languages";
import Developer from "./Developer";

import personal from "../../assets/data/personal.json";

export default {
  name: "user-profile",
  components: {
    Profiles,
    // Personal,
    Languages,
    Developer,
  },
  data() {
    return {
      personal,
    };
  },
  methods: {
    onCall() {
      if (this.isMobile()) {
        window.open("tel:+94757871494", "_blank");
      } else {
        this.notifyMessage("Call");
      }
    },
    onMessage() {
      if (this.isMobile()) {
        window.open("sms:+94757871494", "_blank");
      } else {
        this.notifyMessage("SMS");
      }
    },
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    notifyMessage(t) {
      this.$notify({
        type: "dark",
        title: `${t} only available for mobile devices`,
        icon: "fa fa-exclamation",
        dismissible: true,
      });
    },
  },
};
</script>
