import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />

            {/* Company 1 */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>ArteCola ❤️</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.linkedin.com/company/artecolaquimica/'}
                        >
                            <h4>Linkedin</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Administrative Assistant</h3>
                        <b>
                            <p>2014 - 1 Year</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Quoted by Arteflex and acting directly in the IT Team and Marketing of Artecola Companies, 
                    providing the same services as a normal employer.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Technical Support and Maintenance
                        </p>
                    </li>
                    <li>
                        <p>
                            System Administration and Configuration
                        </p>
                    </li>
                    <li>
                        <p>
                            Marketing Analysis and Management
                        </p>
                    </li>
                </ul>
            </div>

            {/* Company 2 */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>MicroSales 💙</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'http://www.microsales.com.br'}
                        >
                            <h4>Official Website</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>FullStack Engineer</h3>
                        <b>
                            <p>2021 - Less than 1 Year</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Supervised and developed too many softwares and languages
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Front End development projects and manutenance
                        </p>
                    </li>
                    <li>
                        <p>
                            Back End development features
                        </p>
                    </li>
                    <li>
                        <p>
                            Managed some projects almost alone
                        </p>
                    </li>
                </ul>
            </div>

            {/* Company 3 */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>EasyPro Tech 💛</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.easypro.com.br/'}
                        >
                            <h4>Official Website</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>FullStack Developer</h3>
                        <b>
                            <p>2022 - Currently Working</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    I have acquired a wealth of skills because I never give up, even when faced with intense pressure. Here are some examples of my experience..
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Solutions, Process and Project and Management: <br/>
                            - “Developed and implemented efficient processes to optimize operations.” <br/>
                            - “Identified improvement opportunities and successfully drove changes.”
                        </p>
                    </li>
                    <li>
                        <p>
                            Problem Analysis and Resolution: <br/>
                            - “Diagnosed and resolved complex issues, ensuring system stability.” <br/>
                            - “Proactively anticipated challenges and implemented strategies to prevent future problems.”
                        </p>
                    </li>
                    <li>
                        <p>
                            Business Rule Development: <br/>
                            - “Created robust rules that ensured compliance and security.” <br/>
                            - “Collaborated with stakeholders to define requirements and standards.”
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaboration with Team Members and Third Parties: <br/>
                            - “Collaborated on system integrations, ensuring efficient data exchange across platforms.”
                            - “Worked with Business Intelligence (BI) systems to provide valuable insights through dashboards and reports.”
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
