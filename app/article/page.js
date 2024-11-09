import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function article() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="w-[90%] mt-5 m-auto">
              <Image
                className="dark:invert md:w-[30px] md:h-[30px] bg-cover object-cover w-[20px] h-[25px]  "
                src="/assets/flè.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
            </div>
      <div className="w-[90%] m-auto mt-2 md:mt-1 lg:mt-3 py-8 bg-[#E9F2F2] border rounded-2xl md:mb-1 lg:mb-3 mb-8 lg:pr-20 lg:pl-10  md:flex md:justify-between max-sm:justify-center max-sm:items-center md:pl-10" style={{ boxShadow: '0 0 10px 0 #3883A2' }}>
        {/* 1premier */}
        <div className="flex flex-col">
          <div className="flex flex-col relative items-center">
            <div>
              <Image
                className="dark:invert w-[230px] h-[230px] bg-cover object-cover md:w-[300px] md:h-[300px] "
                src="/assets/ordinateur.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
            </div>
            <div className="flex gap-2 md:gap-2">
              <Image
                className="dark:invert w-[40px] h-[40px] bg-cover object-cover md:w-[50px] md:h-[50px] "
                src="/assets/ordinateur.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
              <Image
                className="dark:invert w-[40px] h-[40px] bg-cover object-cover md:w-[50px] md:h-[50px] "
                src="/assets/ordi1.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
              <Image
                className="dark:invert w-[40px] h-[40px] bg-cover object-cover md:w-[50px] md:h-[50px] "
                src="/assets/ordi2.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
              <Image
                className="dark:invert w-[40px] h-[40px] bg-cover object-cover md:w-[50px] md:h-[50px] "
                src="/assets/ordi3.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
             <Image
                className="dark:invert w-[40px] h-[40px] bg-cover object-cover md:w-[50px] md:h-[50px] "
                src="/assets/ordi4.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
              <Image
                className="dark:invert w-[40px] h-[40px] bg-cover object-cover md:w-[50px] md:h-[50px] "
                src="/assets/ordi5.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
            </div>
          </div>
          {/* <div className="flex justify-between absolute top-80">
            <Image
              className="dark:invert w-[25px] h-[25px] bg-cover object-cover md:w-[40px] md:h-[40px] "
              src="/assets/butflèche.svg"
              alt="logo"
              width={100}
              height={100}
              //   priority
            />
            <Image
              className="dark:invert w-[25px] h-[25px] bg-cover object-cover md:w-[40px] md:h-[40px] "
              src="/assets/butflèche1.svg"
              alt="logo"
              width={100}
              height={100}
              //   priority
            />
          </div> */}
        </div>
        {/* deuxième */}
        <div className="flex flex-col gap-4 max-sm:m-auto border-x-2 max-sm:mt-4 border-y-2 rounded-lg px-4 py-4 md:px-1 md:pl-1 border-[#076389] ">
          <div>
            <h2 className="text-[#1B7FED] font-bold text-lg flex max-sm:mt-4 ">
              Mac Book Pro M2
            </h2>
            <p className="text-[#1B7FED] mt-4 text-xs md:text-sm">
              CARACTÉRISTIQUES PRINCIPALES :
            </p>
            <p className="text-xs md:text-sm">
              Processeur Intel Core i3-1125G4 (Quad-Core 0.9 GHz – 2 GHz /{" "}
              <br></br> 3.7 GHz T urbo – 8 Threads – Cache 8 Mo) Ecran de 23.8″
              avec <br></br> résolution Full HD (1920 x 1080) Dalle IPS :
              couleurs lumineuses <br></br> et angles de vision larges. 4 Go de
              mémoire DDR4-3200 MHz <br></br> (1x 8 Go)
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#1B7FED] font-bold md:text-base text-sm">
              250.750CFA
            </p>
            <p className="md:text-base text-sm">350.000CFA</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-6 items-center">
            <p>couleurs</p>
            <div className="flex gap-2 rounded-md md:border-x-4 md:border-y-4 py-1 px-1 md:border-[#3883A2]">
              <Image
                className="dark:invert w-[20px] h-[20px] bg-cover object-cover"
                src="/assets/point1.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
              <Image
                className="dark:invert w-[20px] h-[20px] bg-cover object-cover"
                src="/assets/point2.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
              <Image
                className="dark:invert w-[20px] h-[20px]  bg-cover object-cover"
                src="/assets/point3.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
              </div>
            </div>
            <div>
              <div>
                <div className="flex gap-1 mb-2">
                  <p className="text-sm">Prix Total :</p>
                  <p className="text-[#1B7FED] font-bold"> 250.750CFA</p>
                  <p className="flex text-start">Tax : incl.</p>
                </div>
                <div className="flex gap-3 items-center">
                 <Link href="../formulaire" className="text-white md:py-2 py-1 bg-black md:px-10 px-7 rounded-md">
                  {/* <button> */}
                    commander
                  {/* </button> */}
                  </Link>

                  <button className="text-white md:py-2 flex gap-4 py-1 items-center bg-[#3883A2] md:px-6 px-4 rounded-md">
                    commander <span><Image
                      className="dark:invert w-[18px] h-[18px] bg-cover object-cover"
                      src="/assets/wha.svg"
                      alt="logo"
                      width={100}
                      height={100}
                      //   priority
                    /></span>
                  </button>
                  <div className="flex gap-1 items-center">
                    <Image
                      className="dark:invert w-[20px] h-[20px] bg-cover object-cover"
                      src="/assets/coeur.svg"
                      alt="logo"
                      width={100}
                      height={100}
                      //   priority
                    />
                    <p>0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
