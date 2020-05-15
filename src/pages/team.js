import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Team extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title={'Team'}>
                <SEO title="Team" keywords={['blog', 'bigblackcode', 'online', 'games', 'multimedia']}/>
                <div className={'team'}>
                    <h1>Team</h1>

                    <p className={'mb-5'}>
                        BigBlackCode is an international team of independent media artists who love working
                        on interactive apps, games and sites that aim to amuse users and players anytime, anywhere.
                        Check out our projects and stay tuned for future updates as we are constantly working on new
                        stuff.
                    </p>

                    <h4>Alex Tselegidis</h4>

                    <p>
                        Development and product manager, always looking forward to the next project, Alex is one of the
                        co-founders of the BigBlackCode
                        team.
                    </p>

                    <p className={'mb-5'}>
                        <a href="https://github.com/alextselegidis" className={'mr-4'}>
                            <FontAwesomeIcon icon={['fab', 'github']} className={'mr-2'} />
                            Github
                        </a>

                        <a href="https://twitter.com/AlexTselegidis" className={'mr-4'}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} className={'mr-2'} />
                            Twitter
                        </a>

                        <a href="http://alextselegidis.com" className={'mr-4'}>
                            <FontAwesomeIcon icon="link" className={'mr-2'} />
                            Website
                        </a>
                    </p>

                    <h4>George Chatzimichail</h4>

                    <p>
                        Hardcore puzzle solver, strategical thinking and game design, George is one of the co-founders
                        of the BigBlackCode team.
                    </p>

                    <p className={'mb-5'}>
                        <a href="https://github.com/gxdesigns" className={'mr-4'}>
                            <FontAwesomeIcon icon={['fab', 'github']} className={'mr-2'} />
                            Github
                        </a>
                    </p>

                    <h4>Mario Blokland</h4>

                    <p>
                        Always striving for quality and versatile results, Mario is a member of the development team.
                    </p>

                    <p className={'mb-5'}>
                        <a href="https://github.com/marioblokland" className={'mr-4'}>
                            <FontAwesomeIcon icon={['fab', 'github']} className={'mr-2'} />
                            Github
                        </a>

                        <a href="https://twitter.com/marioblokland/" className={'mr-4'}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} className={'mr-2'} />
                            Twitter
                        </a>

                        <a href="https://marioblokland.com" className={'mr-4'}>
                            <FontAwesomeIcon icon="link" className={'mr-2'} />
                            Website
                        </a>
                    </p>
                </div>
            </Layout>
        )
    }
}

export default Team
