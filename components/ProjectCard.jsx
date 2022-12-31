import React from "react";
import { Card, Row, Text, Button, Col, Link } from "@nextui-org/react";

const ProjectCard = ({ title, description, tech, image, summary, github, link }) => {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text h3 color="white" weight="medium">
            {title}
          </Text>
          <Text size={12} weight="thin" transform="uppercase" color="white">
            {summary}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={image}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
          minHeight: "90px",
        }}
      >
        <Col>
          <Row>
            <Text color="#d1d1d1" size={12}>
              {description}
            </Text>
          </Row>
          <Row justify="space-around" css={{ paddingTop: "15px" }}>
            <Link href={github}>
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  GitHub
                </Text>
              </Button>
            </Link>
            <Link href={link}>
              <Button
                animated
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  View
                </Text>
              </Button>
            </Link>
          </Row>
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
