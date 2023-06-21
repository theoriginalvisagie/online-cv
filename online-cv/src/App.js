// import logo from './logo.svg';
import ppic from './assets/profile_pic.png'
import './App.css';
import Headings from './components/Headings';
import SkillsBar from './components/SkillsBar';
import Sections from './components/Sections';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Grid, Typography } from '@mui/material';


function App() {
  const techStack = [
    {id: 1, name: "PHP", percent: '60'},
    {id: 2, name: "MySQL", percent: '60'},
    {id: 3, name: "JavaScript", percent: '45'},
    {id: 4, name: "Ajax", percent: '40'},
    {id: 5, name: "HTML", percent: '65'},
    {id: 6, name: "Angular", percent: '25'},
    {id: 7, name: "C# / .NET", percent: '20'},
    {id: 8, name: "React", percent: '35'},
    {id: 9, name: "Bootstrap", percent: '80'},

  ];
  
  return (
    <div className="App">
      <Sections width='350'>  
      <img className='Ppic' src={ppic} alt='profile'/>
      <Grid container >
        <Grid xs={2} >
          <BusinessCenterIcon sx={{ color:'#00b4d8' }} />
        </Grid>
        <Grid 
          item 
          xs={10} 
          justifyContent="start" 
          display="flex"
        >
          <Typography>Software Engineer</Typography>
        </Grid>

        <Grid xs={2}>
          <MyLocationIcon sx={{ color:'#00b4d8' }}/>
        </Grid>
        <Grid 
          item 
          xs={10} 
          justifyContent="start" 
          display="flex"
        >
          <Typography>Johannesburg, South Africa</Typography>
        </Grid>

        <Grid xs={2}>
          <AlternateEmailIcon sx={{ color:'#00b4d8' }}/>
        </Grid>
        <Grid 
          item 
          xs={10} 
          justifyContent="start" 
          display="flex"
        >
          <Typography>visagiechristiaan40@gmail.com</Typography>
        </Grid>
      </Grid>
        {techStack.map(function(data) {
          return (
            <SkillsBar key={data.id} data={data}/>
          )
        })};
      </Sections>

      <Sections width='650' >1234</Sections>
      <Sections width='350' >12312</Sections>
    </div>

    
  );
}

export default App;
