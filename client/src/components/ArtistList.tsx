import { Link } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setSongDetailVisible } from 'features/player/playerSlice';

type ArtistListProps = {
  artists: [][];
  className?: string;
};

export const ArtistList = ({ artists, className }: ArtistListProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {Object.entries(artists).map((artist, idx) => (
        <Link
          key={artist[0]}
          to={`/profile/${artist[0]}`}
          className={`text-sm text-slate-400 hover:underline ${className}`}
          onClick={() => dispatch(setSongDetailVisible(false))}>
          <span>
            {idx !== Object.entries(artists).length - 1
              ? `${artist[1]},\u00A0`
              : artist[1]}
          </span>
        </Link>
      ))}
    </>
  );
};
