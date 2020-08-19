<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ this.$route.params.id }}</p>
    <router-link
      tag="button"
      :to="link"
      class="btn btn-primary"
      >Edit User</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: 'userEdit',
        params: { from: 'params', to: 'param' },
        query: { local: 'en', q: 20 },
        hash: '#data'
      }

    }
  }
};
</script>

<style></style>
