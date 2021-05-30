<template>
  <stats-card type="gradient-dark" class="mb-4 mb-xl-0">
    <template slot="footer">
      <img class="w-75" src="img/logos/ieeextreme.webp" />
      <span class="text-dark font-weight-bold mr-3">
        <ul class="list-group mt-3">
          <li class="list-group-item">
            <em class="fa fa-fw fa-arrow-up text-success mr-2"></em>
            <strong class="mr-3">Xtreme 13.0</strong>
            <div class="d-xl-inline d-lg-block">
              Global <span class="text-primary mr-3">496</span>
            </div>
            <div class="d-xl-inline d-lg-block">
              Island
              <span class="text-primary mr-3">31</span>
            </div>
          </li>
          <li class="list-group-item">
            <em class="fa fa-fw fa-caret-right text-light mr-2"></em>
            <strong class="mr-3">Xtreme 12.0</strong>
            <div class="d-xl-inline d-lg-block">
              Global <span class="text-primary mr-3">1114</span>
            </div>
            <div class="d-xl-inline d-lg-block">
              Island
              <span class="text-primary mr-3">88</span>
            </div>
          </li>
        </ul>
      </span>
    </template>
  </stats-card>
</template>

<script>
export default {
  // computed: {
  //   qwiklabs: function () {
  //     return this.$store.state.qwiklabs;
  //   },
  // },
};
</script>