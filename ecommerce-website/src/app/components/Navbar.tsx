import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export default function Navbar() {
    return (
        <div>
            <div className="grid xl:grid-cols-1">

                <div className="p-5">
                    <div className="py-3 px-3 rounded-xl border w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex justify-center items-center gap-2">

                                {/*logo burger*/}
                                <IoFastFoodOutline className="w-10 h-10 text-red-400 hover:text-blue-400" />

                                {/*Search Icon*/}
                                <div style={{ position: 'relative' }}>
                                    <input className="rounded-3xl py-3 px-3 outline none text-x5 w-[350px] pr-10 hidden lg:block md:block text-gray-600" placeholder="Search here" />

                                    <FaSearch className="w-5 h-5 text-red-400 absolute right-3 top-1/2 transform-translate-y-1/2 hidden lg:block md:block" />


                                </div>
                                {/*Card Icon*/}
                                <FaCartShopping className="inline-block w-8 h-8   hover:ring-red-400 text-red-400" />
                                <img className="inline-block w-10 h-10  rounded-full ring-2 ring-red-400" src="https://media.licdn.com/dms/image/v2/D5603AQH0qktjw9X8IQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724307833274?e=1736985600&v=beta&t=a52iPHSVKNAZzPZPqZvreYUlv6hlBPZ6hlILXM20opg" alt="mylogo" />








                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>


    )

}
