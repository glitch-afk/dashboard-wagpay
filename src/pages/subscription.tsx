import CommonTable from '@/components/common/commonTable';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface ItableData {
  col1: number;
  col2: string;
  col3: number;
  col4: number;
  col5: number;
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
  col2: 'Plan Name',
  col3: 'Price',
  col4: 'Revenue',
  col5: 'Subscribers',
  col6: 'Details',
};

const tableData: ItableData[] = [
  {
    col1: 1,
    col2: 'venom',
    col3: 100,
    col4: 2000,
    col5: 300,
  },
];

const Subscription = () => {
  return (
    <Main
      meta={
        <Meta
          title="WagPay"
          description="A Powerful yet simple to use Dashboard to manage all your finances need"
        />
      }
    >
      {/* Page header */}
      <div className="mb-8 flex items-center justify-between">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-white md:text-3xl">
            Transactions
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
          {/* Plan button */}
          <button className="btn rounded-lg bg-indigo-500 text-gray-50 hover:bg-indigo-600">
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
      <div className="col-span-full rounded-lg shadow-lg">
        <CommonTable tableHeaders={tableHeaders} tableData={tableData} />
      </div>
    </Main>
  );
};

export default Subscription;
