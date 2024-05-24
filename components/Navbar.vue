<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
      <a class="navbar-brand" href="#">My Car Retailer</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/registerVehicle"
              >Register Vehicle</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/registerSoldVehicle/"
              >Register Sold Vehicle</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/registerSeller"
              >Register Seller</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/viewSoldVehicles"
              >View Sold Vehicles</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
