<template>
  <div class="container mt-5">
    <h1 class="mb-4">All Sales</h1>
    <div v-if="sales.length === 0">
      <p>No sales found.</p>
    </div>
    <div v-else>
      <div v-for="sale in sales" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{sale.vehicleinfo }}</h5>
          <p class="card-text">
              <strong>Seller:</strong> {{ sale.sellername }}<br />
              <strong>Price:</strong> {{ sale.price }} € <br />
              <strong>Date:</strong> {{ sale.date }}<br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      sales: [],
    };
  },
  mounted() {
    this.loadSales();
  },
  methods: {
    async loadSales() {
      const salesJSON = await axios.get('/api/sale');
      console.log(salesJSON.data);
      this.sales = salesJSON.data;
    },
  },
};
</script>
