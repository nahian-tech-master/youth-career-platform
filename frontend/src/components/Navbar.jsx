import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/60 border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2.5 select-none"
        >
          <span className="w-9 h-9 rounded-xl grid place-items-center font-extrabold tracking-wide text-white bg-linear-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/35">
            YC
          </span>
          <span className="font-bold tracking-wide">YouthCareer</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded-xl transition-all ${
                isActive
                  ? 'text-white bg-indigo-500/15 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.25)]'
                  : 'text-gray-400 hover:bg-white/6 hover:text-gray-200'
              }`
            }
          >
            Home
          </NavLink>
          {isAuthenticated && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'text-white bg-indigo-500/15 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.25)]'
                      : 'text-gray-400 hover:bg-white/6 hover:text-gray-200'
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
                      : 'text-gray-400 hover:bg-white/6 hover:text-gray-200'
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
                className="px-3.5 py-2.5 rounded-xl font-semibold text-gray-200 border border-white/18 hover:bg-white/5 transition-all" 
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button 
                className="px-3.5 py-2.5 rounded-xl font-semibold text-white bg-linear-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all" 
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </>
          ) : (
            <>
              <div className="w-9 h-9 rounded-full grid place-items-center font-bold text-white bg-white/12">
                {user?.name?.[0]?.toUpperCase() || 'U'}
              </div>
              <button 
                className="px-3.5 py-2.5 rounded-xl font-semibold text-gray-200 border border-white/18 hover:bg-white/5 transition-all" 
                onClick={() => { logout(); navigate('/login'); }}
              >
                Logout
              </button>
            </>
          )}
        </div>

        <button 
          className="md:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1" 
          aria-label="Toggle menu" 
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-0.5 bg-slate-300 rounded-full" />
          <span className="block w-5 h-0.5 bg-slate-300 rounded-full" />
          <span className="block w-5 h-0.5 bg-slate-300 rounded-full" />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-gray-900/92 border-b border-white/8 backdrop-blur-lg">
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
                className="px-3 py-2.5 rounded-xl font-semibold text-gray-200 border border-white/18 mt-2" 
                onClick={() => { logout(); navigate('/login'); closeMenu(); }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                className="px-3 py-2.5 rounded-xl font-semibold text-gray-200 border border-white/18 mt-2" 
                onClick={() => { navigate('/login'); closeMenu(); }}
              >
                Login
              </button>
              <button 
                className="px-3 py-2.5 rounded-xl font-semibold text-white bg-linear-to-br from-indigo-500 to-cyan-400" 
                onClick={() => { navigate('/register'); closeMenu(); }}
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
