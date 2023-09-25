const Banner = () => {
    return (
        <div className="md:py-16 py-0">
            <div className="container mx-auto text-center py-16">
                <h2 className="font-bold text-4xl pt-6">
                    I Grow By Helping People In Need
                </h2>
                <div className=" py-6 mb-16">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="border py-3 px-6 w-1/3 rounded-full"
                        placeholder="Search here...."
                    />
                    <button className=" ms-2 rounded-full bg-[#FF444A] text-white px-6 py-3">
                        Search{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
