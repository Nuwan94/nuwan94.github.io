<template>
  <div class="row p-3 bg-white rounded-lg">
    <div class="col-3 text-center">
      <img class="img-fluid rounded-lg" :src="certificate.icon" />
    </div>
    <div class="col-9">
      <h2>{{ certificate.name }}</h2>
      <small class="d-block mt-2 mb-3">
        Issued by
        <b>{{ certificate.issuer }}</b>
        with Credentail ID :
        <i>{{ certificate.credentailId }}</i>
        <br />on
        <b>{{ certificate.date | moment("Do MMMM YYYY") }}</b>
      </small>
      <div class="text-right">
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
          icon="fa fa-link"
        >Verify</base-button>
      </div>
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