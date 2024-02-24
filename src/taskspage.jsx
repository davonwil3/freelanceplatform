import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";

function Taskspage() {
    return (
        <div className="task-container">
            <h1>Tasks</h1>
            <div style={{ display: "flex", flexDirection: "row" }}><p>Current Project</p> </div>
        </div>
    );
}

export default Taskspage;