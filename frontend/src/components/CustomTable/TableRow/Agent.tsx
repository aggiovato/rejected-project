type AgentProps = {
  agent: string;
  color: string;
};

const Agent = ({ agent, color }: AgentProps) => {
  return (
    <td id="agent" className="w-[5%] px-4 py-1">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-darkPurple-900 font-bold text-center"
        style={{ backgroundColor: color }}
      >
        {agent}
      </div>
    </td>
  );
};

export default Agent;
