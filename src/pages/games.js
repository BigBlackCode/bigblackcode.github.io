import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './games.css';
import photoRiddles4U from '../../content/assets/riddles4u.png';
import photoVote4Note from '../../content/assets/vote4note.png';
import photoSpaceguard from '../../content/assets/spaceguard.png';
import photoDodgepro from '../../content/assets/coming-soon.jpg';
import photoMindEscape from '../../content/assets/coming-soon.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Games extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title={'Games'}>
                <SEO title="Projects" keywords={['blog', 'bigblackcode', 'online', 'games', 'multimedia']}/>
                <div className={'projects'}>
                    <h1>Projects</h1>

                    <h4>Riddles4U</h4>

                    <p>
                        <img className={'img-thumbnail project-thumbnail w-100'} src={photoRiddles4U} alt="Riddles4U"/>
                    </p>

                    <p>
                        Riddles4U is a riddles game with progressive difficulty, meaning that both beginners and
                        hardcore riddles solvers will find interesting content to solve. This project is a collaboration
                        result of the BigBlackCode team and includes original and well tested riddles, IQ tests and
                        puzzles.
                    </p>

                    <p className={'mb-5'}>
                        <a href="http://riddles4u.com">
                            <FontAwesomeIcon icon={'link'} className={'mr-2'} />
                            riddles4u.com
                        </a>
                    </p>

                    <h4>Vote4Note</h4>

                    <p>
                        <img className={'img-thumbnail project-thumbnail w-100'} src={photoVote4Note} alt="Vote4Note"/>
                    </p>

                    <p>
                        Vote4Note is a simple yet fun game that aims to get people together and "break the ice" while
                        figuring out the background of each participant. The included game cards serve as a quick way to
                        get you started but you can actually come up with your own questions and answers and leverage
                        the game experience.
                    </p>

                    <p className={'mb-5'}>
                        <a href="https://vote4note.com">
                            <FontAwesomeIcon icon={'link'} className={'mr-2'} />
                            vote4note.com
                        </a>
                    </p>


                    <h4>Dodgepro</h4>

                    <p>
                        <img className={'img-thumbnail project-thumbnail w-100'} src={photoDodgepro} alt="Dodgepro"/>
                    </p>

                    <p className={'mb-5'}>
                        Dodgepro is a 2D arcade web game, requiring quick reflexes and movement combinations in order to
                        survive the upcoming level destruction. The game is under development and will be released soon.
                    </p>
                </div>
            </Layout>
        )
    }
}

export default Games
