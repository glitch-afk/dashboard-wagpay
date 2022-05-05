import { ReactNode, useState } from 'react';

import Sidebar from '../layouts/Sidebar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {props.meta}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* content area */}
      <main>
        <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="py-5 text-xl">{props.children}</div>
        </div>
      </main>
    </div>
  );
};

export { Main };
