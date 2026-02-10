import React from "react";

import Shopping_Cart1 from "../assets/portfolio/Shopping_Cart1.png";
import EmpUpdate from "../assets/portfolio/EmpUpdate.png";
import TodoAppUpdate from "../assets/portfolio/TodoAppUpdate.png";
import WeatherApp from "../assets/portfolio/WeatherApp.png";
import TicTac from "../assets/portfolio/TicTac.png";
import CharacterCounter from "../assets/portfolio/CharacterCounter.png";
import AIComPonentGenerator from "../assets/portfolio/AIComPonentGenerator.png";
import ImageEditor from "../assets/portfolio/ImageEditor.png";
import EShop from "../assets/portfolio/EShop.png";
const Projects = () => {
  const projects = [

    {
      id: 1,
      linkGithub:
        "https://github.com/shivam142002/React-Ecommerce",
      linkHosted: "https://react-eccomercekk.netlify.app/",
      src: EShop,
    },
    {
      id: 2,
      linkGithub:
        "https://github.com/shivam142002/React-AI-Component-Generator",
      linkHosted: "https://react-ai-component-generator.vercel.app/",
      src: AIComPonentGenerator,
    },
    {
      id: 3,
      linkGithub:
        "https://github.com/shivam142002/React-shopping-cart-context-with-reducer",
      linkHosted:
        "https://react-shopping-cart-context-with-reducer-five.vercel.app/",
      src: Shopping_Cart1,
    },

    {
      id: 4,
      linkGithub: "https://github.com/shivam142002/vega-web",
      linkHosted: "https://vega-web-wheat.vercel.app/",
      src: ImageEditor,
    },

    {
      id: 5,
      linkGithub:
        "https://github.com/shivam142002/Employee-Management-System--React--CURD-Operation-",
      linkHosted:
        "https://employee-management-system-react-curd-operation.vercel.app/",
      src: EmpUpdate,
    },

    {
      id: 6,
      linkGithub: "https://github.com/shivam142002/Todo-App-React-Redux",
      linkHosted: "https://todo-app-react-redux-six.vercel.app/",
      src: TodoAppUpdate,
    },

    {
      id: 7,
      linkGithub: "https://github.com/shivam142002/Weather-App",
      linkHosted: "https://shivam142002.github.io/Weather-App/",
      src: WeatherApp,
    },

    {
      id: 8,
      linkGithub: "https://github.com/shivam142002/Tic-Tac-Toe",
      linkHosted: "https://shivam142002.github.io/Tic-Tac-Toe/",
      src: TicTac,
    },

    {
      id: 9,
      linkGithub: "https://github.com/shivam142002/Real-time-Character-Counter",
      linkHosted: "https://shivam142002.github.io/Real-time-Character-Counter/",
      src: CharacterCounter,
    },
  ];

  return (
    <>
      <div
        name="Projects"
        className=" bg-gradient-to-b from-black to-gray-800 w-full text-white"
      >
        <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full ">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
              Projects
            </p>

            <p className="py-6 ">Checkout out my Projects!</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 mx-auto  ">
            {projects?.map((project) => (
              <div
                key={project.id}
                className="shadow-md object-fill shadow-gray-600 rounded-lg duration-200 hover:scale-105"
              >
                <img
                  src={project.src}
                  alt="project_image"
                  className="rounded-md object-fill "
                />
                <div className=" flex justify-center items-center">
                  <button
                    onClick={() => window.open(project.linkGithub, "_blank")}
                    className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                  >
                    Code
                  </button>
                  <button
                    onClick={() => window.open(project.linkHosted, "_blank")}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
