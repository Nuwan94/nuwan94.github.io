<template>
  <div class="row p-3">
    <div class="col-3 text-center">
      <img class="img-fluid rounded-lg" height="100" :src="course.icon" />
    </div>
    <div class="col-9">
      <h2>{{ course.name }}</h2>
      <h5>
        <span v-if="course.author">
          <i class="fa fa-user-edit"></i>
          {{ course.author }} |
        </span>
        <i class="fa fa-tag"></i>
        {{ course.site }}
      </h5>
      <small class="d-block m-1">{{ course.date | moment("Do MMMM YYYY") }}</small>
      <div class="text-right">
        <base-button
          v-if="course.link"
          tag="a"
          target="_blank"
          :href="course.link"
          type="default"
          icon="fa fa-link"
        >Link</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: Object
  }
};
</script>

<style scoped>
.img-fluid {
  max-height: 100px;
}
</style>