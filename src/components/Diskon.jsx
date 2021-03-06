import { Box } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    // <div style={{ height:'288px', width:'100%' }}>Banner</div>
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt={5}
    >
      <Box
        component={"img"}
        src="../../rectangle-left.png"
        sx={{ height: "100%" }}
      />
      <Box component={"img"} src="../../banner.png" sx={{ height: "100%" }} />
      <Box
        component={"img"}
        src="../../rectangle-right.png"
        sx={{ height: "100%" }}
      />
    </Box>
  );
};

export default Banner;
