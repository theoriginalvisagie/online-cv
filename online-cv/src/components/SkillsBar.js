import '../style/skills.css';

function SkillsBar(props){
    const elemStylePercent = {
        color: "#FFF",
        backgroundColor: "#00b4d8",
        width: `${props.data.percent}%`,
        borderRadius: "16px",
        // textAlign: "center"
    };

    const elemStyle = {
        color: "#FFF",
        backgroundColor: "#f1f1f1",
        width: "300px",
        borderRadius: "16px",
        // textAlign: "center",
        margin: "5px"
    };

    return(
        <>
            <h5 className='SkillsHeading'>{props.data.name}</h5>
            <div style={elemStyle}>
                <div style={elemStylePercent}>               
                    {props.data.percent}%
                </div>
            </div>
        </>
        
        
    );
}

export default SkillsBar;