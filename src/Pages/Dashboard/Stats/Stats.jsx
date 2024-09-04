import {
  FaBookMedical,
  FaHandHoldingMedical,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { useQuery } from "react-query";

const Stats = () => {
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
  return (
    <div>
      <div className="m-4">
        <h2 className="text-2xl m-3">
          <span>hi walcome </span>
          {/* {user?.displayName ? user.displayName : "Back"} */}
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
    </div>
  );
};

export default Stats;
