import styled from 'styled-components';

export const Main = styled.main`
  background: var(--gray-600);
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 809px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: auto;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Picture = styled.picture.attrs({
  rowSpan: 2,
})`
  @media (min-width: 809px) {
    padding: 10px 4px;
  }
`;

export const Logo = styled.img`
  width: 50%;
  @media (min-width: 809px) {
    width: 75%;
    margin: auto;
    padding-top: 1.25rem;
  }
`;

export const Social = styled.section`
  margin-top: 2rem;
  @media (min-width: 809px) {
    margin: 0;
  }
`;

export const SocialSpan = styled.span`
  color: var(--shape);
  font-size: 1.125rem;
  @media (min-width: 809px) {
    font-size: 1.25rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const SocialImg = styled.img`
  margin-right: 1rem;
  width: 2.75rem;
  height: 2.75rem;
`;

export const ContactInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media (min-width: 809px) {
    margin: 0;
    align-items: center;
  }
`;

export const ContactInfoTitle = styled.h2`
  color: var(--shape);
  font-size: 1.125rem;
  @media (min-width: 809px) {
    font-size: 1.25rem;
  }
`;

export const ContactInfoSpan = styled.span`
  color: var(--shape);
  font-size: 1.125rem;
  @media (min-width: 809px) {
    font-size: 1.25rem;
    padding-top: 0.5rem;
    margin-top: 0;
  }
`;

export const DevelopedBy = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 809px) {
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
`;

export const AvatarImg = styled.img`
  margin: auto;
  width: 41.666667%;
  height: 41.666667%;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 9999px;

  @media (min-width: 809px) {
    width: 25%;
    height: 25%;
    margin-top: 0;
  }
`;
