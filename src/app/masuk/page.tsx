"use client";

import { useState, useEffect } from "react";
import { auth } from "../../../utils/firebaseConfig";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";

export default function Masuk() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <main>
      <h1>Masuk</h1>
      {user ? (
        <>
          <p>Selamat datang, {user.displayName}</p>
          {/* <button onClick={signOut}>Keluar</button> */}
        </>
      ) : (
        <button onClick={signInWithGoogle}>Masuk dengan Google</button>
      )}
    </main>
  );
}
