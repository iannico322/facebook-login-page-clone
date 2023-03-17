import React, { useEffect, useState } from "react";
import Fb_logo from "./../../images/facebook-logo.png";
import Nico from "./../../images/nico-profile.png";
import Thanos from "./../../images/thanos.jpg";
import Default from "./../../images/Default-profile.jpeg";

import Jogn from "./../../images/jogn.jpg";
import XIcon from "./../../images/x-icon.png";
import AddIcon from "./../../images/+-icon.svg"

const LoginPage = () => {

  const [credentails, setCredentials] = useState({
    name : '',
    image:Default,


  })

  const [accounts,setAccounts]= useState([
    {
      name:"Nicolas",image:Nico
    },
    {
      name:"Thanos",image:Thanos
    }
  ]);


  // useEffect(() => {
   
  //   getAccounts();
  // }, [accounts]);



    
 
  return (
    <div
      className="flex flex-col bg-gray-200 w-screen] h-screen overflow-x-hidden
    text-[#1c1e21] items-center justify-center "
    >
      <div className=" Registration hidden z-10  absolute  items-center justify-center w-screen  h-screen bg-[#ffffffc7] ">
        <form
          className="flex flex-col items-center w-[432px]  min-[50%] bg-white  shadow-lg px-4 pb-10 pt-2 gap-4 rounded-lg "
          onSubmit={(e) => {
            e.preventDefault();



          }}
        >
          <div className=" w-[100%] flex flex-col ">
            <div className="flex items-center justify-between ">
              <h1 className="text-[32px] m-0 font-[SFProDisplay-Bold, Helvetica, Arial, sans-serif] font-[700] ">
                Sign Up
              </h1>

              <img
                src={XIcon}
                alt=""
                className=" cursor-pointer"
                onClick={() => {
                  let registration =
                    document.querySelector(".Registration").classList;
                  registration.remove("flex");
                  registration.add("hidden");
                }}
              />
            </div>

            <p className="text-[#606770] text-[15px] font-[SFProDisplay-Regular, Helvetica, Arial, sans-serif]">
              It’s quick and easy.
            </p>
          </div>

          <hr className="border-b-thin border-thin  w-[432px] " />

          <div className="flex gap-4 ">
            <input
              className=" bg-[#f5f6f7] w-[100%] border-[1px] rounded-md border-gray-300  outline-none focus:border-blue-500 focus:border-thin box-border  p-[8px] pl-[11px] font-[400] text-[15px] font-[Helvetica, Arial, sans-serif]"
              type="text"
              placeholder="First Name"
            />
            <input
              className=" bg-[#f5f6f7] w-[100%] border-[1px] rounded-md border-gray-300  outline-none focus:border-blue-500 focus:border-thin box-border p-[8px] pl-[11px]text-[15px] font-[Helvetica, Arial, sans-serif] "
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            className=" bg-[#f5f6f7] w-[100%] border-[1px] rounded-md border-gray-300  outline-none focus:border-blue-500 focus:border-thin box-border p-[8px] pl-[11px]  font-[400] text-[15px] font-[Helvetica, Arial, sans-serif] "
            type="text"
            placeholder="Mobile number or email"
          />

          <input
            className=" bg-[#f5f6f7] w-[100%] border-[1px] rounded-md border-gray-300  outline-none focus:border-blue-500 focus:border-thin box-border p-[8px] pl-[11px]  font-[400] text-[15px] font-[Helvetica, Arial, sans-serif] "
            type="text"
            placeholder="Password"
          />

          <div className="flex flex-col gap-1 w-[100%] ">
            <p className=" text-xs text-gray-500">Birthday </p>

            <div className="flex gap-3">
              <select
                className="bg-[#ffffff] w-[100%] border-[1px] rounded-md border-gray-300  outline-none focus:border-blue-500 focus:border-thin box-border p-[8px]   font-[400] text-[15px] font-[Helvetica, Arial, sans-serif]"
                type="datetime"
                name=""
                id=""
              >
                <option value="1">Jan</option>
                <option value="2" selected>
                  Feb
                </option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>

              <select
                required
                className="bg-[#ffffff] w-[100%] border-[1px] rounded-md border-gray-300  outline-none focus:border-blue-500 focus:border-thin box-border p-[8px]   font-[400] text-[15px] font-[Helvetica, Arial, sans-serif]"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
              </select>

              <select className='bg-[#ffffff] w-[100%] border-[1px] rounded-md border-gray-300  outline-none focus:border-blue-500 focus:border-thin box-border p-[8px]   font-[400] text-[15px] font-[Helvetica, Arial, sans-serif]"'>
                <option value="2023" selected="1">
                  2023
                </option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1 w-[100%] ">
            <p className=" text-xs text-gray-500">Gender</p>

            <div className="flex gap-3">
              <span className='flex justify-between bg-[#ffffff] w-[100%] border-[1px] rounded-md border-gray-300  outline-none focus:border-blue-500 focus:border-thin box-border p-[8px]   font-[400] text-[15px] font-[Helvetica, Arial, sans-serif]" '>
                <label class="_58mt" for="u_c_4_o7">
                  Male
                </label>
                <input type="radio" name="sex" value="1" />
              </span>

              <span className='flex justify-between bg-[#ffffff] w-[100%] border-[1px] rounded-md border-gray-300  outline-none focus:border-blue-500 focus:border-thin box-border p-[8px]   font-[400] text-[15px] font-[Helvetica, Arial, sans-serif]" '>
                <label class="_58mt" for="u_c_4_o7">
                  Female
                </label>
                <input type="radio" name="sex" value="2" />
              </span>

              <span className='flex justify-between bg-[#ffffff] w-[100%] border-[1px] rounded-md border-gray-300  outline-none focus:border-blue-500 focus:border-thin box-border p-[8px]   font-[400] text-[15px] font-[Helvetica, Arial, sans-serif]" '>
                <label class="_58mt" for="u_c_4_o7">
                  Hybrid
                </label>
                <input type="radio" name="sex" value="3" />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 w-[100%] ">
            <p className=" text-[11px] text-gray-500">
              People who use our service may have uploaded your contact
              information to Facebook.{" "}
              <a
                className="text-blue-400"
                href="https://www.facebook.com/help/637205020878504"
                id="non-users-notice-link"
                target="_blank"
                rel="nofollow"
              >
                Learn more
              </a>
              .
            </p>

            <p className=" text-[11px] text-gray-500">
              By clicking Sign Up, you agree to our{" "}
              <a
                className="text-blue-400"
                href="https://www.facebook.com//legal/terms/update"
                id="terms-link"
                target="_blank"
                rel="nofollow"
              >
                Terms
              </a>
              ,{" "}
              <a
                className="text-blue-400"
                href="https://www.facebook.com//about/privacy/update"
                id="privacy-link"
                target="_blank"
                rel="nofollow"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                className="text-blue-400"
                href="https://www.facebook.com//policies/cookies/"
                id="cookie-use-link"
                target="_blank"
                rel="nofollow"
              >
                Cookies Policy
              </a>
              . You may receive SMS Notifications from us and can opt out any
              time.
            </p>
          </div>

          <button className=" w-[60%] h-[38px] bg-green-600 text-white rounded-md text-[17px] font-[Helvetica, Arial, sans-serif] font-bold mt-[6px] ">
            Sign Up
          </button>
        </form>
      </div>

      <div
        className="flex bg-gray-200 w-screen h-screen
    text-[#1c1e21] items-center justify-center gap-20 my-20
      xl:flex-col xl:gap-7 "
      >
        <div className="flex flex-col  h-3/4 w-[30%] ml-[10%] xl:ml-0 xl:w-[50%] xl:items-center xl:justify-center">
          <img
            src={Fb_logo}
            alt=""
            className="h-[70px] w-[200px] object-contain m-[-20px] "
          />
          <h3 className="mt-[16px] font-[SFProDisplay-Regular, Helvetica, Arial, sans-serif] font-[400] text-[28px] ">
            Recent Logins
          </h3>
          <p className=" text-[#606770] text-[15px] font-[SFProDisplay-Regular, Helvetica, Arial, sans-serif]">
            Click your picture or add an account.
          </p>

          <div className="flex mt-[20px] gap-[20px] flex-wrap w-[100%] justify-start xl:justify-center transition-all ease-out ">
            {
            accounts.map((e,key) => (
              <div key={key} className="transition-all cursor-pointer hover:shadow-lg duration-150 ease-in-out border-thin border-gray-700 flex items-center flex-col  rounded-lg h-[210px] w-[160px] overflow-hidden bg-white shadow-sm">
                <img
                  
                  src={e.image}
                  alt=""
                  className=" h-[160px] w-[160px] object-cover "
                />
                <p className=" py-3 text-[18px] font-[400] text-[#4b4f56] font-[SFProText-Medium, Helvetica, Arial, sans-serif] ">
                  {e.name}
                </p>
              </div>
            ))}

              <div className="transition-all cursor-pointer hover:shadow-lg duration-150 ease-in-out border-thin border-gray-700 flex items-center flex-col  rounded-lg h-[210px] w-[160px] overflow-hidden bg-white shadow-sm"
              onClick={()=>{
                setCredentials({...credentails,name:"Ikaw"})

                setAccounts([...accounts,credentails]) 
              }}
              >
                <div
               
                  alt=""
                  className=" flex h-[160px] w-[160px] bg-gray-100 items-center justify-center"
                >

                <img src={AddIcon} alt=""  className=" invert z-[0] relative" />
                </div>
                <p className=" py-3 text-[18px] font-[500] text-[#1976f2] font-[SFProText-Medium, Helvetica, Arial, sans-serif] ">
                  Add Account
                </p>
              </div>
          </div>
        </div>

        <div className=" h-3/5 w-[584px] mt-[60px] flex flex-col items-center justify-start  xl:mt-0">
          <form
            onSubmit={(e) => {
              
              e.preventDefault();
              
        
             
              setAccounts([...accounts,credentails]) 
              console.log(accounts)
               
            }}
            className="flex flex-col gap-3   min-h-0 w-[389px] bg-white pt-6 pb-6 rounded-md shadow-md box-border items-center justify-center "
          >
            <input
              className=" w-[90%] border-[1px] rounded-md border-gray-300 outline-0 focus:shadow-sm focus:border-blue-500 focus:border-thin box-border px-4 py-[14px] text-[17px] font-[Helvetica, Arial, sans-serif] "
              type="text"
              placeholder="Email"
              required
              onChange={(e)=>{
                setCredentials({...credentails,name: e.target.value})
               
              }}
            />
            <input
              className=" w-[90%] border-[1px] rounded-md border-gray-300 outline-none focus:shadow-sm focus:border-blue-500 focus:border-thin box-border px-4 py-[14px] text-[17px] font-[Helvetica, Arial, sans-serif] "
              type="password"
              placeholder="Password"
              required
              // onChange={(e)=>{
              //   setCredentials({...credentails,password: e.target.value})
              // }}
            />
             <a href="https://iannico322.github.io/FB-Profile/"> <button className=" w-[90%] h-[48px] bg-blue-500 hover:bg-blue-600 text-white rounded-md text-[20px] font-[Helvetica, Arial, sans-serif] font-bold mt-[6px] ">
            Log In
            </button></a>
            <a href="#" className="mt-1 text-sm text-blue-500 hover:underline">
              Forgot Passoword?
            </a>
            <hr className="border-top-[1px] my-2 w-[90%] border-gray-200" />
            <button
              className=" w-[60%] h-[48px] bg-green-500 hover:bg-green-600 text-white rounded-md text-[17px] font-[Helvetica, Arial, sans-serif] font-bold mt-[6px] "
              onClick={() => {
                let registrationOpen =
                  document.querySelector(".Registration").classList;
                registrationOpen.remove("hidden");
                registrationOpen.add("flex");
              }}
            >
              Create new account
            </button>
          </form>
          <div className=" mt-5  font-[SFProText-Semibold, Helvetica, Arial, sans-serif] text-[14px] ">
            <a
              className=" hover:underline font-bold "
              href="/pages/create/?ref_type=registration_form"
             
            >
             <b> Create a Page</b>
            </a>{" "}
            for a celebrity, brand or business.
          </div>
        </div>
      </div>
      <div className=" w-screen bg-white h-20">

      </div>

    </div>
  );
};

export default LoginPage;
