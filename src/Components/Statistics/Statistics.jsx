import Header from "../Header/Header";
import { PieChart, Pie, Cell } from "recharts";
const data = [
    { name: "Group A", value: 700 },
    { name: "Group B", value: 300 },
];

const COLORS = ["#FF444A", "#00C49F"];

const Statistics = () => {
    return (
        <div>
            <Header />

            <PieChart
                width={300}
                height={300}
                className="mx-auto flex justify-center items-center"
            >
                <Pie
                    data={data}
                    cx={150}
                    cy={200}
                    labelLine={false}
                    label={(80, 20)}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default Statistics;
