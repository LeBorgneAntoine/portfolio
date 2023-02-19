import { useEffect, useState } from "react";


function useDevice(){

    const deviceWidthStepLimit = 700;
    const mobileType = 'MOBILE'
    const desktopType = 'DESKTOP'

    const [deviceType, setDeviceType] = useState( window.innerWidth < deviceWidthStepLimit ? mobileType : desktopType );

    function resizeListener(){
        setDeviceType( window.innerWidth < deviceWidthStepLimit ? mobileType : desktopType)
    }


    useEffect(() => {

        window.addEventListener('resize', resizeListener)
        return () => window.removeEventListener('resize', resizeListener)
        
    }, [])


    return [deviceType]

}

export default useDevice;