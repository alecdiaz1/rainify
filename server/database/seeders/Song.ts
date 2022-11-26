import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Song from 'App/Models/Song'

export default class extends BaseSeeder {
  public async run() {
    await Song.createMany([
      {
        title: 'long distance',
        song_url: 'https://nopixel-rainify.s3.amazonaws.com/songs/niko+rain+-+long+distance.mp3',
        album_art_url: 'https://i1.sndcdn.com/artworks-XcwUdSsqaZafJL5W-QCOPyA-t500x500.jpg',
      },
      {
        title: 'ICE CREAM (2 SWEET 4 ME)',
        song_url: 'https://nopixel-rainify.s3.amazonaws.com/songs/ICE_CREAM.wav',
        album_art_url:
          'https://media.discordapp.net/attachments/993354140535238687/1043887202989527061/IceCream-CoverArt-4000x4000-300-WEBCOMPRESS.jpg?width=810&height=810',
      },
      {
        title: 'SEX DRIVE',
        song_url: 'https://nopixel-rainify.s3.amazonaws.com/songs/BIMBOS+-+Sex+Drive.mp3',
        album_art_url:
          'https://cdn.discordapp.com/attachments/931466656557989908/1044555497673601135/tAih7wO.jpg',
      },
      {
        title: 'SUBMIT',
        song_url:
          'https://nopixel-rainify.s3.amazonaws.com/songs/niko+rain+x+saint+noelle+-+SUBMIT.mp3',
        album_art_url: 'https://i1.sndcdn.com/artworks-6Dmy53azzcGLDZtW-styzhA-t500x500.jpg',
      },
      {
        title: 'RATHER BE LONELY',
        song_url:
          'https://nopixel-rainify.s3.amazonaws.com/songs/Rather+Be+Lonely+-+Saint+Noelle.mp3',
        album_art_url: 'https://i1.sndcdn.com/artworks-8xX72iHqeLODTEbv-09mDDw-t500x500.jpg',
      },
    ])
  }
}
