export const formatArtists = (artists: object[] | undefined) => {
  return Object.values(artists || []).join(', ');
};
