import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Contact extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title={'Contact'}>
                <SEO title="Contact" keywords={['blog', 'bigblackcode', 'online', 'games', 'multimedia']}/>
                <div className={'contact'}>
                    <h1>Contact</h1>

                    <p>
                        You are more than welcome to send me an email with your ideas, plans or questions.
                    </p>

                    <p>
                        <a href="mailto:bigblackcode.team@gmail.com">
                            <FontAwesomeIcon icon={'envelope'} className={'mr-2'} />
                            bigblackcode.team@gmail.com
                        </a>
                    </p>

                    <p>
                        Follow the team on Twitter.
                    </p>

                    <p>
                        <a href="https://twitter.com/bigblackcode">
                            <FontAwesomeIcon icon={['fab', 'twitter']} className={'mr-2'} />
                            twitter.com/bigblackcode
                        </a>
                    </p>
                </div>
            </Layout>
        )
    }
}

export default Contact
