import React from "react";

export default function CardStory({ story }) {
  return (
    <div
      className="h-full group  w-[10rem] group cursor-pointer  overflow-hidden p-2 flex flex-col justify-between bg-cover bg-center rounded-xl relative"
      // style={{
      //   backgroundImage: `url(${story.foto})`,
      // }}
    >
      <img
        src={story.foto}
        className="absolute w-full group-hover:scale-105  transition-all duration-200 group-hover:rotate-1 h-full top-0 left-0 right-0 bottom-0    "
        alt=""
      />
      <div className="absolute w-full h-full transition-all duration-100 ease-linear bg-black/10 top-0 bottom-0 left-0 right-0 group-hover:bg-black/20"></div>
      <img
        src={story.foto}
        className="w-10 h-10 z-10 rounded-full  border-4 bg-white  "
        alt=""
      />

      <p className="font-semibold  z-10 text-white capitalize ">{story.name}</p>
    </div>
  );
}
