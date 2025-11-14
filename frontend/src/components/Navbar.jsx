import { NavLink, useNavigate } from 'react-router';
import { useState } from 'react';

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/70 border-b border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2.5 select-none"
        >
          <span className="w-9 h-9 rounded-xl grid place-items-center font-extrabold tracking-wide text-white bg-linear-to-br from-indigo-500 to-cyan-400 ring-1 ring-white/15 shadow-lg shadow-indigo-500/35">
            YC
          </span>
          <span className="font-bold tracking-wide text-slate-100">YouthCareer</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-2">
          {isAuthenticated && (
            <>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'text-white bg-indigo-500/15 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.25)]'
                      : 'text-gray-300 hover:bg-white/8 hover:text-white'
                  }`
                }
              >
                Jobs
              </NavLink>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'text-white bg-indigo-500/15 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.25)]'
                      : 'text-gray-300 hover:bg-white/8 hover:text-white'
                  }`
                }
              >
                Resources
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'text-white bg-indigo-500/15 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.25)]'
                      : 'text-gray-300 hover:bg-white/8 hover:text-white'
                  }`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'text-white bg-indigo-500/15 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.25)]'
                      : 'text-gray-300 hover:bg-white/8 hover:text-white'
                  }`
                }
              >
                Profile
              </NavLink>
            </>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {!isAuthenticated ? (
            <>
              <button 
                className="px-3.5 py-2.5 rounded-xl font-semibold text-gray-200 border border-white/15 hover:bg-white/8 transition-all" 
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button 
                className="px-3.5 py-2.5 rounded-xl font-semibold text-white bg-linear-to-br from-indigo-500 to-cyan-400 ring-1 ring-white/15 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all" 
                onClick={() => navigate('/signup')}
              >
                Register
              </button>
            </>
          ) : (
            <>
              <div className="w-9 h-9 rounded-full grid place-items-center font-bold text-white bg-white/12 ring-1 ring-white/15">
                {(user?.firstName?.[0] || user?.email?.[0] || 'U').toUpperCase()}
              </div>
              <button 
                className="px-3.5 py-2.5 rounded-xl font-semibold text-gray-200 border border-white/15 hover:bg-white/8 transition-all" 
                onClick={() => { onLogout?.(); navigate('/login'); }}
              >
                Logout
              </button>
            </>
          )}
        </div>

        <button 
          className="md:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1 hover:bg-white/8 transition-colors" 
          aria-label="Toggle menu" 
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-0.5 bg-slate-300 rounded-full" />
          <span className="block w-5 h-0.5 bg-slate-300 rounded-full" />
          <span className="block w-5 h-0.5 bg-slate-300 rounded-full" />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-gray-900/95 border-b border-white/10 backdrop-blur-lg">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-2.5 text-left rounded-lg ${isActive ? 'text-white font-semibold' : 'text-gray-400'}`
            }
          >
            Home
          </NavLink>
          {isAuthenticated ? (
            <>
              <NavLink
                to="/jobs"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `py-2.5 text-left rounded-lg ${isActive ? 'text-white font-semibold' : 'text-gray-400'}`
                }
              >
                Jobs
              </NavLink>
              <NavLink
                to="/resources"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `py-2.5 text-left rounded-lg ${isActive ? 'text-white font-semibold' : 'text-gray-400'}`
                }
              >
                Resources
              </NavLink>
              <NavLink
                to="/dashboard"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `py-2.5 text-left rounded-lg ${isActive ? 'text-white font-semibold' : 'text-gray-400'}`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/profile"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `py-2.5 text-left rounded-lg ${isActive ? 'text-white font-semibold' : 'text-gray-400'}`
                }
              >
                Profile
              </NavLink>
              <button 
                className="px-3 py-2.5 rounded-xl font-semibold text-gray-200 border border-white/15 mt-2" 
                onClick={() => { onLogout?.(); navigate('/login'); closeMenu(); }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                className="px-3 py-2.5 rounded-xl font-semibold text-gray-200 border border-white/15 mt-2" 
                onClick={() => { navigate('/login'); closeMenu(); }}
              >
                Login
              </button>
              <button 
                className="px-3 py-2.5 rounded-xl font-semibold text-white bg-linear-to-br from-indigo-500 to-cyan-400 ring-1 ring-white/15" 
                onClick={() => { navigate('/signup'); closeMenu(); }}
              >
                Register
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
