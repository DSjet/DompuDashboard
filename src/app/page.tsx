"use client";
import React, { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "../../utils/firebaseConfig";

import ItemList from "./components/itemList/itemList";

export default function Home() {
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

  return (
    <main>
      <ItemList />
    </main>
  );
}
