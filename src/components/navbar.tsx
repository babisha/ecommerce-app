import React, { useState } from "react";
import { SiLeaflet } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";

interface ILinks {
  name: string;
  href: string;
}

// interface INewlinks {
//   name: string,
// }

// let newLinks : INewlinks,

let links: Array<ILinks> = [
  { name: "SHOP", href: "/Pages/Shop.tsx" },
  { name: "ABOUT", href: "" },
  { name: "BLOGS", href: "" },
  { name: "BLOGS", href: "" },
  { name: "LOGIN", href: "" },
  { name: "CART", href: "" },
];
console.log(links);

const Navbar = () => {
  //   [isClick, setIsClick] = useState(false);

  //   const HandleButton = () => {
  //     setIsClick(!isClick);
  // }

  return (
    <div className="flex flex-col bg-lime-900 justify-between m-2 w-48 p-3 fixed text-base space-y-6 text-yellow-100">
      <div className="flex flex-row justify-around text-2xl ">
        <SiLeaflet />
        <h1>RE:_ _ _</h1>

        {/* <button onClick={HandleButton} className="bg-lime-900 p-1 m-0"><AiOutlineClose /></button>
        { isClick ? <CloseButton /> : <></>} */}
      </div>
      {links.map((items) => (
        <a>{items.name}</a>
      ))}
    </div>
  );
};

export default Navbar;
