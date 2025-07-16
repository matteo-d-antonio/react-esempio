import { NavLink } from "react-router-dom";

const active = (obj: any) => obj.isActive ? "text-white" : "text-gray-400";

export function NavbarPage() {
  return (
    <div className="text-white">
        <div className="flex gap-5 items-center bg-gray-800 p-4">
            <NavLink to="home" className={active}>Home</NavLink>
            <NavLink to= "about" className={active}>About</NavLink>
            <NavLink to="contact" className={active}>Contact</NavLink>
        </div>
      
    </div>
  );
}