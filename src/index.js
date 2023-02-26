import React from 'react';
import ReactDom from 'react-dom';
import Particle from "./components/Particle"
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Intro from "./components/intro"
import Dropbar from "./components/dropbar"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Experience from "./components/experience";
import Contact from "./components/contact";

ReactDom.render(
    <>
        <Particle/>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Intro/>}/>
                <Route exact path="/skills" element={<Skills/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/experience" element={<Experience/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
        <Dropbar/>
    </>
    ,document.getElementById('root'));
