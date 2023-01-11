import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/system';
import axios from 'axios';
import styles from './styles.module.css';
import { AppButton } from '../../components/AppButton';
import { Header } from '../../components/Header';
import { TextField } from '@mui/material';

interface IResponse {
  results: {
    name: {
      first: string;
      last: string;
    };
    login: {
      username: string;
    };
    dob: {
      age: number;
    };
    email: string;
    picture: {
      medium: string;
    };
  }[];
  info: {
    results: number;
    page: number;
  };
}

async function getUsers(): Promise<IResponse> {
  const { data } = await axios.get<IResponse>(
    // `https://randomuser.me/api/?page=${page}&results=9&seed=sharenergy`
    `https://randomuser.me/api/?results=90`
  );
  return data;
}

function RandomUsers() {
  const [users, setUsers] = useState<IResponse['results']>([]);
  const [allUsers, setAllUsers] = useState<IResponse['results']>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadUsers() {
      const response = await getUsers();
      setAllUsers(response.results);
      setUsers(response.results.slice(0, 9));
    }
    loadUsers();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setUsers(allUsers.slice((page - 1) * 9, page * 9));
    } else {
      const results = allUsers.filter(
        (user) =>
          user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.login.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPage(1); // fix the bug
      setUsers(results.slice((page - 1) * 9, page * 9));
    }
  }, [searchTerm, page]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Container component="main" maxWidth="xs" className={styles.center}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px'
            }}
            className={styles.box}>
            <h1 className={styles.title}>Random Users</h1>
            <TextField
              type="text"
              placeholder="Search for name, username or email"
              className={styles.searchInput}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <ul className={styles.lista}>
              {users.map((user) => (
                <li key={user.email}>
                  <div>
                    <img
                      src={user.picture.medium}
                      alt={`${user.name.first} ${user.name.last}`}
                      className={styles.pfp}
                    />
                  </div>
                  <div>
                    <p>
                      <strong>Name: {` `}</strong>
                      {user.name.first} {user.name.last}
                    </p>
                    <p>
                      <strong>Age: {` `}</strong> {user.dob.age}
                    </p>
                    <p>
                      <strong>Email: {` `}</strong> {user.email}{' '}
                    </p>
                    <p>
                      <strong>Username: {` `}</strong> {user.login.username}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Box>
        </Container>
        <div className={styles.buttonContainer}>
          <AppButton
            sx={{ margin: '0 10px' }}
            title="Previous page"
            onClick={() => setPage((prevState) => (prevState < 2 ? 1 : prevState - 1))}
            className={styles.button}
          />
          <p className={styles.page}>{` < ${page} > `}</p>
          <AppButton
            sx={{ margin: '0 10px' }}
            title="Next page"
            onClick={() => setPage((prevState) => prevState + 1)}
            className={styles.button}
          />
        </div>
      </div>
    </>
  );
}

export { RandomUsers };
