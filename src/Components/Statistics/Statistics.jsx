import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { PieChart, Pie, Cell } from "recharts";
import { getStoredDonation } from "../addToLocalStorage";

const Statistics = () => {
    const donations = useLoaderData();
    const userDonations = getStoredDonation();
    const userDonationsLength = userDonations.length;
    const donationLength = donations.length - userDonationsLength;

    const data = [
        { name: "Total Donation", value: donationLength },
        { name: "Your Donation", value: userDonationsLength },
    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div>
            <Header />

            <div className="container mx-auto">
                <div className="py-14">
                    <PieChart
                        width={250}
                        height={250}
                        className="mx-auto flex justify-center items-center md:h-[500] md:w-[500]"
                    >
                        <Pie
                            data={data}
                            width={`100%`}
                            height={"100%"}
                            style={{ width: "100%", height: "100%" }}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    width={`100%`}
                                    height={"100%"}
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                    <div className="md:flex text-center pt-5 items-center justify-center gap-10">
                        <p>
                            Your Donation:
                            <span className="w-6 h-12 bg-[#00C49F] text-[#00C49F] px-10 ms-2">
                                .
                            </span>
                        </p>
                        <p>
                            Total Donation:
                            <span className="w-6 h-12 bg-[#FF444A] text-[#FF444A] px-10 ms-2">
                                .
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
