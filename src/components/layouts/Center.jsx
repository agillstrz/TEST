import axiosInstance from "@/configs/axiosInstance";
import Story from "../Story";
import ModalPost from "../modals/ModalPost";

async function getPostingan() {
  const res = await axiosInstance.get("/post");
  return res.data;
}

export default async function Center() {
  const data = await getPostingan();
  return (
    <div className="flex flex-col items-center w-full gap-y-4">
      <Story />
      <div className="w-[90%] p-3 bg-white rounded-lg flex flex-col gap-y-2">
        <div className="flex items-center gap-2 ">
          <img
            src={
              "https://ik.imagekit.io/oxmhan7av/137ec1da-adc6-4257-89dc-f517cee10fe1.jpg?updatedAt=1694136421471"
            }
            className="w-12 h-12 z-10 rounded-full  border-4 bg-white ck "
            alt=""
          />
          <ModalPost />
        </div>
        <div className="border-[1px] w-full " />
        <div className="flex items-center text-zinc-700  justify-evenly font-semibold gap-x-2">
          <div className="flex items-center px-2 w-1/2 justify-center hover:bg-base py-2">
            Video Siaran Langsung
          </div>
          <div className="flex items-center w-1/2 justify-center hover:bg-base py-2">
            Foto/Video
          </div>
        </div>
      </div>
      <div className="flex w-full items-center flex-col gap-y-2">
        {data.reverse().map((m, index) => (
          <div className="bg-white w-[90%] flex flex-col gap-y-2 p-3 rounded-lg overflow-hidden">
            <div className="flex gap-x-2 items-center">
              <div
                className="w-8 h-8 rounded-full border-2 bg-cover bg-center border-primary"
                style={{
                  backgroundImage: `url(${m.foto})`,
                }}
              ></div>
              <div className="">
                <h4 className="font-semibold">{m.name}</h4>
                <p className="text-sm text-zinc-500">12 jam yang lalu</p>
              </div>
            </div>
            <p className="text-md text-zinc-800 ">{m.postingan.description}</p>
            {m.postingan.foto !== "" && (
              <img
                className="w-full rounded-md"
                src="https://scontent.fcgk6-2.fna.fbcdn.net/v/t39.30808-6/375826122_687360273434752_4223853251282642111_n.jpg?stp=dst-jpg_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHtOhnFCh0eSDmVI76O5io-bsh-C8EmxAxuyH4LwSbEDLvCLzqdJP3RN_0yeXAW_ksyVEMF8GLKmDPoBTINT7KQ&_nc_ohc=zkW0k4ebiUcAX_-sPRj&_nc_ht=scontent.fcgk6-2.fna&oh=00_AfAx5agdWlR5EuIK4vThmD6QC_gkH9z53kEKKkUbE4-Tlg&oe=65012A39"
                alt=""
              />
            )}
            <div className="flex justify-between">
              <div className="flex text-zinc-500 text-md font-medium items-center gap-x-1">
                👍🏼 <span>4,3 rb</span>
              </div>
              <div className="flex gap-x-1">
                <div className="flex text-zinc-500 text-md font-medium items-center gap-x-1">
                  <span>442</span> 💬
                </div>
                <div className="flex text-zinc-500 text-md font-medium items-center gap-x-1">
                  <span>4</span> 🦈
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
