type BookingLinkProps = {
  tktData: any;
};

const BookingLink = ({ tktData }: BookingLinkProps) => {
  return (
    <td id="booking" className="w-[15%] text-center px-4 py-2">
      <a
        className="text-center hover:underline group"
        href={tktData.booking_url}
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-primary-500 group-hover:text-opacity-75">
          {tktData.booking_slice}
        </span>
        <span className="text-secondary-800 font-bold group-hover:text-opacity-75">
          {tktData.booking_iata}
        </span>
      </a>
    </td>
  );
};

export default BookingLink;
