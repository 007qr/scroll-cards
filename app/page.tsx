import Card from "~/components/Card";
import cardImg from '~/assets/img/cardImg.jpg';

export default function Home() {
  return (
    <>
      <div className="h-screen static float-none overflow-x-hidden">
      <Card img={cardImg} text="Create a link in bio" color="bg-lime-300" rotate="" zIndex="z-[6]" />
      <Card img={cardImg} text="Create a link in bio" color="bg-lime-300" rotate="-rotate-[8deg]" zIndex="z-[5]" />
      <Card img={cardImg} text="Create a link in bio" color="bg-black text-white" rotate="-rotate-[16deg]"  zIndex="z-[4]" />
      <Card img={cardImg} text="Create a link in bio" color="bg-slate-300" rotate="-rotate-[24deg]"  zIndex="z-[3]" />
      <Card img={cardImg} text="Create a link in bio" color="bg-lime-300" rotate="-rotate-[32deg]"  zIndex="z-[2]" />
      <div className="h-screen sticky bottom-0 flex justify-center items-center -z-10">
        <h1 className="text-8xl text-center font-bold">Unlock your earning potential</h1>
      </div>
      </div>
    </>
  )
}
