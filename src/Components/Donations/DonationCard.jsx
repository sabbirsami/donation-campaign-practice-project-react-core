import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DonationCard({ donation }) {
    const {
        id,
        bg_color,
        color,
        title,
        category,
        category_bg,
        picture,
        price,
    } = donation;
    return (
        <div>
            <div
                className="rounded-xl flex items-center md:gap-8 gap-3"
                style={{ backgroundColor: `${bg_color}` }}
            >
                <div className="md:w-52 w-32 h-52 rounded-xl">
                    <img
                        src={picture}
                        className="object-cover md:w-52 w-32 h-52 rounded-s-xl"
                        alt=""
                    />
                </div>
                <div className="">
                    <span
                        className="text-sm p-1 rounded-sm"
                        style={{
                            backgroundColor: `${category_bg}`,
                            color: `${color}`,
                        }}
                    >
                        {category}
                    </span>

                    <h2 className="md:text-3xl text-xl font-semibold mt-1 text-dark">
                        {title}
                    </h2>
                    <h2
                        className="md:text-xl text-md font-semibold mt-1"
                        style={{ color: `${color}` }}
                    >
                        ${price}.00
                    </h2>
                    <button
                        className="md:px-6 px-3 md:py-3 py-2 rounded-lg mt-2 md:text-lg text-sm"
                        style={{
                            backgroundColor: `${color}`,
                            color: `#ffffff`,
                        }}
                    >
                        <Link to={`/donation/${id}`}>Show Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
};

export default DonationCard;
