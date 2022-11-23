import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Song from 'App/Models/Song'

export default class extends BaseSeeder {
  public async run() {
    await Song.createMany([
      {
        title: 'long distance',
        artist_id: 1,
        plays: 0,
        song_url: 'https://nopixel-rainify.s3.amazonaws.com/songs/niko+rain+-+long+distance.mp3',
        album_art_url:
          'https://image.petmd.com/files/styles/863x625/public/2022-06/rat.blanket.jpg',
      },
      {
        title: 'ICE CREAM (2 SWEET 4 ME)',
        artist_id: 3,
        plays: 1,
        song_url: 'https://nopixel-rainify.s3.amazonaws.com/songs/ICE_CREAM.wav',
        album_art_url:
          'https://media.discordapp.net/attachments/993354140535238687/1043887202989527061/IceCream-CoverArt-4000x4000-300-WEBCOMPRESS.jpg?width=810&height=810',
      },
      {
        title: 'Sex Drive',
        artist_id: 4,
        plays: 2,
        song_url: 'https://nopixel-rainify.s3.amazonaws.com/songs/BIMBOS+-+Sex+Drive.mp3',
        album_art_url:
          'https://cdn.discordapp.com/attachments/931466656557989908/1044555497673601135/tAih7wO.jpg',
      },
    ])
  }
}
