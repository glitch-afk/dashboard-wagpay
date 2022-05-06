import ChartCard from '@/components/overview/chart.component';
import CustomerTable from '@/components/overview/customerTable';
import UserCard from '@/components/overview/userCard';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="WagPay"
          description="A Powerful yet simple to use Dashboard to manage all your finances need"
        />
      }
    >
      <div className="grid grid-cols-12 gap-6 font-inter">
        <ChartCard />
        <UserCard />
        <CustomerTable />
      </div>
    </Main>
  );
};

export default Index;
