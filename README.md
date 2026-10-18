# LankaRide — Tourist Taxi Website Starter

A responsive one-page website for a Sri Lankan tourist taxi service. Built with plain HTML, CSS and JavaScript; no framework or build step required.

## Run locally
1. Extract the ZIP.
2. Keep `index.html` and `config.js` in the same folder.
3. Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

## Configured business details
- WhatsApp booking number: `+94 76 090 0262` (stored as `94760900262` for WhatsApp links).
- The site currently displays rough one-way airport transfer estimates for Colombo, Negombo, Kandy, Sigiriya, Galle and Ella.
- These estimates are placeholders for planning only. They are not verified business prices and must be replaced or approved by the business owner after the vehicle details and price list are provided.

## Update prices later
Edit `estimatedRoutes` in `config.js`. Each route has a label, pickup/destination aliases, and `min`/`max` amounts in LKR. Once the actual price list is received, update these values and vehicle-specific pricing. Confirmed fixed fares can be added to `routeFares` as exact `"Pickup|Destination": amount` entries.

## Included
- Responsive homepage for desktop and mobile
- Quick taxi booking form
- Detailed booking request modal
- WhatsApp message composition using the configured business number
- Destination cards that prefill the booking destination
- Indicative airport transfer price guide
- Date validation to prevent past dates

## Important before launch
This is a frontend starter, not a complete booking platform. It does not store bookings in a database, make live route-distance calculations, process payments, or include an admin dashboard. Before public launch, verify every fare, vehicle capacity, route and contact detail; add cancellation terms and a privacy notice; and test the WhatsApp booking flow on a phone.
