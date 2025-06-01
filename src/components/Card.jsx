import { useState } from "react";

export default function Card(props) {
  const [isItemAdded, setIsItemAdded] = useState(false);

  async function alertItemAdded() {
    setIsItemAdded(true);
    setTimeout(() => {
      setIsItemAdded(false);
    }, 2000);
  }

  return (
    <div className="min-w-64 card flex flex-col items-center justify-center gap-6 p-4 bg-gray-800 rounded-md shadow-lg max-w-3xs">
      <div
        className={`text-center flex justify-center items-center text-white text-2xl fixed bottom-0 left-0 min-w-full min-h-28 bg-green-600/25 backdrop-blur-md border-green-600 rounded-t-2xl border-t-2 ${
          isItemAdded ? "block" : "hidden"
        }`}
      >
        <h2>Item adicionado com sucesso.</h2>
      </div>
      <h3 className="text-white font-bold uppercase text-2xl text-center">
        {props.title || "Biscoito"}
      </h3>
      <div
        role="img"
        className="rounded-md shadow-lg"
        style={{
          minWidth: "90%",
          backgroundColor: "rgb(147, 147, 147)",
          minHeight: "200px",
        }}
      ></div>
      <p className="text-white">
        {props.description || "Delicioso biscoito recheado"}
      </p>
      <button
        onClick={() => {
          props.addItemToCart();
          alertItemAdded();
        }}
        className="text-white font-semibold bg-amber-400 min-w-full bg-opacity-50 w-fit px-4 py-2 rounded-md shadow justify-self-end cursor-pointer transition-[colors, shadow] ease-in duration-200 hover:bg-amber-500 hover:shadow-amber-500"
      >
        ADICIONAR AO CARRINHO
      </button>
    </div>
  );
}
