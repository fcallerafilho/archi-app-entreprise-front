<template>
  <div class="container mt-5">
    <h1 class="mb-4">Register Vehicle</h1>
    <form @submit.prevent="registerVehicle" class="d-flex flex-column gap-3">
      <div class="form-group">
        <label for="type">Type</label>
        <select class="form-control" id="type" v-model="type" required>
          <option value="">Select type</option>
          <option value="car">Car</option>
          <option value="moto">Moto</option>
        </select>
      </div>

      <div v-if="type" class="d-flex flex-column gap-3">
        <div class="form-group">
          <label for="brand">Brand</label>
          <input
            type="text"
            class="form-control"
            id="brand"
            v-model="brand"
            required
          />
        </div>
        <div class="form-group">
          <label for="model">Model</label>
          <input
            type="text"
            class="form-control"
            id="model"
            v-model="model"
            required
          />
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input
            type="number"
            class="form-control"
            id="year"
            v-model="year"
            required
          />
        </div>
        <div class="form-group">
          <label for="color">Color</label>
          <input
            type="text"
            class="form-control"
            id="color"
            v-model="color"
            required
          />
        </div>

        <div v-if="type === 'car'" class="d-flex flex-column gap-3">
          <div class="form-group">
            <label for="amountDoor">Amount of Doors</label>
            <input
              type="number"
              class="form-control"
              id="amountDoor"
              v-model="amountDoor"
              required
            />
          </div>
          <div class="form-group">
            <label for="fuelType">Fuel Type</label>
            <input
              type="text"
              class="form-control"
              id="fuelType"
              v-model="fuelType"
              required
            />
          </div>
          <div class="form-group">
            <label for="trunkCapacity">Trunk Capacity</label>
            <input
              type="number"
              class="form-control"
              id="trunkCapacity"
              v-model="trunkCapacity"
              required
            />
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input
              type="number"
              class="form-control"
              id="price"
              v-model="price"
              required
            />
          </div>
        </div>

        <div v-if="type === 'moto'" class="d-flex flex-column gap-3">
          <div class="form-group">
            <label for="hasTrunk">Has Trunk</label>
            <select
              class="form-control"
              id="hasTrunk"
              v-model="hasTrunk"
              required
            >
              <option value="">Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div class="form-group">
            <label for="startingType">Starting Type</label>
            <input
              type="text"
              class="form-control"
              id="startingType"
              v-model="startingType"
              required
            />
          </div>
          <div class="form-group">
            <label for="seatHeight">Seat Height</label>
            <input
              type="number"
              class="form-control"
              id="seatHeight"
              v-model="seatHeight"
              required
            />
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input
              type="number"
              class="form-control"
              id="price"
              v-model="price"
              required
            />
          </div>
        </div>

        <div class="d-flex flex-column align-items-center gap-2 pb-5">
          <button type="submit" class="btn btn-primary w-25">Register</button>
          <div
            v-if="vehicleAdded"
            class="alert alert-success mt-3"
            role="alert"
          >
            Vehicle registered successfully!
          </div>
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
      brand: "",
      model: "",
      year: "",
      color: "",
      type: "",
      amountDoor: "",
      fuelType: "",
      trunkCapacity: "",
      hasTrunk: "",
      startingType: "",
      seatHeight: "",
      price: "",
      vehicleAdded: false,
    };
  },
  methods: {
    async registerVehicle() {
      const newVehicle = {
        brand: this.brand,
        model: this.model,
        year: this.year,
        color: this.color,
        type: this.type,
      };

      if (this.type === "car") {
        newVehicle.amountDoor = this.amountDoor;
        newVehicle.fuelType = this.fuelType;
        newVehicle.trunkCapacity = this.trunkCapacity;
        newVehicle.price = this.price;
      } else if (this.type === "moto") {
        newVehicle.hasTrunk = this.hasTrunk;
        newVehicle.startingType = this.startingType;
        newVehicle.seatHeight = this.seatHeight;
        newVehicle.price = this.price;
      }

      var res = "nok";
      // send newVehicle
      if(newVehicle.type === "moto") {
        res = await axios.post('/api/moto', null, {params: newVehicle})
      }else{
        res = await axios.post('/api/car', null, {params: newVehicle})
      }
      if(res != "ok"){ // show errorMessage (if possible)
        return;
      }

      this.brand = "";
      this.model = "";
      this.year = "";
      this.color = "";
      this.type = "";
      this.amountDoor = "";
      this.fuelType = "";
      this.trunkCapacity = "";
      this.hasTrunk = "";
      this.startingType = "";
      this.seatHeight = "";

      this.vehicleAdded = true;

      setTimeout(() => {
        this.vehicleAdded = false;
      }, 5000);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
