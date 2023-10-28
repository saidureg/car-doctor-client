import { PropTypes } from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
const ServicesCard = ({ service }) => {
  const { title, price, img } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl h-[220px] w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>

        <div className="text-[#FF3811] flex items-center">
          <p className=" ">Price: ${price}</p>
          <p className="lg:ml-48">
            <AiOutlineArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServicesCard;
