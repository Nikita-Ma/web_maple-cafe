"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCookie } from "../../../../utils/getCookie";

export default function Page() {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const router = useRouter();

  useEffect(() => {
    const verifyUserToken = async () => {
      const fetchToken = await fetch("http://localhost:3030/api/auth/verify", {
        method: "POST",
        body: checkUserCookie,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!fetchToken.ok) {
        document.cookie =
          "user_data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/*;";
      }
      if (fetchToken.ok) {
        router.push("/shop");
      }
    };

    const checkUserCookie = getCookie("user_data");
    if (checkUserCookie !== null) {
      const userData = JSON.parse(checkUserCookie);
      verifyUserToken();
    }
  }, []);

  const sendData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(user.password.length > 5 && user.email);
    if (user.password.length > 5 && user.email) {
      const reqData = await fetch("http://localhost:3030/api/auth/login", {
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
        <h2 className="text-2xl font-semibold mb-4">Авторизация</h2>
        <form>
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
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              onClick={(e) => sendData(e)}
            >
              Войти
            </button>
            &nbsp;
            <Link className="text-left" href="/auth/register">
              У меня нет аккаунта
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
