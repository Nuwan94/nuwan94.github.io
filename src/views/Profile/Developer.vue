<template>
  <div class="pl-lg-4">
    <div class="row">
      <div class="col-lg-6">
        <base-input
          readonly
          alternative
          label="Favourite Languages"
          placeholder="Favourite Languages"
          input-classes="form-control-alternative"
          :value="personal.favLang"
        />
      </div>
      <div class="col-lg-6">
        <base-input
          readonly
          alternative
          label="Career Goal"
          placeholder="Current Career Goal"
          input-classes="form-control-alternative"
          :value="personal.goal"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <base-input
          readonly
          alternative
          label="Favourite IDEs"
          placeholder="Favourite IDEs"
          input-classes="form-control-alternative"
          :value="personal.favIDEs"
        />
      </div>
      <div class="col-lg-6">
        <base-input
          readonly
          alternative
          label="Current Learning Goals"
          placeholder="Current Learning Goals"
          input-classes="form-control-alternative"
          :value="personal.learning"
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
};
</script>

<style>
</style>