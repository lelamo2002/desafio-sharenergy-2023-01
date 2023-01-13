import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Container, Link, TextField } from '@mui/material';
import { Header } from '../../components/Header';
import axios from 'axios';
import styles from './styles.module.css';

interface ICustumer {
  email: string;
  name: string;
  phone: string;
  adress: string;
  cpf: string;
}

function randomNumbers(digits: number): number {
  return Math.floor(Math.random() * 10 ** digits);
}

function Customers() {
  function Row(props: { row: ICustumer }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    async function handleDeletar() {
      console.log('deletar');
      await axios.delete(`http://localhost:3000/users/`, { data: { email: row.email } });
      loadCustomers();
    }

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.email}</TableCell>
          <TableCell align="right">{row.phone}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="body1" gutterBottom component="div">
                  Detalhes
                </Typography>
                <Container>
                  <p>
                    <strong>Endereço: </strong>
                    {row.adress}
                  </p>
                  <p>
                    <strong>CPF: </strong>
                    {row.cpf}
                  </p>
                </Container>
                {/* del button */}
                <Link href="" className={styles.delButton} onClick={() => handleDeletar()}>
                  Deletar
                </Link>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  const [rows, setRows] = React.useState<ICustumer[]>([]);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [adress, setAdress] = React.useState('');
  const [cpf, setCpf] = React.useState('');

  async function handleAddCustomer() {
    const customer = {
      name,
      email,
      phone,
      adress,
      cpf
    };
    await axios.post('http://localhost:3000/users', customer);
    loadCustomers();
  }

  async function loadCustomers() {
    const { data } = await axios.get('http://localhost:3000/users/list');

    if (data.length === 0) {
      // feed database
      for (let i = 1; i <= 5; i++) {
        const customer = {
          email: `client${i}@email.com`,
          name: `Cliente ${i}`,
          phone: `+55 (${randomNumbers(1)}${randomNumbers(1)}) ${randomNumbers(4)}-${randomNumbers(
            4
          )}`,
          adress: `Rua ${randomNumbers(1)}, ${randomNumbers(2)} - Bairro ${randomNumbers(
            2
          )}, Cidade ${randomNumbers(2)}`,
          cpf: `${randomNumbers(3)}.${randomNumbers(3)}.${randomNumbers(3)}-${randomNumbers(2)}`
        };

        await axios.post('http://localhost:3000/users', customer);
      }
    }

    setRows(data);
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  useEffect(() => {
    console.log(rows);
  }, [rows]);

  return (
    // <div>Customers</div>
    <div>
      <Header />
      <Container className={styles.main}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Cliente</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Telefone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.email} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* button to add new customer */}
        <Container>
          <Box>
            <form className={styles.form}>
              <TextField
                id="outlined-basic"
                value={name}
                label="Nome"
                onChange={(event) => setName(event.target.value)}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                value={email}
                label="Email"
                onChange={(event) => setEmail(event.target.value)}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                value={phone}
                label="Telefone"
                onChange={(event) => setPhone(event.target.value)}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                value={adress}
                label="Endereço"
                onChange={(event) => setAdress(event.target.value)}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                value={cpf}
                label="CPF"
                onChange={(event) => setCpf(event.target.value)}
                variant="outlined"
              />
              <Button variant="contained" onClick={handleAddCustomer}>
                Adicionar cliente
              </Button>
            </form>
          </Box>
        </Container>
      </Container>
    </div>
  );
}

export { Customers };
