import { Button } from "./button";
import Image from "next/image";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between items-center h-16 px-6 shadow-md bg-[#9F1239] border-b border-gray-200">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <Image
          src="/tourbuddy_logo.png"
          alt="TourBuddy Logo"
          width={80} // Adjust as per your logo size
          height={50} // Adjust as per your logo size
          className="object-contain"
        />
      </div>

      {/* Right Section: Sign In/Out Button */}
      <div className="flex space-x-2 items-center font-bold text-slate-50 ">
        {/* <Button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md inline-flex items-center"
          label={user ? "Logout" : "Login"}
        /> */}
        <span className="">{user ? `Welcome, ${user.name}` : ""}</span>
        <svg
          className="cursor-pointer"
          onClick={user ? onSignout : onSignin}
          width="20px"
          height="20px"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 1L8 1V2L2 2L2 13H8V14H1L1 1ZM10.8536 4.14645L14.1932 7.48614L10.8674 11.0891L10.1326 10.4109L12.358 8L4 8V7L12.2929 7L10.1464 4.85355L10.8536 4.14645Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </div>
  );
};
