import React, { useEffect, useState } from 'react';

import CommonTableItem from './commonTableItem';

function CommonTable({ tableData, tableHeaders }: any) {
  const [list, setList] = useState<{}[]>([]);

  useEffect(() => {
    setList(tableData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          {/* Table header */}
          <thead className="w-full border-y border-gray-200 bg-gray-50 font-inter text-xs font-semibold uppercase text-gray-500">
            <tr>
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.id}
                </div>
              </th>
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.name}
                </div>
              </th>
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.amount}
                </div>
              </th>
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.paidIn}
                </div>
              </th>
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.chain}
                </div>
              </th>
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.transactionStatus}
                </div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="w-full divide-y divide-gray-200 font-inter text-sm">
            {list.map((transaction: any) => {
              return (
                <CommonTableItem
                  key={transaction.id}
                  id={transaction.id}
                  name={transaction.name}
                  amount={transaction.amount}
                  paidIn={transaction.paidIn}
                  chain={transaction.chain}
                  status={transaction.status}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CommonTable;
