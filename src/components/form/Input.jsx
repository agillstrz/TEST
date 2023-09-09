import { AiOutlineSearch } from "react-icons/ai";
export default function Input() {
  return (
    <label
      className="border flex rounded-lg  h-9 px-1 items-center bg-base  overflow-hidden"
      htmlFor=""
    >
      <AiOutlineSearch size={20} />
      <input
        type="text"
        placeholder="Cari di Facebook"
        className=" outline-none bg-base h-full px-1 "
      />
    </label>
  );
}
