import SectionTitle from "./SectionTitle";
import Card from "./Card";

function Products(props) {
  return (
    <section id="products" className="pt-24 mx-[8%]">
      <SectionTitle>Produtos</SectionTitle>
      <div className="mt-24 flex gap-20 flex-wrap justify-center">
        <Card
          title="Biscoito de morango"
          description="Biscoito incrível de morango"
          id="1"
          addItemToCart={() => props.addItemToCart(1)}
        ></Card>
        <Card
          title="Biscoito de chocolate"
          description="Biscoito incrível de chocolate"
          id="2"
          addItemToCart={() => props.addItemToCart(2)}
        ></Card>
        <Card
          title="Suco de uva"
          description="Suco natural de uva"
          id="3"
          addItemToCart={() => props.addItemToCart(3)}
        ></Card>
        <Card
          title="Salgadinho de queijo"
          description="Salgadinho crocante de queijo"
          id="4"
          addItemToCart={() => props.addItemToCart(4)}
        ></Card>
        <Card
          title="Pão de queijo"
          description="Pão de queijo quentinho e saboroso"
          id="5"
          addItemToCart={() => props.addItemToCart(5)}
        ></Card>
      </div>
    </section>
  );
}

export default Products;
