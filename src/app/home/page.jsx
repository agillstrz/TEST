import Story from "@/components/Story";
import ModalPost from "./ModalPost";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full gap-y-4">
      <Story />
      <ModalPost />
      <div className="w-[75%] p-3 bg-white rounded-lg flex flex-col gap-y-2">
        <div className="flex items-center gap-2 ">
          <img
            src={
              "https://ik.imagekit.io/oxmhan7av/137ec1da-adc6-4257-89dc-f517cee10fe1.jpg?updatedAt=1694136421471"
            }
            className="w-12 h-12 z-10 rounded-full  border-4 bg-white ck "
            alt=""
          />
          <label
            className="border flex rounded-lg  w-full h-10 px-1 items-center bg-base  overflow-hidden"
            htmlFor=""
          >
            <AiOutlineSearch size={20} />
            <input
              type="text"
              placeholder={"apa yang anda pikirkan, agilz?"}
              className=" outline-none bg-base w-full h-full px-1 "
            />
          </label>
        </div>
        <div className="border-[1px] w-full " />
        <div className="flex items-center justify-evenly font-semibold gap-x-2">
          <div className="flex items-center px-2 w-1/2 justify-center hover:bg-base py-2">
            Video Siaran Langsung
          </div>
          <div className="flex items-center w-1/2 justify-center hover:bg-base py-2">
            Foto/Video
          </div>
        </div>
      </div>
    </div>
  );
}
