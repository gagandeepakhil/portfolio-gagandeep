import React from "react";
import agenticWorkflows from "../agenticWorkflows";

function AgenticWorkflows() {
  return (
    <>
      <h1>🤖AGENTIC WORKFLOWS🤖</h1>
      <div id="agentic">
        {agenticWorkflows.map((wf) => {
          return (
            <div className="agentic-card">
              <img src={wf.icon} alt={wf.title} />
              <h4>{wf.title}</h4>
              <p>{wf.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AgenticWorkflows;
