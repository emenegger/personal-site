import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import ContactInfo from "./ContactInfo";
import { ContactInfoType } from "./types";
import { Variants } from "framer-motion";

const contactInfo: ContactInfoType[] = [
  {
    icon: <EmailIcon />,
    link: "mailto:evanemenegger@gmail.com",
    handle: "evanemenegger@gmail.com",
    id: 1,
  },
  {
    icon: <GitHubIcon />,
    link: "https://github.com/emenegger",
    handle: "@emenegger",
    id: 2,
  },
  {
    icon: <TwitterIcon />,
    link: "https://twitter.com/EvanEmenegger",
    handle: "@evanemenegger",
    id: 3,
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/eje_photos/?hl=en",
    handle: "@eje_photos",
    id: 4,
  },
  {
    icon: <InsertInvitationIcon />,
    link: "https://calendly.com/evanemenegger/chat",
    handle: "schedule time with me",
    id: 5,
  },
];

const ulVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 2,
      delayChildren: 2.3,
      staggerChildren: 0.5,
    },
  },
};

const liVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ContactPage = () => {
  return (
    <div className="w-screen h-screen font-mono">
      <div className="flex flex-col items-center w-screen justify-center h-screen">
        {contactInfo.map(({ icon, handle, link, id }) => (
          <ContactInfo icon={icon} handle={handle} link={link} key={id}/>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
