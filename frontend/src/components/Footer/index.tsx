import { Link } from 'react-router-dom';
import {
  Main,
  Logo,
  Picture,
  Social,
  SocialSpan,
  SocialLinks,
  SocialImg,
  ContactInfo,
  ContactInfoTitle,
  ContactInfoSpan,
  DevelopedBy,
  AvatarImg,
} from './styles';

import { gitHub, profileGithub, linkedin, developer } from '../../assets';

const Footer = () => (
  <Main>
    <Picture>
      <Logo width="276px" height="176px" src={developer} alt="Dev" />
    </Picture>
    <Social>
      <SocialSpan>Follow me on social media:</SocialSpan>
      <SocialLinks>
        <Link to="https://www.linkedin.com/in/rodrigodiasdefigueiredo/">
          <a href="!#" target="_blank" rel="noopener noreferrer">
            <SocialImg
              width="58px"
              height="58px"
              alt="Logo LinkedIn"
              srcSet={linkedin}
            />
          </a>
        </Link>
        <Link to="https://github.com/rodrigodiasf1984">
          <a href="!#" target="_blank" rel="noopener noreferrer">
            <SocialImg
              width="58px"
              height="58px"
              src={gitHub}
              alt="Logo Github"
            />
          </a>
        </Link>
      </SocialLinks>
    </Social>
    <ContactInfo>
      <ContactInfoTitle>Contact</ContactInfoTitle>
      <a
        className="pt-2"
        href="mailto:rodrigodiasf@gmail.com"
        rel="noopener noreferrer"
      >
        <ContactInfoSpan>email: rodrigodiasf@gmail.com</ContactInfoSpan>
      </a>
      <a
        className="pt-2"
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.com/"
      >
        <ContactInfoSpan>Discord: rodrigodiasf#6368</ContactInfoSpan>
      </a>
    </ContactInfo>
    <DevelopedBy>
      <ContactInfoTitle>Developed by:</ContactInfoTitle>
      <Link to="https://github.com/rodrigodiasf1984">
        <a href="!#" className="w-52" target="_blank" rel="noopener noreferrer">
          <AvatarImg
            width="58px"
            height="58px"
            src={profileGithub}
            alt="Logo Perfil GitHub"
          />
        </a>
      </Link>
      <ContactInfoSpan>Rodrigo Dias de Figueiredo</ContactInfoSpan>
    </DevelopedBy>
  </Main>
);

export default Footer;
