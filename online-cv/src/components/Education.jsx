import { Grid, Typography, List, ListItem } from "@mui/material";

function Education({data}){
    let eduName = data.type;
    let eduFrom = data.from;
    let eduTo = data.to;
    const eduCourses = data.courses;

    return(
        <Grid
        
        >
            <Typography >
                {eduName}
            </Typography>
            <Typography >
                {(() => {
                    if(eduTo !== "" && eduFrom !== ""){
                        return `${eduFrom} - ${eduTo}`
                    }
                })()}
            </Typography>
            <List >
                {eduCourses.map(function(courses){
                    return(
                        <ListItem 
                            key={courses.id}
                        >
                            {courses.name}
                        </ListItem>  
                    );
                    
                })}
            </List>
        </Grid>
        
    );
}

export default Education;