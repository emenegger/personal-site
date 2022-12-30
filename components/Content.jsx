import React from "react";
import { Text, Container, Button } from "@nextui-org/react";

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
            Software Engineer & Photographer
          </Text>
          <Text h3 weight="thin">
            Hi I'm <span style={{ color: "#0E8AAA" }}>Evan</span>. I'm a
            Software Engineer experienced in TypeScript and React passionate
            about front-end development, mentorship, problem-solving, and
            photography.
          </Text>
        </Container>
        {/* <Button bordered color="gradient">
          Contact
        </Button> */}
      </Container>
    </>
  );
};

export default Content;
