/* LankaRide business configuration
 * WhatsApp number uses country code and digits only.
 * Estimates are provisional planning figures, not confirmed quotations.
 * Replace these with the business's actual vehicle-specific prices before launch.
 */
window.LANKARIDE_CONFIG = {
  businessName: "LKRide",
  whatsappNumber: "94760900262",
  currency: "LKR",
  vehicles: [
    {
      id: "mini",
      name: "Mini Car",
      model: "Mini Car",
      image: "images/vehicle_mini.png",
      passengers: "1–3 Seats",
      maxPassengers: 3,
      luggage: "2 Bags",
      ratePerKm: 130,
      description: "Budget-friendly ride for solo travellers or couples"
    },
    {
      id: "sedan",
      name: "Sedan",
      model: "Sedan",
      image: "images/vehicle_sedan.png",
      passengers: "1–4 Seats",
      maxPassengers: 4,
      luggage: "3 Bags",
      ratePerKm: 150,
      description: "Comfortable, smooth ride ideal for couples & small families"
    },
    {
      id: "minivan",
      name: "Mini Van",
      model: "Mini Van",
      image: "images/vehicle_minivan.png",
      passengers: "2–4 Seats",
      maxPassengers: 4,
      luggage: "4 Bags",
      ratePerKm: 140,
      description: "Extra luggage capacity with compact group comfort"
    },
    {
      id: "van",
      name: "KDH Flat Roof",
      model: "KDH Flat Roof",
      image: "images/vehicle_van.png",
      passengers: "5–7 Seats",
      maxPassengers: 7,
      luggage: "6 Bags",
      ratePerKm: 200,
      description: "Spacious van for families, tour groups & bulky luggage"
    },
    {
      id: "largevan",
      name: "KDH High Roof",
      model: "KDH High Roof",
      image: "images/vehicle_largevan.png",
      passengers: "8–12 Seats",
      maxPassengers: 12,
      luggage: "10 Bags",
      ratePerKm: 250,
      description: "Luxury high-roof spacious van for large groups & tours"
    }
  ],
  routeFares: {},
  estimatedRoutes: [
    { label: "Airport → Colombo", pickupAliases: ["airport", "bandaranaike", "cmb"], destinationAliases: ["colombo"], min: 5000, max: 8000 },
    { label: "Airport → Negombo", pickupAliases: ["airport", "bandaranaike", "cmb"], destinationAliases: ["negombo"], min: 4000, max: 7000 },
    { label: "Airport → Kandy", pickupAliases: ["airport", "bandaranaike", "cmb"], destinationAliases: ["kandy"], min: 18000, max: 26000 },
    { label: "Airport → Sigiriya", pickupAliases: ["airport", "bandaranaike", "cmb"], destinationAliases: ["sigiriya", "dambulla"], min: 22000, max: 32000 },
    { label: "Airport → Galle", pickupAliases: ["airport", "bandaranaike", "cmb"], destinationAliases: ["galle", "unawatuna"], min: 18000, max: 26000 },
    { label: "Airport → Ella", pickupAliases: ["airport", "bandaranaike", "cmb"], destinationAliases: ["ella"], min: 30000, max: 45000 }
  ]
};
