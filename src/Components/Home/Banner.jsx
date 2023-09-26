import { useRef } from "react";
import PropTypes from "prop-types";

const Banner = ({ setSearch }) => {
    const inputRef = useRef(null);

    const handleSearch = () => {
        setSearch(inputRef.current.value);
    };
    return (
        <div className="md:py-16 py-0">
            <div className="container mx-auto text-center md:py-16 py-5">
                <h2 className="font-bold md:text-4xl text-3xl pt-6">
                    I Grow By Helping People In Need
                </h2>
                <div className=" py-6 md:mb-16 mb-10 px-3 ">
                    <input
                        type="text"
                        name=""
                        id=""
                        ref={inputRef}
                        className="border py-3 px-6 md:w-1/3 w-full md:mb-0 mb-3 rounded-full"
                        placeholder="Search here...."
                    />
                    <button
                        className=" ms-2 rounded-full bg-[#FF444A] text-white px-6 py-3"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    setSearch: PropTypes.func,
};
export default Banner;
