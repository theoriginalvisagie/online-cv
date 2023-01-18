function SkillsBar(props){
    const elemStylePercent = {
        color: "#FFF",
        backgroundColor: "#00b4d8",
        width: `${props.percent}%`,
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
        <div style={elemStyle}>
            <div style={elemStylePercent}>{props.percent}%</div>
        </div>
        
    );
}

export default SkillsBar;