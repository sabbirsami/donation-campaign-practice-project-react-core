import { useEffect, useState } from "react";
import Donation from "./Donation";

const Donations = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setDonations(data));
    }, []);
    console.log(donations);
    return (
        <div>
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-4 gap-8">
                    {donations.map((donation) => (
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
