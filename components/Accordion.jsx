import React from "react";
import { Collapse, Text } from "@nextui-org/react";
import CodeIcon from "@mui/icons-material/Code";

const Accordion = (props) => {
  console.log("props", props);
  return (
    <>
    <Text h3 css={{ color: "whitesmoke" }}>Tech</Text>
      {props.tech.map((t) => {
        return (
          <Collapse
            css={{ backgroundColor: "black", color: "whitesmoke" }}
            title={t}
            arrowIcon={<CodeIcon />}
            className='accordion-title'
          >
            <Text css={{ color: "whitesmoke" }}>
              {t}  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        );
      })}
    </>
  );
};

export default Accordion;
