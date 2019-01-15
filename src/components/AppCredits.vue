<template>
  <footer>
  </footer>
</template>

<script>
export default {
  name: 'AppCredits',

  props: {
    year: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
footer {
  text-align: center;
  position: absolute;
  top: 30px;
  bottom: 10px;
  visibility: hidden;
}

@media screen and (min-width: 450px) {
  footer {
    visibility: visible;
  }
}
</style>
