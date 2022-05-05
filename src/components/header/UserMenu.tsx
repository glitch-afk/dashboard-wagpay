import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import Transition from '@/utils/Transition';

function UserMenu({ align }: any) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="group inline-flex items-center justify-center"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <div className="flex items-center truncate">
          <span className="ml-2 truncate text-sm font-medium group-hover:text-gray-800">
            Gm, v3n0m
          </span>
          <svg
            className="ml-1 h-3 w-3 shrink-0 fill-current text-gray-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="mb-1 border-b border-gray-200 px-3 pt-0.5 pb-2">
            <div className="font-medium text-gray-800">v3n0m.eth</div>
            <div className="text-xs italic text-gray-500">
              0xbqwier987y83294
            </div>
          </div>
          <ul>
            <li>
              <Link href="/settings">
                <a
                  className="flex items-center py-1 px-3 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href="/signin">
                <a
                  className="flex items-center py-1 px-3 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Sign Out
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default UserMenu;
