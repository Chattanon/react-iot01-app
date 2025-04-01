import React from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";

export default function CalculateNumber() {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Box sx={{ width: "70%", boxShadow: 2, mx: "auto", my: "auto", p: 5}}>
          <Avatar
            src="https://img.freepik.com/free-vector/flat-design-data-logo-template_23-2149192863.jpg?t=st=1743479329~exp=1743482929~hmac=ee4bb14979a0b2e7e65f11023f8efc00ae81f25bcc4fa3d73ad2bdf4ea3fd81c&w=826"
            sx={{ width: 100, height: 100, mx: "auto" }}
          />
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mt: 2, color: "primary.main" }}
          >
            เครื่องคิดเลข
          </Typography>
          <Typography sx={{ mt: 2, color: "#270bd8" }}>ตัวเลขที่ 1</Typography>
          <TextField variant="outlined" fullWidth type="number" />
          <Typography sx={{ mt: 2, color: "#270bd8" }}>ตัวเลขที่ 2</Typography>
          <TextField variant="outlined" fullWidth type="number" />
          <FormControl fullWidth  sx={{ mt: 2 }}>
            <InputLabel >
              เลือกเครื่องหมายคำนวณ
            </InputLabel>
            <Select defaultValue={"+"}>
              <MenuItem value={"+"}>บวก +</MenuItem>
              <MenuItem value={"-"}>ลบ -</MenuItem>
              <MenuItem value={"×"}>คูณ ×</MenuItem>
              <MenuItem value={"÷"}>หาร ÷</MenuItem>
            </Select>
          </FormControl>
          <Button fullWidth variant="contained" sx={{ mt: 2 , backgroundColor: "#1268dc",height: 50}}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              คํานวณ
            </Typography>
          </Button>
            <Typography  sx={{ textAlign: "center", mt: 5, color: "#ef0000",fontSize: 100}}>
              0.00
            </Typography>
        </Box>
      </Box>
    </>
  );
}
