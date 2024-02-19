import { CardContent, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import Geochart from "../charts/Geochart";
import PieChart from "../charts/PieChart";
import "./AnaDash.css";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import HChart from "../charts/HChart";
import CountUp from "react-countup";

export default function Analytics() {
  return (
    <>
      <div className="bg2colour">
        <Navbar />
        <Box height={60} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack direction="row" spacing={3}>
                  <Box sx={{ width: "50%" }}>
                    <Card sx={{ height: 18 + "vh" }} className="gradient1">
                    <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#f0fcfc", padding: "7px 0px" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#f0fcfc" }}
                        >
                             ₹
                          <CountUp delay={0.4} end={2300} duration={10.9}/>
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ height: 18 + "vh", marginTop: "16px" }}
                      className="gradient"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#f0fcfc", padding: "7px 0px" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#f0fcfc" }}
                        >
                          ₹
                          <CountUp delay={0.4} end={2300} duration={10.9} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{ width: "50%", height: "50%" }}>
                    <Card sx={{ height: 18 + "vh" }} className="gradientlight2">
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#f0fcfc", padding: "7px 0px" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#f0fcfc" }}
                        >
                          ₹
                          <CountUp delay={0.4} end={2300} duration={10.9} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ height: 18 + "vh", marginTop: "16px" }}
                      className="gradientlight"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#f0fcfc", padding: "7px 0px" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#f0fcfc" }}
                        >
                          ₹
                          <CountUp delay={0.4} end={2300} duration={10.9} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Card sx={{ height: 38.3 + "vh" }}>
                  <CardContent>
                    <HChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={16} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <Geochart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <PieChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
