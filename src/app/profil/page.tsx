"use client";
import React, { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "../../../utils/firebaseConfig";
Image;

const Profil = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/masuk");
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/masuk");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div>
      {/* get image from google */}
      {user && (
        <div className="">
          <div className="h-[150px] relative">
            <div className="h-[75px] bg-primary-0"></div>
            <img
              className="rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              src={user.photoURL}
              alt={user.displayName}
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col items-center">
            <p>{user.displayName}</p>
            <p>{user.email}</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
