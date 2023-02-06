import { Container, Text, useTheme, Row } from "@nextui-org/react";
import React, { useId } from "react";

function TechList(props) {
  const { theme } = useTheme();
  const id = useId();
  return (
    <Row>
      {props.tech.map((t, i) => (
        <Text
          h3
          key={id + t}
          css={{ color: `$cyan${700 - i * 100}`, paddingRight: "5px" }}
        >
          {t}
        </Text>
      ))}
    </Row>
  );
}

export default TechList;
