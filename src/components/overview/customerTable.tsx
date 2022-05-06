import React from 'react';

function CustomerTable() {
  return (
    <div className="col-span-full rounded-sm border border-gray-200 bg-white shadow-lg">
      <header className="flex justify-between border-b border-gray-100 bg-gray-900 px-5 py-4">
        <h2 className="font-semibold text-white">Recent Transactions</h2>
        <p className="cursor-pointer text-white hover:text-indigo-500 hover:underline">
          View all transactions
        </p>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto font-inter">
            {/* Table header */}
            <thead className="rounded-sm bg-gray-200 font-inter text-sm uppercase text-gray-900">
              <tr>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">Sr no.</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">Customer Name</div>
                </th>

                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">Amount</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">Paid in</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">Chain</div>
                </th>

                <th className="whitespace-nowrap p-2">
                  <div className="text-right font-semibold">
                    Transaction Status
                  </div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-gray-100 font-inter text-sm">
              {/* Row */}
              <tr>
                <td className="whitespace-nowrap">
                  <div className="text-center">
                    <div>1</div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div className="font-medium text-gray-800">v3n0m</div>
                  </div>
                </td>

                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div>100 USDC</div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">Solana</div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">Solana</div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-right font-medium text-green-500">
                    View on solscan
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div>2</div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div className="font-medium text-gray-800">v3n0m</div>
                  </div>
                </td>

                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div>100 USDC</div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">Polygon</div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">Polygon</div>
                </td>

                <td className="whitespace-nowrap p-2">
                  <div className="text-right font-medium text-green-500">
                    View on etherscan
                  </div>
                </td>
              </tr>

              {/* Row */}
              <tr>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div>3</div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div className="font-medium text-gray-800">v3n0m</div>
                  </div>
                </td>

                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div>100 USDC</div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">Ethereum</div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">Ethereum</div>
                </td>

                <td className="whitespace-nowrap p-2">
                  <div className="text-right font-medium text-green-500">
                    View on etherscan
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div>4</div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div className="font-medium text-gray-800">v3n0m</div>
                  </div>
                </td>

                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div>100 USDC</div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">Polygon</div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">Solana</div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-right font-medium text-green-500">
                    View on solscan
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div>4</div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div className="font-medium text-gray-800">v3n0m</div>
                  </div>
                </td>

                <td className="whitespace-nowrap p-2">
                  <div className="text-center">
                    <div>100 USDC</div>
                  </div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">Polygon</div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-center">Solana</div>
                </td>
                <td className="whitespace-nowrap p-2">
                  <div className="text-right font-medium text-green-500">
                    View on solscan
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerTable;
