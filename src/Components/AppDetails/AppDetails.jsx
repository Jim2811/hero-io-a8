import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const appDetail = useLoaderData();
  const totalReview = appDetail.reviews / 1000;
  const totalDownloads = appDetail.downloads / 1000000;
  const ratingsData = appDetail.ratings;
  const reverseRating = [...ratingsData].reverse()
  // button interactivity
  const appList = JSON.parse(localStorage.getItem("installedAppsList") || "[]")
  const installedApps = () => {
    return appList.find(a => a.id === appDetail.id)
  }
  const [install, setInstall] = useState(installedApps())
  const handleInstall = () => {
    appList.push(appDetail)
    localStorage.setItem("installedAppsList", JSON.stringify(appList))
    setInstall(true)
    toast.success(`${appDetail.title} App is installed successfully!`)
  }

  // button interactivity endsssss
  return (
    <div className="bg-gray-100 h-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="border-b-1 pt-10 pb-6 flex gap-4 flex-col px-2 md:flex-row md:px-0">
          <div>
            <img
              src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc"
              className="max-w-[250px] max-h-[250px]"
            />
          </div>

          <div className="pb-3 flex-1">
            <div>
              <h2 className="font-bold text-2xl">{appDetail.title}</h2>
              <p className="pb-3">
                <span className="text-gray-500">Developed by</span>{" "}
                <span className="font-bold text-[#8f54ee]">
                  {appDetail.companyName}
                </span>
              </p>
              <hr />
            </div>
            {/* datas */}
            <div className="pt-6 flex gap-8 pb-6 flex-col md:flex-row">
              <div>
                <img src="/src/assets/icon-downloads.png" alt="" />
                <p>Downloads</p>
                <h3 className="font-bold text-2xl">{totalDownloads}M</h3>
              </div>
              <div>
                <img src="/src/assets/icon-ratings.png" alt="" />
                <p>Average Ratings</p>
                <h3 className="font-bold text-2xl">{appDetail.ratingAvg}</h3>
              </div>
              <div>
                <img src="/src/assets/icon-review.png" alt="" />
                <p>Total Reviews</p>
                <h3 className="font-bold text-2xl">{totalReview}K</h3>
              </div>
            </div>
            <div>
              {/*  button*/}
              <button className={`btn text-white ${install ? "bg-green-500 opacity-100" : "bg-green-500"}`}

                disabled={install}
                onClick={!install ? handleInstall : undefined}
              >
                {install ? "Installed" : `Install Now (${appDetail.size} MB)`}


              </button>
            </div>
          </div>
        </div>
        {/* rating */}
        <div className="py-6">
          <h2 className="font-bold text-xl pb-4">Ratings</h2>
          {/* rating chart */}
          <div>
            {

              <ResponsiveContainer width="100%" height={300}>
                <BarChart

                  data={reverseRating}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="0 0" />
                  <XAxis type="number" dataKey="count" />
                  <YAxis dataKey="name" type="category" width={70} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="count"
                    fill="#FF8811"
                    name="count"
                    activeBar={<Rectangle fill="green" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            }
          </div>
        </div>
        <hr />
        {/* description */}
        <div className="py-6">
          <h2 className="font-bold text-xl pb-4">Description</h2>
          <p>{appDetail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
