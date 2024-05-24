<template>
  <div class="container mt-5">
    <h1 class="mb-4">Vehicle Details for {{ model }}</h1>
    <div v-if="vehicle">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ vehicle.brand }} {{ vehicle.model }}</h5>
          <p class="card-text">
            <strong>Year:</strong> {{ vehicle.year }}<br />
            <strong>Color:</strong> {{ vehicle.color }}<br />
            <strong>Type:</strong> {{ vehicle.type }}<br />
            <span v-if="vehicle.type === 'car'">
              <strong>Doors:</strong> {{ vehicle.amountDoor }}<br />
              <strong>Fuel Type:</strong> {{ vehicle.fuelType }}<br />
              <strong>Trunk Capacity:</strong>
              {{ vehicle.trunkCapacity }} L<br />
              <strong>Price:</strong> $ {{ vehicle.price }}<br />
            </span>
            <span v-if="vehicle.type === 'moto'">
              <strong>Has Trunk:</strong> {{ vehicle.hasTrunk }}<br />
              <strong>Starting Type:</strong> {{ vehicle.startingType }}<br />
              <strong>Seat Height:</strong> {{ vehicle.seatHeight }} cm<br />
              <strong>Price:</strong> $ {{ vehicle.price }}<br />
            </span>
          </p>
        </div>
      </div>
      <h3>Select Seller</h3>
      <form @submit.prevent="soldVehicle" class="d-flex flex-column gap-2">
        <div class="form-group">
          <label for="seller" class="py-1">Seller</label>
          <select class="form-control" id="seller" v-model="selectedSeller">
            <option
              v-for="seller in sellers"
              :key="seller.name"
              :value="seller.name"
            >
              {{ seller.name }} - {{ seller.dob }}
            </option>
          </select>
        </div>
        <div class="d-flex flex-column align-items-center gap-2">
          <button type="submit" class="btn btn-primary w-25">
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
export default {
  data() {
    return {
      model: "",
      vehicle: null,
      sellers: [],
      selectedSeller: "",
      sellerAssigned: false,
    };
  },
  async mounted() {
    this.model = this.$route.params.model;
    this.loadVehicle(this.model);
    this.loadSellers();
  },
  methods: {
    loadVehicle(model) {
      const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
      this.vehicle = vehicles.find((vehicle) => vehicle.model === model);
    },
    loadSellers() {
      const sellers = JSON.parse(localStorage.getItem("sellers")) || [];
      this.sellers = sellers;
    },
    assignSeller() {
      if (this.selectedSeller && this.vehicle) {
        const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
        const vehicleIndex = vehicles.findIndex(
          (v) => v.model === this.vehicle.model
        );

        if (vehicleIndex !== -1) {
          vehicles[vehicleIndex].sellerId = this.selectedSeller;
          localStorage.setItem("vehicles", JSON.stringify(vehicles));
          this.sellerAssigned = true;
          setTimeout(() => {
            this.sellerAssigned = false;
          }, 3000);
        }
      }
    },
    soldVehicle() {
      const soldVehicle = {
        ...this.vehicle,
        seller: this.selectedSeller,
      };

      const soldVehicles =
        JSON.parse(localStorage.getItem("soldVehicles")) || [];
      soldVehicles.push(soldVehicle);
      localStorage.setItem("soldVehicles", JSON.stringify(soldVehicles));
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
