import React from 'react';
import { useSelector } from 'react-redux';

import styles from './SpotifyExample.module.css';
import {
  selectDisplayName,
  selectProduct,
} from './spotifyExampleSlice';

export function SpotifyExample() {
  const displayName = useSelector(selectDisplayName);
  const product = useSelector(selectProduct);

  return (
    <div className={styles.column}>
      {displayName && <div className={styles.row}>
        Logged in as: {displayName}
      </div>}
      {product && <div className={styles.row}>
        Subscription type: {product}
      </div>}
    </div>
  );
}