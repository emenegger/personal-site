import React, { useState } from "react";
import { Button, Link } from "@nextui-org/react";
import Photography from "../pages/Photography";
import AnalyticsIcon from "@mui/icons-material/Analytics";
// import Link from "next/link";
import {
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  Navbar,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

const menuItems = ["A", "B", "C"];

const MainNavbar = () => {
  // return (
  //   <Navbar disableAnimation={false} isBordered>
  //     <NavbarContent className="sm:hidden" justify="start">
  //       <NavbarMenuToggle />
  //     </NavbarContent>

  //     <NavbarContent className="sm:hidden pr-3" justify="center">
  //       <NavbarBrand>
  //         <Link href="/">
  //           <h1>Evan E.</h1>
  //         </Link>
  //       </NavbarBrand>
  //     </NavbarContent>

  //     <NavbarContent className="hidden sm:flex gap-4" justify="center">
  //       <NavbarBrand>
  //         <Link href="/">
  //           <h1>Evan E.</h1>
  //         </Link>
  //       </NavbarBrand>
  //       <NavbarItem>
  //         <Link color="foreground" href="#">
  //           Features
  //         </Link>
  //       </NavbarItem>
  //       <NavbarItem isActive>
  //         <Link href="#" aria-current="page" color="warning">
  //           Customers
  //         </Link>
  //       </NavbarItem>
  //       <NavbarItem>
  //         <Link color="foreground" href="#">
  //           Integrations
  //         </Link>
  //       </NavbarItem>
  //     </NavbarContent>

  //     <NavbarContent justify="end">
  //       <NavbarItem className="hidden lg:flex">
  //         <Link href="#">Login</Link>
  //       </NavbarItem>
  //       <NavbarItem>
  //         <Link href="/Contact">
  //           <Button>Contact</Button>
  //         </Link>
  //       </NavbarItem>
  //     </NavbarContent>

  //     <NavbarMenu>
  //       {menuItems.map((item, index) => (
  //         <NavbarMenuItem key={`${item}-${index}`}>
  //           <Link
  //             className="w-full"
  //             color={
  //               index === 2
  //                 ? "warning"
  //                 : index === menuItems.length - 1
  //                 ? "danger"
  //                 : "foreground"
  //             }
  //             href="#"
  //             size="lg"
  //           >
  //             {item}
  //           </Link>
  //         </NavbarMenuItem>
  //       ))}
  //     </NavbarMenu>
  //   </Navbar>
  // );
  return (
    <Navbar
    // maxWidth="fluid"
    // variant="sticky"
    // css={{ backgroundColor: "#F1F3F5" }}
    >
      <NavbarBrand>
        <Link href="/">
          <h1>Evan E.</h1>
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <Link href="/Projects" style={{ color: "black" }}>
          Web
        </Link>
        <Link href="/Photography" style={{ color: "black" }}>
          Photography
        </Link>
        {/* <Navbar.Link href="/Web">Web</Navbar.Link>
        <Navbar.Link href="/Photography">Photography</Navbar.Link> */}
        {/* <Navbar.Link href="#">Talks</Navbar.Link>
            <Navbar.Link href="#">Writing</Navbar.Link> */}
      </NavbarContent>
      <NavbarContent>
        <Link href="/Contact">
          <Button>
            Contact
          </Button>
        </Link>
      </NavbarContent>
    </Navbar>
  );
};

export default MainNavbar;

// return (
//   <Layout>
//     <Navbar
//       maxWidth="fluid"
//       variant="sticky"
//       css={{ backgroundColor: "#F1F3F5" }}
//     >
//       <Navbar.Brand>
//         <Link href="/" scroll>
//           <Text h1>Evan E.</Text>
//         </Link>
//       </Navbar.Brand>
//       <Navbar.Content>
//         <Link href="/Projects" scroll style={{color: 'black'}}>
//           Web
//         </Link>
//         <Link href="/Photography" scroll style={{color: 'black'}}>Photography</Link>
//         {/* <Navbar.Link href="/Web">Web</Navbar.Link>
//         <Navbar.Link href="/Photography">Photography</Navbar.Link> */}
//         {/* <Navbar.Link href="#">Talks</Navbar.Link>
//             <Navbar.Link href="#">Writing</Navbar.Link> */}
//       </Navbar.Content>
//       <Navbar.Content>
// <Link href="/Contact" scroll>
//   <Button bordered color="gradient" auto>
//     Contact
//   </Button>
// </Link>
//       </Navbar.Content>
//     </Navbar>
//   </Layout>
// );
