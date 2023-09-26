import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

import DonationCard from "./DonationCard";
import { useEffect, useState } from "react";
import { getStoredDonation } from "../addToLocalStorage";

const AllDonation = () => {
    const donations = useLoaderData();

    const [clickDonation, setClickDonation] = useState([]);

    useEffect(() => {
        const storedId = getStoredDonation();
        console.log(storedId, donations);
        if (donations.length > 0) {
            const storedData = donations.filter((donation) =>
                storedId.includes(donation.id)
            );
            console.log(storedData, donations, storedId);
            setClickDonation(storedData);
        }
    }, [donations]);
    const [showDataNumber, setShowDataNumber] = useState(4);
    return (
        <div>
            <Header />
            <div className="container mx-auto py-16">
                <div className="grid lg:grid-cols-2 grid-cols-1 md:mx-4 mx-1 gap-8">
                    {clickDonation.slice(0, showDataNumber).map((donation) => (
                        <DonationCard
                            key={donation.id}
                            donation={donation}
                        ></DonationCard>
                    ))}
                </div>
                <div className="text-center pt-6">
                    <button
                        className={`px-6 py-3 rounded-lg mt-2 bg-rose-500 text-white ${
                            showDataNumber === donations.length && "hidden"
                        }`}
                        onClick={() => setShowDataNumber(donations.length)}
                    >
                        See All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllDonation;
