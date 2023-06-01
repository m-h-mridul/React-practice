import React from "react";
// import Home from './pages/home';
// import Mantors from './pages/mantors';
// import Catagories from './pages/catagories.jsx';
// import Participant from './pages/participant';
// import Sidebar from './component/sidebar';

const sidebar = () => {
    const menuitem=[
        {
            path:"/",
            name:"Home",
            icon:"home"
        },
        {
            path:"/mantors",
            name:"Mantors",
            icon:"home"
        },
        {
            path:"/Catagories",
            name:"Catagories",
            icon:"home"
        },
        {
            path:"/participant",
            name:"Participant",
            icon:"home"
        },

    ];
    return (
        <div>
            <h1>from slider</h1>
        </div>
    )
}

export default sidebar;