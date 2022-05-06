import React from 'react';

import PaginationClassic from '@/components/common/PaginationClassic';
import FilterButton from '@/components/transactions/DropdownFilter';
import TransactionTable from '@/components/transactions/transactionTable';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

function Customers() {
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
        <TransactionTable />

        {/* Pagination */}
        <div className="mt-8">
          <PaginationClassic />
        </div>
      </div>
    </Main>
  );
}

export default Customers;
