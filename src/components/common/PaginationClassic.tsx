import React from 'react';

function PaginationClassic() {
  return (
    <div className="flex flex-col font-inter sm:flex-row sm:items-center sm:justify-between">
      <nav
        className="mb-4 sm:order-1 sm:mb-0"
        role="navigation"
        aria-label="Navigation"
      >
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <a
              className="btn cursor-not-allowed rounded-lg border-gray-200 bg-wagpay-primary text-gray-600"
              href="#0"
            >
              Previous
            </a>
          </li>
          <li className="ml-3 first:ml-0">
            <a className="btn rounded-lg bg-indigo-500 text-white" href="#0">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center text-sm text-gray-500 sm:text-left">
        Showing <span className="font-medium text-gray-600">1</span> to{' '}
        <span className="font-medium text-gray-600">10</span> of{' '}
        <span className="font-medium text-gray-600">120</span> results
      </div>
    </div>
  );
}

export default PaginationClassic;
