import CommonTable from '../common/commonTable';

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
    name: 'john',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
  {
    id: 3,
    name: 'doe',
    amount: 100,
    paidIn: 'Matic',
    chain: 'Ethereum',
    status: 'view on etherscan',
  },
];

function CustomerTable() {
  return (
    <>
      <div className="col-span-full">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          <h3 className="cursor-pointer text-sm hover:text-indigo-500 hover:underline">
            View all transactions
          </h3>
        </div>
      </div>
      <div className="col-span-full rounded-sm border border-gray-200 bg-white shadow-lg">
        <CommonTable tableHeaders={tableHeaders} tableData={tableData} />
      </div>
    </>
  );
}

export default CustomerTable;
