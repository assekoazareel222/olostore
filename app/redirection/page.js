import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function page() {
  return (
    <div>
        <Header />
        <div className="w-full">
          <div className="w-[30%] m-auto py-1 md:py-2 rounded-lg mt-4 md:pr-6 pr-3 justify-between flex items-center">
            <Image
              className="dark:invert w-full h-full object-cover"
              src="../assets/redi.svg"
              alt="logo"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
        <Footer />
    </div>
  )
}
