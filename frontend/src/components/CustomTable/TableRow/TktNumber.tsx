type TktNumberProps = {
  tkt_number: string;
  onTktNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TktNumber = ({ tkt_number, onTktNumberChange }: TktNumberProps) => {
  return (
    <td id="tktNumber" className="w-[10%] text-center px-4 py-2">
      <input
        type="text"
        value={tkt_number}
        onChange={onTktNumberChange}
        className="border border-lightGray-300 p-1 rounded-md w-24"
      />
    </td>
  );
};

export default TktNumber;
