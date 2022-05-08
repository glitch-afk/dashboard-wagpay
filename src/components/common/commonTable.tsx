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
                  {tableHeaders.col1}
                </div>
              </th>
              {tableHeaders.productImage && (
                <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                  <div className="text-center font-semibold">
                    {tableHeaders.productImage}
                  </div>
                </th>
              )}
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.col2}
                </div>
              </th>
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.col3}
                </div>
              </th>
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.col4}
                </div>
              </th>
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.col5}
                </div>
              </th>
              <th className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
                <div className="text-center font-semibold">
                  {tableHeaders.col6}
                </div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="w-full divide-y divide-gray-200 font-inter text-sm">
            {list.map((transaction: any) => {
              return (
                <CommonTableItem
                  key={transaction.col1}
                  col1={transaction.col1}
                  col2={transaction.col2}
                  col3={transaction.col3}
                  col4={transaction.col4}
                  col5={transaction.col5}
                  productImage={transaction.productImage}
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
