import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrap = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    margin: 1em;

    li {
      padding: 0 1em;
      list-style-type: none;
    }
  }
`

export const Nav = () => {
  return (
    <NavWrap>
      <ul>
        <li>
          <Link to='/imports'>Imports</Link>
        </li>
        <li>
          <Link to='/spotify-example'>Spotify example</Link>
        </li>
      </ul>
    </NavWrap>
  )
}