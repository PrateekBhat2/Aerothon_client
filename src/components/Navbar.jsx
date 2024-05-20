import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav  className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <ul className="flex h-14 items-center justify-center border-b border-zinc-200 text-lg">
          <li className="h-8 w-20 flex align-middle justify-center hover:bg-gray-100 rounded-lg ml-10 mr-10">
            <a href='/'>Home</a>
          </li>
          <li className="h-8 w-20 flex align-middle justify-center hover:bg-gray-100 rounded-lg ml-10 mr-10">
            <a href='/AboutUs'>About us</a>
          </li>
          <li className="h-8 w-20 flex align-middle justify-center hover:bg-gray-100 rounded-lg ml-10 mr-10">
            <a href='/Product'>Product</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}