import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './components/title.jsx'
import data from './data/data.js';
import './App.css'
import MediaCard from './components/employeecard.jsx';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {

const [ShowInactive, setShowInactive] = useState(false);
const filteredData = ShowInactive ? data.filter((employee) => employee.onLeave) : data;
const handleToggle = () => {
  setShowInactive(event.target.checked);
  console.log(event.target.checked);
}
console.log(ShowInactive);

  return (
    <Container fixed>
        <Typography variant="h3" gutterBottom>
        Employee Cards
        </Typography>
         <Switch {...label} checked={ShowInactive} onClick={handleToggle}/>
    <MediaCard employee={filteredData} />
    </Container>
  )
}

export default App
