# 🍽️ Food Ordering App

A fully responsive **Food Ordering Web App** built with **React** and **Redux**.  
Users can browse a variety of dishes, add them to a cart, and view the total cost in real-time — all handled using centralized Redux state management.

---

## 🚀 Features

- 📋 Dynamic food menu with images, titles, and prices
- 🛒 Add/remove items from the cart
- 🔁 Real-time cart updates with quantity and subtotal
- 🧠 Redux for global state management (cart logic)
- 💡 Clean, modern UI
- 📱 Fully responsive layout

---

## 🛠️ Tech Stack

- **React** – Component-based UI
- **Redux** – Centralized cart state
- **React-Redux** – Integration layer
- **JavaScript (ES6+)**
- **CSS Modules / Plain CSS** – Styling

---

## 🧠 State Management with Redux

This app uses Redux for:

- ✅ Managing the cart state (items, quantity, total)
- ✅ Dispatching actions to add or remove items
- ✅ Using selectors to retrieve cart data in components

File structure includes:
Food-Ordering-App/
├── public/
├── src/
│ ├── Components/
│ │ ├── Header/
│ │ ├── Menu/
│ │ ├── Cart/
│ ├── redux/
│ │ ├── store.js
│ │ └── cartSlice.js
│ ├── App.jsx
│ ├── main.jsx
│ └── ...
├── package.json
└── index.html


## To run the app locally:

# Clone the repository
git clone https://github.com/RohanShelke17/Food-Ordering-App.git

# Navigate into the project folder
cd Food-Ordering-App

# Install dependencies
npm install

# Start development server
npm run dev
