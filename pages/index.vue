<template>
  <div class="container mt-5">
    <h1>Welcome</h1>
    <p>Use the links in the navbar to navigate through the website</p>
    <div class="mt-4 d-flex flex-row gap-3">
      <NuxtLink to="/registerSeller" class="btn btn-primary mr-2"
        >Register Seller</NuxtLink
      >
      <NuxtLink to="/registerVehicle" class="btn btn-primary"
        >Register Vehicle</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
