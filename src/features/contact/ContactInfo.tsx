import React from "react";
import { ContactInfoType } from "./types";

type ContactInfoProps = Omit<ContactInfoType, 'id'>;

const ContactInfo = ({ icon, handle, link }: ContactInfoProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex hover:text-slate-300"
    >
      <div className="p-2">{icon}</div>
      <div className="p-2">{handle}</div>
    </a>
  );
};

export default ContactInfo;
