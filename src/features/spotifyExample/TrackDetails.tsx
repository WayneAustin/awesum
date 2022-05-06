import styled from 'styled-components';

const TrackListItem = styled.li`
  list-style-type: none;
`

export type SpotifyTrack = {
  name: string;
  album: any;
  artists: any[];
}

export const TrackDetails = (
  track: SpotifyTrack,
) => {
  console.log(track);
  return (
    <TrackListItem>
      {track.name} [{track.album.name} - {track.artists.map((artist) => artist.name)}]
    </TrackListItem>
  )
}