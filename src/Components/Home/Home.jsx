import Header from "../Header/Header";
import Banner from "./Banner";

const Home = () => {
    return (
        <>
            <div className="bg-[url('https://i.ibb.co/XyjZgJ9/bg.png')] bg-cover ">
                <div className="bg-slate-50/90 backdrop-brightness-75">
                    <Header />
                    <Banner />
                </div>
            </div>
        </>
    );
};

export default Home;
