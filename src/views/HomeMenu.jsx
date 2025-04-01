import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
export default function HomeMenu() {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Box sx={{ width: "70%", boxShadow: 2, mx: "auto", my: "auto", p: 3 }}>
          <Avatar
            src="https://img.freepik.com/free-vector/flat-design-data-logo-template_23-2149192863.jpg?t=st=1743479329~exp=1743482929~hmac=ee4bb14979a0b2e7e65f11023f8efc00ae81f25bcc4fa3d73ad2bdf4ea3fd81c&w=826"
            sx={{ width: 100, height: 100,mx:'auto' }}
          />
          <Typography
            variant="h3"
            sx={{ textAlign: "center", mt: 2, color: "primary.main" }}
          >
            IoT Calculator by Chattanon
          </Typography>
        
        </Box>
      </Box>
    </>
  );
}
