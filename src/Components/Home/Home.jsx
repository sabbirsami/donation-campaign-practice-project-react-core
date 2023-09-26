import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Banner from "./Banner";
import Donations from "./Donations";

const Home = () => {
    const [donations, setDonations] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                if (search) {
                    const newData = data.filter(
                        (donation) =>
                            donation.category.toLowerCase() ===
                            search.toLowerCase()
                    );
                    setDonations(newData);
                } else {
                    setDonations(data);
                }
            });
    }, [search]);

    return (
        <>
            <div className="bg-[url('https://i.ibb.co/XyjZgJ9/bg.png')] bg-cover ">
                <div className="bg-slate-50/90 backdrop-brightness-75">
                    <Header />
                    <Banner setSearch={setSearch} />
                </div>
            </div>
            <Donations donations={donations} />
        </>
    );
};

export default Home;
