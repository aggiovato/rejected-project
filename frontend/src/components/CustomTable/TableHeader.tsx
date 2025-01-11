const TableHeader = () => {
  return (
    <thead className="bg-primary-500 text-white text-align-middle">
      <tr>
        <th className="w-[5%] px-4 py-6 text-center text-base font-bold rounded-tl-lg">
          Agent
        </th>
        <th className="w-[10%] px-4 py-6 text-center text-base font-bold">
          Ticket #
        </th>
        <th className="w-[20%] px-4 py-6 text-left text-base font-bold">
          Subject
        </th>
        <th className="w-[15%] px-4 py-6 text-center text-base font-bold">
          Booking #
        </th>
        <th className="w-[15%] px-4 py-6 text-center text-base font-bold">
          T1 Day
        </th>
        <th className="w-[15%] px-4 py-6 text-center text-base font-bold">
          Rejecting
        </th>
        <th className="w-[10%] px-4 py-6 text-center text-base font-bold">
          Time to T1
        </th>
        <th className="w-[10%] px-4 py-6 text-center text-base font-bold">
          Actions
        </th>
        <th className="w-[10%] px-4 py-6 text-center text-base font-bold rounded-tr-lg">
          Status
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
