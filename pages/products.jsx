import Image from "next/image";
import { useState } from "react";

export default function products() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [type, setType] = useState("all");
  const [veg, setVeg] = useState("");
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-evenly my-5">
        <select
          className="cursor-pointer"
          style={{ border: "1px solid black" }}
          name="foodType"
          id="foodType"
        >
          <option value="pizza" defaultChecked>
            Pizza
          </option>
          <option value="burger">Burger</option>
          <option value="noodles">Noodles</option>
        </select>

        <select
          className="cursor-pointer"
          style={{ border: "1px solid black" }}
          name="foodType"
        >
          <option value="all" defaultChecked>
            All
          </option>
          <option value="veg">Veg🟢</option>
          <option value="Non-veg">Non-Veg🔴</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {arr.map((i) => (
          <div
            key={i}
            className="my-5 max-w-sm rounded overflow-hidden shadow-lg ml-10 bg-white hover:bg-gray-200 cursor-pointer"
          >
            <Image
              className="w-full"
              src="/img/pizza/p1.jpg"
              alt="Sunset in the mountains"
              height="1000"
              width="1000"
              style={{ objectFit: "cover" }}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Pizza</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
