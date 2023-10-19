import { useState } from "react";
import "./Content.css"
import Projects from "./Projects";

function Content() {

  const[showproject,setshowproject] = useState(true)

  return showproject ? (
    <div className="bg-white-100 backdrop-blur lg:p-10 lg:h-[90vh] lg:w-[95vw] h-[95vh] w-[90vw] rounded-[10px] border-[1px] z-[1] border-gray-400 pl-[2vw] overflow-scroll  overflow-x-hidden scrollbar-style flex flex-col items-center text-black text-[20px]">
      <h3 className=" lg:text-[5vh] text-[3vh] font-[800] p-3 rounded-xl bg-[#ffffff79] text-[#0F9D58] mt-[5vh] ">
        Happy to announce!
      </h3>
      <h1 className="lg:text-[10vh] text-[7vh] text-center  font-[800] text-[#FBBC04]">
        Project Saadhna
      </h1>
      <div className="mt-10">
      <a className="p-[10px] mb-[5vh] text-white rounded-[10px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "  // Replace with the desired URL
    target="_blank" onClick={()=>(setshowproject(false))} rel="noreferrer">View Projects</a>
      </div>
      <div className = "flex flex-col  w-[90vw]  items-center">
        <div className=" w-[80vw] p-5 border-[2px] rounded-lg mt-[5vh] bg-[#ffffffb6]">
          <h1 className="text-3xl font-bold text-[#2588FB] mb-[5vh]">Objective</h1>
          <p className="ml-[5vw]  mr-[5vw]">
            To empower selected <a className="text-blue-400 underline" href="https://www.abirami.dev/code-vipassana" target="_black" rel="noreferrer">Code Vipassana</a> developers to lead and
            continuously engage in self-paced building with Google Cloud and
            leading more developers in the community to learn, build and grow.
          </p>
        </div>
        <div className=" w-[80vw] p-5 border-[2px] rounded-lg mt-[5vh] bg-[#ffffffb6]">
          <h1 className="text-3xl font-bold text-[#2588FB] mb-[5vh]">
            #ProjectSaadhna
          </h1>
          <p className="ml-[5vw]  mr-[5vw]">
            “Saadhna'' is a Sanskrit word which means to practice what you have
            learnt. Similarly, in this program, the activated developers from
            Code Vipassana seasons will practice their hands-on learning by
            continuously building with Google Cloud.
          </p>
        </div>
        <div className=" w-[80vw] p-5 border-[2px] rounded-lg mt-[5vh] bg-[#ffffffb6]">
          <h1 className="text-3xl font-bold text-[#2588FB] mb-[5vh]">
            Build (Sample use cases)
          </h1>
          <p className="ml-[5vw]  mr-[5vw]">
            These are pluggable use cases that create a quick gateway into
            building with Google Cloud and serve as references when solving
            enterprise-grade solutions, irrespective of the tech-stack of the
            rest of the components in the application. The deliverable is
            intended to be in the form of community authored repos and blog
            posts that contain the use case and the how-to steps.
            <br></br>
            Some examples are:
          </p>
          <ol className="list-decimal pl-4 ml-[5vw] mr-[5vw]">
            <li>Data Migration from MySQL to Cloud Spanner</li>
            <li>Load data to BigQuery and show insights in Looker Studio</li>
            <li>
              Create basic descriptive and predictive log analytics with
              BigQuery data and visualize
            </li>
            <li>
              Replicate changes from Spanner to BigQuery using Change Streams
            </li>
            <li>Build web APIs and deploy serverless-ly</li>
            <li>
              Build custom ML, export it to TF model and deploy it in Vertex
            </li>
            <li>
              Tune Text-based LLM model specific to the log analytics insights
              (refer item #3)
            </li>
          </ol>
        </div>
        <div className=" w-[80vw] p-5 border-[2px] rounded-lg mt-[5vh] bg-[#ffffffb6]">
          <h1 className="text-3xl font-bold text-[#2588FB] mb-[5vh]">Workflow</h1>
          <p className="ml-[5vw]  mr-[5vw]">Interested / selected Code Vipassana practitioners would</p>
          <ol className="list-decimal pl-4 ml-[5vw] mr-[5vw]">
            <li>
              Identify idea for a real-world enterprise-grade accelerator use
              case
            </li>
            <li>Submit idea as an individual or a team (1-2 members)</li>
            <li>
              Pitch minimal viable product in under 2 weeks with $ credits
              required
            </li>
            <li>Get credits provisioned</li>
            <li>Demo solution / steps</li>
            <li>Deliver blog / codelab for it</li>
            <li>
              Conduct hands-on sessions to developers & practitioners through
              Code Vipassana program
            </li>
          </ol>
        </div>
        <div className=" w-[80vw] p-5 border-[2px] rounded-lg mt-[5vh] bg-[#ffffffb6]">
          <h1 className="text-3xl font-bold text-[#2588FB] mb-[5vh]">
            Stretch Goal!
          </h1>
          <p className="ml-[5vw]  mr-[5vw]">
            <ul className="list-disc pl-4">
              <li>
                To enable and accelerate your path to become Champion Innovator
                and GDE grade practitioners through Project Saadhna!
                <ul className="list-disc pl-4">
                  <li>
                    By providing you with guidance and support to contribute to
                    open source projects using Google Cloud
                  </li>
                  <li>
                    Supporting you for publishing blogs, github repos and labs
                    on the projects you are building
                  </li>
                  <li>
                    Providing platform and support for leading your own sessions
                    on the projects you created in the <a className="text-blue-400 underline" href = "https://www.meetup.com/datapreneur-social/" target="_blank" rel="noreferrer">Datapreneur Social</a> meetup
                    group and contributing to community
                  </li>
                </ul>
              </li>
              <li>
                Get certificates and badges for selected Project Saadhna leaders
              </li>
            </ul>
          </p>
        </div>
        <div className=" w-[80vw] p-5 border-[2px] rounded-lg mt-[5vh] bg-[#ffffffb6] " >
          <h1 className="text-3xl font-bold text-[#2588FB] mb-[5vh]">Deliverable</h1>
          <p className="ml-[5vw]  mr-[5vw]">
            The deliverable from Saadhna practitioners will be in the form of <a className="text-blue-400 underline" href = "https://github.com/rominirani/googlecloud-indiacommunity-contributions" target="_blank" rel="noreferrer">repos</a>, community authored blogs (GCP channel in Medium) and labs.
          </p>
        </div>
        <div className=" w-[80vw] p-5 border-[2px] rounded-lg mt-[5vh] bg-[#ffffffb6] mb-5">
          <h1 className="text-3xl font-bold text-[#2588FB] mb-[5vh]">
            Idea Submission Form
          </h1>
          <div className="flex flex-col justify-center items-center">
          <a className="p-[10px] mb-[5vh] text-white rounded-[10px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" href="https://forms.gle/VqEocQv8nCcTQyG58"  // Replace with the desired URL
    target="_blank" rel="noreferrer">Intake Form</a>
          <p >Once you submit, we will follow-up with you.</p>
          </div>
        </div>
      </div>
    </div>
  ) : (<Projects/>)
}

export default Content;
