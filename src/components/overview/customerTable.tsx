import CommonTable from '../common/commonTable';

interface ItableData {
  col1: number;
  col2: string;
  col3: number;
  col4: string;
  col5: string;
  col6?: string;
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
  col5: 'Chain',
  col6: 'Transaction Status',
};

const tableData: ItableData[] = [
  {
    col1: 1,
    col2: 'venom',
    col3: 100,
    col4: 'Matic',
    col5: 'Ethereum',
    col6: 'view on etherscan',
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
