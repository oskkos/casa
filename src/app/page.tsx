"use client";
import Image from "next/image";
import casa256png from "$/casa256.png";
import { Button } from "react-daisyui";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image src={casa256png} alt="¡Hola casa!" />
      <h1 className="flex text-6xl align-center">¡Hola casa!</h1>
      <Button>Button</Button>
    </div>
  );
}
