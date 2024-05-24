<template>
  <div class="container mt-5">
    <h1 class="mb-4">Register Seller</h1>
    <form @submit.prevent="registerSeller()" class="d-flex flex-column gap-3">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          required
        />
      </div>
      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input
          type="date"
          name="Date of Birth"
          class="form-control"
          id="dob"
          v-model="dob"
          required
        />
      </div>
      <div class="d-flex flex-column align-items-center gap-2 pt-3">
        <button type="submit" class="btn btn-primary w-25">Register</button>
        <p v-if="sellerAdded">Seller added successfully!</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      dob: "",
      sellerAdded: false,
    };
  },
  methods: {
    registerSeller() {
      const newSeller = {
        name: this.name,
        dob: this.dob,
      };

      let sellerAdded;
      const sellers = JSON.parse(localStorage.getItem("sellers")) || [];

      try {
        sellers.push(newSeller);
        this.sellerAdded = true;
        console.log("seller added");
      } catch (error) {
        console.error(error);
      }

      localStorage.setItem("sellers", JSON.stringify(sellers));

      this.name = "";
      this.dob = "";
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
