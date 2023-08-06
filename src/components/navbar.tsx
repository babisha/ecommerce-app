import { SiLeaflet } from "react-icons/si";
import { Link } from "react-router-dom";

interface ILinks {
  name: string;
  href: string;
}

let links: Array<ILinks> = [
  { name: "SHOP", href: "/products" },
  { name: "ABOUT", href: "" },
  { name: "BLOGS", href: "" },
  { name: "BLOGS", href: "" },
  { name: "LOGIN", href: "/login" },
  { name: "CART", href: "/cartpage" },
];
console.log(links);

const Navbar = () => {
  //   [isClick, setIsClick] = useState(false);

  //   const HandleButton = () => {
  //     setIsClick(!isClick);
  // }

  return (
    <div className="flex flex-col bg-lime-900 justify-evenly m-2 w-48 p-3 h-[80%] fixed text-base space-y-6 text-yellow-100">
      <div className="flex flex-row justify-around text-2xl ">
        <SiLeaflet />
        <h1>RE:_ _ _</h1>

        {/* <button onClick={HandleButton} className="bg-lime-900 p-1 m-0"><AiOutlineClose /></button>
        { isClick ? <CloseButton /> : <></>} */}
      </div>
      {links.map((items) => (
        <Link key={items.name} to={items.href} className="cursor-pointer">
          {items.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
