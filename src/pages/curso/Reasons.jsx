import React from "react"

export default function Reasons(props){
    return(
        <div className="flex flex-col items-center justify-center w-[25rem] space-y-5">
            <div className="bg-neutral-900 rounded-full w-[2rem] h-[2rem] mb-12"></div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-full w-[14rem] h-[14rem] shadow-2xl">
                <div className="text-8xl text-slate-50">{props.icon}</div>
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 text-center">{props.title}</h2>
            <p className="text-xl text-neutral-700 text-center font-semibold">{props.description}</p>
        </div>
    )
}