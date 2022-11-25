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
import { Link, useMatch } from 'react-router-dom';

export const Navbar = () => {
  const isSongDetailVisible = useAppSelector(
    (state: RootState) => state.player.isSongDetailVisible,
  );

  const dispatch = useAppDispatch();
  const isHomePage = useMatch('/');

  return (
    <div className="grid grid-cols-3 px-4 mb-4 items-center sticky top-0 bg-white drop-shadow w-full">
      {isSongDetailVisible && (
        <RiArrowDownSLine
          size={32}
          onClick={() => dispatch(setSongDetailVisible(false))}
          className="cursor-pointer"
        />
      )}
      {!isHomePage && !isSongDetailVisible && (
        <Link to="/" className="w-2">
          <RiArrowDropLeftLine size={48} className="-ml-4" />
        </Link>
      )}
      <Link to="/" className="my-4 col-start-2 col-end-2">
        <h2 className="text-3xl text-center">rainify</h2>
      </Link>
      <div className="flex justify-center items-center">
        <RiVolumeDownFill size={32} className="mr-2" />
        <VolumeSlider />
      </div>
    </div>
  );
};
