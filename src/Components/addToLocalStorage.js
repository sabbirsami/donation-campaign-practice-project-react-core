import toast from "react-hot-toast";

const getStoredDonation = () => {
    const storedDonation = localStorage.getItem("donation");
    if (storedDonation) {
        return JSON.parse(storedDonation);
    } else {
        return [];
    }
};

const saveDonation = (id) => {
    const storedDonations = getStoredDonation();
    const exists = storedDonations.find((donationId) => donationId === id);
    if (!exists) {
        storedDonations.push(id);
        localStorage.setItem("donation", JSON.stringify(storedDonations));
        toast.success("Successfully donation complete", {
            duration: 4000,
            position: "top-center",
            style: {
                marginTop: "80px",
            },
        });
    } else {
        toast.error(" Donation already completed", {
            duration: 4000,
            position: "top-center",
            style: {
                marginTop: "80px",
            },
        });
    }
};
export { getStoredDonation, saveDonation };
