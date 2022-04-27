import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getAuthorizeHref } from '../../oauthConfig';
import {
  getHashParams,
  removeHashParamsFromUrl,
} from '../../utils/hashUtils';
import styles from '../counter/Counter.module.css';
import { setUserProfileAsync } from '../spotifyExample/spotifyExampleSlice';
import {
  selectIsLoggedIn,
  selectTokenExpiryDate,
  setAccessToken,
  setLoggedIn,
  setTokenExpiryDate,
} from './authorisationSlice';

const hashParams = getHashParams();
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
removeHashParamsFromUrl();

export function Authorisation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tokenExpiryDate = useSelector(selectTokenExpiryDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token) {
      dispatch(setLoggedIn(true));
      dispatch(setAccessToken(access_token));
      dispatch(setTokenExpiryDate(Number(expires_in)));
      dispatch<any>(setUserProfileAsync(access_token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={styles.row}>
        {!isLoggedIn &&
          <button
          className={styles.button}
          aria-label="Log in using OAuth 2.0"
          onClick={() => window.open(getAuthorizeHref(), '_self')}
          >
          Log in with Spotify
          </button>}
        {isLoggedIn && <div className={styles.row}>Token expiry date: {tokenExpiryDate}</div>}
      </div>
    </div>
  );
}