import React, { useEffect, useState } from "react";
import { getDefaultLayout } from "@/components/layout/default-layout";

import styled from "styled-components";
import Hugus from "@/components/pages/projects/Hugus";
import RealTimeWork from "@/components/pages/projects/RealTimeWork";
import Umokmin from "@/components/pages/projects/Umokmin";

const Head = styled.section`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: black;
  height: 120px;
  width: 100%;
`;
const ProjectsStyle: any = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 114px;
  background-color: black;

  .container {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(17, 17, 19);
    transition: all 1s ease-in-out;
    /* transform: translateY(${(props: any) => (props.scroll ? "-100px" : "0px")}); */

    .list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      height: 80px;
      margin: 0;
      padding: 0;
      width: 50%;
      transition: all 1s ease-in-out;

      li {
        color: white;
        list-style: none;
        justify-self: center;
        align-self: center;

        button {
          /* font-family: AppleSDGothicNeoEB00; */
          font-size: 30px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-weight: bolder;
          line-height: 50px;
          transition: all 0.3s ease-in-out;

          span {
            color: white;
            opacity: 0.3;
            font-size: 20px;
          }

          :hover {
            color: #9ea4cd;

            span {
              opacity: 1;
            }
          }
        }

        #hugus {
          ${(props: any) => props.type === "hugus" && "color:#ffa500;span{opacity:1}"};
        }

        #work {
          ${(props: any) => props.type === "work" && "color:#ec6375;span{opacity:1}"};
        }

        #umokmin {
          ${(props: any) => props.type === "umokmin" && "color:#79928e;span{opacity:1}"};
        }
      }
    }

    .bar {
      width: 50%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      div {
        transition: opacity 0.7s ease-in-out;
        width: 70%;
        justify-self: center;
        height: 2px;
      }

      #hugus {
        opacity: ${(props: any) => (props.type === "hugus" ? "1" : "0")};
        background-color: #ffa500;
      }

      #work {
        opacity: ${(props: any) => (props.type === "work" ? "1" : "0")};
        background-color: #ec6375;
      }

      #umokmin {
        opacity: ${(props: any) => (props.type === "umokmin" ? "1" : "0")};
        background-color: #79928e;
      }
    }
  }

  @media (max-width: 1200px) {
    .container {
      .list {
        width: 80%;
      }

      .bar {
        width: 80%;
      }
    }
  }

  @media (max-width: 600px) {
    .container {
      .list {
        width: 100%;
        height: 60px;

        li {
          button {
            font-size: 25px;

            span {
              font-size: 15px;
            }
          }
        }
      }

      .bar {
        width: 100%;
      }
    }
  }
`;

const Projects = () => {
  const [type, setType] = useState("hugus");
  const [scroll, setScroll] = useState(false);

  const wheelEvent = (e: WheelEvent) => {
    // console.log(e.deltaY);
    if (e.deltaY > 0) {
      setScroll(true);
    }
    // else {
    //   setScroll(false);
    // }
  };

  const Project = () => {
    switch (type) {
      case "hugus": {
        return <Hugus />;
      }
      case "work": {
        return <RealTimeWork />;
      }
      case "umokmin": {
        return <Umokmin />;
      }
    }
  };

  useEffect(() => {
    // document.querySelector("body").style.overflow = "visible";
    // document.querySelector("#header").style.backgroundColor = "black";
  }, []);

  return (
    <ProjectsStyle onWheel={wheelEvent} scroll={scroll} type={type}>
      <Head />
      <div className="container">
        <ul className="list">
          <li>
            <button id="hugus" onClick={() => setType("hugus")}>
              H<span>ugus</span>
            </button>
          </li>
          <li>
            <button id="work" onClick={() => setType("work")}>
              R<span>ealTimeWork</span>
            </button>
          </li>
          <li>
            <button id="umokmin" onClick={() => setType("umokmin")}>
              U<span>mokmin</span>
            </button>
          </li>
        </ul>
        <div className="bar">
          <div id="hugus"></div>
          <div id="work"></div>
          <div id="umokmin"></div>
        </div>
      </div>
      <Project />
    </ProjectsStyle>
  );
};

Projects.getLayout = getDefaultLayout;

export default Projects;
