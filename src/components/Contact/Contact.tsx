import { IContact } from "@/interfaces";
import "./contactStyles.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Contact(): React.ReactNode {
  const contactData: IContact[] = [
    { name: "github", url: "/", icon: <FaGithub /> },
    { name: "Instagram", url: "/", icon: <FaGithub /> },
    { name: "Linkedin", url: "/", icon: <FaGithub /> },
    { name: "WhatsApp", url: "/", icon: <FaGithub /> },
  ];
  return (
    <div className="content-contact">
        {contactData.map((item:IContact, index:number)=>(
            <Link href={item.url} className={`contact-item contact-${item.name}`} key={index}>
                <span>{item.icon}</span>
                {item.name}
            </Link>
        ))}
    </div>
  );
}
