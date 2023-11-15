import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import React, { Component } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TextField } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
export default class Profil extends Component<{}, { expanded: boolean, entry?: string, scenario: string[] }> {
    constructor(props: {}) {
        super(props)
        this.state = {
            expanded: false,
            entry: "",
            scenario: ["test scenario"]
        }
    }
    render() {
        return (
            <div>
                <Card sx={{}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader={new Date().toDateString()}
                    />
                    <CardContent>
                        <TextField
                            sx={{ width: "100%" }}
                            id="outlined-multiline-flexible"
                            label="details du scenario"
                            multiline
                            maxRows={4}
                            value={this.state.entry}
                            onKeyDown={(e: any) => {
                                if (e.keyCode == 13) {
                                    e.preventDefault()
                                    console.log('value', e.target.value);
                                    const scenario = this.state.scenario;
                                    scenario.push(e.target.value)
                                    this.setState({ scenario, entry: "" })
                                }
                            }}
                            onChange={(e) => this.setState({ entry: e.target.value })}
                        />
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={this.state.expanded}
                            onClick={() => this.setState({ expanded: !this.state.expanded })}
                            aria-expanded={this.state.expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {
                                this.state.scenario.map((scenar) => (
                                    <Typography paragraph>- {scenar}</Typography>
                                ))
                            }
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        )
    }
}
