import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from 'gatsby';

class About extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title={'About'}>
                <SEO title="About" keywords={['blog', 'bigblackcode', 'online', 'games', 'multimedia']}/>
                <div className={'about'}>
                    <h1>About</h1>

                    <p className={'mb-5'}>
                        BigBlackCode aims to provide a gateway to multimedia applications targeting a huge
                        variety of audiences. Experimental technologies, modern development patterns and well
                        thought contents become gradually accessible for everyone, the BigBlackCode community,
                        our family.
                    </p>

                    <h2>Motivation</h2>

                    <p className={'mb-5'}>
                        We started the BigBlackCode project because we believe that through the proper use of
                        software we can create experience that stay memorable. We are glad to see that there is
                        a lot of creativity flowing around on the web and we want to become a part of it.
                    </p>

                    <h2>Goals</h2>

                    <p className={'mb-5'}>
                        From full featured systems to small experimental prototypes the goal of BigBlackCode is to
                        provide high quality software products. Check the background of the <Link to={'/team'}>people involved in the team</Link>.
                    </p>
                </div>
            </Layout>
        )
    }
}

export default About
