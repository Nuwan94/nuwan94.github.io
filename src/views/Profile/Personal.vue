<template>
  <div class="pl-lg-4">
    <div class="row">
      <div class="col-lg-6">
        <base-input
          v-for="mobile in personal.mobile"
          v-bind:key="mobile.number"
          readonly
          alternative
          :label="'Telephone (' + mobile.provider + ')'"
          placeholder="-"

          input-classes="form-control-alternative shinner"
          :value="mobile.number | telephoneNumber"
        />
      </div>
      <div class="col-lg-6">
        <base-input
          v-for="email in personal.email"
          v-bind:key="email.address"
          readonly
          alternative
          :label="'Email (' + email.type + ')'"
          placeholder="-"
          input-classes="form-control-alternative"
          :value="email.address"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <base-input
        class="shinner"
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
</template>

<script>
import personal from "../../assets/data/personal.json";

export default {
  data() {
    return {
      personal,
    };
  },
  computed: {
    calculateAge: function () {
      let currentDate = new Date();
      let birthDate = new Date(this.personal.dob);
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      return age;
    },
    fullname: function () {
      return (
        this.personal.firstName +
        " " +
        this.personal.middleName +
        " " +
        this.personal.lastName
      );
    },
  },
  filters: {
    telephoneNumber:
      ("phone",
      (phone) => {
        return phone
          .replace(/[^0-9]/g, "")
          .replace(/(\d{2})(\d{2})(\d{3})(\d{3})/, "+$1 $2 $3 $4");
      }),
  },
};
</script>

<style>
</style>