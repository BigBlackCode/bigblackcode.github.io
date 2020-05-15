import React from 'react'
import {Link} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css';
import '../pages/theme.css';
import './layout.css';
import bigblackcodeText from '../../content/assets/bigblackcode-text.png';
import '../utils/icons';

class Layout extends React.Component {
    render() {
        const {location, children} = this.props;

        return (
            <div className={'layout'}>
                <div className={'header-container'}>
                    <div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
                        <header className="header d-flex flex-column mx-auto w-100">
                            <div className="inner">
                                <img src={bigblackcodeText} className="header-brand mb-4 mx-auto d-block" alt="BigBlackCode"/>

                                <nav className="nav nav-header justify-content-center">
                                    <Link className={'nav-link ' + (location.pathname === '/' ? 'active' : '')}
                                          to="/">Home</Link>
                                    <Link className={'nav-link ' + (location.pathname === '/about' ? 'active' : '')}
                                          to="/about">About</Link>
                                    <Link className={'nav-link ' + (location.pathname === '/team' ? 'active' : '')}
                                          to="/team">Team</Link>
                                    <Link className={'nav-link ' + (location.pathname === '/projects' ? 'active' : '')}
                                          to="/projects">Projects</Link>
                                    <Link className={'nav-link ' + (location.pathname === '/blog' ? 'active' : '')}
                                          to="/blog">Blog</Link>
                                    <Link className={'nav-link ' + (location.pathname === '/contact' ? 'active' : '')}
                                          to="/contact">Contact</Link>
                                </nav>
                            </div>
                        </header>
                    </div>
                </div>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <main className="d-flex w-100 h-100 mx-auto flex-column">
                        {children}
                        <footer className="footer mt-auto text-center">
                            <div className="inner">
                                <div>
                                    <small>
                                        Copyright &copy; {(new Date()).getFullYear()} - BigBlackCode
                                    </small>
                                </div>
                            </div>
                        </footer>
                    </main>
                </div>
            </div>
        )
    }
}

export default Layout
