import React from "react";
interface CardProps{
    title: string,
    image: string,
    description: string,
    name: string,
    socialicon: string
}
const Card:React.FC<CardProps>=({
    title,
    image,
    description,
    name,
    socialicon
})=>{
    return (
        <div>
            {image}
            {name}
            {title}
            {description}
            {socialicon}

        </div>
    )
}
export default Card