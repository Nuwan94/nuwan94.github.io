<template>
  <div class>
    <base-header class="header pb-8 pt-5 d-flex align-items-center bg-dark">
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-12 col-md-12 d-none d-md-block">
            <h1
              class="display-2 text-white"
            >Hello I'm {{ personal.firstName }} {{ personal.lastName }}</h1>
            <p class="text-white mt-0 mb-5">{{ personal.title }}</p>
          </div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <img src="img/profile.webp" class="rounded-circle" />
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
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
                <h3>{{ fullname }}</h3>
                <div class="h5 font-weight-300">{{ personal.location }}</div>
                <div class="h5 mt-2">
                  {{ personal.currentPosition }}
                  <br />
                  {{ personal.department }}
                </div>
                <div>{{ personal.company }}</div>
              </div>
            </div>
            <div class="card-footer pt-0 pt-md-4 text-justify">
              <p>{{ personal.aboutme }}</p>
            </div>
          </div>

          <div class="card card-profile shadow mt-2">
            <div class="card-header text-center">Language Proficiency</div>
            <div class="card-body mt-0 pt-0">
              <base-progress
                v-for="lang in languages"
                v-bind:key="lang.name"
                :type="lang.type"
                :height="16"
                :showPercentage="false"
                :value="lang.precentage"
                :label="lang.name"
              ></base-progress>
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
                <h6 class="heading-small text-muted mb-4">Personal Details</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        readonly
                        alternative
                        label="Mobile"
                        placeholder="Mobile"
                        input-classes="form-control-alternative"
                        :value="personal.mobile | telephoneNumber"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        readonly
                        alternative
                        label="Email Address"
                        placeholder="user@gmail.com"
                        input-classes="form-control-alternative"
                        :value="personal.email"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        readonly
                        alternative
                        label="Date of Birth"
                        placeholder="Date of Birth"
                        input-classes="form-control-alternative"
                        v-bind:value="personal.dob + ' ( ' + calculateAge + ' Years )'"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Developer Details</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        readonly
                        alternative
                        label="Coding Style"
                        placeholder="Coding Style"
                        input-classes="form-control-alternative"
                        :value="personal.codingStyle"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        readonly
                        alternative
                        label="Indentation Style"
                        placeholder="Indentation"
                        input-classes="form-control-alternative"
                        :value="personal.indentation"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        readonly
                        alternative
                        label="Favourite Languages"
                        placeholder="Favourite Languages"
                        input-classes="form-control-alternative"
                        :value="personal.favLang"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        readonly
                        alternative
                        label="Career Goal"
                        placeholder="Career Goal"
                        input-classes="form-control-alternative"
                        :value="personal.goal"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Profiles</h6>
                <div class="pl-lg-4 d-flex justify-content-center flex-wrap">
                  <a
                    v-for="profile in profiles"
                    v-bind:key="profile.name"
                    :href="profile.link"
                    class="m-3 rounded text-center bg-white shadow clickable"
                    target="_blank"
                  >
                    <i
                      :id="profile.name"
                      v-if="profile.icon"
                      :class="'m-2 fa-fw fab fa-2x ' + profile.icon"
                      :style="'color:' + profile.color"
                    />
                    <b-tooltip
                      placement="top"
                      :target="profile.name"
                      triggers="hover"
                    >{{ profile.name }}</b-tooltip>
                  </a>
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profiles from "../assets/data/profiles.json";
import personal from "../assets/data/personal.json";
import languages from "../assets/data/languages.json";

export default {
  name: "user-profile",
  data() {
    return {
      personal,
      languages,
      profiles
    };
  },
  computed: {
    calculateAge: function() {
      let currentDate = new Date();
      let birthDate = new Date(this.personal.dob);
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      return age;
    },
    fullname: function() {
      return (
        this.personal.firstName +
        " " +
        this.personal.middleName +
        " " +
        this.personal.lastName
      );
    }
  },
  filters: {
    telephoneNumber:
      ("phone",
      phone => {
        return phone
          .replace(/[^0-9]/g, "")
          .replace(/(\d{2})(\d{2})(\d{3})(\d{3})/, "+$1 $2 $3 $4");
      })
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
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    notifyMessage(t) {
      this.$notify({
        type: "danger",
        title: `${t} only available for mobile devices`,
        icon: "fa fa-exclamation",
        dismissible: true
      });
    }
  }
};
</script>

<style scoped>
.fa-instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: -webkit-radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
