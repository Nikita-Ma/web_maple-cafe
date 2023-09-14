"use client";

import { useEffect, useState } from "react";
import { getCookie } from "../../../utils/getCookie";
import Link from "next/link";

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
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full object-cover mr-4"
                src="https://placekitten.com/200/200"
                alt="Аватар пользователя"
              />
              <div>
                <h2 className="text-xl font-semibold">
                  {User?.user.firstName}&nbsp;{User?.user.lastName}
                </h2>
                <p className="text-gray-600">{User?.user.status}</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Заказы</h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              <p className="text-gray-700">Заказ 1</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
              <p className="text-gray-700">Заказ 2</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <p className="text-gray-700">Заказ 3</p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="min-h-screen flex items-center justify-center text-blue-500">
          <Link href={"/auth/register"}>Необходимо зарегистрироваться 👀</Link>
        </h1>
      )}
    </>
  );
}
