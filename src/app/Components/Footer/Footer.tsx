import Image from "next/image";

export default function Footer() {
  return (
    <div className="fixed bottom-0 h-20 w-screen bg-cor4 flex flex-row border-t-8 border-cor2  justify-center items-center">
      <div className="w-20 h-20 relative  ">
        <Image src="/extra/logo.svg" alt="" fill />
      </div>
    </div>
  );
}
