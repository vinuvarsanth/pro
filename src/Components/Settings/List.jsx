import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#141414",

    "&.Mui-selected": {
      color: "#0c828f",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#30c1d1",
    },
  })
);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {children}
          </Typography>
          {index === 0 && <ProfileForm />}
          {index === 1 && <ChangePasswordForm />}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const ProfileForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="First Name" variant="outlined" fullWidth margin="normal" />
      <TextField label="Last Name" variant="outlined" fullWidth margin="normal" />
      <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="Phone Number"
        type="tel"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        variant="outlined"
        fullWidth
        multiline
        rows={2}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Save Profile
      </Button>
    </form>
  );
};

const ChangePasswordForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="password"
        label="Current Password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="password"
        label="New Password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="password"
        label="Confirm New Password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Change Password
      </Button>
    </form>
  );
};

// Utility function to generate accessibility props for tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function List() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ minHeight: "84vh", mt: 2 }}>
      <CardContent>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <StyledTab label="Profile Information" {...a11yProps(0)} />
              <StyledTab label="Change Password" {...a11yProps(1)} />
            </StyledTabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Profile Information
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Change Password
          </CustomTabPanel>
        </Box>
      </CardContent>
    </Card>
  );
}
