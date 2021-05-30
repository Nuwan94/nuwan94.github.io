<template>
  <div>
    <em
      :class="'float-left m-2 ml-0 mr-3 fa-fw fa-3x fab ' + pullRequest.icon"
    />
    <div class="d-inline">
      <h1>{{ pullRequest.org }}
        <small v-for="t in pullRequest.tags" :key="t" class="mx-1 text-sm">#{{t}}</small>
      </h1>
      <p class="text-dark font-weight-bold d-inline">{{ pullRequest.title }}</p>
      <small class="float-right"
        >{{ pullRequest.date | moment("Do MMMM YYYY") }}
        <base-button
          target="_blank"
          tag="a"
          :href="pullRequest.link"
          type="link"
          icon="fa fa-link"
          class="d-inline btn-sm mt-2"
        ></base-button
      ></small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pullRequest: Object,
  },
};
</script>