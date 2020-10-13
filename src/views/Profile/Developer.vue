<template>
  <div class="pl-lg-4">
    <div class="row">
      <div class="col-lg-6">
        <base-input
          readonly
          alternative
          label="Coding Style"
          placeholder="Coding Style"
          input-classes="form-control-alternative"
          :value="personal.codingStyle"
        />
      </div>
      <div class="col-lg-6">
        <base-input
          readonly
          alternative
          label="Indentation Style"
          placeholder="Indentation"
          input-classes="form-control-alternative"
          :value="personal.indentation"
        />
      </div>
    </div>
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
          placeholder="Career Goal"
          input-classes="form-control-alternative"
          :value="personal.goal"
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
  },};
</script>

<style>
</style>