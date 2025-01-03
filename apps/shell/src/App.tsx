import React from "react";
import ReactDOM from "react-dom";

import "@career-web/ui-kit/index.css";
import { Button, Icon } from "@career-web/ui-kit";
import { test } from "@career-web/shell-router";

test();

// Main Page
const App = () => (
    <div className="container">
        <div>Name: shell</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Empty CSS</div>
        <div>
            <Button>Hello</Button>
        </div>
        <div>
            <Icon.Briefcase />
        </div>
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
