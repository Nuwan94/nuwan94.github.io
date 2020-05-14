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
        <div class="col-lg-7">
          <div class="card shadow">
            <div class="card-header bg-transparent border-0 pb-0">
              <h3 class="mb-0">GitHub contributions in the last year</h3>
            </div>
            <div class="card-body text-center">
              <img
                class="img-fluid"
                src="https://nuwan94.herokuapp.com/files/ghchart.svg"
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
import BTooltipDirective from "bootstrap-vue/es/directives/tooltip";

export default {
  directives: {
    "b-tooltip": BTooltipDirective
  },
  data() {
    return {
      medium: {
        articles: "01",
        followers: "44"
      }
    };
  },
  computed: {
    github: function() {
      return this.$store.state.github;
    },
    stackoverflow: function() {
      return this.$store.state.stackoverflow;
    }
  }
};
</script>
<style></style>
