import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/images/nextjs.png" alt="Next.js" width={200} height={200} />
      <h1>Next.js + TypeScript + Tailwind CSS</h1>
      <p>This is a Next.js + TypeScript + Tailwind CSS template.</p>
    </main>
  );
}
