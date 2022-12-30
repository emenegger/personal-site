import React from "react";
import { Text, Container, Button } from "@nextui-org/react";

const synopsis = "Hi I'm Evan. I'm a Software Engineer experienced in TypeScript and React passionate about front-end development, mentorship, problem-solving, and photography."
const title = 'Software Engineer & Photographer'

const Content = () => {
  return (
    <>
      <Container
        display="flex"
        direction="column"
        xl
        justify="center"
        fluid="true"
        alignItems="center"
        css={{
          backgroundColor: "#F1F3F5",
          height: "92vh",
          width: "100vw",
        }}
      >
        <Container css={{ width: "60vh", textAlign: "center", padding: 10 }}>
          <Text h1 weight="light">
            {title}
          </Text>
          <Text h3 weight="thin">
            {synopsis}
          </Text>
        </Container>
      </Container>
    </>
  );
};

export default Content;
