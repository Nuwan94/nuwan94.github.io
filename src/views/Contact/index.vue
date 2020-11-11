<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-10">
          <div class="card shadow border-0 mt-5 mb-5">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center h1 mb-4">Contact via</div>
              <div class="row contact-row">
                <base-button
                  tag="a"
                  role="button"
                  target="_blank"
                  href="https://wa.me/94757871494"
                  class="col contact-whatsapp shinner"
                  ><i class="fa fa-3x fa-whatsapp"
                /></base-button>
                <base-button
                  tag="a"
                  role="button"
                  target="_blank"
                  href="https://t.me/nuwan94"
                  class="col contact-telegram shinner"
                  ><i class="fa fa-3x fa-telegram"
                /></base-button>
                <base-button
                  tag="a"
                  role="button"
                  target="_blank"
                  href="skype:live:nuwanalawatta"
                  class="col contact-skype shinner"
                  ><i class="fa fa-3x fa-skype"
                /></base-button>
              </div>
              <div class="text-center h2 mt-4 mb-2">or</div>
              <div class="text-center h1 mt-2 mb-4">Send a Message</div>
              <form ref="contactForm" @submit.prevent="submit" key="0">
                <base-input
                  dark="true"
                  required
                  alternative
                  label="Name"
                  input-classes="form-control-alternative bg-dark text-white"
                  :value="name | autoCapitalize"
                  :error="
                    $v.name.$dirty && $v.name.$error
                      ? !$v.name.required
                        ? 'Name is required.'
                        : `Name should consist atleast first and last name.`
                      : undefined
                  "
                  @blur="() => $v.name.$touch()"
                  @input="(v) => setName(v)"
                  :valid="
                    !$v.name.$invalid && $v.name.$dirty ? true : undefined
                  "
                />

                <base-input
                  dark="true"
                  required
                  alternative
                  label="Email"
                  input-classes="form-control-alternative  bg-dark text-white"
                  :value="mail"
                  :error="
                    $v.mail.$dirty && $v.mail.$error
                      ? !$v.mail.required
                        ? 'Email is required.'
                        : `Invalid email format.`
                      : undefined
                  "
                  @blur="() => $v.mail.$touch()"
                  @input="(v) => setEmail(v)"
                  :valid="
                    !$v.mail.$invalid && $v.mail.$dirty ? true : undefined
                  "
                />

                <base-input
                  required
                  alternative
                  label="Message"
                  :value="message"
                  :error="
                    $v.message.$dirty && $v.message.$error
                      ? !$v.message.required
                        ? 'Message is required.'
                        : `Your message should have at least ${
                            $v.message.$params.minWords.count -
                            countWord(message)
                          } more words.`
                      : undefined
                  "
                  :valid="
                    !$v.message.$invalid && $v.message.$dirty ? true : undefined
                  "
                >
                  <textarea
                    rows="3"
                    class="form-control form-control-alternative bg-dark text-white"
                    :value="message"
                    @blur="() => $v.message.$touch()"
                    @input="(v) => setMessage(v.target.value)"
                  ></textarea>
                </base-input>

                <base-button
                  class="button p-3"
                  type="primary"
                  nativeType="submit"
                  block
                  :disabled="submitStatus === 'PENDING'"
                  >Submit</base-button
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { helpers, required, email } from "vuelidate/lib/validators";

const NAME_MIN_WORD = 2;
const MESSAGE_MIN_WORD = 5;

const wordCount = (n) =>
  helpers.withParams({ type: "words", count: n }, (v) =>
    v ? v.match(/\S+/g).length >= n : 0
  );

export default {
  name: "register",
  data() {
    return {
      name: "",
      mail: "",
      message: "",
      submitStatus: undefined,
    };
  },
  validations: {
    name: {
      required,
      minWords: wordCount(NAME_MIN_WORD),
    },
    mail: {
      required,
      email,
    },
    message: {
      required,
      minWords: wordCount(MESSAGE_MIN_WORD),
    },
  },
  methods: {
    loadIintialStates() {
      this.name = "";
      this.mail = "";
      this.message = "";
      this.submitStatus = undefined;
    },
    setName(value) {
      this.name = value;
      this.$v.name.$touch();
    },
    setEmail(value) {
      this.mail = value;
      this.$v.mail.$touch();
    },
    setMessage(value) {
      this.message = value;
      this.$v.message.$touch();
    },
    countWord(value) {
      if (value) {
        return value.match(/\S+/g).length;
      } else {
        return 0;
      }
    },
    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";

        this.$notify({
          type: "danger",
          title: "Please fill all the fields",
          icon: "fa fa-exclamation",
        });
      } else {
        await axios
          .post("https://nuwan94.herokuapp.com/contact", {
            name: this.name,
            email: this.mail,
            message: this.message.replace(/(?:\r\n|\r|\n)/g, "<br>"),
          })
          .then((res) => {
            if (res.status === 200) {
              this.$notify({
                type: "success",
                title: "Message sent",
                icon: "fa fa-success",
              });
              this.loadIintialStates();
              this.$v.$reset();
            } else {
              throw new Error(res.statusText);
            }
          })
          .catch((err) => {
            this.$notify({
              type: "danger",
              title: err.message,
              icon: "fa fa-exclamation",
            });
            this.submitStatus = "ERROR";
          });
      }
    },
  },
  filters: {
    autoCapitalize(str) {
      return str.replace(
        /(^\w|\s\w)(\S*)/g,
        (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
      );
    },
  },
};
</script>
<style lang="scss">
.contact-row .btn {
  border: none;
  margin: 5px;
  padding: 2em;
}
.contact-row .btn:hover {
  
}
.btn.contact-skype {
  background: #00aff0;
  &:hover {
    background: #00aff0;
  }
}
.btn.contact-whatsapp {
  background: #25d366;
   &:hover {
    background: #25d366;
  }
}
.btn.contact-telegram {
  background: #0088cc;
   &:hover {
    background: #0088cc;
  }
}
</style>
