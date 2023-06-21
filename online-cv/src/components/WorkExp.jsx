import { Grid, Typography, Chip } from "@mui/material"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function WorkExperience(props){

    function DisplayBadge(props){
        console.log(props)
        if(props.data.data.to === "Current"){
            return(
                <Chip 
                    label={props.data.data.to}
                    sx={{ backgroundColor: '#00b4d8', color: '#FFF'}}
                />
            );
        }else{
            return (
                props.data.data.to
            );
        }
    }
    
    return(
        <>
            <Grid container>
                <Grid 
                    item
                    xs={12}
                    alignItems="center"
                    justifyContent="start" 
                    display="flex"
                >
                <Typography
                    variant="h5"
                >
                    {props.data.position} | {props.data.company}
                </Typography>
                    
                </Grid>
                <Grid 
                    item 
                    xs={12}
                    alignItems="center"
                    justifyContent="start" 
                    display="flex"
                >
                    <CalendarMonthIcon sx={{ color:'#00b4d8', fontSize: 35}}/>
                    <Typography
                        variant="h5"
                    >   
                        {props.data.from} - <DisplayBadge data={props}/>
                    </Typography>
                    
                </Grid>
            </Grid>
            <Grid container>
                <Grid 
                    item 
                    xs={12}
                    alignItems="center"
                    justifyContent="start" 
                    display="flex"
                >
                    <Typography 
                        variant="body1"
                        sx={{textAlign: "start"}}
                    >
                        {props.data.description}
                    </Typography>
                </Grid>
            </Grid>
        </>
        
    );
}

export default WorkExperience