<template>
  <div class="card hover-bounce">
    <div class="gradient"></div>
    <div class="Header">
      <em :class="`hover-bounce nsa94 fa-3x ${skill.icon}`" />
      <h3 class="lang text-white mt-2">{{ skill.name }}</h3>
    </div>
    <div class="Stats">
      <div :class="`level ${skill.level}`">
        {{ skill.level }} {{ skill.score }}
      </div>
      <div class="percentile">{{ skill.percentile }} percentile</div>
      <div class="verifiedDate mt-3">Verified on {{ skill.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      description: "Skill IQ",
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #181c20;
  margin-bottom: 24px;
  position: relative;
  color: white;
  transition: 0.25s;
}

.lang {
  max-width: 75%;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 300;
  min-height: 3em;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
}
.gradient {
  position: relative;
  z-index: 1;
  height: 4px;
  margin-top: -1px;
  margin-bottom: 20px;
  width: 100%;
  background-color: #ffc200;
  background: linear-gradient(to left, #ffc200 0%, #8bc53f 50%, #26c1fb 100%);
  background: -moz-linear-gradient(
    to left,
    #ffc200 0%,
    #8bc53f 50%,
    #26c1fb 100%
  );
  background: -webkit-linear-gradient(
    to left,
    #ffc200 0%,
    #8bc53f 50%,
    #26c1fb 100%
  );
  background: -o-linear-gradient(
    to left,
    #ffc200 0%,
    #8bc53f 50%,
    #26c1fb 100%
  );
  background: -ms-linear-gradient(
    to left,
    #ffc200 0%,
    #8bc53f 50%,
    #26c1fb 100%
  );
  background: -webkit-gradient(
    to left,
    left bottom,
    right bottom,
    color-stop(0%, #ffc200),
    color-stop(50%, #8bc53f),
    color-stop(100%, #26c1fb)
  );
}

.nsa94 {
    transition: .25s;
}

.level {
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
}

.proficient {
  color: #86ce21;
}

.expert {
  color: #26c1fb;
}

.percentile {
  font-size: 12px;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 400;
}

.verifiedDate {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px 6px;
  font-size: 12px;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 400;
}
</style>