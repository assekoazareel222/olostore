import Image from "next/image";

export function Footer() {
  return (
    <div className="w-full bg-[#3883A2]">
      <footer className=" w-[90%] m-auto flex justify-between pt-3 pb-4">
        <section  className="w-full m-auto max-sm:hidden pt-6 pb-6 flex justify-between pr-5">
          <div className="md:flex md:flex-col max-sm:hidden">
            <p className="font-bold md:text-lg text-base text-white">
              Exclusive
            </p>
            <p className="md:text-base max-sm:mt-2 text-sm text-white">
              Subscribe
            </p>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="email"
                className="md:pl-4 pl-1 md:pr-4 mt-2 md:py-3 bg-transparent border-x-[3px] border-y-[3px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Image
                src="../assets/flèche.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className="absolute md:left-[180px] left-[120px] md:w-8 h-3 w-3 md:h-8 text-gray-400"
              />
            </div>
          </div>
          <div className="gap-4 flex flex-col">
            <p className="font-bold md:text-lg text-base text-white">Support</p>
            <p className="md:text-base text-sm text-white">
              Libreville , ancienne <br></br> sobraga
            </p>
            <p className="md:text-base text-sm text-white">
              ogouelabs@gmail.com
            </p>
            <p className="md:text-base text-sm text-white">+241 074 04 04 04</p>
          </div>
          <div>
            {/* setion3 */}
            <div className="gap-4 md:flex md:flex-col">
              <p className="font-bold md:text-lg text-base text-white">
                Quick Link
              </p>
              <p className="md:text-base text-sm text-white">
                politique de confidentialité
              </p>
              <p className="md:text-base text-sm text-white">FAQ</p>
              <p className="md:text-base text-sm text-white">+Contact</p>
            </div>
          </div>
          <div className="">
            <div className="flex md:gap-5 gap-3">
              <Image
                src="../assets/fac.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className=""
              />
              <Image
                src="../assets/twit.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className=""
              />
              <Image
                src="../assets/insta.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className=""
              />
              <Image
                src="../assets/in.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className=""
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Image
                src="../assets/logo.svg"
                alt="logo"
                width={22}
                height={22}
                className="w-20 md:w-40"
              />
              <Image
                src="../assets/wha.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
          </div>
        </section>
        {/* 1ème */}
        <div className="gap-6 flex flex-col md:hidden">
          {/* setion1 */}
          <div className="gap-2 flex flex-col">
            <p className="font-bold md:text-lg text-base text-white">
              Exclusive
            </p>
            <p className="md:text-base text-sm text-white">
              Subscribe
            </p>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="email"
                className="md:pl-4 pl-1 md:pr-4 mt-2 max-sm:w-[60%] md:py-3 bg-transparent border-x-[3px] border-y-[3px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Image
                src="../assets/flèche.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className="absolute md:left-[180px] left-[80px] m-auto md:w-8 h-3 w-3 md:h-8 text-gray-400"
              />
            </div>
          </div>
          {/* setion2 */}
          <div className="gap-2 flex flex-col md:hidden">
            <p className="font-bold md:text-lg text-base text-white">Support</p>
            <p className="md:text-base text-sm text-white">
              Libreville , ancienne <br></br> sobraga
            </p>
            <p className="md:text-base text-sm text-white">
              ogouelabs@gmail.com
            </p>
            <p className="md:text-base text-sm text-white">+241 074 04 04 04</p>
          </div>
        </div>
        {/* 2ème */}
        <div className="gap-6 md:hidden">
          <div>
            {/* setion3 */}
            <div className="gap-2 flex flex-col">
              <p className="font-bold md:text-lg text-base text-white">
                Quick Link
              </p>
              <p className="md:text-base text-sm text-white">
                politique de confidentialité
              </p>
              <p className="md:text-base text-sm text-white">FAQ</p>
              <p className="md:text-base text-sm text-white">+Contact</p>
            </div>
          </div>
          <div className="md:hidden">
            <div className="flex md:gap-5 mt-2 gap-3">
              <Image
                src="../assets/fac.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className=""
              />
              <Image
                src="../assets/twit.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className=""
              />
              <Image
                src="../assets/insta.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className=""
              />
              <Image
                src="../assets/in.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className=""
              />
            </div>
            <div className="flex flex-col md:hidden gap-1 items-center">
              <Image
                src="../assets/logo.svg"
                alt="logo"
                width={22}
                height={22}
                className="w-20 md:w-40"
              />
              <Image
                src="../assets/wha.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
