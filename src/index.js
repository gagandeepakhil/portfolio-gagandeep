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
import Copy from './components/copyright';

ReactDom.render(
    <>
        <Particle/>
        <BrowserRouter>
            <Routes>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/" element={<Intro/>}/>
            </Routes>
        </BrowserRouter>
        <Dropbar/>
        <Copy/>
    </>
    ,document.getElementById('root'));
