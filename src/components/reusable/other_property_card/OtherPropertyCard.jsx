import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./OtherPropertyCard.scss";
import Link from "next/link";

export default function OtherPropertyCard() {
  return (
    <div className="other_property">
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
          sx={{ height: 200 }}
          image="/projectImage.jpg"
          title="green iguana"
        />
        {/* <para className="top-right-button">Fully Funded</para> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="title">
              <h3>Fully funded Paramount Industrial Hub Opportunity 2</h3>
            </div>
            <p className="meta">
              <span className="author"> Kudus , Wada</span>
              <span> | </span>
              <time className="updated" datetime="" itemprop="datePublished">
                July 27, 2017
              </time>
            </p>
            <div className="custom-progress">
              <div
                className="custom-progress-inner"
                style={{
                  width: "100%",
                }}
              />
            </div>
            <p className="card_data">
              ₹ 5,00,00,000 <span>of</span> ₹ 5,00,00,000 <span>funded</span>{" "}
              (100.0%)
            </p>
            <p className="hr_line"></p>
            <div className="investment_data">
              <div>
                <p className="sub_title_card">Target IRR</p>
                <p className="numeric_data">19.0%</p>
              </div>
              <div>
                <p className="sub_title_card">Entry Yield</p>
                <p className="numeric_data">13.5%</p>
              </div>
              <div>
                <p className="sub_title_card">Min Investment</p>
                <p className="numeric_data">10,00,000</p>
              </div>
              <div>
                <p className="sub_title_card">Distribution</p>
                <p className="numeric_data">6 Months</p>
              </div>
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <div className="chips w-100 d-flex justify-content-center align-items-center">
            <Link className="chip" href="/properties">
              View Opportunity
            </Link>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
