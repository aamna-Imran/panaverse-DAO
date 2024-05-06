import { Button } from "@/components/ui/button";
import React from "react";
import { client } from "../sanity/client";
import Tracks from "./Tracks";

async function getMainData() {
  const query = `*[_type == 'specializedPage'][0]{
        heading1,
          para,
          q4,
          q5
      }`;
  const data = await client.fetch(query);

  return data;
}
async function getTracksData() {
  const query = `*[_type == 'tracksPage'][0]{
        tracks
      }`;
  const data = await client.fetch(query);

  return data;
}

async function Specialized() {
  const trackData = await getTracksData();
  const mainData = await getMainData();

  return (
    <section className="max-container padding-container w-full py-10 ">
      <div className="mb-10">
        <h1 className="lg:bold-52 bold-32 mb-4 ">Specialized Track</h1>
        <p className="text-muted-foreground lg:w-[65%] w-full lg:text-[1rem] text-[0.8rem] ">
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each.
        </p>
      </div>
      <div className="flex gap-5 justify-between flex-col lg:flex-row">
        <div className="flex border border-gray-200 py-4 px-6 mt-3 lg:w-[60%] w-full rounded-lg shadow-xl lg:sticky lg:top-20 relative lg:h-[600px] sm:h-[550px] h-[900px]  ">
          <div className=" flex flex-col gap-4 items-start pt-5 ">
            <p className="font-medium text-teal-700">Specialized Track</p>
            <h1 className="bold-32">{mainData.heading1}</h1>
            <p className="text-gray-800 lg:text-[1rem] text-[0.8rem]">
              {mainData.para}
            </p>
            <Button
              variant={"outline"}
              className=" text-sm md:text-lg rounded-md px-10 border border-teal-700 text-teal-700 lg:py-5 py-2 mt-2"
            >
              Learn More
            </Button>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative blur-bg p-4 border border-gray-100 w-full rounded-lg h-44  py-5 ">
                <div className="bold-90 text-blue-50 absolute right-8 -z-30">
                  4
                </div>
                <div className=" flex flex-col lg:h-44 h-32 gap-2 w-[90%]">
                  <h1 className="lg:bold-20 bold-16 ">Quater 4</h1>
                  <p className="text-gray-800 text-[0.9rem] ">{mainData.q4}</p>
                </div>
              </div>

              <div className="relative blur-bg p-4 border border-gray-100 w-full rounded-lg h-44  py-5 ">
                <div className="bold-90 text-blue-50 absolute right-8 -z-30">
                  5
                </div>
                <div className=" flex flex-col lg:h-44 h-32 gap-2 w-[90%]">
                  <h1 className="lg:bold-20 bold-16 ">Quater 5</h1>
                  <p className="text-gray-800 text-[0.9rem] ">{mainData.q5}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] w-full mt-2">
           <Tracks/>
        </div>
      </div>
    </section>
  );
}

export default Specialized;
