// import logo from './logo.svg';
import ppic from './assets/profile_pic.png'
import './App.css';
import SkillsBar from './components/SkillsBar';
import Sections from './components/Sections';
import WorkExperience from './components/WorkExp';
import Education from './components/Education';

import { Grid, Typography, List, ListItem, Checkbox } from '@mui/material';

/*-----------------ICONS-----------------*/
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import ConstructionIcon from '@mui/icons-material/Construction';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
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

  const workExperience = [
    {
      id: 1, 
      position: "Fullstack Engineer", 
      company: "Labmin.com", 
      from: "2020", 
      to: "Current", 
      description: "I help to create, maintain, update and test a Laboratory Information System that speeds up workflow within a laoratory while bring them as close as possible to a paperless environment. The majority of the software is built in PHP using OOP and MVC coding practices. A big part of my duties included to research new ways of achieving solutions to the problems handed to me as well as building entire modules from scratch including designing, setup, implementation and usage of MySQL databases, as well as setting up new servers for new clients or upgrading existing clients. I have built a complete QA module that includes trending, full auditing functionality with custom and dynamic checklists, traceability and security. I am currently managing a team of 2 junior software developers. Another part of my duties include handling client requests for bug fixes, new implantation, and error tracing as well as going to the clients to provide training and set up of their systems."
    },
    {
      id: 2, 
      position: "Photographer", 
      company: "Model Co Cape Town", 
      from: "2019", 
      to: "2020", 
      description: "I photographed models for ad campaigns and test shoots to update their portfolios.General duties included: Sourcing Models, planning of photoshoots from art boards to wardrobe and the final shoot as well as final editing of the photographs taken."
    }
  ]

  const education = [
    {
      id: 1, 
      type: "OfferZen Thrive Mentorship", 
      from: "Nov 2020", 
      to: "Feb 2021",
      courses: [ 
        {id: 1, name: "Mentee To OfferZen"}
      ]
    },
    {
      id: 2, 
      type: "Online Courses", 
      from: "", 
      to: "",
      courses: [ 
        {id: 1, name: "PHP for Beginners - Become a PHP Master - CMS Project" },
        {id: 2, name: "The Complete 2021 Web Development Bootcamp"},
        {id: 3, name: "Object Orientated PHP and MVC"},
        {id: 4, name: "Object Orientation in PHP"},
        {id: 5, name: "Learn C# Course"},
        {id: 6, name: "Data Science Career Path"}
      ]
    },
    {
      id: 3, 
      type: "FTC George", 
      from: "2017", 
      to: "2019", 
      courses: [ 
        {id: 1, name: "GRIII Flight Instructors Rating"},
        {id: 2, name: "Commercial Pilots License"}
      ]
    },
    {
      id: 4, 
      type: "Foster Aero", 
      from: "2011", 
      to: "2013", 
      courses: [
        {id: 1,name: "Private Pilots License" }
      ]
    },
    {
      id: 5, 
      type: "Hoërskool Randburg", 
      from: "2010", 
      to: "2014", 
      courses: [
        {id: 1, name: "Mathematics"},
        {id: 2, name: "AP Mathematics"},
        {id: 3,name: "Physics & Chemistry"},
        {id: 4,name: "Information Technology"},
        {id: 5, name: "Geography"},
        {id: 6,name: "Afrikaans"},
        {id: 7,name: "English"},
        {id: 8,name: "Life Orientation"},
      ]
    }
  ]
  
  return (
    <Grid container className="App" justifyContent="center" >
      {/*--LEFT SECTION--*/}
      <Sections small="12" medium="2.5">  
        <img className='Ppic' src={ppic} alt='profile'/>
        <Grid container >
          <Grid 
            item 
            xs={2} 
          >
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

          <Grid 
            item
            xs={2}
          >
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

          <Grid 
            item 
            xs={2}
          >
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
          <Grid 
            item
            xs={2}
          >
            <StackedBarChartIcon 
              className="centerMe"
              sx={{ color:'#00b4d8' }} 
              fontSize='large'  
            />
          </Grid>
          <Grid 
            item 
            xs={10} 
            className="centerMe"
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
          <Grid 
            item
            xs={2}
          >
            <ConstructionIcon 
              sx={{ color:'#00b4d8' }} 
              fontSize='large'  
              className="centerMe"
            />
          </Grid>
          <Grid  
            item 
            xs={10}
            className="centerMe"
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
                <Checkbox checked={true}/>
                {data.name}
              </ListItem>
            )
          })}
        </List>
        <hr />
        <Grid container>
          <Grid 
            item
            xs={2}
          >
            <MiscellaneousServicesIcon 
              sx={{ color:'#00b4d8' }} 
              fontSize='large'  
              className="centerMe"
            />
          </Grid>
          <Grid  
            item 
            xs={10} 
            className="centerMe"
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
      {/*----------------*/}

      {/*--MIDDEL SECTION--*/}
      <Sections small="12" medium="6">
        <Grid container>
          <Grid 
            item 
            xs={12}
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start"
            }}
          >
            <WorkHistoryIcon sx={{ color:'#00b4d8',  fontSize: 50, marginLeft: "16px"}} /> 
            
            <Typography variant='h3' ml={2}>Work Experience</Typography>
          </Grid>
        </Grid> 
       
        {workExperience.map(function(data) {
          return (
            <WorkExperience key={data.id} data={data} />
          )
        })}

        <hr />

        <Grid container>
          <Grid 
            item 
            xs={12}
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start"
            }}
          >
            <SchoolIcon  sx={{ color:'#00b4d8', fontSize: 50, marginLeft: "16px" }} />
            <Typography variant='h3' ml={2}> Education</Typography>
          </Grid>
        </Grid> 

        {education.map(function(data) {
          return (
            <Education key={data.id} data={data}/>
          )
        })}
       
      </Sections>
      {/*-----------------*/}

      {/*--RIGHT SECTION--*/}
      <Sections small="12" medium="2.5">

      </Sections>
      {/*-----------------*/}

    </Grid>

    
  );
}

export default App;
