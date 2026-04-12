import TrendingApps from "@/components/Homepage/TrendingApps";

export const metadata = {
  title: "Apps | HeroApps",
  description: "Explore a wide range of innovative apps designed to enhance productivity, entertainment, and creativity. HeroApps offers top-notch solutions for all your digital needs.",
};

const AppsPage = () => {
    return (
        <div>
            <TrendingApps from="apps" />
        </div>
    );
};

export default AppsPage;