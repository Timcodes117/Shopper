"use client";
import GlobalHeader from "@/app/components/Header";
import InputField from "@/app/components/InputField";
import Select from "react-select";
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BounceLoader, PulseLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const router = useRouter();

  const [lgaData, setLgaData] = React.useState([]);
  const [formIsLoading, setformIsLoading] = React.useState(false);
  const [userDetails, setuserDetails] = React.useState<formTypes>({
    firstname: "",
    lastname: "",
    email: "",
    phone: 0,
    location: "Lagos, Nigeria",
    LGA: "",
    password: "",
  }
);

  const lgaDTO = (data: any[]) => {
    let LGAdata: any[] = [];

    data.forEach((item, index) => {
      LGAdata[index] = { value: item, label: item };
    });

    return LGAdata;
  };

  const getLGAs = async () => {
    const response = await fetch(`http://192.168.43.68:5000/api/LGA/Lagos`);
    const result: any = await response.json();

    if (response.status == 200) {
      setLgaData(result.data);
      // lgaDTO(result.data)
    }
  };

  React.useEffect(() => {
    getLGAs();
  }, []);

  type formTypes = {
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    location: string;
    LGA: string;
    password: string;
  }

  

  const registerUser = async (e: Event,formProps:formTypes) => {
    e.preventDefault()
    setformIsLoading(true)

    const formData = new FormData;
    // const fieldArr = [
      formData.append("email", formProps.email);
      formData.append("firstname", formProps.firstname);
      formData.append("lastname", formProps.lastname);
      formData.append("phone", formProps.phone.toString());
      formData.append("location", formProps.location);
      formData.append("lga", formProps.LGA);
      formData.append("password", formProps.password);
    // ]
    
    const response = await fetch("http://192.168.43.68:5000/auth/user/register", {method: "POST", body: formData});
    const result = await response.json()
    

    if(response.status == 201){
      toast("Hello user, you account has been created successfully..")
    }
    toast(result.message)
    setformIsLoading(false)

  }
  return (
    <>
    <div className="w-full min-h-[100vh] bg-fixed bg-white md:bg-[url(/structure.jpg)] relative z-[100] bg-center bg-cover bg-no-repeat">
    
      {/* <div className="md:hidden flex z-[5000000]"> <GlobalHeader transparent /></div> */}
      <div className="w-full h-[100vh] bg-gradient-to-tr from-[#0000008c] to-[#00000000] pointer-events-none fixed z-[-1] top-0 left-0" />
      <div className="w-full min-h-[100vh] flex flex-row md:px-[7vw] z-[1000]  ">
        <div className="md:flex flex-[50]  flex-col  justify-center hidden ">
          <div className="w-full px-10 flex flex-row gap-2 items-center text-white">
            <ShoppingBagIcon width={30} height={30} color="white" />{" "}
            <b className="text-[20px]">Shopper</b>
          </div>
          <p className="w-full text-[40px] text-[white] px-10 font-[gothic] ">
            Welcome Back
          </p>
          <p className="  text-white w-[80%] px-10">
            Create your account to start placing orders and making transactions.
          </p>
        </div>
        <form className="flex flex-[50]  flex-col z-[30000] " onSubmit={(e:any)=> registerUser(e, userDetails)}>
          {/* <div className="flex flex-1 overflow-y-scroll h-[100vh] w-full"> */}
          <div className="w-full md:max-w-[550px] min-h-[120vh] bg-white md:mt-[150px] pt-[20px] md:rounded-tl-[30px] md:rounded-tr-[30px] md:p-8 p-6  ">
            <ArrowLeftIcon
              width={25}
              height={25}
              className="mb-4 md:hidden cursor-pointer"
              onClick={() => router.back()}
            />
            <p className="text-[30px] uppercase font-extrabold w-[70%] font-[gothic]">
              Create Your Account
            </p>
            {/* <p>fill the form below to create your account.</p> */}
            <p>
              Already a user?{" "}
              <Link href={"/auth/sign_in"} className="text-[orangered]">
                Sign in
              </Link>
            </p>
            <br />
            {/* <div className="w-full min-h-[200px] flex items-center jus"></div> */}
            <p className="my-2 text-[14px]  ">Email Address*</p>
            <InputField
              type="email"
              placeHolder="e.g: tim@gmail.com"
              onInput={(value) => setuserDetails(prev => ({...prev, email: value}))}
              icon={<EnvelopeIcon width={20} height={20} />}
              required
            />

            <p className="my-2 text-[14px] mt-4">First Name*</p>
            <InputField
              type="text"
              placeHolder="John"
              onInput={(value) => setuserDetails(prev => ({...prev, firstname: value}))}
              icon={<UserIcon width={20} height={20} />}
              required
              />

            <p className="my-2 text-[14px] mt-4">Last Name*</p>
            <InputField
              type="text"
              placeHolder="Doe"
              onInput={(value) => setuserDetails(prev => ({...prev, lastname: value}))}
              icon={<UserIcon width={20} height={20} />}
              required
            />

            <p className="my-2 text-[14px] mt-4">Phone Number*</p>
            <div className="flex flex-row items-center gap-2">
              <select
                name=""
                id=""
                className=" min-w-[80px] h-[50px] rounded-xl p-2  "
              >
                <option value="+234" selected>
                  +234
                </option>
              </select>
              <InputField
                type="number"
                placeHolder="8000 000 000"
                onInput={(value) => setuserDetails(prev => ({...prev, phone: parseInt(value)}))}
                // icon={<UserIcon width={20} height={20} />}
                required
              />
            </div>

            <p className="my-2 text-[14px] mt-4">Location</p>
            <Select
              defaultValue={{
                value: "Lagos, Nigeria",
                label: "Lagos, Nigeria",
              }}
              // isMulti
              name="location"
              placeholder="Lagos, Nigeria"
              isDisabled
              options={[{ value: "Lagos, Nigeria", label: "Lagos, Nigeria" }]}
              className="basic-multi-select"
              classNamePrefix="select"
              required
            />
              <p className="my-2 text-[12px] text-[red]">We are only available in Lagos, Nigeria.</p>

            <p className="my-2 text-[14px] mt-4">LGA*</p>
            <Select
              defaultValue={[]}
              // isMulti
              name="lga"
              options={lgaData ? lgaDTO(lgaData) : []}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e:any) => setuserDetails(prev => ({...prev, LGA:e.value}))}

            />

            <p className="my-2 text-[14px] mt-4">Create Password*</p>
            <InputField
              type="password"
              placeHolder="xxxxxxxxxxxx"
              secured
              onInput={(value) => setuserDetails(prev => ({...prev, password: value}))}
              icon={<LockClosedIcon width={20} height={20} />}
              required
            />

            <p className="my-2 text-[14px] mt-4">Confirm Password*</p>
            <InputField
              type="password"
              placeHolder="confirm your password"
              secured
              onInput={() => {}}
              icon={<LockClosedIcon width={20} height={20} />}
              required
            />

            <br />
            <div className="flex flex-row items-start text-[14px] gap-2">
              <input type="checkbox" name="newsck" id="newsck" className="scale-[1.3] rounded-xl mt-2" />
              <label htmlFor="newsck">I want to subscribe to newsletters and recieve updates on latest products</label>
            </div>
            <div className="flex flex-row items-end text-[14px] gap-2 mt-2">
              <input type="checkbox" name="agreementsck" id="agreementsck" className="scale-[1.3] rounded-xl mt-2"  />
              <label htmlFor="agreementsck">I <b>user</b>, agree to <Link href={"#"} className="text-[orangered]">terms of agreement</Link> and <Link href={"#"} className="text-[orangered]">policy</Link></label>
            </div>
            <br />

            <button style={formIsLoading?{opacity: 0.6} :{}}
             className="w-full h-[60px] bg-[orangered] text-white rounded-lg">
              {formIsLoading ? <PulseLoader color="white" size={15} /> : <p>Proceed to submit</p>}
            </button>
            <div className="w-full flex flex-row items-center justify-center gap-4 px-6 my-3">
              <div className="w-full h-[1px] bg-gray-600 opacity-10" />
              <p>or</p>
              <div className="w-full h-[1px] bg-gray-600 opacity-10" />
            </div>

            <button className="w-full h-[50px] bg-[white] text-black rounded-lg border px-4 flex items-center justify-center gap-4">
              <img src="/googleIcn.svg" alt="" width={30} height={30} />
              <p>Signup with Google Account</p>
            </button>

            <p className="w-full my-10 flex items-center justify-center  gap-2">
              Need help?{" "}
              <Link
                href={"mailto:timcodes117@gmail.com"}
                className="text-[orangered]"
              >
                contact us
              </Link>
            </p>
          </div>
          {/* </div> */}
        </form>
      </div>
    </div>
    <ToastContainer
    className={"z-[6000]"}
    theme="dark"
    position="bottom-right"
     />
              </>
  );
};

export default Register;
