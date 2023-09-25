import Banner from "./Banner";
import Donations from "./Donations";

const Home = () => {
    return (
        <>
            <div className="bg-[url('https://i.ibb.co/XyjZgJ9/bg.png')] bg-cover ">
                <div className="bg-slate-50/90 backdrop-brightness-75">
                    <Banner />
                </div>
            </div>
            <Donations />
        </>
    );
};

export default Home;
