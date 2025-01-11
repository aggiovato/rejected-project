import { ExtractDataReturn } from "../../../utils/types/types";

type Transfer1Props = {
  tktData: ExtractDataReturn;
};

const Transfer1 = ({ tktData }: Transfer1Props) => {
  return (
    <td id="t1" className="w-[15%] text-center px-4 py-2">
      {tktData.t1 ? (
        <>
          <span>{tktData.t1.date}</span>
          <span className="text-primary-500"> {tktData.t1.time}</span>
        </>
      ) : (
        <span className="text-gray-500">-</span>
      )}
    </td>
  );
};

export default Transfer1;
