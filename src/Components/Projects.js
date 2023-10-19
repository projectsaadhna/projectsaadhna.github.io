import React from "react";
import todo from "../images/todo.png";
import vertexai from "../images/vertexai.gif";

function Projects() {
  const projects = [
    {
      name: "Google Cloud Vertex AI and Svelte Kit - Vertex Summarizer",
      link: "https://medium.com/google-cloud/google-cloud-vertex-ai-and-svelte-kit-vertex-summarizer-5db792d0d80e",
      author: "Bhaarat",
      img: vertexai,
    },
    {
      name: "Building a Cloud To-Do React JS App on Google Cloud",
      link: "https://medium.com/google-cloud/building-a-cloud-to-do-react-js-app-on-google-cloud-ce88f2a2d3dc",
      author: "Akshay",
      img: todo,
    },
  ];

  return (
    <div className="bg-white-100 backdrop-blur lg:p-10 lg:h-[90vh] lg:w-[95vw] h-[95vh] w-[90vw] rounded-[10px] border-[1px] z-[1] border-gray-400 pl-[2vw] overflow-scroll  overflow-x-hidden scrollbar-style flex flex-col items-center text-black text-[20px]">
      <h3 className=" lg:text-[5vh] text-[3vh] font-[800] p-3 rounded-xl bg-[#ffffff79] text-[#0F9D58] mt-[5vh] ">
        Saadhna Projects
      </h3>
      <a className="p-[10px] mb-[5vh] text-white rounded-[10px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  mt-10"  // Replace with the desired URL
     href="" rel="noreferrer">Home</a>
      <div className="flex flex-col justify-center items-center w-screen">
        {projects.map((o, key) => (
          <div key={key} className="text-black w-[80vw] m-5 md:m-10 grid grid-cols-1 md:grid-cols-2">
            <div>
              <img className="md:w-[30vw] rounded-xl" src={o.img} alt="" />
            </div>
            <div className="flex flex-col text-center mt-5 md:mt-0 items-center justify-around md:items-start">
              <h1>{o.name}</h1>
              <h3><strong>Author:</strong> {o.author}</h3>
              <a
                className="p-[10px] mt-5 md:mt-0  mb-[5vh] text-white rounded-[10px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
                href={o.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
