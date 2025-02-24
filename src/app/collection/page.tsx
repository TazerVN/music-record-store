import Image from "next/image";
import background from "@/app/background.jpg";

export default function Collection() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center h-lvh w-lvw">
        <div className="-z-10 absolute top-0 left-0">
          <Image
            src={background}
            alt="gut"
            className="bg-cover bg-center bg-no-repeat h-dvh min-w-fit fixed opacity-30"
          ></Image>
        </div>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit"></div>
    </div>
  );
}
