<template>
  <div>
    <base-header type="gradient-gray" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-4 col-lg-6">
          <stats-card
            title="Stackoverflow"
            type="gradient-orange"
            :sub-title="stackoverflow.reputation + ' Reps'"
            icon="fab fa-stack-overflow"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-1">
                <i class="fa fa-arrow-up"></i>
                {{stackoverflow.reputation_change_month}}
              </span>
              <span class="text-nowrap">in this Month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-4 col-lg-6">
          <stats-card
            title="GitHub"
            type="gradient-gray"
            :sub-title="github.public_repos + ' Repos'"
            icon="fab fa-github"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-secondry mr-3">
                <i class="fab fa-github-alt mr-1"></i>
                {{github.public_gists.toString()}} gists
              </span>
              <span class="text-secondry mr-3">
                <i class="fa fa-users mr-1"></i>
                {{github.followers}} Follwers
              </span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-4 col-lg-6">
          <stats-card
            title="Medium"
            type="gradient-cyan"
            :sub-title="medium.articles + ' Article'"
            icon="fab fa-medium"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-danger mr-1">
                <i class="fa fa-users mr-1"></i>
                {{medium.followers}}
              </span>
              <span class="text-nowrap">Followers</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <div class="card shadow">
            <div class="card-header bg-transparent">
              <h3 class="mb-0">GitHub Contribution over Past Year</h3>
            </div>
            <div class="card-body text-center">
              <img
                class="img-fluid"
                src="https://ghchart.rshah.org/nuwan94"
                alt="GitHub Contribution"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BTooltipDirective from "bootstrap-vue/es/directives/tooltip";
export default {
  directives: {
    "b-tooltip": BTooltipDirective
  },
  data() {
    return {
      github: {
        public_repos: "00",
        public_gists: "00",
        followers: "00"
      },
      stackoverflow: {
        reputation: "00",
        reputation_change_year: "00",
        reputation_change_quarter: "00",
        reputation_change_month: "00",
        reputation_change_week: "00",
        reputation_change_day: "00"
      },
      medium: {
        articles: "01",
        followers: "44"
      }
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/nuwan94", {
        auth: {
          username: "825bdda0c89053fcd4ed",
          password: "fd737cee6549af66d686b4ab682e0bbca6862035"
        }
      })
      .then(response => (this.github = response.data));

    axios
      .get("https://api.stackexchange.com/2.2/users/3125964?site=stackoverflow")
      .then(response => (this.stackoverflow = response.data.items[0]));
  }
};
</script>
<style></style>
