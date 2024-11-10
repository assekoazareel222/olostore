import Image from "next/image";
export function Ogou(){
    return (
        <div className="w-[90%] flex justify-end mt-4 mb-6">
            <Image
            className=" w-[90%] ml-52 m-auto h-[30%] "
            src="../assets/ogou.svg"
            alt="log"
            width={24}
            height={24}
          />
        </div>
    )
}