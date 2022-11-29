import { Song } from 'features/songs/types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setCurrentSong } from 'features/player/playerSlice';
import { RiMoreFill } from 'react-icons/ri';
import { SongInfo } from 'features/songs/components/SongInfo';
import { QueueSong } from 'features/player';
import { MoreMenu } from 'features/songs/components/MoreMenu';
import { useRef, useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';

type SongRowProps = {
  song: Song | QueueSong;
  hidePlayCount: boolean;
  className?: string;
};

export const SongRow = ({
  song,
  hidePlayCount,
  className = '',
}: SongRowProps) => {
  const dispatch = useAppDispatch();
  const [moreMenuVisible, setMoreMenuVisible] = useState<boolean>(false);
  const menuRef = useRef(null);
  useClickOutside({
    ref: menuRef,
    onClickOutside: () => setMoreMenuVisible(false),
  });

  return (
    <div className="relative">
      <div
        className={`rounded-md flex cursor-pointer overflow-hidden text-white hover:bg-neutral-800
        ${className}`}
        onClick={() => dispatch(setCurrentSong(song))}>
        <SongInfo song={song} hidePlayCount={hidePlayCount} />
        <div
          className="flex items-center justify-end"
          onClick={(e) => {
            e.stopPropagation();
            setMoreMenuVisible(!moreMenuVisible);
          }}>
          <button className="px-2 py-2">
            <RiMoreFill size={24} />
          </button>
        </div>
      </div>
      {moreMenuVisible && (
        <MoreMenu
          ref={menuRef}
          song={song}
          setVisibility={setMoreMenuVisible}
        />
      )}
    </div>
  );
};
