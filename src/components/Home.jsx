import React from "react";
import FrontStack from "./FrontStack";
import About from "./About";
import HomeProjects from "./HomeProjects";
import HomeCertifications from "./HomeCeritifications";
import HomeKeepInTouch from "./HomeKeepInTouch";

function Home(){
    return(
        <div>
            <FrontStack></FrontStack>
            <About></About>
            <HomeProjects></HomeProjects>
            <HomeCertifications></HomeCertifications>
            <HomeKeepInTouch></HomeKeepInTouch>
        </div>
    );
}

export default Home;