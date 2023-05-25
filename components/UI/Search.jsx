import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../UI/Title";
import Image from "next/image";
import { MdCancel } from "react-icons/md";

const Search = ({ setIsSearch }) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen z-50 after:content-[''] after:w-screen
    after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-70 grid place-content-center"
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearch(false)}>
        <div className="grid place-content-center relative w-full h-full  ">
          <div className=" bg-white border-2 p-6 rounded-2xl relative z-50 md:w-[37rem] md:h-[37rem]">
            <Title addClass="text-center text-[2.5rem]">Ara</Title>
            <input
              type="text"
              placeholder="Ara..."
              className="border w-full my-9"
            />
            <ul>
              <li className="flex justify-between items-center rounded-md p-2 hover:bg-primary transition-all">
                <div className="flex relative">
                  <Image
                    src="/images/cheescake.jpg"
                    alt="cake"
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </div>
                <span className="font-bold">Cheescake</span>
                <span className="font-bold">120TL</span>
              </li>
              <li className="flex justify-between items-center rounded-md p-2 hover:bg-primary transition-all">
                <div>
                  <Image
                    src="/images/cheescake.jpg"
                    alt="cake"
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </div>
                <span className="font-bold">Cheescake</span>
                <span className="font-bold">120TL</span>
              </li>
              <li className="flex justify-between items-center rounded-md p-2 hover:bg-primary transition-all">
                <div>
                  <Image
                    src="/images/cheescake.jpg"
                    alt="cake"
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </div>
                <span className="font-bold">Cheescake</span>
                <span className="font-bold">120TL</span>
              </li>
            </ul>
            <button
              className="absolute top-3 right-3"
              onClick={() => setIsSearch(false)}
            >
              <MdCancel size={22} className="text-primary transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
