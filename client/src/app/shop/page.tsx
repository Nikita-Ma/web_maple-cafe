"use client";

import { useEffect, useState } from "react";
import { getCookie } from "../../../utils/getCookie";
import Link from "next/link";
import { Header } from "@/components/Header";

export default function Page() {
  const [User, setUser] = useState();
  useEffect(() => {
    const checkUserCookie = getCookie("user_data");
    if (!checkUserCookie) {
      setUser(undefined);
    } else {
      setUser(JSON.parse(checkUserCookie));
    }
  }, []);
  return (
    <>
      {User !== undefined ? (
        <>
          <Header />
          <div className={"flex"}>
            <div className="relative mx-auto max-w-md flex">
              <input
                className="w-full py-2 pl-10 pr-4 rounded-l-full bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500"
                type="text"
                placeholder="Поиск"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                  ></path>
                </svg>
              </div>
              <select className="px-4 py-2 rounded-r-full border border-l-0 border-gray-300 focus:outline-none focus:border-blue-500 bg-white">
                <option value="option1">Пиво</option>
                <option value="option2">Чай</option>
                <option value="option3">Хит</option>
              </select>
            </div>
            <div className={"ml-a"}>
              <div>
                <div>
                  <Link href={"/profile"}>
                    <div className="flex items-center	 px-4">
                      {/*// TODO: Create adoptive function don't change width blocks*/}
                      <span className="text-xl font-semibold text-gray-800">
                        {User.user.firstName} {User.user.lastName[0]}
                      </span>
                      <div className="rounded-full w-12 h-12 overflow-hidden border-4 border-white">
                        <img
                          className="w-full h-full object-cover"
                          src="https://placekitten.com/200/200"
                          alt="Аватар пользователя"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={"flex flex-wrap mt-10"}>
            <div className="max-w-xs  mx-5 bg-white shadow-md rounded-lg overflow-hidden w-40">
              <img
                className="w-full h-32 object-cover"
                src="https://placekitten.com/200/200"
                alt="Изображение товара"
              />

              <div className="px-2 py-2">
                <h2 className="text-sm font-semibold text-gray-800">
                  Название товара
                </h2>
                <p className="text-xs text-gray-600 mt-1">Описание товара.</p>
              </div>

              <div className="px-2 py-2">
                <div className="font-bold text-sm text-gray-800">$19.99</div>
              </div>

              <div className="px-2 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full text-xs">
                  Добавить в корзину
                </button>
              </div>
            </div>
            <div className="max-w-xs  mx-5 bg-white shadow-md rounded-lg overflow-hidden w-40">
              <img
                className="w-full h-32 object-cover"
                src="https://placekitten.com/200/200"
                alt="Изображение товара"
              />

              <div className="px-2 py-2">
                <h2 className="text-sm font-semibold text-gray-800">
                  Название товара
                </h2>
                <p className="text-xs text-gray-600 mt-1">Описание товара.</p>
              </div>

              <div className="px-2 py-2">
                <div className="font-bold text-sm text-gray-800">$19.99</div>
              </div>

              <div className="px-2 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full text-xs">
                  Добавить в корзину
                </button>
              </div>
            </div>
            <div className="max-w-xs  mx-5 bg-white shadow-md rounded-lg overflow-hidden w-40">
              <img
                className="w-full h-32 object-cover"
                src="https://placekitten.com/200/200"
                alt="Изображение товара"
              />

              <div className="px-2 py-2">
                <h2 className="text-sm font-semibold text-gray-800">
                  Название товара
                </h2>
                <p className="text-xs text-gray-600 mt-1">Описание товара.</p>
              </div>

              <div className="px-2 py-2">
                <div className="font-bold text-sm text-gray-800">$19.99</div>
              </div>

              <div className="px-2 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full text-xs">
                  Добавить в корзину
                </button>
              </div>
            </div>
            <div className="max-w-xs  mx-5 bg-white shadow-md rounded-lg overflow-hidden w-40">
              <img
                className="w-full h-32 object-cover"
                src="https://placekitten.com/200/200"
                alt="Изображение товара"
              />

              <div className="px-2 py-2">
                <h2 className="text-sm font-semibold text-gray-800">
                  Название товара
                </h2>
                <p className="text-xs text-gray-600 mt-1">Описание товара.</p>
              </div>

              <div className="px-2 py-2">
                <div className="font-bold text-sm text-gray-800">$19.99</div>
              </div>

              <div className="px-2 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full text-xs">
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1 className="min-h-screen flex items-center justify-center text-blue-500">
          <Link href={"/auth/register"}>Необходимо зарегистрироваться 👀</Link>
        </h1>
      )}
    </>
  );
}
