import React from 'react';
import { MemoryRouter } from 'react-router';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Window from '../os/Window';
import Home from '../showcase/Home';
import About from '../showcase/About';
import Contact from '../showcase/Contact';
import Experience from '../showcase/Experience';
import VerticalNavbar from '../showcase/VerticalNavbar';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ShowcaseExplorerProps extends WindowAppProps {}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Daniel Wust - Showcase 2024"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2024 Daniel Wust'}
        >
        {/* Not works in deploy, but required in dev mode */}
        {/* <MemoryRouter> */}
            <Router>
                <div className="site-page">

                    <VerticalNavbar />

                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/contact" element={<Contact />} />

                            {/* 
                                <Route
                                    path="/projects/software"
                                    element={<SoftwareProjects />}
                                />
                                <Route path="/projects/art" element={<ArtProjects />} /> 
                            */}

                            <Route path="/" element={<Navigate to="/home" replace />} />
                        </Routes>
                    </div>
                </Router>

            {/* </MemoryRouter> */}
        </Window>
    );
};

export default ShowcaseExplorer;
