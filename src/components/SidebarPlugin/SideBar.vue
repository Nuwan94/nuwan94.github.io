<template>
  <nav
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-dark pt-2 pb-2"
    id="sidenav-main"
  >
    <div class="container-fluid">
      <!--Toggler-->
      <navbar-toggle-button @click.native="showSidebar">
        <span class="navbar-toggler-icon"></span>
      </navbar-toggle-button>
      <router-link class="navbar-brand" to="/">
        <h1 class="sprkly">{{ logo }}</h1>
      </router-link>
      <slot></slot>
      <div
        v-show="$sidebar.showSidebar"
        class="navbar-collapse collapse show bg-dark"
        id="sidenav-collapse-main"
      >
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <h1 class="sprkly">{{ logo }}</h1>
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav">
          <slot name="links"></slot>
        </ul>
        <!--Divider-->
        <hr class="my-3" />
        <!--Heading-->
        <h6 class="navbar-heading text-muted">Links</h6>
        <!--Navigation-->
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a class="nav-link" href="https://blog.nuwan.dev" target="_blank">
              <i class="ni ni-spaceship" style="color: lightgray; font-size:1.25em"></i> Blog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://linkedin.com/in/nsa94" target="_blank">
              <i class="fab fa-linkedin" style="color: #0077b5; font-size:1.25em"></i> Linkedin
            </a>
          </li>
        </ul>
        <hr class="my-3" />
        <base-button
          icon="fa fa-coffee"
          type="warning"
          tag="a"
          role="button"
          target="_blank"
          href="https://paypal.me/nuwan94"
        >Buy me a Coffee</base-button>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "@/components/Base/NavbarToggleButton";

export default {
  name: "sidebar",
  components: {
    NavbarToggleButton,
  },
  props: {
    logo: {
      type: String,
      default: "Nuwan",
      description: "Sidebar app logo text",
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        "Whether sidebar should autoclose on mobile when clicking an item",
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  methods: {
    closeSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true);
    },
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
};
</script>
<style scoped>
h1.sprkly {
  background: transparent url(/img/sparkles.gif);
  display: inline-block;
  font-weight: bold;
  color: white;
}

@media (min-width: 768px) {
  .navbar-brand h1 {
    font-size: 2em;
  }
}

@media (max-width: 768px) {
  .navbar-collapse .navbar-nav .nav-link {
    color: white !important;
  }
}
</style>
