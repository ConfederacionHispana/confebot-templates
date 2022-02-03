import { useSearchParams } from 'react-router-dom';
import useFitText from 'use-fit-text';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import styles from '~/styles/arrest.css';
import ArrestBackgroundImage from '~/assets/template-backgrounds/arrest.png';
import ConfeLogoImage from '~/assets/confe-logo.png';

const Container = styled.div`
  background-color: hsl(208deg 62% 92%);
  border-radius: 0.25rem;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ConfeLogo = styled.img`
  max-width: 64px;
  height: auto;
  border-radius: 0.25rem;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
`;

const UserDataContainer = styled.div`
  flex-basis: 70%;
  flex-shrink: 0;
`;

const UserAvatarContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;
  padding: 0.5rem;
`;

const UserAvatar = styled.div`
  background-image: url(${(props: { src: string }) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 100%;
  width: 200px;
  height: 200px;
`;

const UserAvatarOverlay = styled.div`
  backdrop-filter: blur(1.5px) grayscale(1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 100%;
  color: #ae0401;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pricedown';
  font-size: 48px;
  font-weight: 700;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 1);
  width: 200px;
  height: 200px;
`;

function UserDataField({ name, color, value }: { name: string, color?: string, value: string }) {
  return (
    <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
      <span style={{ color: '#2f61c2', fontSize: '30px', fontWeight: 700, marginRight: '0.75rem', textShadow: '2px 2px 2px rgba(150, 150, 150, 1)' }}>{name}:</span>
      <span style={{ color, fontSize: '28px', fontWeight: 500 }}>{value}</span>
    </div>
  );
}

function UserTag({ tag }: { tag: string }) {
  const { fontSize, ref } = useFitText({
    minFontSize: 30,
    maxFontSize: 150
  });

  return (
    <div ref={ref} style={{ backgroundColor: 'hsl(70deg 9% 87%)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', fontSize, marginTop: '2rem', paddingLeft: '5px', paddingRight: '5px', textAlign: 'center', width: 200, height: 60 }}>
      <hr />
      <span style={{ lineHeight: '24px', fontWeight: 700 }}>{tag}</span>
      <hr />
    </div>
  );
}

export default function Arrest() {
  const [searchParams] = useSearchParams();

  return (
    <>
      <Container>
        <Header>
          <div>
            <h1 style={{ color: 'hsl(238deg 93% 17%)', textShadow: '2px 2px 2px rgba(150, 150, 150, 1)' }}>Departamento de Seguridad</h1>
            <h3>Constancia de arresto</h3>
          </div>
          <ConfeLogo src={ConfeLogoImage} alt="Logo" />
        </Header>
        <hr />
        <MainContainer>
          <UserDataContainer>
            <UserDataField name="Nombre" color={`#${searchParams.get('nameColor') ?? '000'}`} value={searchParams.get('user') || 'Nombre'} />
            <UserDataField name="Paradero" value={searchParams.get('channel') ?? ''} />
            <UserDataField name="Residencia" value="Confederación Hispana" />
            <UserDataField name="Roles" value={searchParams.get('role') ?? ''} />
            <UserDataField name="Acusaciones" value={searchParams.get('reason') ?? ''} />
          </UserDataContainer>
          <UserAvatarContainer>
            <UserAvatar src={searchParams.get('avatar') ?? ''}>
              <UserAvatarOverlay>wasted</UserAvatarOverlay>
            </UserAvatar>
            <UserTag tag={searchParams.get('tag') ?? ''} />
          </UserAvatarContainer>
        </MainContainer>
        <div style={{ marginTop: '1rem', fontSize: '18px', fontWeight: 500, textAlign: 'right' }}>
          {new Date().toLocaleString('es-MX', { timeZone: 'UTC' }) + ' UTC'}
        </div>
      </Container>
      <Global
        styles={{
          body: {
            backgroundImage: `url(${ArrestBackgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontFamily: "'Open Sans', 'Helvetica Neue', sans-serif",
            paddingLeft: '2rem',
            paddingRight: '2rem'
          }
        }} />
    </>
  );
}

export function links() {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ];
}
