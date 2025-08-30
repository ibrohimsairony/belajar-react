import { Fragment } from "react/jsx-runtime";
import CardProduct from "../components/Fragments/CardProduct";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import TableCart from "../components/Fragments/TableCart";
import { DarkModeContext } from "../contexts/DarkMode";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    getProducts((res) => setProducts(res));
  }, []);
  return (
    <Fragment>
      <div className={`flex p-5 ${isDarkMode && "bg-slate-700"}`}>
        <div className="flex flex-wrap justify-start w-4/6 gap-4">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title} id={product.id}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                  id={product.id}
                />
              </CardProduct>
            ))}
        </div>
        <div className={`w-2/6 ${isDarkMode && "text-slate-100"}`}>
          <h1
            className={`text-3xl font-bold  ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            } `}
          >
            Cart
          </h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
}
