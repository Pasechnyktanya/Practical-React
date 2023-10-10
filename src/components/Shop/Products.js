import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const myProducts = [
  { id: 1, title: "Book", price: 7, description: "Choose this book!" },
  { id: 2, title: "Toy", price: 100, description: "Nice toy for a dog!" }
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {myProducts.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />))}
      </ul>
    </section>
  );
};

export default Products;
