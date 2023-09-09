import Image from "next/image";
import Input from "./form/Input";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { PiMonitorPlayThin } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
import { CgGames } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className="flex px-5 py-1 sticky top-0 z-[8888]  shadow-md bg-white justify-between">
      <div className="flex w-[25%] items-center  gap-x-1">
        <img
          className="h-12"
          src="https://ik.imagekit.io/oxmhan7av/pngwing.com.png?updatedAt=1694143956118"
          alt=""
        />
        <Input />
      </div>
      <ul className="flex items-center  w-1/2  justify-evenly   ">
        <li>
          <AiFillHome className="text-[35px] text-primary" />
        </li>
        <li>
          <PiMonitorPlayThin className="text-[35px]" />
        </li>
        <li>
          <BsShopWindow className="text-[35px]" />
        </li>
        <li>
          <CgGames className="text-[35px]" />
        </li>
      </ul>
      <div className="flex items-center justify-end w-[25%] gap-x-1">
        <ul>
          <li>profile</li>
        </ul>
      </div>
    </div>
  );
}
