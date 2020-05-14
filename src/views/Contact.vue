<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-7 col-md-10">
        <div class="card shadow border-0 mt-5 mb-5">
          <div class="card-body px-lg-5 py-lg-5">
            <div class="text-center h1 mb-4">Send Message</div>
            <form role="form">
              <base-input
                required
                alternative
                label="Name"
                placeholder="John Doe"
                input-classes="form-control-alternative"
                v-model="form.name"
              />

              <base-input
                required
                alternative
                label="Email"
                placeholder="johndoe@gmail.com"
                input-classes="form-control-alternative"
                v-model="form.email"
                @keyup="checkEmail"
                :valid.sync="form.validEmail"
              />

              <base-input alternative label="Message" required>
                <textarea
                  rows="4"
                  class="form-control form-control-alternative"
                  placeholder="..."
                  v-model="form.message"
                ></textarea>
              </base-input>

              <div class="text-center">
                <base-button type="primary" block class="my-4" @click="validateAndSend">SEND</base-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
        validEmail: undefined
      }
    };
  },
  methods: {
    validateAndSend() {
      if (
        this.form.name === "" ||
        this.form.email === "" ||
        this.form.message === ""
      ) {
        this.$notify({
          type: "danger",
          title: "Please fill all the required fields.",
          icon: "fa fa-exclamation",
          dismissible: true
        });
      } else if (this.form.validEmail !== true) {
        this.$notify({
          type: "danger",
          title: "Invalid email.",
          icon: "fa fa-exclamation",
          dismissible: true
        });
      } else {
        this.$notify({
          type: "success",
          title: "Message Sent Successfully",
          icon: "fa fa-success",
          dismissible: true
        });
        //  Send message to API endpoint
      }
    },
    checkEmail() {
      if (this.form.email === "" || this.form.email === undefined) {
        this.form.validEmail = undefined;
        return;
      }
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.form.validEmail = re.test(String(this.form.email).toLowerCase());
    }
  }
};
</script>
<style>
</style>
