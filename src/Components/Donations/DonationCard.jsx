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
                className="rounded-xl flex items-center gap-8"
                style={{ backgroundColor: `${bg_color}` }}
            >
                <div className="w-52 h-52 rounded-xl">
                    <img
                        src={picture}
                        className="object-cover h-52 w-52 rounded-s-xl"
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

                    <h2 className="text-2xl font-semibold mt-1 text-dark">
                        {title}
                    </h2>
                    <h2
                        className="text-xl font-semibold mt-1"
                        style={{ color: `${color}` }}
                    >
                        ${price}.00
                    </h2>
                    <button
                        className="px-6 py-3 rounded-lg mt-2"
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
