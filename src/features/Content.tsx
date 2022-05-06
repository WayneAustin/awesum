import {
  Route,
  Routes,
} from 'react-router-dom';

import { Counter } from './counter/Counter';
import { Home } from './Home';
import { ImportsList } from './imports/ImportsList';

export const Content = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/imports" element={<ImportsList />} />
      <Route path="/spotify-example" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  )
}