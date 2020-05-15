import React from 'react'
import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.css';
import './theme.css';
import './index.css';
import {Link} from 'gatsby'
import bigblackcodeText from '../../content/assets/bigblackcode-text.png';
import '../utils/icons';

class Index extends React.Component {
    render() {
        return (
            <div className={'landing text-center'}>
                <SEO title="Welcome to BigBlackCode" keywords={['blog', 'bigblackcode', 'online', 'games', 'multimedia']}/>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header className="header mb-5">
                        <div className="inner">
                            <Link to="/">
                                <img src={bigblackcodeText} className="header-brand mb-4" alt="BigBlackCode"/>
                            </Link>
                            <nav className="nav nav-header nav-main justify-content-center">
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/games">Games</Link>
                                <Link className="nav-link" to="/blog">Blog</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </nav>
                        </div>
                    </header>

                    <main className="inner cover py-5">
                        <h2 className="cover-heading my-5">Team of Multimedia Artists</h2>

                        <p className="lead my-5">
                            Get to know the BigBlackCode team, the projects and the roadmap.
                        </p>

                        <div className="my-5">
                            <Link to={'/about'}>
                                <div className={'bigblackcode-button p-5 mb-5 d-inline-block w-25 h-25'}></div>
                            </Link>

                            <h4 className={'insert-coin blink my-5'}>
                                Insert Coin
                            </h4>
                        </div>
                    </main>

                    <footer className="footer my-5">
                        <div className="inner">
                            <div>
                                <small>
                                    Copyright &copy; {(new Date()).getFullYear()} - BigBlackCode
                                </small>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Index
