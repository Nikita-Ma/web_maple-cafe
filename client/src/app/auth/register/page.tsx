"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    telephone: "",
    email: "",
  });
  const router = useRouter();

  const sendData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      user.firstName &&
      user.lastName &&
      user.password.length > 5 &&
      user.telephone &&
      user.email
    ) {
      const reqData = await fetch("http://localhost:3030/api/auth/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (reqData.status === 409) {
        alert("Возможно у вас есть аккаунт. Попробуйте восстановить пароль");
      }
      if (reqData.status === 400) {
        alert("Проверьте правильность водимых данных");
      }
      if (reqData.ok) {
        alert("Все хорошо");
        const preparedData = await reqData.json();
        document.cookie = `user_data=${JSON.stringify(preparedData)}`;
        router.push("/shop");
      }
    } else {
      alert("Дополните данные");
    }
    try {
    } catch (e) {
      console.error("Error Caught", e);
    }
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Регистрация</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-medium"
            >
              Имя
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) =>
                setUser((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-medium"
            >
              Фамилия
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) =>
                setUser((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium"
            >
              Пароль
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) =>
                setUser((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="telephone"
              className="block text-gray-700 text-sm font-medium"
            >
              Телефон
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) =>
                setUser((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) =>
                setUser((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              onClick={(e) => sendData(e)}
            >
              Зарегистрироваться
            </button>
            &nbsp;
            <Link className="text-left" href="/auth/login">
              У меня есть аккаунт
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
