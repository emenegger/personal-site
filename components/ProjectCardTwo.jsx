import React from "react";
import { Card, Row, Button, Text, Table } from "@nextui-org/react";

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
        <Text b css={{ color: "whitesmoke" }}>
          {title}
        </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        <Text css={{ color: "whitesmoke" }}>{description}</Text>

        <Table
          aria-label="Example table with dynamic content"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header >
              <Table.Column key={title}>Tech</Table.Column>
          </Table.Header>
          <Table.Body>
            {tech.map((item, i) => (
              <Table.Row key={i}>
                <Table.Cell css={{color: 'whitesmoke'}}>{item}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          <Button size="sm" light>
            github
          </Button>
          <Button size="sm">visit</Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCardTwo;
