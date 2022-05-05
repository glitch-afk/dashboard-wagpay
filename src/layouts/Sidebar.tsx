import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

type ISidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: any;
};

function Sidebar({ sidebarOpen, setSidebarOpen }: ISidebarProps) {
  const location = useRouter();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded =
    typeof window !== 'undefined' && localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState<any>(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      // @ts-ignore
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      // @ts-ignore
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 flex bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-hidden lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 flex-shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="mb-10  justify-between pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="text-gray-500 hover:text-gray-400 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Link href="/">
            <a className="block">
              <Image
                src="/favicon-32x32.png"
                width="32"
                height="32"
                alt="favicon"
              />
            </a>
          </Link>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul className="mt-3">
              {/* Overview */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname === '/' && 'bg-gray-900'
                }`}
              >
                <Link href="/">
                  <a
                    className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                      pathname === '/' && 'hover:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.25"
                          d="M20 18.8V6.63995L13.6514 2.81498L13.6514 2.81497C13.0511 2.4533 12.751 2.27247 12.4304 2.20183C12.1469 2.13935 11.8531 2.13935 11.5696 2.20183C11.249 2.27247 10.9489 2.45331 10.3486 2.81498L4 6.63998V18.8C4 19.9201 4 20.4801 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4801 20 19.9201 20 18.8Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && '!text-indigo-500'
                          }`}
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.14254 9.51447C1.42668 9.98805 2.04094 10.1416 2.51452 9.85746L12 4.16616L21.4855 9.85746C21.9591 10.1416 22.5734 9.98805 22.8575 9.51447C23.1417 9.04089 22.9881 8.42663 22.5145 8.14248L13.029 2.45118C12.3957 2.07116 11.6044 2.07116 10.971 2.45118L1.48553 8.14248C1.01195 8.42663 0.858388 9.04089 1.14254 9.51447Z"
                          className={`fill-current text-gray-600 ${
                            pathname === '/' && 'text-indigo-600'
                          }`}
                        />
                        <path
                          d="M9 16C9 14.3431 10.3431 13 12 13V13C13.6569 13 15 14.3431 15 16V22H9V16Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && 'text-indigo-200'
                          }`}
                        />
                      </svg>
                      <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        Overview
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              {/* Pages */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes('pages') && 'bg-gray-900'
                }`}
              >
                <Link href="/pages">
                  <a
                    className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('pages') && 'hover:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.25"
                          d="M3 4C3 2.34315 4.34315 1 6 1H15.7574C16.553 1 17.3161 1.31607 17.8787 1.87868L20.1213 4.12132C20.6839 4.68393 21 5.44699 21 6.24264V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && '!text-indigo-500'
                          }`}
                        />
                        <path
                          d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V12Z"
                          className={`fill-current text-gray-600 ${
                            pathname === '/' && 'text-indigo-600'
                          }`}
                        />
                        <path
                          d="M7 15C7 14.4477 7.44772 14 8 14C8.55229 14 9 14.4477 9 15V17C9 17.5523 8.55229 18 8 18C7.44772 18 7 17.5523 7 17V15Z"
                          className={`fill-current text-gray-600 ${
                            pathname === '/' && 'text-indigo-600'
                          }`}
                        />
                        <path
                          d="M16 13C15.4477 13 15 13.4477 15 14V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V14C17 13.4477 16.5523 13 16 13Z"
                          className={`fill-current text-gray-600 ${
                            pathname === '/' && 'text-indigo-600'
                          }`}
                        />
                        <path
                          d="M16.4978 1.04011C16.2256 0.993378 16 1.22387 16 1.50001V5.00001C16 5.55229 16.4477 6.00001 17 6.00001H20.5C20.7761 6.00001 21.0066 5.77437 20.9599 5.50221C20.8903 5.09715 20.7242 4.72417 20.4142 4.41422L17.5858 1.5858C17.2758 1.27585 16.9029 1.10967 16.4978 1.04011Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && 'text-indigo-200'
                          }`}
                        />
                      </svg>

                      <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        Pages
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              {/* Products */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes('products') && 'bg-gray-900'
                }`}
              >
                <Link href="/products">
                  <a
                    className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('products') && 'hover:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.25"
                          d="M3.19403 11.1644C3.09244 10.5549 3.56248 10 4.18042 10H19.8195C20.4374 10 20.9075 10.5549 20.8059 11.1644L19.4178 19.4932C19.1767 20.9398 17.9251 22 16.4586 22H7.54134C6.07483 22 4.82326 20.9398 4.58216 19.4932L3.19403 11.1644Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && '!text-indigo-500'
                          }`}
                        />
                        <path
                          d="M2 9.5C2 8.67157 2.67157 8 3.5 8H20.5C21.3284 8 22 8.67157 22 9.5V9.5C22 10.3284 21.3284 11 20.5 11H3.5C2.67157 11 2 10.3284 2 9.5V9.5Z"
                          className={`fill-current text-gray-600 ${
                            pathname === '/' && 'text-indigo-600'
                          }`}
                        />
                        <path
                          d="M10 13C9.44772 13 9 13.4477 9 14V18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18V14C11 13.4477 10.5523 13 10 13Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && 'text-indigo-200'
                          }`}
                        />
                        <path
                          d="M14 13C13.4477 13 13 13.4477 13 14V18C13 18.5523 13.4477 19 14 19C14.5523 19 15 18.5523 15 18V14C15 13.4477 14.5523 13 14 13Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && 'text-indigo-200'
                          }`}
                        />
                        <g opacity="0.25">
                          <path
                            d="M10.7071 3.70711C11.0976 3.31658 11.0976 2.68342 10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711C4.68342 9.09763 5.31658 9.09763 5.70711 8.70711L10.7071 3.70711Z"
                            className={`fill-current text-gray-400 ${
                              pathname === '/' && 'text-indigo-200'
                            }`}
                          />
                          <path
                            d="M13.2929 3.70711C12.9024 3.31658 12.9024 2.68342 13.2929 2.29289C13.6834 1.90237 14.3166 1.90237 14.7071 2.29289L19.7071 7.29289C20.0976 7.68342 20.0976 8.31658 19.7071 8.70711C19.3166 9.09763 18.6834 9.09763 18.2929 8.70711L13.2929 3.70711Z"
                            className={`fill-current text-gray-400 ${
                              pathname === '/' && 'text-indigo-200'
                            }`}
                          />
                        </g>
                      </svg>
                      <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        Products
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              {/* Subscription */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes('Subscription') && 'bg-gray-900'
                }`}
              >
                <Link href="/Subscription">
                  <a
                    className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('Subscription') && 'hover:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.25"
                          d="M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V14Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && '!text-indigo-500'
                          }`}
                        />
                        <path
                          opacity="0.25"
                          d="M2 8C2 6.89543 2.89543 6 4 6H20C21.1046 6 22 6.89543 22 8V9C22 10.1046 21.1046 11 20 11H4C2.89543 11 2 10.1046 2 9V8Z"
                          className={`fill-current text-gray-600 ${
                            pathname === '/' && 'text-indigo-600'
                          }`}
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7 5C7 6.65685 8.34315 8 10 8H11V10.5C11 10.7761 11.2239 11 11.5 11H12.5C12.7761 11 13 10.7761 13 10.5V8H14C15.6569 8 17 6.65685 17 5C17 3.34315 15.6569 2 14 2C13.2316 2 12.5308 2.28885 12 2.76389C11.4692 2.28885 10.7684 2 10 2C8.34315 2 7 3.34315 7 5ZM10.5 6C10.7761 6 11 5.77614 11 5.5V5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5C9 5.55228 9.44772 6 10 6H10.5ZM13.5 6C13.2239 6 13 5.77614 13 5.5V5C13 4.44772 13.4477 4 14 4C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6H13.5Z"
                          className={`fill-current text-gray-600 ${
                            pathname === '/' && 'text-indigo-600'
                          }`}
                        />
                        <path
                          d="M11 13.5C11 13.2239 11.2239 13 11.5 13H12.5C12.7761 13 13 13.2239 13 13.5V21.5C13 21.7761 12.7761 22 12.5 22H11.5C11.2239 22 11 21.7761 11 21.5V13.5Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && 'text-indigo-200'
                          }`}
                        />
                      </svg>
                      <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        Subscription
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              {/* Invoices */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes('Invoices') && 'bg-gray-900'
                }`}
              >
                <Link href="/Invoices">
                  <a
                    className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('Invoices') && 'hover:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 2C5.44772 2 5 2.44772 5 3V21.0657C5 21.4651 5.44507 21.7033 5.77735 21.4818L7.51714 20.3219C7.81573 20.1228 8.19808 20.099 8.51906 20.2595L10.6584 21.3292C11.5029 21.7515 12.4971 21.7515 13.3416 21.3292L15.4809 20.2595C15.8019 20.099 16.1843 20.1228 16.4829 20.3219L18.2226 21.4818C18.5549 21.7033 19 21.4651 19 21.0657V3C19 2.44772 18.5523 2 18 2H6Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && '!text-indigo-500'
                          }`}
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 8C8 7.44771 8.44771 7 9 7H11C11.5523 7 12 7.44771 12 8C12 8.55229 11.5523 9 11 9H9C8.44771 9 8 8.55229 8 8ZM14 8C14 7.44771 14.4477 7 15 7C15.5523 7 16 7.44771 16 8C16 8.55229 15.5523 9 15 9C14.4477 9 14 8.55229 14 8ZM8 12C8 11.4477 8.44771 11 9 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H9C8.44771 13 8 12.5523 8 12ZM14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12ZM8 16C8 15.4477 8.44771 15 9 15H11C11.5523 15 12 15.4477 12 16C12 16.5523 11.5523 17 11 17H9C8.44771 17 8 16.5523 8 16ZM14 16C14 15.4477 14.4477 15 15 15C15.5523 15 16 15.4477 16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16Z"
                          className={`fill-current text-gray-600 ${
                            pathname === '/' && 'text-indigo-600'
                          }`}
                        />
                        <path
                          d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3V3Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && 'text-indigo-200'
                          }`}
                        />
                      </svg>

                      <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        Invoices
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
              {/* Transaction */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes('Transaction') && 'bg-gray-900'
                }`}
              >
                <Link href="/Transaction">
                  <a
                    className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes('Transaction') && 'hover:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.25"
                          d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && '!text-indigo-500'
                          }`}
                        />
                        <path
                          d="M8 15.5C8 16.3284 7.32843 17 6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5Z"
                          className={`fill-current text-gray-600 ${
                            pathname === '/' && 'text-indigo-600'
                          }`}
                        />
                        <path
                          d="M13 15.5C13 16.3284 12.3284 17 11.5 17C10.6716 17 10 16.3284 10 15.5C10 14.6716 10.6716 14 11.5 14C12.3284 14 13 14.6716 13 15.5Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && 'text-indigo-200'
                          }`}
                        />
                        <path
                          d="M1 8H23V10H1V8Z"
                          className={`fill-current text-gray-400 ${
                            pathname === '/' && 'text-indigo-200'
                          }`}
                        />
                      </svg>

                      <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        Transaction
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="pl-3 text-xs font-semibold uppercase text-gray-500">
              <span
                className="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                More
              </span>
            </h3>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="mt-auto hidden justify-end pt-3 lg:inline-flex 2xl:hidden">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="h-6 w-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-gray-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-gray-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
