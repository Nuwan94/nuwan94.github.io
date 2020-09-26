<template>
  <div class="row bg-white rounded-lg">
    <div class="col-12 text-center">
      <img class="img-fluid rounded-lg m-2" style="height: 100px" :src="certificate.icon" />
    </div>
    <div class="col-12 text-center">
      <h3>{{ certificate.name }}</h3>
      <h4 class="text-gray">{{ certificate.program }}</h4>
      <small class="d-block mt-2 mb-3">
        <template v-if="certificate.credentailId">
          Credentail ID :
          <b>{{ certificate.credentailId }}</b>
        </template>
      </small>
      <small class="d-block mt-2 mb-3">
        Issued by
        <b>{{ certificate.issuer }}</b> on
        <b>{{ certificate.date | moment("Do MMMM YYYY") }}</b>
      </small>
    </div>
    <div class="col mb-2 text-right">
      <base-button
        v-if="certificate.credentailLink"
        @click="handleView"
        type="link"
        icon="fa fa-eye"
      >View</base-button>
      <base-button
        v-if="certificate.credentailLink"
        target="_blank"
        tag="a"
        :href="certificate.credentailLink"
        type="link"
        icon="fa fa-link"
      >Verify</base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    certificate: Object,
  },
  methods: {
    handleView() {
      this.$emit("clicked", this.certificate.pdf);
    },
  },
};
</script>

<style scoped>
</style>