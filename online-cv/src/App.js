// import logo from './logo.svg';
import ppic from './assets/profile_pic.png'
import './App.css';
import Headings from './components/Headings';
import SkillsBar from './components/SkillsBar';
import Sections from './components/Sections';

import { Grid, Typography, List, ListItem, Checkbox } from '@mui/material';

/*-----------------ICONS-----------------*/
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import ConstructionIcon from '@mui/icons-material/Construction';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
/*---------------------------------------*/


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
    {id: 9, name: "Bootstrap", percent: '80'}
  ];

  const tools = [
    {id: 1, name: "Git/GitHub"},
    {id: 2, name: "Putty"},
    {id: 3, name: "SSH"}
  ]

  const otherSkills = [
    {id: 1, name: "Photography", percent: '80'},
    {id: 2, name: "Photoshop", percent: '70'},
    {id: 3, name: "Lightroom", percent: '70'},
    {id: 4, name: "UI/UX Design", percent: '60'},
  ]
  
  return (
    <Grid container className="App" justifyContent="center" >
      <Sections size="2.5">  
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
        <hr />
        <Grid container>
          <Grid xs={2}>
            <StackedBarChartIcon 
              sx={{ color:'#00b4d8' }} 
              fontSize='large'  
              alignItems="center"
            />
          </Grid>
          <Grid  item 
            xs={10} 
            alignItems="center"
            justifyContent="start" 
            display="flex"
          >
            <Typography variant='h5'>Tech Stack</Typography>
          </Grid>
        </Grid>
          {techStack.map(function(data) {
            return (
              <SkillsBar key={data.id} data={data}/>
            )
          })}
        <hr />
        <Grid container>
          <Grid xs={2}>
            <ConstructionIcon 
              sx={{ color:'#00b4d8' }} 
              fontSize='large'  
              alignItems="center"
            />
          </Grid>
          <Grid  item 
            xs={10} 
            alignItems="center"
            justifyContent="start" 
            display="flex"
          >
            <Typography variant='h5'>Tools</Typography>
          </Grid>
        </Grid> 
        <List >
          {tools.map(function(data) {
            return (
              <ListItem 
                key={data.id} 
              >
                <Checkbox checked='checked'/>
                {data.name}
              </ListItem>
            )
          })}
        </List>
        <hr />
        <Grid container>
          <Grid xs={2}>
            <MiscellaneousServicesIcon 
              sx={{ color:'#00b4d8' }} 
              fontSize='large'  
              alignItems="center"
            />
          </Grid>
          <Grid  item 
            xs={10} 
            alignItems="center"
            justifyContent="start" 
            display="flex"
          >
            <Typography variant='h5'>Other Skills</Typography>
          </Grid>
        </Grid> 
        {otherSkills.map(function(data) {
            return (
              <SkillsBar key={data.id} data={data}/>
            )
        })}
      </Sections>

      <Sections size="6">1234</Sections>
      <Sections size="2.5">12312</Sections>
    </Grid>

    
  );
}

export default App;
