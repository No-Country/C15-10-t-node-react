import { Link } from "react-router-dom";

interface FooterNavProps {
  title: string;
  links: string[];
}

function NavContent({ title, links }: Readonly<FooterNavProps>) {
  return (
    <nav className="md:mx-auto">
      <header className="footer-title">{title}</header>
      {links.map((link: string, index) => (
        <Link
          to={link.replace(/ /g, "-")}
          key={index}
          className="link link-hover"
        >
          {link}
        </Link>
      ))}
    </nav>
  );
}

export default NavContent;
