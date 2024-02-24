import React from "react";
import { useState } from "react";
import Taskspage from "./taskspage";

function Dashboard () {
    const [dashboard, setDash] = useState(<Taskspage />);
   
    return (
        <div>
            
            <div className="homepage">
                <div className="left-panel">
                      
                </div>
                <div className="dashboard">
                    {dashboard}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;