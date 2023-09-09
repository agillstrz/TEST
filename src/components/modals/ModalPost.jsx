"use client";
import axiosInstance from "@/configs/axiosInstance";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
export default function ModalPost() {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    name: "Muhammad Agil",
    foto: "https://ik.imagekit.io/oxmhan7av/137ec1da-adc6-4257-89dc-f517cee10fe1.jpg?updatedAt=1694136421471",
    postingan: {
      description: "aduh panas",
      foto: "https://ik.imagekit.io/oxmhan7av/137ec1da-adc6-4257-89dc-f517cee10fe1.jpg?updatedAt=1694136421471",
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/post", {
        id: uuidv4(),
        name: form.name,
        foto: form.foto,
        postingan: {
          description: form.postingan.title,
          foto: "",
        },
      })
      .then((res) => {
        router.refresh();
        setModal(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <input
        onClick={() => setModal(true)}
        type="text"
        defaultValue={""}
        placeholder={"Apa yang anda pikirkan, agilz?"}
        className=" outline-none hover:bg-base2 cursor-pointer bg-base w-full h-10 rounded-full px-2 text-lg "
      />

      {modal && (
        <div className="fixed  left-0 bottom-0 top-0 w-full bg-black/10 backdrop-blur-sm  z-[9999] flex justify-center items-center ">
          <div className="bg-white w-1/2 p-3 rounded-lg">
            <div className="border py-3 flex justify-center relative ">
              <h1 className="text-md font-bold">Buat Postingan</h1>
              <button
                onClick={() => setModal(false)}
                className="absolute right-2 bg-base rounded-full h-7 w-7 translate-y-1/2 top-0"
              >
                X
              </button>
            </div>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex gap-y-2 flex-col h-full justify-between"
            >
              <input
                type="text"
                onChange={(e) =>
                  setForm({
                    ...form,
                    postingan: {
                      ...form.postingan,
                      description: e.target.value,
                    },
                  })
                }
                placeholder="apa yang ada pikirkan"
                className="outline-none w-full p-2 h-20 border rounded-lg"
                name=""
                id=""
              />
              <button
                type="submit"
                className="bg-primary w-full rounded-md text-white py-2 font-bold"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
