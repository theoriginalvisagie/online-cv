import '../style/skills.css';
import { Typography } from '@mui/material';

function SkillsBar(props){
    const elemStylePercent = {
        color: "#FFF",
        backgroundColor: "#00b4d8",
        width: `${props.data.percent}%`,
        borderRadius: "16px",
        textAlign: "center"
    };

    const elemStyle = {
        color: "#FFF",
        backgroundColor: "#f1f1f1",
        width: "300px",
        borderRadius: "16px",
        textAlign: "center",
        margin: "5px"
    };

    return(
        <>
            <Typography variant='subtitle1' className='SkillsHeading' ml={1}>{props.data.name}</Typography>
            <div style={elemStyle}>
                <div style={elemStylePercent}>               
                    {props.data.percent}%
                </div>
            </div>
        </>
        
        
    );
}

export default SkillsBar;