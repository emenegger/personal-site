import { Scale } from "@mui/icons-material";
import { Card, Container, Image, Row, Text, Button, Spacer } from "@nextui-org/react";
import React from "react";
import ProjectCardTwo from '../components/ProjectCardTwo'

const ProjectSquare = (props) => {
  const { title, summary, description, tech, image, github, link, id } =
    props.data;
  return (
    <Container className="container">
      {/* <Container className="container1" css={{padding: '0', margin: '0'}}> */}
      <Image
        showSkeleton
        objectFit="cover"
        maxDelay={10000}
        src={image}
        alt={title}
        key={id}
        autoResize
      />
      {/* </Container> */}
      <Container
        className="overlay"
      > 
        <ProjectCardTwo title={title} description={description} tech={tech} github={github} link={link}/>
        <Spacer />
      </Container>
      <Row justify="space-between">
        <Text h3 weight="light">
          {title}
        </Text>
        <Text h3 weight="light" color="gray">
          {summary}
        </Text>
      </Row>
    </Container>
  );
};

export default ProjectSquare;
