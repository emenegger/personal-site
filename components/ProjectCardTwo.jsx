import React from "react";
import { Card, Row, Button, Text, Collapse, Link } from "@nextui-org/react";
import Accordion from "../components/Accordion";

const ProjectCardTwo = (props) => {
  const { title, description, tech, image, github, link } = props;
  return (
    <Card
      css={{
        backgroundColor: "black",
        opacity: 0.75,
        width: "100%",
        padding: "0px",
        height: "90%",
      }}
    >
      <Card.Header>
        <Text h1 css={{ color: "whitesmoke" }}>
          {title}
        </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        <Text h4 css={{ color: "whitesmoke" }}>
          {description}
        </Text>
        <Collapse.Group
          shadow
          css={{ backgroundColor: "black", color: "whitesmoke" }}
        >
          <Accordion tech={tech} />
        </Collapse.Group>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="space-between">
          <Link href={github}>
            <Button
              flat
              // auto
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
                // auto
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
      </Card.Footer>
    </Card>
  );
};

export default ProjectCardTwo;
