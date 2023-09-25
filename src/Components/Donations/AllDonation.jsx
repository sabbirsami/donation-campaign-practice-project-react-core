import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

import DonationCard from "./DonationCard";
import { useState } from "react";

const AllDonation = () => {
    const donations = useLoaderData();
    const [showDataNumber, setShowDataNumber] = useState(4);
    return (
        <div>
            <Header />
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-2 gap-8">
                    {donations.slice(0, showDataNumber).map((donation) => (
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
