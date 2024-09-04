import { useContext } from "react";
import { FaBookMedical, FaHandHoldingMedical, FaUsers } from "react-icons/fa";
import { useQuery } from "react-query";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import { AuthContext } from "../../../Context/AuthProvider";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Stats = () => {
  const { user } = useContext(AuthContext);
  const url = "http://localhost:5000/admin-stats";

  //   const { data: stats = {} } = useQuery({
  //     queryKey: ["admin-stats"],
  //     queryFn: async () => {
  //       const res = await url.get("/admin-stats");
  //       return res.data;
  //     },
  //   });
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(stats);

  const chartData = [
    { category: "Teeth Ortho", quantity: 9, revenue: 111.7 },
    { category: "Cosmetic Den", quantity: 6, revenue: 51.4 },
    { category: "Teeth Clean", quantity: 8, revenue: 64.1 },
    { category: "Cavity Pro", quantity: 5, revenue: 38.5 },
    { category: "Pediatric De", quantity: 9, revenue: 29.4 },
    { category: "Oral Sur", quantity: 4, revenue: 68.5 },
  ];

  // custom bar for the shape
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom shape for the pi chart
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

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div>
      <div className="m-4">
        <h2 className="text-2xl m-3">
          <span>hi walcome </span>
          {user?.displayName ? user.displayName : "Back"}
        </h2>
        <div className="stats shadow w-8/10 grid  gap-6">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaHandHoldingMedical className="text-3xl" />
            </div>
            <div className="stat-title">Treatment</div>
            <div className="stat-value">
              {/* {stats?.revenue ? stats.revenue : "0"} */} 150+
            </div>
            <div className="stat-desc">Jan 1st - Dec 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl" />
            </div>
            <div className="stat-title">Users</div>
            <div className="stat-value">
              {stats?.users ? stats?.users : "0"}
            </div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaBookMedical className="text-3xl" />
            </div>
            <div className="stat-title">Options</div>
            <div className="stat-value">
              {stats?.options ? stats?.options : "0"}
            </div>
            <div className="stat-desc">↗︎ 6 (25%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Bookings</div>
            <div className="stat-value">
              {stats.bookings ? stats.bookings : "0"}
            </div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:m-3">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
