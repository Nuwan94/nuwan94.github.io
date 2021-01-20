<template>
  <div class="pl-lg-4 d-flex justify-content-center flex-wrap clickable">
    <a
      :id="profile.name"
      v-for="profile in profiles"
      v-bind:key="profile.name"
      :href="profile.link ? profile.link : false"
      class="m-2 rounded text-center bg-white shadow profile-btn hover-bounce shinner"
      :target="profile.link ? '_blank' : ''"
    >
      <em
        v-if="profile.icon"
        :class="'m-3 fa-fw fab fa-2x ' + profile.icon"
        :style="'color:' + profile.color"
      />
      <b-tooltip placement="top" :target="profile.name" triggers="hover">{{
        profile.name
      }}</b-tooltip>
    </a>
  </div>
</template>

<script>
import profiles from "../../assets/data/profiles.json";
export default {
  data() {
    return {
      profiles,
    };
  },
};
</script>

<style>
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
.dark-circle {
  background: #333;
  border-radius: 100%;
  height: 1em;
  width: 1em;
}
.profile-btn {
  box-shadow: 2.5px 2.5px 5px 1px #ddd !important;
}
</style>