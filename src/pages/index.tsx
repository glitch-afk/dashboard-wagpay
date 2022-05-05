import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Pages from './pages';

const Index = () => {
  const location = useRouter();
  const { pathname } = location;
  return (
    <Main
      meta={
        <Meta
          title="WagPay"
          description="A Powerful yet simple to use Dashboard to manage all your finances need"
        />
      }
    >
      {pathname === '/' && <h1>Wagpay dashboard 2.0</h1>}
      {pathname.includes('pages') && <Pages />}
    </Main>
  );
};

export default Index;
