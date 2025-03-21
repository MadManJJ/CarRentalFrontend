'use client'
import { useRef, useEffect, useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener";

export function VlogPlayer({vdoSrc, isPlaying} : {vdoSrc:string, isPlaying:boolean}){
    
    const vdoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // alert('width is ' + vdoRef.current?.videoWidth)
        if(isPlaying){
            // alert('Play');
            vdoRef.current?.play();
        }
        else{
            // alert('Pause');
            vdoRef.current?.pause();
        }
    }, [isPlaying])

    // useWindowListener('resize', (e) => {
    //     alert('Window width is ' + (e.target as Window).innerWidth);
    // });

    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted />
    )
}