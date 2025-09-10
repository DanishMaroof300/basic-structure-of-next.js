import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "80px",
        background: "#007771ff",
        padding: "25px",
      }}
    >
      <Link href="/" style={{ color: "white", textDecoration: "none"}}>
        Home
      </Link>
      <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
      <Link href="/services" style={{ color: "white", textDecoration: "none" }}>
        Services
      </Link>
      <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}
