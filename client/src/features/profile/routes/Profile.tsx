import { useParams } from 'react-router-dom';
import { SongList } from 'features/songs/components/SongList';
import { useQuery } from '@tanstack/react-query';
import { profileQuery } from 'features/profile/api/profileQuery';

export const Profile = () => {
  let { id } = useParams();

  const { data, isLoading } = useQuery(profileQuery(id));

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h2 className="text-xl mb-4 text-white font-bold">
        Songs by {data.artistName}
      </h2>
      <SongList songs={data.songs} />
    </>
  );
};
