"use client";
import { useScreenSize } from "@/components/useScreenSize";

export default function About() {
  const screenSize = useScreenSize();
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={
          "w-dvw flex justify-center items-center transition-all " +
          (screenSize === "xs" ? "h-50" : "h-dvh")
        }
      >
        <div
          className={
            "bg-transmission bg-cover bg-center bg-no-repeat min-h-fit w-dvw flex justify-center items-center bg-fixed " +
            (screenSize === "xs" ? "h-50" : "h-60")
          }
        ></div>
        <div
          className={
            "absolute flex flex-col justify-center items-center" +
            (screenSize === "xs" ? "h-50" : "h-60")
          }
        >
          <h1 className="font-extrabold underline italic text-destructive text-5xl w-dvw text-center self-center flex justify-center items-center">
            About
          </h1>
          <h1 className=" text-foreground text-5xl w-dvw text-center self-center flex justify-center items-center">
            us
          </h1>
        </div>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit col-start-2"></div>
      <div className=" flex flex-col bg-transmission p-10 w-dvw ">
        <div className="flex flex-col justify-between bg-destructive bg-[url(background.jpg)] bg-top bg-blend-multiply rounded-2xl p-5 ">
          <h1 className="text-4xl font-bold self-center m-10 text-destructive-foreground">
            About us
          </h1>
          <div className="flex flex-col items-center">
            <p className="text-sm text-destructive-foreground">
              marsvinyl@example.com
            </p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-3 items-start m-0">
          <p className="text-sm m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="bg-destructive bg-blend-color-burn h-10 w-svw bg-[url(background.jpg)] bg-top min-w-fit"></div>
    </div>
  );
}
