import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="logo"
      width={300}
      height={45}
      draggable={false}
    />
  );
}
