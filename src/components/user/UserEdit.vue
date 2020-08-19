<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{$route.query.local}} </p>
    <p>Analytics: {{$route.query.q}} </p>

    <div></div>
    <p id="data">Some other content.</p>

  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
    }
}
</script>

<style>

</style>