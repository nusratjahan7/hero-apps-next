"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import useApps from "@/hooks/useApps";
import { InstalledAppsContext } from '@/context/InstallContext';

const DashboardPage = () => {
   const { installed } = useContext(InstalledAppsContext);
  const { apps } = useApps();
  console.log(apps, "apps");
  const uninstalledAppsLength = apps.length - installed.length;
  console.log(uninstalledAppsLength, installed.length, "uninstalledApps");


  const data = [
    { name: "Installed", value: installed.length, fill: "#0088FE" },
    { name: "Uninstalled", value: uninstalledAppsLength, fill: "#FF8042" },
  ];

  return (
    <div className="shadow p-10 container mx-auto">
      <h2 className="font-semibold text-3xl mt-6  text-center">
        Installed and Uninstalled apps
      </h2>
      <div className="mt-4 mb-3">
        <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "70vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
      </div>
    </div>
  );
};

export default DashboardPage;