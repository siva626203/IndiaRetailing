import Footer from "./_components/Footer";
import Header from "./_components/Header";
import toggle from '../images/Vector (1).png'
import weather from '../images/weather.png'
import Image from "next/image";
import Link from "next/link";
import Hotspots from '../images/image3.png'
import Ai from '../images/image2.png'
import Shipping from '../images/image1.png'
import Rahul from '../images/Link ⏵ Figure ⏵ 169731-rbmaxpyfhd-1644061237.jpg.png'
import citywalk from '../images/image 34.png'
import arrow from '../images/down-arrow 1.png'
import Food from '../images/image 34 (1).png'
import flower from '../images/image 34 (2).png'
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
        <div className="flex justify-center space-x-4">
          <p className="text-[#595959] font-inter text-[13px]">Fashion & Lifestyle</p>
         <span className="h-[2px] w-[2px] rounded-full bg-[#E21B22] my-2"/>
          <p className="text-[#595959] font-inter text-[13px]">Beauty & Wellness</p>
          <span className="h-[2px] w-[2px] rounded-full bg-[#E21B22] my-2"/>
          <p className="text-[#595959] font-inter text-[13px]">Food & Beverage</p>
          <span className="h-[2px] w-[2px] rounded-full bg-[#E21B22] my-2"/>
          <p className="text-[#595959] font-inter text-[13px]">Consumer Durables & IT</p>
          <span className="h-[2px] w-[2px] rounded-full bg-[#E21B22] my-2"/>
          <p className="text-[#595959] font-inter text-[13px]">Entertainment</p>
          <span className="h-[2px] w-[2px] rounded-full bg-[#E21B22] my-2"/>
          <p className="text-[#595959] font-inter text-[13px]">Home Decor & Furnishing</p>
          <span className="h-[2px] w-[2px] rounded-full bg-[#1d1212] my-2"/>
          <p className="text-[#595959] font-inter text-[13px]">Specialty Retail</p>
        </div>
        <div className="flex mt-6 space-x-20 bg-[#F8F9FA] mx-[62.05px] ">
            <div className="flex bg-[#FFFFFF] w-[420.65px] h-[127.34px] rounded-[6.01px] p-4">
                <Image src={Hotspots} alt="hotspots" width={117.04} height={96.55} className="rounded-[5.65px]"/>
                <div  className="ml-[16px] mt-4">
                  <p className="font-roboto text-[14.69px] font-[600] text-[#E21B22]">HOTSPOTS</p>
                  <p className="font-inter font-[400] line-[20.34px] w-[285.17px]">Luxury hotspots: 5 most expensive high streets in the..</p>
                </div>
            </div>
             <div className="flex bg-[#FFFFFF] w-[420.65px] h-[127.34px] rounded-[6.01px] p-4">
                <Image src={Ai} alt="hotspots" width={117.04} height={96.55} className="rounded-[5.65px]"/>
                <div  className="ml-[16px] mt-4">
                  <p className="font-roboto text-[14.69px] font-[600] text-[#E21B22]">AI</p>
                  <p className="font-inter font-[400] line-[20.34px] w-[285.17px]">5 ways to leverage the power of ChatGPT in retail</p>
                </div>
            </div>
             <div className="flex bg-[#FFFFFF] w-[420.65px] h-[127.34px] rounded-[6.01px] p-4">
                <Image src={Shipping} alt="hotspots" width={117.04} height={96.55} className="rounded-[5.65px]"/>
                <div  className="ml-[16px] mt-4">
                  <p className="font-roboto text-[14.69px] font-[600] text-[#E21B22]">SHIPPING</p>
                  <p className="font-inter font-[400] line-[20.34px] w-[285.17px]">Reliance to open 250 Azorte stores in 2-3 years</p>
                </div>
            </div>
        </div>
        <div className="flex h-[771.83px] w-[988.08px] ml-[36.21px] mt-6">
          <div className="">
            <div className="w-[567.55px] h-[116.91px] absolute mt-[210px] ml-4 space-y-1">
            <button className="text-[12.41px] font-roboto line-[15.79px] font-[700] bg-gradient-to-r from-[#F92A28] to-[#DA1752] h-[27.15px] w-[73.01px] pl-[5.43px] pt-[8.93px] pr-[5.43px] pb-[25px] text-[#FFFFFF] items-center">IN FOCUS</button>
            <p className="font-inter font-[700] text-[21.43px] line-[28.2px] text-[#FFFFFF]">Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car</p>
            <p className="text-[16.85px] font-[400] line-[25.28px] text-[#FFFFFFCC] font-droid-sans">Rahul Gandhi</p>
            </div>
            <Image src={Rahul} alt="rahul" width={599} height={347} className="rounded-[5.64px] w-[599px] h-[347px]"/>
            <div className="w-[587.64px] h-[89.82px mt-10">
              <div>
              <div className="flex gap-6">
                <Image className="rounded-[6.96px]" width={143.71} height={89.82} src={citywalk} alt="city"/>
                <div className="w-[422.42px] h-[78.89px] mt-1 space-y-2">
                  <p className="text-[#E21B22] text-[11.1px] font-[600] font-roboto line-[19.01px]">SELECT CITYWALK</p>
                  <p className=" font-[500] font-inter text-[16.94px] line-[18.17px] flex justify-between">Wow! Momo Foods enters Bhopal with Wow! <Image src={arrow} alt="arrow" width={16.76} height={16.76} className="h-[16.79px] w-[16.79px] mt-1"/></p>
                  <div className="flex gap-4">
                  <a href="" className="font-roboto font-[400] text-[13.67px] line-[17.78px]"># Citywalk</a> <a href="" className="text-[#504E4E] text-[13.67px] font-[400] font-roboto line-[17.78px]">#reel stories podcast</a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-8"/>
            <div className="w-[587.64px] h-[89.82px] mt-10">
              <div className="flex gap-6">
                <Image className="rounded-[6.96px]" width={143.71} height={89.82} src={Food} alt="city"/>
                <div className="w-[422.42px] h-[78.89px] mt-1 space-y-2">
                  <p className="text-[#E21B22] text-[11.1px] font-[600] font-roboto line-[19.01px] uppercase">Food & Beverage</p>
                  <p className=" font-[500] font-inter text-[16.94px] line-[18.17px] flex justify-between">KFC opens another outlet in Punjab KFC opens another outlet in Punjab<Image src={arrow} alt="arrow" width={16.76} height={16.76} className="h-[16.79px] w-[16.79px] mt-1"/></p>
                  <div className="flex gap-4">
                  <a href="" className="font-roboto font-[400] text-[13.67px] line-[17.78px]"># Beverage</a> <a href="" className="text-[#504E4E] text-[13.67px] font-[400] font-roboto line-[17.78px]">#reel stories podcast</a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-8"/>
            <div className="w-[587.64px] h-[89.82px] mt-10">
              <div className="flex gap-6">
                <Image className="rounded-[6.96px]" width={143.71} height={89.82} src={flower} alt="city"/>
                <div className="w-[422.42px] h-[78.89px] mt-1 space-y-2">
                  <p className="text-[#E21B22] text-[11.1px] font-[600] font-roboto line-[19.01px]">SELECT CITYWALK</p>
                  <p className=" font-[500] font-inter text-[16.94px] line-[18.17px] flex justify-between">FNP (Ferns N Petals) appoints Ashish Goel <Image src={arrow} alt="arrow" width={16.76} height={16.76} className="h-[16.79px] w-[16.79px] mt-1"/></p>
                  <div className="flex gap-4">
                  <a href="" className="font-roboto font-[400] text-[13.67px] line-[17.78px]"># Citywalk</a> <a href="" className="text-[#504E4E] text-[13.67px] font-[400] font-roboto line-[17.78px]">#reel stories podcast</a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          
        </div>
        <div className="mt-24">
        <Footer/>
        </div>
      </main>
    </div>
  );
}
