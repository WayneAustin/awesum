import styled from 'styled-components';

const TitleWrap = styled.header`
  padding-top: 7em;
`

const Title = styled.h1`
  margin: 0;
  font-size: 7.5em;
`

const SubTitle = styled.span`
  font-size: 1.1em;
`

export const Header = () => {
  return (
    <TitleWrap>
      <Title>awesum</Title>
      <SubTitle>An example external infrastructure to test OAuth2 access</SubTitle>
    </TitleWrap>
  )
}