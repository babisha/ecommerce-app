import React from "react";

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

function Navbar() {
  return (
    <div>
      <div className="box">
        <h1 className="text-3xl font-bold">RE:_ _ _</h1>

        <button className="btnx">X</button>
        {links.map((items) => (
          <a>{items.name}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
