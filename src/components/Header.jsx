import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { tokens } from "../theme";

export default function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        colors={colors.grey[100]}
        fontWeight="bold"
        sx={{ mr: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}
