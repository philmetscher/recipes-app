import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <h1>Dessert Page</h1>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="This is Cake"
        width={2400}
        height={1600}
        layout="responsive"
      />
    </>
  );
}
