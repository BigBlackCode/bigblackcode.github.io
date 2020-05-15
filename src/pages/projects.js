import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './projects.css';
import photoRiddles4U from '../../content/assets/riddles4u.png';
import photoVote4Note from '../../content/assets/vote4note.png';
import photoSpaceguard from '../../content/assets/spaceguard.png';
import photoDodgepro from '../../content/assets/coming-soon.jpg';
import photoMindEscape from '../../content/assets/coming-soon.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Projects extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title={'Projects'}>
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

                    <h4>Spaceguard</h4>

                    <p>
                        <img className={'img-thumbnail project-thumbnail w-100'} src={photoSpaceguard} alt="Spaceguard"/>
                    </p>

                    <p>
                        An HTML5 arcade game in space where the player has to protect his spaceship from the vicious
                        enemies. The game will be responsive and mobile-friendly and it will feature unique game play
                        mechanics for the web standards.
                    </p>

                    <p className={'mb-5'}>
                        <a href="http://alextselegidis.com/spaceguard">
                            <FontAwesomeIcon icon={'link'} className={'mr-2'} />
                            alextselegidis.com/spaceguard
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

                    <h4>Mind Escape</h4>

                    <p>
                        <img className={'img-thumbnail project-thumbnail w-100'} src={photoMindEscape} alt="Mind Escape"/>
                    </p>

                    <p className={'mb-5'}>
                        Made for puzzle lovers and hidden object seekers Mind Escape will be a combination of all the
                        elements we like in escape games along with some very interesting features, targeted for Android
                        devices. The game concept is ready but the development was halted until more time is available
                        from all team members.
                    </p>
                </div>
            </Layout>
        )
    }
}

export default Projects
