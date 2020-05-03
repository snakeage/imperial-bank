import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as VkIconSVG } from '../../assets/vk-logo.svg';
import { ReactComponent as instagramIconSVG } from '../../assets/Instagram-logo.svg';
import { ReactComponent as FaceBookIconSVG } from '../../assets/facebook-logo.svg';
import { ReactComponent as TwitterIconSVG } from '../../assets/twitter-logo.svg';
import { ReactComponent as YoutubeIconSVG } from '../../assets/youtube-logo.svg';
import { ReactComponent as ApplePayIconSVG } from '../../assets/applepay-logo.svg';

const logoStyles = css`
  width: 30px;
  height: 30px;
  opacity: 0.4;
  margin: 5px;
`;

const ContainerMedia = css`
  margin: auto 0;
  width: 50%;
  padding: 25px;
`;

export const FooterContainer = styled.div`
  display: flex;
  min-height: 150px;
  width: 100%;
  background-color: #edf0f5;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LinkContainer = styled.div`
  ${ContainerMedia}

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Links = styled(Link)`
  color: grey;
  margin-right: 10px;
  text-decoration: underline;
`;

export const MediaContainet = styled.div`
  ${ContainerMedia}
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ImageContainerVk = styled(VkIconSVG)`
  ${logoStyles}
`;
export const ImageContainerInstagram = styled(instagramIconSVG)`
  ${logoStyles}
`;
export const ImageContainerFaceBook = styled(FaceBookIconSVG)`
  ${logoStyles}
`;
export const ImageContainerTwitter = styled(TwitterIconSVG)`
  ${logoStyles}
`;
export const ImageContainerYoutube = styled(YoutubeIconSVG)`
  ${logoStyles}
`;
export const ImageContainerApplePay = styled(ApplePayIconSVG)`
  ${logoStyles}
`;
