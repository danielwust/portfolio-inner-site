import React from 'react';
import { Link } from 'react-router-dom';
// import ResumeDownload from './ResumeDownload';
import meNow from '../../assets/pictures/currentme.jpg';

export interface AboutProps {}

const getHobbies = () => (
    <div style={{}}>
        <div
            style={{
                flex: 1,
                textAlign: 'justify',
                alignSelf: 'center',
                flexDirection: 'column',
            }}
        >
            <h3>My Hobbies</h3>
            <br />
            <p>
                Beyond software, I have a lot of hobbies that I
                enjoy doing in my free time. The more tangible
                hobbies I have are{' '}
                <Link to="/projects/art">Gaming Development</Link>. 
                You can read more about each of these on their respective pages under my projects tab. 
                Some other hobbies I enjoy are working out, cooking, playing video games.
            </p>
            <br />
            <p>
                In college, I was an active member in the fraternity
                Sigma Alpha Epsilon and held multiple positions in
                the chapter. I met a lot of amazing people through
                my fraternity and thoroughly enjoyed the community.
            </p>
        </div>
        <div style={styles.verticalImage}>
            <img src={meNow} style={styles.image} alt="" />
            <p>
                <sub>
                    <b>Figure 2:</b> Me, April 2024
                </sub>
            </p>
        </div>
    </div>
)

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1>Welcome</h1>
            <br />
            <div className="text-block">
                <p>
                    Thank you for taking the time to check out my portfolio. 
                    I really hope you enjoy exploring it as much as I enjoyed
                    building it.
                    <br />
                    If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:contato@danielwust.com">
                        contato@danielwust.com
                    </a>
                </p>
            </div>

            {/* <ResumeDownload /> */}

            <br />
            <div className="text-block">
                <p>
                    <h3>Now</h3>
                    <br />
                    Dedicated and passionate in programming.
                    Software Engineer student currently working at EasyPro Tech!
                    <br />
                    Currently, I'm seeking new challenges to further enhance my expertise in Software Engineering.
                </p>
                <br />
                <p>
                    <h3>Past</h3>
                    <br />
                    I have proven experience in software development since 2020 in Brazil. 
                    My focus is on writing clean and efficient code. 
                    I'm collaborative and always strive for the best outcome, being honest about my work and that of my team. 
                    I stay up-to-date with industry trends and emerging technologies, constantly seeking opportunities to enhance my skills. 
                </p>
                <br />

                <br />
                {true ? '' : getHobbies()}

                <br />
                <p>
                    If you have any questions or comments I would love to hear them. 
                    <br />
                    You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email at{' '}
                    <a href="mailto:contato@danielwust.com">
                        contato@danielwust.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
