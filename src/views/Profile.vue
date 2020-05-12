<template>
  <div>
    <base-header class="header pb-8 pt-5 d-flex align-items-center bg-gradient-gray">
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-12 col-md-12">
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
                  <img src="img/profile.jpg" class="rounded-circle" />
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
                        alternative
                        label="Mobile"
                        placeholder="Mobile"
                        input-classes="form-control-alternative"
                        v-model="personal.mobile"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative
                        label="Email Address"
                        placeholder="user@gmail.com"
                        input-classes="form-control-alternative"
                        v-model="personal.email"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
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
                    <div class="col-md-6">
                      <base-input
                        alternative
                        label="Coding Style"
                        placeholder="Coding Style"
                        input-classes="form-control-alternative"
                        v-model="personal.codingStyle"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative
                        label="Indentation Style"
                        placeholder="Indentation"
                        input-classes="form-control-alternative"
                        v-model="personal.indentation"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative
                        label="Favourite Languages"
                        placeholder="Favourite Languages"
                        input-classes="form-control-alternative"
                        v-model="personal.favLang"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative
                        label="Career Goal"
                        placeholder="Career Goal"
                        input-classes="form-control-alternative"
                        v-model="personal.goal"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Social Profiles</h6>
                <div class="pl-lg-4 d-flex justify-content-center flex-wrap">
                  <a
                    v-for="profile in social"
                    v-bind:key="profile"
                    :href="profile.link"
                    class="m-3 rounded text-center bg-white shadow clickable"
                    target="_blank"
                  >
                    <img class="m-2 p-1 fa-2x fa-fw" v-if="profile.image" :src="profile.image" />
                    <i
                      v-if="profile.color"
                      :class="'m-2 fa-fw fab fa-2x fa-' + profile.icon"
                      :style="'color:' + profile.color"
                    />
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
export default {
  name: "user-profile",
  data() {
    return {
      personal: {
        firstName: "Nuwan",
        middleName: "Sameera",
        lastName: "Alawatta",
        title: "Software Developer | Tech Enthusiast | Geek",
        currentPosition: "Final Year Undergradaute",
        company: "University of Kelaniya",
        department: "BSc. (Hons.) in Sofftware Engineering",
        aboutme:
          "Hello there I'm Nuwan Sameera Alawatta, level 3 undergraduate at University of Kelaniya. I'm look forward to getting involved in challenging and interesting projects which allow me to utilize and improve my skills.",
        mobile: "+94 75 787 1494",
        email: "hello@nuwan.dev",
        dob: "May 24, 1994",
        location: "Gampaha, Sri Lanka",
        codingStyle: "Egyptian Brackets",
        indentation: "Tabs",
        favLang: "JavaScript/Typescript and Java",
        goal: "Fullstack Software Engineer"
      },
      languages: [
        { name: "English", precentage: 70, type: "danger" },
        { name: "Sinhala", precentage: 100, type: "default" }
        // { name: "Spanish", precentage: 2, type: "warning" },
        // { name: "Klingon", precentage: 5, type: "info" }
      ],
      social: [
        {
          icon: "facebook",
          color: "#3b5998",
          link: "https://www.facebook.com/nsa94"
        },
        {
          icon: "twitter",
          color: "#1da1f2",
          link: "https://twitter.com/_nsa94"
        },
        {
          icon: "linkedin",
          color: "#0077b5",
          link: "https://lk.linkedin.com/in/nsa94"
        },
        {
          icon: "github",
          color: "#333",
          link: "https://github.com/nuwan94"
        },
        {
          icon: "gitlab",
          color: "#fca326",
          link: "https://gitlab.com/nsa94"
        },
        {
          icon: "medium",
          color: "#00ab6c",
          link: "https://medium.com/@nsa94"
        },
        {
          icon: "stack-overflow",
          color: "#f48024",
          link: "https://stackoverflow.com/users/3125964/nuwan94"
        },
        {
          icon: "qwiklabs",
          image: "/img/theme/qwiklabs.webp",
          link:
            "https://www.qwiklabs.com/public_profiles/efc8d645-af9d-4af3-befe-b6472f2c7b3b"
        },
        {
          icon: "pluralsight",
          image: "/img/theme/pluralsight.webp",
          link: "https://app.pluralsight.com/profile/nsa94"
        },
        {
          icon: "coursera",
          image: "/img/theme/coursera.webp",
          link: "https://www.coursera.org/user/0d49d810a78c3fd931cdfb8e6b2d82cb"
        },
        {
          icon: "hackerrank",
          color: "#25B658",
          link:
            "https://www.qwiklabs.com/public_profiles/efc8d645-af9d-4af3-befe-b6472f2c7b3b"
        },
        {
          icon: "leetcode",
          image: "/img/theme/leetcode.webp",
          link: "https://leetcode.com/nsa94/"
        },
        {
          icon: "hackthebox",
          image: "/img/theme/hackthebox.webp",
          link: "https://www.hackthebox.eu/home/users/profile/159870"
        },
        {
          icon: "codepen",
          color: "#111",
          link: "https://www.codepen.io/nsa94"
        },

        {
          icon: "free-code-camp",
          color: "#006400",
          link: "https://www.freecodecamp.org/nuwan94"
        },
        {
          icon: "dev",
          color: "#232222",
          link: "https://dev.to/nsa94"
        },
        {
          icon: "reddit",
          color: "#ff4500",
          link: "https://www.reddit.com/user/nsa94"
        },
        {
          icon: "behance",
          color: "#1769ff",
          link: "https://www.behance.net/nsa94/"
        },
        {
          icon: "instagram",
          color: "#333",
          link: "https://www.instagram.com/_nsa94/"
        },
        {
          icon: "deviantart",
          color: "#4dc47d",
          link: "https://www.deviantart.com/nsa94"
        }
      ]
    };
  },
  computed: {
    calculateAge: function() {
      let currentDate = new Date();
      let birthDate = new Date("1994/05/24");
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
