import { Grid } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div style={{ margin: "50px 0" }}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <ProjectCard id='14' />
        </Grid>
        <Grid item xs={3}>
          <ProjectCard />
        </Grid>
        <Grid item xs={3}>
          <ProjectCard />
        </Grid>
        <Grid item xs={3}>
          <ProjectCard />
        </Grid>
        <Grid item xs={3}>
          <ProjectCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectList;
