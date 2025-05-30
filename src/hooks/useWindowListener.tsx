import { useEffect, useState } from "react";

export function useWindowListener(eventType:string, listener:EventListener) {

    useEffect(() => {

        window.addEventListener(eventType, listener);

        return () => {
            window.removeEventListener(eventType, listener);
        }

    }, [])
    
}