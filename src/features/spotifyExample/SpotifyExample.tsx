import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { selectAccessToken } from '../authorisation/authorisationSlice';
import styles from './SpotifyExample.module.css';
import {
  selectDisplayName,
  selectProduct,
  selectTopTracks,
  setUsersTopTracksAsync,
} from './spotifyExampleSlice';
import { TrackDetails } from './TrackDetails';

export function SpotifyExample() {
  const dispatch = useDispatch();
  const access_token = useSelector(selectAccessToken);
  const displayName = useSelector(selectDisplayName);
  const product = useSelector(selectProduct);
  const topTracks = useSelector(selectTopTracks);
  console.log('toptracks',topTracks);
  const getTopTracks = () => {
    dispatch<any>(setUsersTopTracksAsync(access_token));
  }

  return (
    <div className={styles.column}>
      {displayName && <div className={styles.row}>
        Logged in as: {displayName}
      </div>}
      {product && <div className={styles.row}>
        Subscription type: {product}
      </div>}
      <button onClick={getTopTracks}>
        Get my fave tracks
      </button>
      {topTracks.length > 0 && <div>
        <ul>
          {topTracks.map((track, key) => <TrackDetails key={key} {...track}></TrackDetails>)}
        </ul>
      </div>}
    </div>
  );
}