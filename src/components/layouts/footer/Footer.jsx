// import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "secondary.main", height: "250px" }}>
      <Grid container xs={12}>
        <Grid xs={2}></Grid>
        <Grid
          container
          sx={{
            color: "white",
            marginTop: "50px",
          }}
          xs={8}
        >
          <Grid xs={2}>
            <Grid xs={2}>
              <Typography variant="subtitle1">Product</Typography>
            </Grid>
            <Grid>
              <Typography variant="body2">Item 1</Typography>
              <Typography variant="body2">Item 2</Typography>
              <Typography variant="body2">Item 3</Typography>
              <Typography variant="body2">Item 4</Typography>
              <Typography variant="body2">Item 5</Typography>
            </Grid>
          </Grid>
          <Grid xs={2}>
            <Grid>
              <Typography variant="subtitle1">Information</Typography>
            </Grid>
            <Grid>
              <Typography variant="body2">Item 1</Typography>
              <Typography variant="body2">Item 2</Typography>
              <Typography variant="body2">Item 3</Typography>
              <Typography variant="body2">Item 4</Typography>
              <Typography variant="body2">Item 5</Typography>
            </Grid>
          </Grid>
          <Grid xs={2}>
            <Typography variant="subtitle1">Company</Typography>
          </Grid>
          <Grid flexGrow={1} sx={{}}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <YouTubeIcon />
              <WhatsAppIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                height: "80%",
                // backgroundColor: "primary.dark",
              }}
            >
              <Box
                component="img"
                sx={{
                  display: "flex",
                  height: "70px",
                }}
                alt="Logo"
                src="https://res.cloudinary.com/dprdeplon/image/upload/v1689789250/UYMEDIA-logo-10_rq2bnp.png"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
