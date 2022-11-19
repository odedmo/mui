import styled from "@emotion/styled";
import {Box, Typography} from "@mui/material";
import theme from "../theme";

const StyledTypography = styled(Typography)(({ theme: Theme }) => ({
  color: theme.palette.primary.dark
}));

const Home = () => {
  return (
    <Box sx={{
      flexGrow: 1,
      backgroundColor: 'whitesmoke',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  }}>
      <StyledTypography variant="h3">Home</StyledTypography>
  </Box>
  )
}

export default Home