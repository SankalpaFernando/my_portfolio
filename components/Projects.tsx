import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default () => (
  <div className="w-full py-10 lg:pb-32">
    <div className="container mx-auto lg:w-full w-5/6">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col mb-3 items-center lg:items-start">
          <div>
            <Badge>Projects</Badge>
          </div>
          <div className="flex gap-2 items-center lg:items-start flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center lg:text-left">
              My Projects
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-center lg:text-left">
              Here are some of the projects I have worked on. Each project
              showcases my skills in various technologies and tools.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="http://akuradev.netlify.app" className=" lg:col-span-2">
             <div
            className="hidden lg:flex bg-muted rounded-xl shadow-lg h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto  justify-between flex-col hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
            style={{
              backgroundImage: `url(project_1.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col gap-2">
              <img
                src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg"
                alt="logo"
                className="lg:w-8 lg:h-8 w-4 h-4 rounded-full"
              />
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                alt="logo"
                className="lg:w-8 lg:h-8 w-4 h-4  rounded-full"
              />
              <img
                src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg"
                alt="logo"
                className="lg:w-8 lg:h-8 w-4 h-4  rounded-full"
              />
              <img
                src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
                alt="logo"
                className="lg:w-8 lg:h-8 w-4 h-4 rounded-full"
              />
            </div>
            <div className="flex flex-col pt-2">
              <h3 className="text-xl tracking-tight ">Shilpa.live</h3>
              <p className="text-muted-foreground max-w-lg text-sm text-gray-600">
                Shilpa is a platform with key information on government
                university courses, cut-off scores, z-scores, and syllabus,
                helping them make informed academic decisions.
              </p>
            </div>
          </div>
          </a>
         
        <a href="http://society.jfn.ac.lk/ieee">
        <div
            className="hidden lg:flex bg-muted rounded-xl shadow-lg  aspect-square p-6 justify-between flex-col hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
            style={{
              backgroundImage: `url(project_3.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex gap-2">
              <img
                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                alt="logo"
                className="w-8 h-8 rounded-full"
              />
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="logo"
                className="w-8 h-8 rounded-full"
              />
              {/* <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/7141f948f6ac63982051de0aafdad91da3a1aa39/icons/file_type_ejs.svg" alt="logo" className="w-8 h-8 rounded-full" /> */}
              <img
                src="https://cdn.prod.website-files.com/65f32e39439754d9a4aa7fb2/663e0e29a3f86da5c07ace62_hygraph_logo.png"
                alt="logo"
                className="w-auto h-6 my-auto rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">
                Official Website of IEEE-SB-UoJ
              </h3>
              <p className="text-muted-foreground max-w-xs text-sm text-gray-600">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
        </a>
          <a href="https://algo-viz-dev.vercel.app/">
            <div
            className="hidden lg:flex xbg-muted rounded-xl shadow-lg aspect-square p-6 justify-between flex-col hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
            style={{
              backgroundImage: `url(project_4.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex gap-2">
              <img
                src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg"
                alt="logo"
                className="w-8 h-8 rounded-full"
              />
              <img
                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                alt="logo"
                className="w-8 h-8 rounded-full"
              />
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="logo"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">AlgoViz</h3>
              <p className="text-muted-foreground max-w-md text-sm text-gray-600">
                AlgoViz is an algorithm visualization platform designed to help
                users understand complex algorithms through interactive
                visualizations. It allows users to explore algorithmic concepts
                in a more intuitive way.
              </p>
            </div>
          </div>
          </a>
          


         <a href="http://yarlinsight.me" className=" lg:col-span-2">
         <div
            className="hidden lg:flex bg-muted rounded-xl shadow-lg h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto justify-between flex-col hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
            style={{
              backgroundImage: `url(project_2.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex  gap-2">
              <img
                src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                alt="logo"
                className="w-8 h-8 "
              />
              <img
                src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg"
                alt="logo"
                className="w-8 h-8 "
              />
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="logo"
                className="w-8 h-8 "
              />
              <img
                src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                alt="logo"
                className="w-8 h-8"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight text-white">
              Promotion Website of YarlInsight
              </h3>
              <p className="text-muted-foreground max-w-lg text-gray-200 text-sm">
              YarlInsight is a two-day summer school event organized by the
                IEEE Student Branch of the University of Jaffna, in
                collaboration with IEEE Young Professionals
              </p>
            </div>
          </div>
         </a>


<a href="http://akuradev.netlify.app">
   <div
            className="lg:hidden flex  flex-col gap-2
        bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 hover:cursor-pointer "
          >
            <div
              style={{
                backgroundImage: `url(project_1.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="bg-muted  aspect-video mb-2 rounded-t-xl"
            >
              <div className="flex justify-center items-center mt-2  gap-2">
         
              </div>
            </div>
            {/* <div className="bg-muted rounded-md aspect-video mb-2"></div> */}
            <div className="px-4 pb-4">
              <h3 className="text-xl font-semibold tracking-tight">
              Shilpa.live
              </h3>
              <p className="text-muted-foreground max-w-lg my-2 text-sm text-gray-600">
              Shilpa is a platform with key information on government
                university courses, cut-off scores, z-scores, and syllabus,
                helping them make informed academic decisions.
              </p>
            </div>
          </div>
</a>

<a href="http://society.jfn.ac.lk/ieee">
<div
            className="lg:hidden flex  flex-col gap-2
        bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 hover:cursor-pointer "
          >
            <div
              style={{
                backgroundImage: `url(project_3.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="bg-muted  aspect-video mb-2 rounded-t-xl"
            >
              <div className="flex justify-center items-center mt-2  gap-2">
         
              </div>
            </div>
            {/* <div className="bg-muted rounded-md aspect-video mb-2"></div> */}
            <div className="px-4 pb-4">
              <h3 className="text-xl font-semibold tracking-tight">
              Official Website of IEEE-SB-UoJ
              </h3>
              <p className="text-muted-foreground max-w-lg my-2 text-sm text-gray-600">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever.
              </p>
            </div>
          </div>
</a>
         
        
          <a href="https://algo-viz-dev.vercel.app/">
          <div
            className=" lg:hidden flex  flex-col gap-2
        bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 hover:cursor-pointer "
          >
            <div
              style={{
                backgroundImage: `url(project_4.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="bg-muted aspect-video mb-2 rounded-t-xl"
            >
              <div className="flex justify-center items-center mt-2  gap-2">
                
              </div>
            </div>
            {/* <div className="bg-muted rounded-md aspect-video mb-2"></div> */}
            <div className="px-4 pb-4">
              <h3 className="text-xl font-semibold tracking-tight">
                AlgoViz
              </h3>
              <p className="text-muted-foreground max-w-lg my-2 text-sm text-gray-600">
              AlgoViz is an algorithm visualization platform designed to help
                users understand complex algorithms through interactive
                visualizations. It allows users to explore algorithmic concepts
                in a more intuitive way.
              </p>
            </div>
          </div>
          </a>
            <a href="http://yarlinsight.me">
            <div
            className="lg:hidden flex flex-col gap-2
        bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 hover:cursor-pointer "
          >
            <div
              style={{
                backgroundImage: `url(project_2.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="bg-muted  aspect-video mb-2 rounded-t-xl"
            >
              <div className="flex justify-center items-center mt-2  gap-2">
               
              </div>
            </div>
            {/* <div className="bg-muted rounded-md aspect-video mb-2"></div> */}
            <div className="px-4 pb-4">
              <h3 className="text-xl font-semibold tracking-tight">
                Promotion Website of YarlInsight
              </h3>
              <p className="text-muted-foreground max-w-lg my-2 text-sm text-gray-600">
                YarlInsight is a two-day summer school event organized by the
                IEEE Student Branch of the University of Jaffna, in
                collaboration with IEEE Young Professionals
              </p>
            </div>
          </div>
            </a>
        </div>
      </div>
    </div>
  </div>
);
