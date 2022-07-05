import { Grid } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container spacing={4}>
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
        <Grid item xs={3}>
          <ProjectCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectList;
