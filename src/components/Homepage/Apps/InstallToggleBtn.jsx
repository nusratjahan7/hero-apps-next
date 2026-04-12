'use client'

import { InstalledAppsContext } from "@/context/InstallContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallToggleBtn = ({app}) => {
    const {installed, setInstalled}  = useContext(InstalledAppsContext);
      
    const handleInstall = () => {
        setInstalled([...installed, app]);
        toast.success(`${app.title} is installed`)
    }
    const isInstalled = installed.find(i => i.id === app.id);
    console.log(isInstalled);
    
    return (
        <div>
            <button
            onClick={handleInstall}
            disabled={isInstalled ? true : false}
            className={`btn mt-4 bg-linear-to-r from-blue-600 to-purple-400 hover:from-blue-700 hover:to-purple-500  text-white  ${
            isInstalled ? 'opacity-50 cursor-not-allowed' : ''
            }`}> 
                {isInstalled ? 'Installed' : 'Install'}
            </button>
        </div>
    );
};

export default InstallToggleBtn;