import { Grid, Typography, Chip } from "@mui/material"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function WorkExperience(props){

    function DisplayBadge(props){
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
                    ml={2.5}
                    mt={2}
                    mb={0}
                >
                <Typography variant="h5">
                    {props.data.position} | {props.data.company}
                </Typography>
                    
                </Grid>
                <Grid 
                    item 
                    xs={12}
                    mt={0}
                    ml={2}
                    mb={2}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start"
                    }}
                >
                    <CalendarMonthIcon sx={{ color:'#00b4d8', fontSize: 35}}/>
                    <Typography variant="h5" ml={1}>   
                        {props.data.from} - <DisplayBadge data={props}/>
                    </Typography>
                    
                </Grid>
            </Grid>
            <Grid container>
                <Grid 
                    item 
                    xs={12}
                    m={1}
                >
                    <Typography 
                        variant="body1"
                        sx={{textAlign: "start", marginLeft: "14px"}}
                        className="positionDescrition"
                    >
                        {props.data.description}
                    </Typography>
                </Grid>
            </Grid>
        </>
        
    );
}

export default WorkExperience