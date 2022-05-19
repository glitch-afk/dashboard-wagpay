import { ReactNode, useState } from 'react';

import Header from '@/components/common/header';
import Sidebar from '@/layouts/Sidebar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-wagpay-dark font-inter">
      {props.meta}
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/*  Dashboard header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* main area */}
        <main>
          <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
            <div>{props.children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export { Main };
