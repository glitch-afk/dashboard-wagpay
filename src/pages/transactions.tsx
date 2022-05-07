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
      <div className="mx-auto w-full max-w-9xl px-4 py-8 font-inter sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8 sm:flex sm:items-center sm:justify-between">
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
            <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
              <span className="hidden xs:block">All</span>
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
