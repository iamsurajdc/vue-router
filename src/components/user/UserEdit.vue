<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.local }}</p>
    <p>Analytics: {{ $route.query.q }}</p>

    <hr />
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <hr />
    <div></div>
    <p id="data">Some other content.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false,
    };
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure you want to leave ?")) {
        next();
      } else {
        next(false).catch((e) => console.error(e));
      }
    }
  },
};
</script>

<style></style>
