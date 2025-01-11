import { useState, useEffect } from "react";
import { extractData } from "../../../utils/helpers/tkt_row_helpers";

type TimeToTranferProps = {
  subject: string;
};

const TimeToTranfer = ({ subject }: TimeToTranferProps) => {
  const [timeData, setTimeData] = useState({
    time: "",
    isUrgent: false,
  });

  useEffect(() => {
    if (!subject) {
      setTimeData({ time: "", isUrgent: false });
      return;
    }

    const interval = setInterval(() => {
      const extractedData = extractData(subject);
      if (extractedData.error) {
        setTimeData({ time: extractedData.error, isUrgent: false });
      } else {
        setTimeData(extractedData.time_to_t1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [subject]);

  return timeData.time ? (
    <td
      className={`text-center text-sm font-semibold ${
        timeData.isUrgent ? "text-red-500" : "text-gray-500/90"
      }`}
    >
      {timeData.time}
    </td>
  ) : (
    <td className="text-center text-sm font-semibold text-gray-500">-</td>
  );
};

export default TimeToTranfer;
