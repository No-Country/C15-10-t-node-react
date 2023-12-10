interface FooterNavProps {
  title: string;
  links: string[];
}

function NavContent({ title, links }: Readonly<FooterNavProps>) {
  return (
    <nav className="md:mx-auto">
      <header className="footer-title">{title}</header>
      {links.map((link, index) => (
        <a key={index} className="link link-hover">
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavContent;
