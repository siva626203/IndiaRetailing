import Footer from "./_components/Footer";
import Header from "./_components/Header";
import toggle from '../images/Vector (1).png'
import weather from '../images/weather.png'
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <div className="p-5">
          <div className="flex justify-between">
            <div className="mt-2 ">
            <Image src={toggle} alt="toggle" width={22.9} height={18.01}/>
            </div>
            <div className="space-x-[24px] ml-[100px]">
              <Link className="font-[700] text-[#E21B22]" href={"/"}>Home</Link>
              <Link className="font-[700] " href={"categories"}>Categories</Link>
              <Link className="font-[700] " href={"irprime"}> IR Prime</Link>
              <Link className="font-[700] " href={"events"}>Events</Link>
              <Link className="font-[700] " href={"bookstore"}>Bookstore</Link>
              <Link className="font-[700] " href={"newsletter"}>Newsletter</Link>
              <Link className="font-[700] " href={"video"}>Video</Link>
            </div>
            <div className="flex space-x-2">
              <Image src={weather} alt="weather" width={25.64} height={18.05}/>
              <p className="text-[#616161] text-[15.79px] font-[400] font-lado">Friday, 30 June 2023</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-[#595959] font-inter text-[13px]">Fashion & Lifestyle</p>
          <span className="h-[1px] w-[2px] rounded-full bg-[#E21B22] mt-[5px]"/>
          <p className="text-[#595959] font-inter text-[13px]">Beauty & Wellness</p>
          <p className="text-[#595959] font-inter text-[13px]">Food & Beverage</p>
          <p className="text-[#595959] font-inter text-[13px]">Consumer Durables & IT</p>
          <p className="text-[#595959] font-inter text-[13px]">Entertainment</p>
          <p className="text-[#595959] font-inter text-[13px]">Home Decor & Furnishing</p>
          <p className="text-[#595959] font-inter text-[13px]">Specialty Retail</p>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
