import { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import CustomButton from "../customs/CustomButton";

import {
  randomizeAgent,
  randomizaColor,
} from "../../utils/helpers/tkt_row_helpers";

import { TableTktType } from "../../utils/types/types";

const emptyTkt: TableTktType = {
  agent: randomizeAgent(),
  agentColor: randomizaColor(),
  tktNumber: "",
  subject: "",
  booking: null,
  t1: null,
  rejSupp: null,
  dtt: null,
  actions: null,
  tags: null,
};

const CustomTable = () => {
  const [tkts, setTkts] = useState<TableTktType[]>([emptyTkt]);

  const handleAddTicket = () => {
    const newTkt = { ...emptyTkt, agent: randomizeAgent() };
    setTkts((prevTkts) => [...prevTkts, newTkt]);
  };

  return (
    <>
      <div className="p-6 bg-lightGray-100 rounded-lg shadow-md">
        <table className="w-full border-collapse bg-white rounded-lg">
          {/* Table Header with only the first row */}
          <TableHeader />
          {/* Table Body with all the rows */}
          <TableBody tkts={tkts} setTkts={setTkts} />
        </table>
      </div>

      {/* Button to add a new ticket */}
      <div className="flex justify-center mt-4">
        <CustomButton type={"accent"} onClick={handleAddTicket}>
          + Add
        </CustomButton>
      </div>
    </>
  );
};

export default CustomTable;
