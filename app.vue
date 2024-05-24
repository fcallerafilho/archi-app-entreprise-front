<template>
  <Navbar />
  <main class="container mt-5">
    <NuxtPage />
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "DefaultLayout",
};
</script>

<style></style>
