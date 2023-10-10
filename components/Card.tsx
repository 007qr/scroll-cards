import Image, { StaticImageData } from "next/image";

interface CardProps {
    text: string;
    img: StaticImageData;
    color: string;
    rotate: string;
    zIndex: string;
}

const Card = ({color, img, rotate, text, zIndex}: CardProps) => {
    return (
        <>
        <div className={`sticky bottom-0 h-screen flex flex-col justify-center items-center ${rotate} ${zIndex}`}>
            <div className={`rounded-3xl ${color} w-[450px] h-[450px] shadow-sm flex flex-col`}>
                <div className="h-[300px]">
                    <Image src={img} alt={text} className="w-full h-full object-cover object-center rounded-3xl " />
                </div>
                <div className={`px-32 text-center flex justify-center items-center rounded-3xl ${color} w-full h-full`}>
                    <h3 className="text-3xl font-bold">{text}</h3>
                </div>
            </div>
        </div>
        </>
    )
};

export default Card;