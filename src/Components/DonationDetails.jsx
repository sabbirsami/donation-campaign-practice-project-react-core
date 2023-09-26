import { useLoaderData, useParams } from "react-router-dom";
import Header from "./Header/Header";
import { saveDonation } from "./addToLocalStorage";

function DonationDetails() {
    const data = useLoaderData();
    const { donationId } = useParams();
    const donationIdInt = parseFloat(donationId);
    const selectedDonation = data.find(
        (donation) => donation.id === parseFloat(donationId)
    );
    const handleSaveDonation = () => {
        saveDonation(donationIdInt);
    };
    return (
        <>
            <Header />
            <div className="mx-2">
                <div className="container mx-auto py-16">
                    <div className="lg:w-1/2 w-full mx-auto ">
                        <div className="relative">
                            <img
                                className="w-full object-cover rounded-xl"
                                src={selectedDonation.picture}
                                alt=""
                            />
                            <div className="absolute bottom-0 bg-slate-900/30  py-6 px-6 w-full backdrop-brightness-75 rounded-b-2xl">
                                <button
                                    className="px-6  text-white rounded-lg py-3"
                                    onClick={() =>
                                        handleSaveDonation(donationId)
                                    }
                                    style={{
                                        backgroundColor: `${selectedDonation.color}`,
                                    }}
                                >
                                    Donate ${selectedDonation.price}
                                </button>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold py-6">
                            {selectedDonation.title}
                        </h2>
                        <p className="text-normal pb-6 text-gray-800">
                            {selectedDonation.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DonationDetails;
