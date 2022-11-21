import { RiArrowDownSLine } from 'react-icons/ri';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'stores/store';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setSongDetailVisible } from 'features/player/playerSlice';

export const Navbar = () => {
  const isSongDetailVisible = useAppSelector(
    (state: RootState) => state.player.isSongDetailVisible,
  );

  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-3 items-center mx-4">
      {isSongDetailVisible && (
        <RiArrowDownSLine
          size={32}
          onClick={() => dispatch(setSongDetailVisible())}
          className="cursor-pointer"
        />
      )}
      <h2 className="text-3xl text-center my-4 col-start-2 col-end-2">
        rainify
      </h2>
    </div>
  );
};