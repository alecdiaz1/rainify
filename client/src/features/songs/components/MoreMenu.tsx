import React from 'react';
import { Song } from 'features/songs/types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addToQueue } from 'features/player/playerSlice';

type MoreMenuProps = {
  song: Song;
  setVisibility: (arg0: boolean) => void;
};

export const MoreMenu = React.forwardRef<HTMLDivElement, MoreMenuProps>(
  ({ song, setVisibility }, ref) => {
    const dispatch = useAppDispatch();

    // TODO: Implement add to playlist functionality
    return (
      <div
        ref={ref}
        className="bg-neutral-700 text-white rounded w-1/4 absolute right-10 top-6 z-10">
        <ul>
          <li
            onClick={() => {
              dispatch(addToQueue(song));
              setVisibility(false);
            }}
            className="cursor-pointer border-b-2 border-b-neutral-600 px-4 py-2">
            Add to Queue
          </li>
          <li className="cursor-pointer px-4 py-2">Add to Playlist</li>
        </ul>
      </div>
    );
  },
);
