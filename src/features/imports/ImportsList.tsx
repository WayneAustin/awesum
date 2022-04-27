import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectDisplayName,
  selectProduct,
} from './importsSlice';

export function ImportsList() {
  const displayName = useSelector(selectDisplayName);
  const product = useSelector(selectProduct);

  return (
    <div>
      {displayName && <div>
        Logged in as: {displayName}
      </div>}
      {product && <div>
        Subscription type: {product}
      </div>}
    </div>
  );
}