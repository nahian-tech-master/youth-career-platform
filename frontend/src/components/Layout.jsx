import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-gray-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 mask-[radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative z-10">
        <Navbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
