export default function CarrinhoCard({
  title,
  description,
  id,
  quantity,
  onRemove,
}) {
  return (
    <div className="flex flex-row gap-6 items-center p-4 bg-gray-900 rounded-md shadow-lg not-md:flex-col">
      <div
        role="img"
        className="min-w-8 min-h-8 rounded-md shadow-md flex-[20%] max-w-8"
        style={{ backgroundColor: "rgb(147,147,147)" }}
      ></div>
      <h3 className="text-white flex-[20%]">{title}</h3>
      <span className="text-gray-400 flex-[20%]" style={{ fontSize: "12px" }}>
        x{quantity}
      </span>
      <p className="text-gray-200 flex-[20%]">{description}</p>
      <button
        onClick={() => onRemove(id)}
        className="text-white flex-[20%] font-semibold bg-red-400 bg-opacity-50 w-fit px-4 py-2 rounded-md shadow cursor-pointer transition-[colors, shadow] ease-in duration-200 hover:bg-red-500 hover:shadow-red-500"
      >
        REMOVE
      </button>
    </div>
  );
}
