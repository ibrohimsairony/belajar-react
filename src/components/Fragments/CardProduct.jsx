import Button from "../elements/Button";

export default function CardProduct({ children }) {
  return (
    <div className="flex flex-col w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
}

const Header = ({ image }) => {
  return (
    <a href="#">
      <img
        src={image}
        alt="sepatu"
        className="p-8 rounded-t-4xl w-full h-60 object-cover object-center"
      />
    </a>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="h-full px-5 pb-5">
      <a href="#">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-white ">
          {title.substring(0, 20)} ...
        </h5>
        <p className="text-sm text-gray-200">
          {children.substring(0, 100)} ...
        </p>
      </a>
    </div>
  );
};

const Footer = ({ price, handleAddToCart }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button
        classname="bg-blue-600 hover:cursor-pointer"
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
