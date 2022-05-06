import React, { useEffect, useState } from 'react';

import TransactionTableItem from './transactionTableItem';

interface ITransaction {
  id: number;
  name: string;
  amount: number;
  paidIn: string;
  status: string;
  details: string;
}

function TransactionTable() {
  const customers: ITransaction[] = [
    {
      id: 1,
      name: 'venom',
      amount: 100,
      paidIn: 'Matic',
      status: 'etherscan',
      details: 'View Details',
    },
    {
      id: 2,
      name: 'venom',
      amount: 100,
      paidIn: 'Matic',
      status: 'etherscan',
      details: 'View Details',
    },
    {
      id: 3,
      name: 'venom',
      amount: 100,
      paidIn: 'Matic',
      status: 'etherscan',
      details: 'View Details',
    },
    {
      id: 4,
      name: 'venom',
      amount: 100,
      paidIn: 'Matic',
      status: 'etherscan',
      details: 'View Details',
    },
    {
      id: 5,
      name: 'venom',
      amount: 100,
      paidIn: 'Matic',
      status: 'etherscan',
      details: 'View Details',
    },
  ];

  const [list, setList] = useState<[] | ITransaction[]>([]);

  useEffect(() => {
    setList(customers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative rounded-sm border border-gray-200 bg-white font-inter shadow-lg">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800">All Transactions</h2>
      </header>
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            {/* Table header */}
            <thead className="border-y border-gray-200 bg-gray-50 font-inter text-xs font-semibold uppercase text-gray-500">
              <tr>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-center font-semibold">Sr no.</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-center font-semibold">Customer Name</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-center font-semibold">Amount</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-center font-semibold">Paid In</div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-center font-semibold">
                    Transaction status
                  </div>
                </th>
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-center font-semibold">Details</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-gray-200 font-inter text-sm">
              {list.map((transaction: ITransaction) => {
                return (
                  <TransactionTableItem
                    key={transaction.id}
                    id={transaction.id}
                    name={transaction.name}
                    amount={transaction.amount}
                    paidIn={transaction.paidIn}
                    status={transaction.status}
                    details={transaction.details}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionTable;
