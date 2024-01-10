let vehicleCounts = {
  bike: 0,
  car: 0,
  truck: 0,
  other: 0,
};

function incrementVehicle(vehicleType) {
  vehicleCounts[vehicleType]++;
  document.getElementById(`${vehicleType}-count`).innerText =
    vehicleCounts[vehicleType];
}

function decrementVehicle(vehicleType) {
  if (vehicleCounts[vehicleType] > 0) {
    vehicleCounts[vehicleType]--;
    document.getElementById(`${vehicleType}-count`).innerText =
      vehicleCounts[vehicleType];
  }
}

function resetCount() {
  for (const vehicleType in vehicleCounts) {
    vehicleCounts[vehicleType] = 0;
    document.getElementById(`${vehicleType}-count`).innerText = "0";
  }
  document.getElementById("result").innerHTML = "";
}

function calculateCharge() {
  const rate = {
    bike: 10, // $10 per day for bikes
    car: 20, // $20 per day for cars
    truck: 30, // $30 per day for trucks
    other: 15, // $15 per day for other vehicles
  };

  let totalCharge = 0;
  let result = "";

  for (const vehicleType in vehicleCounts) {
    const charge = vehicleCounts[vehicleType] * rate[vehicleType];
    totalCharge += charge;
    result += `<p>${
      vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)
    }s parked: ${vehicleCounts[vehicleType]} | Price per vehicle: $${
      rate[vehicleType]
    } | Subtotal: $${charge}</p>`;
  }

  result += `<p><strong>Total Parking Charge: $${totalCharge}</strong></p>`;

  document.getElementById("result").innerHTML = result;
}
