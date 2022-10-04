import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <h1>Veggie Page</h1>
      <Image
        src="/images/pizza.jpg"
        alt="This is Pizza"
        width={4256}
        height={2832}
        layout="responsive"
      />
    </>
  );
}
