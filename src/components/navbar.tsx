import React from 'react'




interface ILinks {
    name: string,
    href: string,
}
   
let links: Array<ILinks> 
links = [
    {name: 'LOGIN', href: ''},
    {name: 'SHOP', href: ''},
    {name: 'BLOGS', href: ''},   
];
console.log(links);
function Navbar() {
    
  return (
    <div>
        {links.map((items)=>(
            <h1>{items.name}</h1>
        ))}
    </div>
  )
}

export default Navbar