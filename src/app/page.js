import Banner from "@/components/Homepage/Banner";
import Stats from "@/components/Homepage/Stats";
import TrendingApps from "@/components/Homepage/TrendingApps";

export default function Home() {
  return (
    <div>
      <Banner />
      <Stats />
      <TrendingApps from="homepage" />
    </div>
  );
}
