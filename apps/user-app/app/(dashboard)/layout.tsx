// import { SidebarItem } from "../../components/SidebarItem";

// export default function Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }): React.JSX.Element {
//   return (
//     <div className="flex">
//       <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
//         <div>
//           <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
//           <SidebarItem
//             href={"/transfer"}
//             icon={<TransferIcon />}
//             title="Transfer"
//           />
//           <SidebarItem
//             href={"/transactions"}
//             icon={<TransactionsIcon />}
//             title="Transactions"
//           />
//           <SidebarItem
//             href={"/p2p"}
//             icon={<P2PTransferIcon />}
//             title="P2P Transfer"
//           />
//         </div>
//       </div>
//       {children}
//     </div>
//   );
// }

// // Icons Fetched from https://heroicons.com/
// function HomeIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke-width="1.5"
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//       />
//     </svg>
//   );
// }
// function TransferIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke-width="1.5"
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
//       />
//     </svg>
//   );
// }

// function TransactionsIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke-width="1.5"
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//       />
//     </svg>
//   );
// }

// function P2PTransferIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke-width="1.5"
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
//       />
//     </svg>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props): React.JSX.Element {
  // const scenarios = getScenarios ? JSON.parse(getScenarios) : [];

  // find current url
  const location = usePathname();
  const router = useRouter();
  // redux
  // states
  const [path, setPath] = useState<string>("");
  const [subPath, setSubPath] = useState<string>("");
  const [fullPath, setFullPath] = useState<string[]>([]);
  const [sideCollapse, setSideCollapse] = useState<string>(
    "sm:w-full md:w-1/6 lg:w-[13%]"
  );
  const [sideCollapseItem, setSideCollapseItem] = useState<string>("show");
  const [show, setShow] = useState<boolean>(false);
  const [collapseShow, setCollapseShow] = useState<string>("hidden");
  const [width, setWidth] = useState<string>(
    "sm:mt-20 md:mt-[75px] md:w-5/6 bg-gray-100 sm:w-full duration-1000 ease-in-out"
  );
  // const [sideCollapseItemPadding, setSideCollapseItemPadding] = useState("");
  // function

  const backUrl = () => {
    // navigate.push(-1)
  };
  // function

  const SidebarCollapsible = () => {
    if (sideCollapseItem === "show") {
      setSideCollapseItem("hidden");
      setSideCollapse("w-[7%] duration-500 ease-in-out");
      // AdjustWidth();
    } else {
      setSideCollapse("sm:w-full md:w-1/6 lg:w-[13%] duration-500 ease-in-out");
      setSideCollapseItem("show");
      // AdjustWidth();
    }
  };

  useEffect(() => {
    const uri = location.split("/");
    setFullPath(uri);
    setPath("/" + uri[1]);
    setSubPath("/" + uri[2]);
  }, [location]);

  return (
    <>
      <div className="flex">
        <div className={` md:block md:relative sm:absolute  ${sideCollapse}`}>
          <nav
            className={` ${sideCollapse} fixed sm:h-[5rem] md:h-full z-50  md:overflow-hidden md:flex-row md:flex-nowrap shadow-xl bg-[#F7F7F7] flex flex-wrap items-center justify-between xl:px-2  md:px-2`}
          >
            <div className="md:flex-col md:items-stretch md:min-h-screen md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto h-full">
              {/* Toggler */}
              <div className="sm:flex sm:flex-row sm:items-center">
                <button
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  type="button"
                  onClick={() => setCollapseShow("bg-white my-2 py-3 px-6")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={backUrl}
                  className="h-5 w-5 cursor-pointer text-rose-800 md:hidden sm:show"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </div>

              {/* Brand */}
              <div className="flex items-center justify-around">
                <div
                  onClick={() => router.push("/dashboard")}
                  className="flex items-end justify-center py-2"
                >
                  <button className="text-rose-800 md:block text-left text-blueGray-600 mr-0 inline-block whitespace-nowrap sm:text-xl md:text-2xl font-bold sm:pr-2 md:pr-0">
                    {sideCollapseItem === "show" ? (
                      <h2 className="font-bold transition duration-500 ease-in-out pt-2">
                        TourBuddy
                      </h2>
                    ) : (
                      // <Image
                      //   src="/tourbuddy_logo.jpg" // Path relative to the 'public' directory
                      //   alt="TourBuddy Logo"
                      //   width={50} // Desired width
                      //   height={50} // Desired height
                      //   className="bg-red" // Optional Tailwind CSS classes
                      // />
                      <h2 className="font-bold transition duration-500 ease-in-out pt-2">
                        TB
                      </h2>
                    )}
                  </button>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={SidebarCollapsible}
                  className="mt-[10px] sm:hidden md:block h-8 w-8 mx-2 cursor-pointer text-rose-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {/* Collapse */}
              <div
                className={
                  "h-[100vh] md:pt-4 sm:pt-0 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden  items-center flex-1 rounded justify-between " +
                  collapseShow
                }
              >
                <div className="md:min-w-full  md:hidden  py-4 border-b-[0.5px] border-rose-600 mb-2">
                  <div className="flex flex-wrap">
                    <div className="w-full flex justify-between items-center">
                      <button
                        onClick={() => router.push("/dashboard")}
                        className="md:block text-left md:pb-2 text-rose-800 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-xl uppercase font-bold px-0"
                      >
                        TourBuddy
                      </button>

                      <button
                        type="button"
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        onClick={() => setCollapseShow("hidden")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-col h-full">
                  {/* Navigation */}
                  <div>
                    <h6
                      className={` pl-[0.2rem] md:min-w-full text-rose-800 text-sm uppercase font-bold block pt-4 pb-2 no-underline`}
                    ></h6>
                    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                      <li className="items-center">
                        <button
                          onClick={() => router.push("/dashboard")}
                          className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-800 text-left text-gray-500 ${
                            path === "/dashboard" ? "text-rose-800" : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 9.75L12 4l9 5.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 21V11.25a1 1 0 011-1h4a1 1 0 011 1V21"
                            />
                          </svg>

                          {sideCollapseItem === "show" ? (
                            <span className="text-left">Home</span>
                          ) : (
                            ""
                          )}
                        </button>
                      </li>
                      {/* <li
                      onClick={() => setShow(!show)}
                      className="uppercase flex items-center cursor-pointer text-gray-900 font-semibold hover:text-rose-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3C7.589 3 4 4.477 4 6.25v11.5C4 19.523 7.589 21 12 21s8-1.477 8-3.25V6.25C20 4.477 16.411 3 12 3zM4 9c0 1.773 3.589 3.25 8 3.25s8-1.477 8-3.25"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 14.25c0 1.773 3.589 3.25 8 3.25s8-1.477 8-3.25"
                        />
                      </svg>

                      {sideCollapseItem === "show" ? (
                        <span className="flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500">
                          Master Data
                        </span>
                      ) : (
                        ""
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        {show ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        )}
                      </svg>
                    </li>
                    {show === true && (
                      <ul className="pl-6">
                        {" "}
                        {/* Added padding-left for indentation */}
                      {/* <li className="items-center">
                          <Link to="/business-category" replace>
                            <button
                              className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500 ${
                                path === "business-category" &&
                                subPath === undefined
                                  ? "text-rose-600"
                                  : ""
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12h6m2 4H7m12-8H5m16 8a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>

                              {sideCollapseItem === "show" ? (
                                <span className="text-left">
                                  Business Category
                                </span>
                              ) : (
                                ""
                              )}
                            </button>
                          </Link>
                        </li>
                        <li className="items-center">
                          <Link to="/category" replace>
                            <button
                              className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500  ${
                                path === "category" && subPath === undefined
                                  ? "text-rose-600"
                                  : ""
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 7a1 1 0 011-1h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V7zM3 14a1 1 0 011-1h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3z"
                                />
                              </svg>

                              {sideCollapseItem === "show" ? (
                                <span className="text-left">Category</span>
                              ) : (
                                ""
                              )}
                            </button>
                          </Link>
                        </li>
                        <li className="items-center">
                          <Link to="/sub-category" replace>
                            <button
                              className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500  ${
                                path === "sub-category" && subPath === undefined
                                  ? "text-rose-600"
                                  : ""
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4 6h16M4 12h8m-8 6h16"
                                />
                              </svg>

                              {sideCollapseItem === "show" ? (
                                <span className="text-left">Sub Category</span>
                              ) : (
                                ""
                              )}
                            </button>
                          </Link>
                        </li>
                        <li className="items-center">
                          <Link to="/invitation-coupon" replace>
                            <button
                              className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500 ${
                                path === "invitation-coupon" &&
                                subPath === undefined
                                  ? "text-rose-600"
                                  : ""
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 11V9a2 2 0 114 0v2m-4 0a2 2 0 104 0m0 0v2a2 2 0 11-4 0v-2m0 0H6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3"
                                />
                              </svg>

                              {sideCollapseItem === "show" ? (
                                <span className="text-left">
                                  Invitation Coupon
                                </span>
                              ) : (
                                ""
                              )}
                            </button>
                          </Link>
                        </li>
                        <li className="items-center">
                          <Link to="/seller-payment-plan" replace>
                            <button
                              className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500 ${
                                path === "seller-payment-plan" &&
                                subPath === undefined
                                  ? "text-rose-600"
                                  : ""
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 12h12M6 16h12M6 8h12M6 20h12M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
                                />
                              </svg>

                              {sideCollapseItem === "show" ? (
                                <span className="text-left">
                                  Seller Payment Plan
                                </span>
                              ) : (
                                ""
                              )}
                            </button>
                          </Link>
                        </li>
                        <li className="items-center">
                          <Link to="/mobile-app-version-history" replace>
                            <button
                              className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500 ${
                                path === "mobile-app-version-history" &&
                                subPath === undefined
                                  ? "text-rose-600"
                                  : ""
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 8v4l3 3M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
                                />
                              </svg>

                              {sideCollapseItem === "show" ? (
                                <span className="text-left">
                                  Mobile App Version History
                                </span>
                              ) : (
                                ""
                              )}
                            </button>
                          </Link>
                        </li>
                      </ul>
                    )} */}
                      <li className="items-center">
                        <button
                          onClick={() => router.push("/guides")}
                          className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-800 text-left text-gray-500  ${
                            path === "/guides" ? "text-rose-800" : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 14c-3.866 0-7 3.134-7 7m14 0c0-3.866-3.134-7-7-7m0-6a3 3 0 100-6 3 3 0 000 6z"
                            />
                          </svg>

                          {sideCollapseItem === "show" ? (
                            <span className="text-left">Guides</span>
                          ) : (
                            ""
                          )}
                        </button>
                      </li>
                      {/* <li className="items-center">
                        <Link to="/product" replace>
                          <button
                            className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500 ${
                              path === "product" && subPath === undefined
                                ? "text-rose-600"
                                : ""
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8h18M3 12h18M3 16h18M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"
                              />
                            </svg>

                            {sideCollapseItem === "show" ? (
                              <span className="text-left">Product</span>
                            ) : (
                              ""
                            )}
                          </button>
                        </Link>
                      </li>
                      <li className="items-center">
                        <Link to="/order" replace>
                          <button
                            className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500 ${
                              path === "order" && subPath === undefined
                                ? "text-rose-600"
                                : ""
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4a3 3 0 00-3 3v2H4v12h16V9h-5V7a3 3 0 00-3-3zM8 8h8V7H8v1zM6 12h12v2H6v-2zm0 4h12v2H6v-2z"
                              />
                            </svg>

                            {sideCollapseItem === "show" ? (
                              <span className="text-left">Order</span>
                            ) : (
                              ""
                            )}
                          </button>
                        </Link>
                      </li>
                      <li className="items-center">
                        <Link to="/transactions" replace>
                          <button
                            className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500 ${
                              path === "transactions" && subPath === undefined
                                ? "text-rose-600"
                                : ""
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 11h14M5 15h14M5 19h14M3 5h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"
                              />
                              <circle
                                cx="8"
                                cy="13"
                                r="2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <circle
                                cx="12"
                                cy="13"
                                r="2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <circle
                                cx="16"
                                cy="13"
                                r="2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>

                            {sideCollapseItem === "show" ? (
                              <span className="text-left">Transaction</span>
                            ) : (
                              ""
                            )}
                          </button>
                        </Link>
                      </li>
                      <li className="items-center">
                        <Link to="/86" replace>
                          <button
                            className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500 ${
                              path === "86" && subPath === undefined
                                ? "text-rose-600"
                                : ""
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12a3 3 0 100-6 3 3 0 000 6zM15 12a3 3 0 100-6 3 3 0 000 6zM9 12a3 3 0 100 6 3 3 0 000-6zM15 12a3 3 0 100 6 3 3 0 000-6z"
                              />
                            </svg>

                            {sideCollapseItem === "show" ? (
                              <span className="text-left">86</span>
                            ) : (
                              ""
                            )}
                          </button>
                        </Link>
                      </li>
                      <li className="items-center">
                        <Link to="/86-response" replace>
                          <button
                            className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500 ${
                              path === "86-response" && subPath === undefined
                                ? "text-rose-600"
                                : ""
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12a3 3 0 100-6 3 3 0 000 6zM15 12a3 3 0 100-6 3 3 0 000 6zM9 12a3 3 0 100 6 3 3 0 000-6zM15 12a3 3 0 100 6 3 3 0 000-6z"
                              />
                            </svg>

                            {sideCollapseItem === "show" ? (
                              <span className="text-left">86 Response</span>
                            ) : (
                              ""
                            )}
                          </button>
                        </Link>
                      </li>
                      <li className="items-center">
                        <Link to="/chats" replace>
                          <button
                            className={`flex md:text-xs lg:text-sm uppercase py-3 font-semibold hover:text-rose-600 text-left text-gray-500 ${
                              path === "chats" && subPath === undefined
                                ? "text-rose-600"
                                : ""
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h12a2 2 0 012 2z"
                              />
                            </svg>

                            {sideCollapseItem === "show" ? (
                              <span className="text-left">Chats</span>
                            ) : (
                              ""
                            )}
                          </button>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Divider */}
                  <hr className="lg:hidden md:min-w-full bg-rose-600 text-rose-600" />
                  <h6
                    className={`lg:hidden md:block pl-[0.2rem] md:min-w-full text-rose-800 text-sm uppercase font-bold block md:pt-4 sm:pt-4 pb-2 no-underline `}
                  >
                    {sideCollapseItem === "show" ? "DOCUMENTATION" : "DOC"}
                  </h6>
                  <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="items-center lg:hidden md:block">
                      <div
                        onClick={() => {}}
                        className={` flex text-sm uppercase py-3 font-bold hover:text-rose-600 text-gray-500 `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        <span className="">
                          {sideCollapseItem === "show" ? "LogOut" : "LogOut"}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div
          className={`${sideCollapseItem === "show" ? "w-[87%] " : "w-[93%]"} ease-in-out duration-500 `}
        >
          {children}
        </div>
      </div>
    </>
  );
}
