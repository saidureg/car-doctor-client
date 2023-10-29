import { PropTypes } from "prop-types";
const BookingRow = ({ booking, handleDelete, handleBookingUpdate }) => {
  const { _id, date, services_title, email, img, price, status } = booking;

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            id="btn"
            className="btn btn-sm btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-8">
          <div className="avatar">
            <div className=" w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{services_title}</div>
            <div className="text-sm opacity-50">{price}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{date}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please confirm
          </button>
        )}
      </th>
    </tr>
  );
};

BookingRow.propTypes = {
  booking: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
  handleBookingUpdate: PropTypes.func,
};

export default BookingRow;
