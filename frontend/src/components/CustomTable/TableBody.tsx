import TableRow from "./TableRow";

import { TableTktType } from "../../utils/types/types";

type TableBodyProps = {
  tkts: TableTktType[];
  setTkts: any;
};

const TableBody = ({ tkts, setTkts }: TableBodyProps) => {
  return (
    <tbody className="divide-y divide-lightGray-300">
      {tkts.map((ticket, index) => (
        <TableRow
          key={index}
          ticket={ticket}
          onChange={(updatedTkt) => {
            const updatedTkts = [...tkts];
            updatedTkts[index] = updatedTkt;
            setTkts(updatedTkts);
          }}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
