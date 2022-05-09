import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { JiraIssuePage } from "./sova-pege";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <JiraIssuePage />
  </StrictMode>,
  rootElement
);
