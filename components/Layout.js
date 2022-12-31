// import { Content } from "./Content.js"
import { Box } from "./Box.js";
import Content from './Content'

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
      margin: 0
    }}
  >
    {children}
  </Box>
);
