'use client'
import InstalledApps from "@/context/InstallContext";

const Providers = ({children}) => {
    return (
       <InstalledApps>
        {children}
       </InstalledApps>
    );
};

export default Providers;