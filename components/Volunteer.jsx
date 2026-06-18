import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default () => (
  <div className="w-full pb-20 lg:pb-40">
    <div className="container mx-auto lg:w-full w-5/6">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-center lg:items-start">
          <div>
            <Badge>Volunteer</Badge>
          </div>
          <div className="flex gap-2 items-center lg:items-start  flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              My Volunteer Journey
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-center lg:text-left">
                I have been actively involved in volunteering for various events and programs. Here are some of the events I have volunteered for.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-muted h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col shadow-lg rounded-xl hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
            style={{
              backgroundImage: `url('/volunteer_yarl.jpg')`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight font-semibold">
                Project Lead & Speaker
              </h3>
              <h3 className="text-sm tracking-tight">
                YarlInsight, IEEE Summerschool on Software Engineering
              </h3>
              {/* <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p> */}
            </div>
          </div>
          <div
            className="bg-muted   aspect-square p-6 flex justify-between flex-col shadow-lg rounded-xl hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
            style={{
              backgroundImage: `url('/volunterr_1.jpeg')`,
              backgroundSize: "cover",
            }}
          >
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl text-white font-semibold tracking-tight">
                Chairperson
              </h3>
              <h3 className="text-sm text-white tracking-tight">
                IEEE Student Branch of University of Jaffna
              </h3>
            </div>
          </div>

          <div
            className="bg-muted aspect-square p-6 flex justify-between flex-col shadow-xl rounded-xl hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
            style={{
              backgroundImage: `url('/summerschool.jpeg')`,
              backgroundSize: "cover",
            }}
          >
            {/* <User className="w-8 h-8 stroke-1" /> */}
            <div className="w-8 h-8"></div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight text-white font-semibold">
                Web Master
              </h3>
              <h3 className="text-sm text-white tracking-tight">
                IEEE Summer School on Computer Intelligence
              </h3>
            </div>
          </div>
          {/* <div
            className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col"
            style={{
              backgroundImage: `url('/flyer.jpeg')`,
              backgroundSize: "cover",
            }}
          >
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div> */}

          <div
            className="bg-muted aspect-square p-6 flex justify-between flex-col shadow-xl rounded-xl hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
            style={{
              backgroundImage: `url('/flyer.jpeg')`,
              backgroundSize: "cover",
            }}
          >
            {/* <User className="w-8 h-8 stroke-1" /> */}
            <div className="w-8 h-8"></div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight text-white font-semibold">
                Speaker
              </h3>
              <h3 className="text-sm text-white tracking-tight">
                ReactJs Workshop
              </h3>
            </div>
          </div>

          <div
            className="bg-muted aspect-square p-6 flex justify-between flex-col shadow-xl rounded-xl hover:scale-105 transition-transform duration-500 hover:cursor-pointer"
            style={{
              backgroundImage: `url('/postman.jpeg')`,
              backgroundSize: "cover",
            }}
          >
            {/* <User className="w-8 h-8 stroke-1" /> */}
            <div className="w-8 h-8"></div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight text-black font-semibold">
                Speaker
              </h3>
              <h3 className="text-sm text-black tracking-tight">
                Postman Student Expert Program
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
