"use client";

import { auth } from "@/firebase/config";
import { credential } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function SignUp() {
  const router = useRouter();

  const [credentials, setCredentials] = useState<credential>({
    email: "",
    password: "",
  });

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(
        credentials.email,
        credentials.password,
      );

      if (res == undefined) {
        //sign up error
      } else {
        setCredentials({ email: "", password: "" });
        router.refresh();
      }
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container m-auto flex h-screen flex-col justify-center text-white">
      <h1 className="mb-2 text-center text-4xl">Sign Up</h1>
      <div className="min-w-screen flex flex-row items-center justify-center">
        <form
          className="flex flex-col space-y-2"
          onSubmit={(e) => {
            e.preventDefault();

            handleSignUp();
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setCredentials((prev) => ({ ...prev, email: e.target.value }));
            }}
            className="h-10 w-96 rounded-sm px-2 text-black"
            placeholder="Username"
            value={credentials.email}
          ></input>
          <input
            type="text"
            onChange={(e) => {
              setCredentials((prev) => ({ ...prev, password: e.target.value }));
            }}
            className="h-10 w-96 rounded-sm px-2 text-black"
            placeholder="Password"
            value={credentials.password}
          ></input>
          <button
            className="font-arimo m-auto w-24 rounded-sm bg-white text-xl text-black"
            type="submit"
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
