<template>
  <div class="container mt-5">
    <h1 class="mb-4">Vehicle Details</h1>
    <div v-if="vehicle">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ vehicle.brand }} {{ vehicle.model }}</h5>
          <p class="card-text">
            <strong>Year:</strong> {{ vehicle.year }}<br />
            <strong>Color:</strong> {{ vehicle.color }}<br />
            <strong>Type:</strong> {{ vehicle.type }}<br />
            <span v-if="vehicle.hasTrunk === undefined">
              <strong>Doors:</strong> {{ vehicle.amountDoor }}<br />
              <strong>Fuel Type:</strong> {{ vehicle.fuelType }}<br />
              <strong>Trunk Capacity:</strong>
              {{ vehicle.trunkCapacity }} L<br />
              <strong>Price:</strong> $ {{ vehicle.price }}<br />
            </span>
            <span v-if="vehicle.amountDoor === undefined">
              <strong>Has Trunk:</strong> {{ vehicle.hasTrunk }}<br />
              <strong>Starting Type:</strong> {{ vehicle.startingType }}<br />
              <strong>Seat Height:</strong> {{ vehicle.seatHeight }} cm<br />
              <strong>Price:</strong> $ {{ vehicle.price }}<br />
            </span>
          </p>
        </div>
      </div>
      <div class="form-group">
        <label for="price">Price in €</label>
        <input
          type="number"
          name="Price"
          class="form-control"
          id="price"
          v-model="price"
          required
        />
      </div>
      <h3>Select Seller</h3>
      <form @submit.prevent="soldVehicle" class="d-flex flex-column gap-2">
        <div class="form-group">
          <label for="seller" class="py-1">Seller</label>
          <select class="form-control" id="seller" v-model="selectedSellerCredential">
            <option
              v-for="seller in sellers"
              :key="seller.credential"
              :value="seller.credential"
            >
              {{ seller.name }}
            </option>
          </select>
        </div>
        <div class="d-flex flex-column align-items-center gap-2">
          <button type="submit" class="btn btn-primary w-25" v-on:click="assignSeller">
            Assign Seller
          </button>
        </div>
      </form>
      <div v-if="sellerAssigned" class="alert alert-success mt-3" role="alert">
        Seller assigned successfully!
      </div>
    </div>
    <div v-else>
      <p>Loading vehicle details...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      id: "",
      vehicle: null,
      sellers: [],
      selectedSellerCredential: "",
      sellerAssigned: false,
      price: 0
    };
  },
  async mounted() {
    this.id = this.$route.params.id;
    this.loadVehicle(this.id);
    this.loadSellers();
  },
  methods: {
    async loadVehicle(id) {
      const vehiclesJSON = await axios.get('/api/vehicle');
      const vehicles = vehiclesJSON.data;
      console.log(vehicles);
      this.vehicle = vehicles.find((vehicle) => vehicle.id == id);
      console.log(this.vehicle);
    },
    async loadSellers() {
      const sellersJSON = await axios.get('/api/seller')
      this.sellers = sellersJSON.data;
      console.log(this.sellers);
    },
    async assignSeller() {
      if (this.selectedSellerCredential && this.vehicle) {
        const paramsSale = {id: this.vehicle.id, credential: this.selectedSellerCredential, price: this.price};
        console.log(this.selectedSellerCredential);
        const res = await axios.post('/api/sale', null, {params: paramsSale})
        console.log(res);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
.card {
  border: 1px solid #ddd;
}
</style>
