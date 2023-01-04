import React from "react";
import { Card, Grid, Text, Button, Link, Row } from "@nextui-org/react";
import BottomButton from "./BottomButtons";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import ApiIcon from "@mui/icons-material/Api";

const AltCard = ({ content }) => {
  const { title, summary, description, tech, image, github, link, id, icon } =
    content;
  return (
    <Grid sm={4} justify="center" alignItems="center" display="flex" key={id}>
      <Card css={{ p: "$6", width: '350px'}}>
        <Card.Header>
          {/* <SportsBasketballIcon sx={{ width: "34px", height: "34px" }} /> */}
          {icon}
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {title}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>{summary}</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2", minHeight: '100px' }}>
          <Text>{description}</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Body css={{ py: "$2", minHeight: '60px'  }}>
          <Text weight="thin" h6>
            Built with {tech.map((t, i) => (i === tech.length - 1 ? t : `${t}, `))}
          </Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          {/* <Link icon color="primary" target="_blank" href={github}>
            Visit source code on GitHub.
          </Link> */}
          <BottomButton github={github} link={link}/>
          

        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default AltCard;
