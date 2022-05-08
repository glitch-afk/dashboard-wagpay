import React from 'react';

import CommonTable from '@/components/common/commonTable';
import PaginationClassic from '@/components/common/PaginationClassic';
import FilterButton from '@/components/transactions/DropdownFilter';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface ItableData {
  col1: number;
  col2: string;
  col3: number;
  col4: string;
  col5: string;
}

interface ItableHeaders {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
}

const tableHeaders: ItableHeaders = {
  col1: 'Sr no.',
  col2: 'Customer Name',
  col3: 'Amount',
  col4: 'Paid In',
  col5: 'Transaction Status',
  col6: 'Details',
};

const tableData: ItableData[] = [
  {
    col1: 1,
    col2: 'venom',
    col3: 100,
    col4: 'Matic',
    col5: 'etherscan',
  },
];

function Transactions() {
  return (
    <Main
      meta={
        <Meta
          title="WagPay"
          description="A Powerful yet simple to use Dashboard to manage all your finances need"
        />
      }
    >
      {/* Page header */}
      <div className="mb-8 flex items-center justify-between">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Transactions
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
          {/* Filter button */}
          <FilterButton align="right" />
          {/* All button */}
          <button className="btn rounded bg-indigo-500 text-gray-50 hover:bg-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4h6v8h-6z"></path>
              <path d="M4 16h6v4h-6z"></path>
              <path d="M14 12h6v8h-6z"></path>
              <path d="M14 4h6v4h-6z"></path>
            </svg>
            <span className="ml-1 hidden xs:block">All</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="col-span-full rounded-sm border border-gray-200 bg-white shadow-lg">
        <CommonTable tableHeaders={tableHeaders} tableData={tableData} />
      </div>

      {/* Pagination */}
      <div className="mt-8">
        <PaginationClassic />
      </div>
    </Main>
  );
}

export default Transactions;
