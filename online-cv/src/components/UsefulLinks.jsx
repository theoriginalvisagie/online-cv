import { Grid, Typography, List, ListItem, Link } from "@mui/material";

/*-----------------ICONS-----------------*/
import LanguageIcon from '@mui/icons-material/Language';
import CircleIcon from '@mui/icons-material/Circle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
/*---------------------------------------*/

function UsefulLinks(props){
    let name = props.data.name;
    const links = props.data.links;

    return(
        <Grid>
            <Typography ml={2}>
                {name}
            </Typography>
            <List
                sx={{
                    marginLeft: "15px"
                }}
            >
                {links.map(function(data){
                    return(
                        <ListItem key={data.id}>
                            {(() => {
                                if(name === "Website"){
                                    return <LanguageIcon />;
                                }else if(name === "Projects"){
                                    return <CircleIcon sx={{ fontSize: 10 }}/>;
                                }else if(name === "Github Repos"){
                                    return <GitHubIcon />;
                                }else if(data.name === "LinkedIn"){
                                    return <LinkedInIcon />;
                                }
                            })()}
                            <Link 
                                ml={1}
                                href={data.href}
                                target="_blank"
                                sx={{
                                    color: "black",
                                    textDecorationColor: "black"
                                }}
                            >
                                {data.name}
                            </Link>
                        </ListItem>
                    );
                })}
            </List>
        </Grid>
    );
}

export default UsefulLinks;