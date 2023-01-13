import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AppButton } from '../../components/AppButton';
import { Header } from '../../components/Header';

import styles from './styles.module.css';
// 'GET', 'https://random.dog/woof.json'

interface IResponse {
  url: string;
}

async function getDog() {
  // get dog url
  const { data } = await axios.get<IResponse>('https://random.dog/woof.json');
  return data.url;
}

function Dogs() {
  const [dog, setDog] = useState<string>('');
  const [imgLoading, setImgLoading] = useState<boolean>(false);

  async function loadDog() {
    setImgLoading(true);
    const dogUrl = await getDog();
    setDog(dogUrl);
    setImgLoading(false);
  }
  // loadDog();

  useEffect(() => {
    loadDog();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Container component="main" maxWidth="sm" className={styles.center}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px'
            }}
            className={styles.box}>
            <h1 className={styles.title}>RANDOM DOGS</h1>
            <div className={styles.buttonContainer}>
              <AppButton
                sx={{ margin: '0 10px' }}
                title="New dog"
                onClick={() => {
                  loadDog();
                }}
                className={styles.button}
              />
            </div>
            <Box className={styles.dogContainer}>
              {/* generates a component to a video or an image of a dog */}

              {imgLoading ? (
                <Typography>Loading...</Typography>
              ) : dog.includes('.mp4') || dog.includes('.webm') ? (
                <video
                  className={styles.dog}
                  src={dog}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  controls={false}
                />
              ) : (
                <img
                  className={styles.dog}
                  src={dog}
                  alt="dog"
                  onLoad={() => {
                    setImgLoading(false);
                  }}
                />
              )}
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}

export { Dogs };
