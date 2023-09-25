import PropTypes from "prop-types";

Donation.propTypes = {
    donation: PropTypes.object.isRequired,
};

function Donation({ donation }) {
    const { bg_color, color, title, category, category_bg } = donation;
    console.log(bg_color);
    return (
        <div className="mb-4">
            <div className="h-3/4">
                <img
                    className="object-fit w-full h-full rounded-t-lg"
                    src={donation.img}
                    alt=""
                />
            </div>
            <div
                className="px-6  py-6 rounded-b-lg"
                style={{ backgroundColor: `${bg_color}` }}
            >
                <span
                    className="text-sm p-1 rounded-sm"
                    style={{
                        backgroundColor: `${category_bg}`,
                        color: `${color}`,
                    }}
                >
                    {category}
                </span>

                <h2
                    className="text-2xl font-semibold mt-1"
                    style={{ color: `${color}` }}
                >
                    {title}
                </h2>
            </div>
        </div>
    );
}

export default Donation;
