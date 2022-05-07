import React from 'react';

import CommonTable from '@/components/common/commonTable';
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

const Invoices = () => {
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
        <div className="mb-8 flex items-center justify-between">
          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Invoices
            </h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
            {/* create plan button */}
            <button className="btn rounded-sm bg-indigo-500 text-white hover:bg-indigo-600">
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
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span className="ml-1 hidden xs:block">Create a Plan</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="col-span-full rounded-sm border border-gray-200 bg-white shadow-lg">
          <CommonTable tableHeaders={tableHeaders} tableData={tableData} />
        </div>
      </div>
    </Main>
  );
};

export default Invoices;
