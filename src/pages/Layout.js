import { Link, Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link className="navlink" to="/breaking-bad">Characters</Link>
                    </li>
                    <li>
                        <Link className="navlink" to="/quotes">Quotes</Link>
                    </li>
                </ul>
                <Link to="/breaking-bad" className="nav-logo">
                    <div className="logo-breaking">
                        <strong>Br</strong><span>eaking</span>
                    </div>
                    <div className="logo-bad">
                        <strong>Ba</strong><span>d</span>
                    </div>
                </Link>
            </nav>

            <section>
                <Outlet />
            </section>

        </div>
    )
}

export default Layout