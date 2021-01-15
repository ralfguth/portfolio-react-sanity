import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-blue-600" >
            <div className="container mx-auto flex justify-between" >
                <nav className="flex" >
                    <NavLink
                        to="/"
                        exact
                        className="inflex-flex items-center py-6 px-3 my-4 text-gray-100 hover:text-white text-4xl font-bold ralf tracking-widest"
                        activeClassName="text-white" >
                        Ralf Guth
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
                        activeClassName="text-blue-50 bg-blue-700" >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
                        activeClassName="text-blue-50 bg-blue-700" >
                        Project
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
                        activeClassName="text-blue-50 bg-blue-700" >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6 ">
                    <SocialIcon url="https://twitter.com/rsguth" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/ralf-guth-7404a7161" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.instagram.com/ralfguth_" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
};