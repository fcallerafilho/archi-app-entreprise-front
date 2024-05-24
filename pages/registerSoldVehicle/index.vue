<template>
  <div class="container mt-5">
    <h1 class="mb-4">All Vehicles</h1>
    <div v-if="vehicles.length === 0">
      <p>No vehicles found.</p>
    </div>
    <div v-else>
      <div class="card mb-3" v-for="vehicle in vehicles" :key="vehicle.model">
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
              <strong>Price:</strong> ${{ vehicle.price }}<br />
            </span>
            <span v-if="vehicle.type === 'moto'">
              <strong>Has Trunk:</strong> {{ vehicle.hasTrunk }}<br />
              <strong>Starting Type:</strong> {{ vehicle.startingType }}<br />
              <strong>Seat Height:</strong> {{ vehicle.seatHeight }} cm<br />
              <strong>Price:</strong> ${{ vehicle.price }}<br />
            </span>
          </p>
          <NuxtLink
            :to="'/registerSoldVehicle/' + encodeURIComponent(vehicle.model)"
            class="btn btn-primary"
            >View Details</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehicles: [],
    };
  },
  mounted() {
    this.loadVehicles();
  },
  methods: {
    loadVehicles() {
      const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
      this.vehicles = vehicles;
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
