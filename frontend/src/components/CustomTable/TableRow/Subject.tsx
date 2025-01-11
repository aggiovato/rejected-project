type SubjectProps = {
  subject: string;
  onSubjectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Subject = ({ subject, onSubjectChange }: SubjectProps) => {
  return (
    <td id="subject" className="w-[20%] text-left px-4 py-2">
      <input
        type="text"
        value={subject}
        onChange={onSubjectChange}
        className="border border-lightGray-300 p-1 rounded-md w-full"
      />
    </td>
  );
};

export default Subject;
