import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box mt={2} mb={2} sx={{ width: "100%" }}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{ fontSize: "2rem" }}
      >
        React Task Tracker
      </Typography>
    </Box>
  );
};

export default Header;
