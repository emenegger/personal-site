import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import ContactInfo from "./ContactInfo";
import { ContactInfoType } from "./types";

const contactInfo: ContactInfoType[] = [
  {
    icon: <EmailIcon />,
    link: "mailto:evanemenegger@gmail.com",
    handle: "evanemenegger@gmail.com",
  },
  {
    icon: <GitHubIcon />,
    link: "https://github.com/emenegger",
    handle: "@emenegger",
  },
  {
    icon: <TwitterIcon />,
    link: "https://twitter.com/EvanEmenegger",
    handle: "@evanemenegger",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/eje_photos/?hl=en",
    handle: "@eje_photos",
  },
  {
    icon: <InsertInvitationIcon />,
    link: "https://calendly.com/evanemenegger/chat",
    handle: "schedule time with me",
  },
];

const ContactPage = () => {
  return (
    <div className="w-screen h-screen font-mono">
      <div className="flex flex-col items-center w-screen justify-center h-screen">
        {contactInfo.map(({ icon, handle, link }) => (
          <ContactInfo icon={icon} handle={handle} link={link} />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
