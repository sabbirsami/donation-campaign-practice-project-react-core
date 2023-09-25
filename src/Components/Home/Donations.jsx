import PropTypes from "prop-types";
import Donation from "./Donation";

Donation.propTypes = {
    donations: PropTypes.object,
};
const Donations = (donations) => {
    return (
        <div>
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-4 gap-8">
                    {donations.donations.map((donation) => (
                        <Donation
                            key={donation.id}
                            donation={donation}
                        ></Donation>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Donations;
