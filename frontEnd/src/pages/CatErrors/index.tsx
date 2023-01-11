import { TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { AppButton } from '../../components/AppButton';
import { Header } from '../../components/Header';

import styles from './styles.module.css';

function CatErrors() {
  const [cat, setCat] = useState<string>('');
  const [catCode, setCatCode] = useState<string>('200');
  const [imgLoading, setImgLoading] = useState<boolean>(false);

  async function loadCat() {
    setImgLoading(true);

    const catImg = `https://http.cat/${catCode}.jpg`;
    setCat(catImg);
    setImgLoading(false);
  }

  useEffect(() => {
    loadCat();
  }, [cat]);

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
            <h1 className={styles.title}>CAT ERRORS</h1>
            <div className={styles.buttonContainer}>
              <TextField
                type="text"
                placeholder="Cat code"
                className={styles.searchInput}
                value={catCode}
                onChange={(event) => setCatCode(event.target.value)}
              />
              <AppButton
                sx={{ margin: '0 10px' }}
                title="New cat"
                onClick={() => {
                  loadCat();
                }}
                className={styles.button}
              />
            </div>
            <Box className={styles.catContainer}>
              {imgLoading ? (
                <Typography>Loading...</Typography>
              ) : (
                <img
                  className={styles.cat}
                  src={cat}
                  alt="cat"
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

export { CatErrors };
