import Image from "next/image";

export function Whatsapp() {
  return (
    <div className="w-full">
         <Image
              className="dark:invert bg-cover md:w-[20%] w-[60%0] object-cover"
              src="/assets/whatsa11.svg"
              alt="logo"
              width={100}
              height={100}
              //   priority
            />
      {/* <div className="m-auto w-full ">
        <div className="flex md:w-[20%] w-full py-2 justify-between px-2 items-center bg-[#008069]">
          <div className="flex gap-2 items-center">
            <Image
              className="dark:invert md:w-[90px] bg-cover object-cover w-[100px]"
              src="/assets/logo.svg"
              alt="logo"
              width={100}
              height={100}
              //   priority
            />
            <div>
              <h1 className="font-bold md:text-2xl text-lg text-white">O'lo store</h1>
              <p className="text-white">En ligne</p>
            </div>
          </div>
          <Image
            className="dark:invert md:w-[20px] bg-cover object-cover w-[20px]"
            src="/assets/flettt.svg"
            alt="logo"
            width={100}
            height={100}
            //   priority
          />
        </div>
        <div className="relative">
          <Image
            className="dark:invert md:w-[20%] bg-cover md:h-[320px] h-screen object-cover absolute w-full"
            src="/assets/pagewh.svg"
            alt="logo"
            width={100}
            height={100}
            //   priority
          />
          <div className="absolute md:top-64 top-[800px] max-sm:hidden md:hidden lg:block mt-4 m-auto">
            <Image
              className="dark:invert md:w-[300px] bottom-24 left-2 bg-cover h-[200px] object-cover absolute w-full"
              src="/assets/text.svg"
              alt="logo"
              width={100}
              height={100}
              //   priority
            />
            <div className="flex items-center justify-between">
              <input className="h-10 md:w-64 w-[300px] rounded-lg left-1"></input>
              <Image
                className="dark:invert w-[40px] h-[40px] left-64 ml-1 bg-cover object-cover absolute"
                src="/assets/button.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
