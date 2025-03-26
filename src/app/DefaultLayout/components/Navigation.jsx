import Link from "next/link";

export default function Navigation() {
  return (
    <main className="container-fluid bg-success text-dark bg-opacity-25 shadow-sm rounded">
      <div className="container">
        <ul className="nav">
          <li className="nav-item dropdown">
            <a className="nav-link text-black dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Text Tools
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" href="/text-tools/base64-encoder">Base 64 Encode/Decode</Link>
              <Link className="dropdown-item" href="#">Case Convert</Link>
            </ul>
          </li>
          <li className="nav-item  dropdown">
            <a className="nav-link text-black dropdown-toggle" href="#" id="navbarDropdownSQL" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              SQL Tools
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownSQL">
              <li><a className="dropdown-item" href="#">Sub Tool 1</a></li>
              <li><a className="dropdown-item" href="#">Sub Tool 2</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link  text-black dropdown-toggle" href="#" id="navbarDropdownJSON" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              JSON Tools
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownJSON">
              <li><a className="dropdown-item" href="#">Sub Tool 1</a></li>
              <li><a className="dropdown-item" href="#">Sub Tool 2</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </main>

  );
}
