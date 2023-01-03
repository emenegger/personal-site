import React from "react";
import Head from "next/head";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Container,
  Row,
  Text,
  Col,
  Image,
  Grid,
  Link,
} from "@nextui-org/react";

const contactInfo = [
  {
    icon: <EmailIcon/>,
    link: "mailto:evanemenegger@gmail.com",
    handle: "evanemenegger@gmail.com"
  },
  {
    icon: <GitHubIcon/>,
    link: "https://github.com/emenegger",
    handle: "@emenegger"
  },
  {
    icon: <TwitterIcon/>,
    link: "https://twitter.com/EvanEmenegger",
    handle: "@evanemenegger"
  },
  {
    icon: <InstagramIcon/>,
    link: "https://www.instagram.com/eje_photos/?hl=en",
    handle: "@eje_photos"
  },
]

const contactRows = contactInfo.map((ele)=> {
  return (
  <Row>
    {ele.icon}
    <Link href={ele.link}>
      <Text h4 weight="thin" color="primary" css={{ paddingLeft: "5px" }}>
        {ele.handle}
      </Text>
    </Link>
  </Row>
  )
});

const Contact = () => {
  return (
    <>
      <Head>
        <title>Evan Emenegger - Contact</title>
        <meta name="description" content="Evan Emenegger Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row justify="center">
        <Text h1 weight="bold">
          Contact
        </Text>
      </Row>
      <Grid.Container justify="center">
        <Grid xs={8} xl={4} wrap>
          <Image
            showSkeleton
            width="100%"
            height={600}
            maxDelay={10000}
            objectFit="cover"
            src="https://imagizer.imageshack.com/img922/6066/wqh5gb.jpg"
            alt="Evan Emenegger"
            autoResize
          />
        </Grid>
        <Grid>
          <Container>
            <Text h2>Evan Emenegger</Text>
            {contactRows}
          </Container>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Contact;
