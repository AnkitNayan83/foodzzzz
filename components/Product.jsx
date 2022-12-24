import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Product.module.css";

export const Product = ({ type }) => {
  return (
    <div className="mb-6">
      <button className="bg-black text-white font-bold py-2 px-8 text-2xl rounded-full">
        {type}
      </button>
      <div className="flex items-center justify-evenly my-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mr-5 bg-white hover:bg-gray-200 cursor-pointer">
          <Image
            className="w-full"
            src="/img/pizza/p1.jpg"
            alt="Sunset in the mountains"
            height="1000"
            width="1000"
            style={{ objectFit: "cover" }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mr-5 bg-white hover:bg-gray-200 cursor-pointer">
          <Image
            className="w-full"
            src="/img/pizza/p1.jpg"
            alt="Sunset in the mountains"
            height="1000"
            width="1000"
            style={{ objectFit: "cover" }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mr-5 bg-white hover:bg-gray-200 cursor-pointer">
          <Image
            className="w-full"
            src="/img/pizza/p1.jpg"
            alt="Sunset in the mountains"
            height="1000"
            width="1000"
            style={{ objectFit: "cover" }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mr-5 bg-white hover:bg-gray-200 cursor-pointer">
          <Image
            className="w-full"
            src="/img/pizza/p1.jpg"
            alt="Sunset in the mountains"
            height="1000"
            width="1000"
            style={{ objectFit: "cover" }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mr-5 bg-white hover:bg-gray-200 cursor-pointer">
          <Image
            className="w-full"
            src="/img/pizza/p1.jpg"
            alt="Sunset in the mountains"
            height="1000"
            width="1000"
            style={{ objectFit: "cover" }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
      <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full mb-3">
        View More
      </button>
      <hr
        style={{
          border: "1px solid black",
          background: "black",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};
