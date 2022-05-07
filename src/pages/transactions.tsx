import React from 'react';

import CommonTable from '@/components/common/commonTable';
import PaginationClassic from '@/components/common/PaginationClassic';
import FilterButton from '@/components/transactions/DropdownFilter';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface ItableData {
  id: number;
  name: string;
  amount: number;
  paidIn: string;
  chain: string;
  status: string;
}

interface ItableHeaders {
  id: string;
  name: string;
  amount: string;
  paidIn: string;
  chain: string;
  transactionStatus: string;
}

const tableHeaders: ItableHeaders = {
  id: 'Sr no.',
  name: 'Customer Name',
  amount: 'Amount',
  paidIn: 'Paid In',
  chain: 'Chain',
  transactionStatus: 'Transaction Status',
};

const tableData: ItableData[] = [
  {
    id: 1,
    name: 'venom',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
  {
    id: 2,
    name: 'venom',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
  {
    id: 3,
    name: 'venom',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
  {
    id: 4,
    name: 'venom',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
  {
    id: 5,
    name: 'venom',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
  {
    id: 6,
    name: 'venom',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
  {
    id: 7,
    name: 'venom',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
  {
    id: 8,
    name: 'venom',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
  {
    id: 9,
    name: 'venom',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
  {
    id: 10,
    name: 'venom',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
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
      <div className="mx-auto w-full max-w-9xl px-4 font-inter sm:px-6 lg:px-8">
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
      </div>
    </Main>
  );
}

export default Transactions;
