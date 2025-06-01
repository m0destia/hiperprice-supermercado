import CarrinhoCard from "../components/CarrinhoCard";
import SectionTitle from "../components/SectionTitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Carrinho() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  function handleRemoveItem(id) {
    const item = cartItems.find((item) => item.id === id);
    let updatedCartItems;

    if (item.quantity > 1) {
      updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      updatedCartItems = cartItems.filter((item) => item.id !== id);
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    setCartItems(updatedCartItems);
  }

  return (
    <section id="carrinho" className="px-[8%] pt-24">
      <button
        onClick={handleBack}
        className="absolute top-0 left-0 p-4 font-black text-white cursor-pointer m-4 bg-gray-600 rounded-md"
      >
        &lt;
      </button>
      <SectionTitle>Carrinho</SectionTitle>
      <div className="mt-24 flex flex-col gap-6 justify-center p-4 rounded-md shadow-lg bg-gray-800">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CarrinhoCard
              key={item.id}
              title={item.title}
              description={item.description}
              id={item.id}
              quantity={item.quantity}
              onRemove={handleRemoveItem}
            />
          ))
        ) : (
          <p className="text-white text-center">
            Seu carrinho está vazio. Adicione produtos para continuar.
          </p>
        )}
      </div>
    </section>
  );
}
