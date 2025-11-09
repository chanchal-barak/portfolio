export default function Navbar() {
  const links = [
    { name: "Home", id: "home" },
    { name: "About me", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Get In Touch", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a1a] text-gray-300 shadow-md z-50">
      <div className="max-w-5xl mx-auto flex justify-center items-center space-x-10 py-3 text-sm uppercase tracking-wide">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="hover:text-white transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

