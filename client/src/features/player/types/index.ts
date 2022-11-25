import { Song } from 'features/songs';

export type QueueSong = Song & { queueId: string };
