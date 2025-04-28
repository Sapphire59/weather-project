import React from "react";
import Container from "react-bootstrap/Container";
import Weather from "./Weather";
import "./App.css";

function ContainerFooter() {
  return (
    <div>
      <Container>
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by
          <a
            href="https://github.com/Sapphire59?tab=repositories"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Deborah Chacko{" "}
          </a>
          is open-sourced on{" "}
          <a href="" rel="noreferrer" target="_blank">
            Github
          </a>{" "}
          and is hosted on{" "}
          <a href="" rel="noreferrer" target="_blank">
            Netlify
          </a>
        </footer>
      </Container>
    </div>
  );
}

export default ContainerFooter;
