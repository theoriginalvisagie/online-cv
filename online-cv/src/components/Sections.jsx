import { Grid, Typography } from '@mui/material';


function Sections(props){
    const elemStyle = {
        backgroundColor: "#FFF",
        width: `${props.width}px`,
        height: "auto",
        margin: "5px",
        boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)",
        display: "inline-block"
    };

    return (
        <Grid
            item 
            xs={props.size} 
            backgroundColor={elemStyle.backgroundColor} 
            boxShadow={elemStyle.boxShadow} 
            m={0.5}
        >
            {props.children}
        </Grid>
    );
}

export default Sections;