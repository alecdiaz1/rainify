import {
  RiArrowDownSLine,
  RiArrowDropLeftLine,
  RiVolumeDownFill,
} from 'react-icons/ri';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setSongDetailVisible } from 'features/player/playerSlice';
import { VolumeSlider } from 'features/player/components/VolumeSlider';
import { Link, useMatch, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const isSongDetailVisible = useAppSelector(
    (state: RootState) => state.player.isSongDetailVisible,
  );

  const dispatch = useAppDispatch();
  const isHomePage = useMatch('/');
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 px-4 mb-4 items-center sticky top-0 bg-neutral-800 drop-shadow w-full">
      {isSongDetailVisible && (
        <RiArrowDownSLine
          size={32}
          onClick={() => dispatch(setSongDetailVisible(false))}
          className="cursor-pointer fill-white"
        />
      )}
      {!isHomePage && !isSongDetailVisible && (
        <button onClick={() => navigate(-1)} className="w-2">
          <RiArrowDropLeftLine size={48} className="-ml-4 fill-white" />
        </button>
      )}
      <Link to="/" className="my-4 col-start-2 col-end-2">
        <h2 className="text-3xl text-center text-white font-bold">rainify</h2>
      </Link>
      <div className="flex justify-center items-center">
        <RiVolumeDownFill size={32} className="mr-2 fill-white" />
        <VolumeSlider />
      </div>
    </div>
  );
};
