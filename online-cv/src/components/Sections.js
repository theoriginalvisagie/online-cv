function Sections(props){
    const elemStyle = {
        backgroundColor: "#f1f1f1",
        width: `${props.width}px`,
        height: "100vh",
        margin: "5px",
        boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)",
        display: "inline-block"
    };

    return (
        <div style={elemStyle}>{props.children}</div>
    );
}

export default Sections;