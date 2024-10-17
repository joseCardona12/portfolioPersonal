import Link from "next/link";
import "./headerStyles.css";
import Navbar from "./Navbar/Navbar";
interface IHeaderProps {}
export default function Header({}: IHeaderProps): React.ReactNode {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-brand">
          <Link
            href={"/"}
            style={{ textDecoration: "none", color: "var(--paragraph-color)" }}
          >
            Portfolio
          </Link>
        </div>
        <Navbar />
        <div className="nav-logout">
          <div className="logout-image">
            <img src="" alt="" />
          </div>
          <Link href={"/login"} className="logout">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
