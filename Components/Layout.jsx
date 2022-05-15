import Link from "next/link"

const Layout = ({ children }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link href='/'>
                    <a className="navbar-brand">Navbar</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link href="/">
                            <a className="nav-link" to="/">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link href="/about">
                            <a className="nav-link">About</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link href="/bank">
                            <a className="nav-link">Bank</a>
                            </Link>
                        </li>
                        
                        </ul>
                      
                    </div>
                </div>
            </nav>
            <section className="container">
                {children}
            </section>
        </>
    )
}
1
export default Layout