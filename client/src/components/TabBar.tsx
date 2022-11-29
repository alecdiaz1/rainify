import { NavLink } from 'react-router-dom';
import { RiHome2Line, RiPlayListFill } from 'react-icons/ri';

export const TabBar = () => {
  return (
    <div className="grid grid-cols-2 text-white bg-neutral-800 fixed bottom-0 w-full h-20 justify-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col justify-center items-center ${
            isActive ? 'text-white' : 'text-neutral-500'
          }`
        }>
        <RiHome2Line size={32} />
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/playlists"
        className={({ isActive }) =>
          `flex flex-col justify-center items-center ${
            isActive ? 'text-white' : 'text-neutral-500'
          }`
        }>
        <RiPlayListFill size={30} />
        <p>Playlists</p>
      </NavLink>
    </div>
  );
};
