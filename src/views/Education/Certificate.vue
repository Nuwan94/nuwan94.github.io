<template>
  <div class="row p-3 bg-white rounded-lg">
    <div class="col-lg-3 text-center">
      <img class="img-fluid rounded-lg" :src="certificate.icon" />
    </div>
    <div class="col-lg-9 text-center text-md-left">
      <h2>{{ certificate.name }}</h2>
      <h4 class="text-gray">{{ certificate.program }}</h4>
      <small class="d-block mt-2 mb-3">
        Issued by
        <b>{{ certificate.issuer }}</b>
        <template v-if="certificate.credentailId">
          Credentail ID :
          <b>{{ certificate.credentailId }}</b>
        </template>
        <br />on
        <b>{{ certificate.date | moment("Do MMMM YYYY") }}</b>
      </small>
    </div>
    <div class="col text-right">
      <base-button
        v-if="certificate.credentailLink"
        @click="handleView"
        type="white"
        icon="fa fa-eye"
      >View</base-button>
      <base-button
        v-if="certificate.credentailLink"
        target="_blank"
        tag="a"
        :href="certificate.credentailLink"
        type="success"
        class="bg-gradient-green"
        icon="fa fa-link"
      >Verify</base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    certificate: Object
  },
  methods: {
    handleView() {
      this.$emit("clicked", this.certificate.pdf);
    }
  }
};
</script>

<style scoped>
</style>