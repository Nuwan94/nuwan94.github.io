<template>
  <div class="row m--2">
    <div class="col-lg-4 text-center">
      <img class="img-fluid rounded-lg" :src="course.icon" />
    </div>
    <div class="col-lg-8 text-center text-md-left">
      <a v-if="course.link" target="_blank" class="float-right pl-1" :href="course.link">
        <i class="fa fa-link"></i>
      </a>
      <h3>{{ course.name }}</h3>
      <h5>
        <span v-if="course.author">
          <i class="fa fa-user-edit"></i>
          {{ course.author }} |
        </span>
        <i class="fa fa-tag"></i>
        {{ course.site }}
      </h5>
      <small class="d-block m-1">{{ course.date | moment("Do MMMM YYYY") }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: Object,
  },
};
</script>

<style scoped>
.img-fluid {
  max-height: 100px;
}
</style>