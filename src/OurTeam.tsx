import React from "react";
import Card from "./components/Card";
const OurTeam:React.FC=()=>{
    return (
        <div className="w-screen h-screen bg-cream">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-5xl font-medium mt-4">Our Team</h1>
                <h2 className="text-3xl font-semibold mt-4">Meet the Koshiqa team</h2>
            </div>
            <div className="flex justify-center items-center flex-col">
                <Card title="ABC" description="XYZ" name="sbhs" image="snjs" socialicon="jcc"/>
                <Card title="bsh" description="hdsj" name="djs" image="dbjn" socialicon="dhj"/>
                
            </div>
            
        </div>
    )
}
export default OurTeam