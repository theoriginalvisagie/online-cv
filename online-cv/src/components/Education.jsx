import { Grid, Typography, List, ListItem, Divider } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Education({data}){
    let eduName = data.type;
    let eduFrom = data.from;
    let eduTo = data.to;
    const eduCourses = data.courses;

    return(
        <Grid
        
        >
            <Typography 
                ml={2.5} 
                mt={2} 
                variant="h5"
            >
                {eduName}
            </Typography>
            <Typography 
                ml={2.5} 
                variant="h6"
            >
                {(() => {
                    if(eduTo !== "" && eduFrom !== ""){
                        return `${eduFrom} - ${eduTo}`
                    }
                })()}
            </Typography>
            <List
                sx={{
                    marginLeft: "15px"
                }}
            >
                {eduCourses.map(function(courses){
                    return(
                        <Grid
                            key={`${courses.id}_grid`}
                            sx={{
                                display: "flex",
                                marginLeft: "16px"
                            }}
                        >
                            <ArrowForwardIcon />
                            <ListItem 
                                key={courses.id} 
                                dense
                            >
                                {courses.name}
                            </ListItem> 
                        </Grid>
                         
                    );
                    
                })}
            </List>
            <Divider variant="middle" />
        </Grid>
        
        
    );
}

export default Education;