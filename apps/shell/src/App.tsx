import React from "react";
import ReactDOM from "react-dom";

import "@career-web/ui-kit/index.css";
import { Button, Icon } from "@career-web/ui-kit";

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