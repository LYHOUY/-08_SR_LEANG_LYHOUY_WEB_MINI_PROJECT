import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";

import { getTaskService } from "@/service/task.service";
import React from "react";

const page = async() => {
  const taskData = await getTaskService();
  return (
    <>
      <div className="w-full h-[800px]  flex">
        <div className="w-[70%] h-full  px-6 my-5">
          <ListBoardComponentHeader/>
          {taskData.data.map((task)=>(
            <div className="w-full h-40 bg-yellow-200 mt-7 rounded-xl p-4 flex">
            <div className="w-[14%] h-32 bg-white rounded-xl text-center text-3xl font-bold py-7">
              <h3 className="text-red-700">Wed</h3>
              <p>17</p>
            </div>
            <div className="px-9  w-full h-auto my-8">
              <h1 className="text-3xl font-semibold">{task.taskTitle}</h1>
              <p className="text-xl mt-3">{task.description}</p>
            </div>
            <div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-20">{task.status}
            </button>
            </div>
              
          </div>
          ))}
          
        </div >
        <div className="w-[30%] h-full text-2xl">
        <MonthlyStatisticsComponent/>
        </div>

      </div>
    </>
  );
};

export default page;
