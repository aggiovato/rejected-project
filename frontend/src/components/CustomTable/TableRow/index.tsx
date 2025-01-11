import { useState } from "react";
import { useToast } from "../../../contexts/ToastProvider";

import Agent from "./Agent";
import TktNumber from "./TktNumber";
import Subject from "./Subject";
import BookingLink from "./BookingLink";
import Transfer1 from "./Transfer1";
import Supplier from "./Supplier";
import TimeToTranfer from "./TimeToTranfer";
import Actions from "./Actions";
import Status from "./Status";

import {
  extractData,
  validateTktNumber,
} from "../../../utils/helpers/tkt_row_helpers";

import { TableTktType, ExtractDataReturn } from "../../../utils/types/types";

type TableRowProps = {
  ticket: TableTktType;
  onChange: (updatedTkt: TableTktType) => void;
};

const TableRow = ({ ticket, onChange }: TableRowProps): JSX.Element => {
  const [tktData, setTktData] = useState<ExtractDataReturn>({
    booking_code: "",
    booking_slice: "",
    booking_iata: "",
    booking_url: "",
    t1: null,
    t2: null,
    rej_supp: "",
    time_to_t1: { time: "", isUrgent: false },
    error: null,
  });
  const [subject, setSubject] = useState<string>("");
  const { addToast } = useToast();

  const handleTktNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTktNumber = e.target.value;
    onChange({ ...ticket, tktNumber: updatedTktNumber });
    try {
      validateTktNumber(updatedTktNumber);
    } catch (error: any) {
      addToast(error.message, "error");
    }
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSubject = e.target.value;
    onChange({ ...ticket, subject: updatedSubject });
    setSubject(updatedSubject);

    try {
      const data: ExtractDataReturn = extractData(updatedSubject);
      setTktData(data);
      !ticket.subject && addToast("Ticket added successfully", "success");
    } catch (error: any) {
      addToast(error.message, "error");
    }
  };

  const handleEdit = () => {
    /* Lógica para editar */
  };

  const handleDelete = () => {
    /* Lógica para eliminar */
  };

  return (
    <tr className="hover:bg-lightGray-100 transition">
      <Agent agent={ticket.agent} color={ticket.agentColor} />
      <TktNumber
        tkt_number={ticket.tktNumber}
        onTktNumberChange={handleTktNumberChange}
      />
      <Subject subject={subject} onSubjectChange={handleSubjectChange} />
      <BookingLink tktData={tktData} />
      <Transfer1 tktData={tktData} />
      <Supplier tktData={tktData} />
      <TimeToTranfer subject={subject} />
      <Actions onEdit={handleEdit} onDelete={handleDelete} />
      <Status />
    </tr>
  );
};

export default TableRow;
