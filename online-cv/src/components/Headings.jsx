function Headings(props){

    const styleSpan = {};
    if(props.end === "Current"){
        styleSpan.height = "24px";
        styleSpan.width = "55px";
        styleSpan.borderRadius = "10px";
        styleSpan.color = "#FFF";
        styleSpan.backgroundColor = "#00b4d8";
        styleSpan.padding = "2px";
    }

    return (
        <h1>{props.text} {props.start} <span style={styleSpan}>{props.end}</span></h1>
    );
}

export default Headings;