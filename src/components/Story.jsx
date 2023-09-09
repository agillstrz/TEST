"use client";
import CardStory from "./card/CardStory";

export default function Story() {
  const stories = [
    {
      name: "agil",
      foto: "https://ik.imagekit.io/oxmhan7av/137ec1da-adc6-4257-89dc-f517cee10fe1.jpg?updatedAt=1694136421471",
      path: "/",
    },
    {
      name: "agil",
      foto: "https://ik.imagekit.io/oxmhan7av/137ec1da-adc6-4257-89dc-f517cee10fe1.jpg?updatedAt=1694136421471",
      path: "/",
    },

    {
      name: "kuze",
      foto: "https://ik.imagekit.io/oxmhan7av/news.jpg?updatedAt=1678109314497",
      path: "/",
    },
    {
      name: "ade yusuf",
      foto: "https://ik.imagekit.io/oxmhan7av/news.jpg?updatedAt=1678109314497",
      path: "/",
    },
  ];
  return (
    <div className="h-[15rem] flex gap-x-3 justify-center     ">
      {stories.map((m, index) => (
        <CardStory key={index} story={m} />
      ))}
    </div>
  );
}
