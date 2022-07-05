import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory, useRouteMatch } from "react-router-dom";

export default function ProjectCard(props) {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {props.id || "id"}
        </Typography>
        <Typography variant='h5' component='div'>
          {props.title || "Title"}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {props.secondTitle || "second-title"}
        </Typography>
        <Typography variant='body2'>
          {props.description || "description"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          onClick={() => {
            history.push(match.url + "/" + (props.id || "someurl"));
          }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
