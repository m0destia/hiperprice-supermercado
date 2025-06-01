function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center mt-auto pb-60 pt-24 items-center relative"
    >
      <div className="title flex flex-col justify-center items-center mt-52">
        <h2 className="text-white font-black text-[clamp(2rem,5vw,8rem)]">
          HIPERPRICE
        </h2>
        <span className="text-gray-300 font-black text-[clamp(0.6rem,1vw,1.2rem)] mb-8">
          SUPERMERCADO
        </span>
        <p className="text-gray-200 tracking-[0.8em] text-[clamp(0.5rem,1vw,1rem)] not-md:font-bold">
          OS MELHORES PREÇOS PARA VOCÊ
        </p>
        <a
          href="#products"
          className="mt-44 text-white font-semibold bg-amber-400 bg-opacity-50 w-fit px-4 py-2 rounded-md shadow cursor-pointer transition-[colors, shadow] ease-in duration-200 hover:bg-amber-500 hover:shadow-amber-500"
        >
          VER PRODUTOS
        </a>
      </div>
    </section>
  );
}

export default Home;
