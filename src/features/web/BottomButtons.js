import React from "react";
import {
  Row,
  Button,
  Text, 
  Link
} from '@nextui-org/react'

const BottomButton = ({github, link}) => {
  return (
  <Row justify="space-around" css={{ paddingTop: "15px" }}>
    <Link href={github}>
      <Button
        // bordered
        flat
        rounded
        size="sm"
        // auto
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
    {link && <Link href={link}>
      <Button
        animated
        // auto
        bordered
        rounded
        color="gradient"
        size="sm"
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
    </Link>}
  </Row>
  )
};


export default BottomButton;