import { Fragment } from "react/jsx-runtime";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/elements/Button";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { Navigate, useOutletContext } from "react-router-dom";

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const { username } = useOutletContext();
  const totalPriceRef = useRef(null);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((res) => setProducts(res));
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    if (totalPriceRef.current) {
      if (cart.length > 0) {
        totalPriceRef.current.style.display = "table-row";
      } else {
        totalPriceRef.current.style.display = "none";
      }
    }
  }, [cart]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  return (
    <Fragment>
      <div className="flex items-center justify-end w-full h-20 px-10 text-white bg-blue-400 ">
        <span className="">{username && username}</span>
        <Button
          classname="ml-5 transition-colors bg-red-500 hover:bg-red-600 hover:cursor-pointer"
          onClick={handleLogOut}
        >
          LogOut
        </Button>
      </div>
      <div className="flex p-5">
        <div className="flex flex-wrap justify-start w-4/6 gap-4">
          {products && console.log(products)}
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                  handleAddToCart={() => handleAddToCart(product.id)}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <table className="text-left border-separate table-auto border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)} ...</td>
                      <td>
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
