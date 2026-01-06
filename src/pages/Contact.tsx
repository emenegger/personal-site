import React from "react";
import Head from "next/head";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import evanInBeanie from "/Users/evanemenegger/Desktop/Projects/personal-website/public/DSC_7882-2.jpg";
import { ContactPage } from "features/contact";

const contactInfo = [
  {
    icon: <EmailIcon sx={{ marginTop: "4px" }} />,
    link: "mailto:evanemenegger@gmail.com",
    handle: "evanemenegger@gmail.com",
  },
  {
    icon: <GitHubIcon sx={{ marginTop: "4px" }} />,
    link: "https://github.com/emenegger",
    handle: "@emenegger",
  },
  {
    icon: <TwitterIcon sx={{ marginTop: "4px" }} />,
    link: "https://twitter.com/EvanEmenegger",
    handle: "@evanemenegger",
  },
  {
    icon: <InstagramIcon sx={{ marginTop: "4px" }} />,
    link: "https://www.instagram.com/eje_photos/?hl=en",
    handle: "@eje_photos",
  },
  {
    icon: <InsertInvitationIcon sx={{ marginTop: "4px" }} />,
    link: "https://calendly.com/evanemenegger/chat",
    handle: "schedule time with me",
  },
];

const Contact = () => {
  return (
    <>
      <Head>
        <title>Evan Emenegger - Contact</title>
        <meta name="description" content="Evan Emenegger Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactPage />
    </>
  );
};

export default Contact;
