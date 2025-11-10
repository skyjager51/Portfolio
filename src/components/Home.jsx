import React from "react";
import FrontStack from "./FrontStack";
import About from "./About";
import HomeProjects from "./HomeProjects";

function Home(){
    return(
        <div>
            <FrontStack></FrontStack>
            <About></About>
            <HomeProjects></HomeProjects>
        </div>
    );
}

export default Home;