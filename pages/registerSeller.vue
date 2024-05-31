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
        <label for="credential">Credential</label>
        <input
          type="text"
          class="form-control"
          id="credential"
          v-model="credential"
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
        <div v-if="sellerAdded" class="alert alert-success mt-3">
          Seller registered successfully!
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      dob: "",
      credential: "",
      sellerAdded: false,
    };
  },
  methods: {
    async registerSeller() {
      const newSeller = {
        name: this.name,
        birthday: this.dob,
        credential: this.credential,
      };

      let res;
      try {
        res = await axios.post("/api/seller", null, { params: newSeller });
      } catch (error) {
        console.error(error);
      }
      if (res.data != "ok") {
        // show errorMessage (if possible)
        return;
      } else {
        this.sellerAdded = true;
      }

      //clean form
      setTimeout(() => {
        this.sellerAdded = false;
        this.name = "";
        this.credential = "";
        this.dob = "";
      }, 3000);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
