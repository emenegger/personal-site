import React from "react";
import Head from "next/head";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import {
  Container,
  Row,
  Text,
  Col,
  Image,
  Grid,
  Link,
} from "@nextui-org/react";

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
            <Row span={3} display="flex" align="flex-start">
              <InstagramIcon/>
              <Link href="https://www.instagram.com/eje_photos/?hl=en">
              <Text h4 weight="thin" color='primary' css={{paddingLeft: '5px'}} >
                @eje_photos
              </Text>
              </Link>
            </Row>
            <Row>
              <TwitterIcon />
              <Link href="https://twitter.com/EvanEmenegger">
                <Text h4 weight="thin" color="primary" css={{paddingLeft: '5px'}}>
                  @evanemenegger
                </Text>
              </Link>
            </Row>
            <Row>
              <EmailIcon />
              <Link href="mailto:evanemenegger@gmail.com" css={{paddingLeft: '5px'}}>
                <Text h4 weight="thin" color="primary">
                  evanemenegger@gmail.com
                </Text>
              </Link>
            </Row>
          </Container>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Contact;
