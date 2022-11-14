import styled from "@emotion/styled";
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const StyledTypography = styled(Typography)(({ theme: Theme }) => ({
  color: theme.palette.primary.dark
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper
          elevation={3}
          sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
        >
          <StyledTypography variant="h1">Starter App</StyledTypography>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default App;
