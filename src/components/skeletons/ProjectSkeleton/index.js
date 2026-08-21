import { Skeleton } from "@mui/material";
import React from "react";

const ProjectSkeleton = () => {
      return (
            <>
                  <Skeleton
                        variant="rectangular"
                        animation="wave"
                        width="100%"
                        height={350}
                  />
            </>
      );
};

export default ProjectSkeleton;
