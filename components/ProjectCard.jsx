import React from "react";
import { Card, Row, Text, Button, Col, Link } from "@nextui-org/react";
import BottomButton from "./BottomButtons";

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  summary,
  github,
  link,
}) => {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header
        css={{
          position: "absolute",
          zIndex: 1,
          top: 5,
          color: "#94f9f0",
          // bg: "#94f9f026"
        }}
      >
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
          <Row css={{ minHeight: "45px" }}>
            {/* <Text
              css={{ color: "#d1d1d1", paddingRight: "3px" }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              what:
            </Text> */}
            <Text color="#d1d1d1" size={12}>
              {description}
            </Text>
          </Row>
          <Card.Divider css={{marginBottom: '5px'}}/>
          <Row css={{ minHeight: "40px" }}>
            {/* <Text
              css={{ color: "#d1d1d1", paddingRight: "3px" }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              how:
            </Text> */}
            <Text color="#d1d1d1" size={12}>
              Built with {tech.map((t, i) => (i === tech.length - 1 ? t : `${t}, `))}
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
            {link && (
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
            )}
          </Row>
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
