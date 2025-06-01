import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import About from "./components/About.jsx";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Biscoito de morango",
    description: "Biscoito incrível de morango",
  },
  {
    id: 2,
    title: "Biscoito de chocolate",
    description: "Biscoito incrível de chocolate",
  },
  {
    id: 3,
    title: "Suco de uva",
    description: "Suco natural de uva",
  },
  {
    id: 4,
    title: "Salgadinho de queijo",
    description: "Salgadinho crocante de queijo",
  },
  {
    id: 5,
    title: "Pão de queijo",
    description: "Pão de queijo quentinho e saboroso",
  },
];

function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  function addItemToCart(id) {
    const item = items.find((item) => item.id === id);

    if (item) {
      const existingItem = cartItems.find((cartItem) => cartItem.id === id);

      if (existingItem && existingItem.quantity >= 1) {
        existingItem.quantity += 1;
        const newCartItems = cartItems.map((cartItem) =>
          cartItem.id === id ? existingItem : cartItem
        );
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      } else {
        console.log("Item já adicionado ao carrinho");

        const newItem = { ...item, quantity: 1 };

        const newCartItems = [...cartItems, newItem];
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      }
    }
  }

  return (
    <div>
      <Header />
      <Home />
      <Products addItemToCart={addItemToCart} />
      <About />
    </div>
  );
}

export default App;
