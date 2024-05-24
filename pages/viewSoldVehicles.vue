<template>
  <div class="container mt-5">
    <h1 class="mb-4">All Sold Vehicles</h1>
    <div v-if="soldVehicles.length === 0">
      <p>No vehicles found.</p>
    </div>
    <div v-else>
      <div
        v-for="vehicle in soldVehicles"
        :key="vehicle.model"
        class="card mb-3"
      >
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
              <strong>Seller:</strong> {{ vehicle.seller }}<br />
              <strong>Price:</strong> $ {{ vehicle.price }}<br />
            </span>
            <span v-if="vehicle.type === 'moto'">
              <strong>Has Trunk:</strong> {{ vehicle.hasTrunk }}<br />
              <strong>Starting Type:</strong> {{ vehicle.startingType }}<br />
              <strong>Seat Height:</strong> $ {{ vehicle.seatHeight }} cm<br />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      soldVehicles: [],
    };
  },
  mounted() {
    this.loadSoldVehicles();
  },
  methods: {
    loadSoldVehicles() {
      const soldVehicles =
        JSON.parse(localStorage.getItem("soldVehicles")) || [];
      this.soldVehicles = soldVehicles;
    },
  },
};
</script>
