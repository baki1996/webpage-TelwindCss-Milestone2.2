import React from "react";

export default function Carousal() {
    return (
        <div>
            <section className="bg-gradient-to-t from-black to-grey-700">
                <div className="py-4 px-2 mx-suto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700  h-auto md:h-full flex-col
                        ">
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40  flex-grow" >
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small_2x/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg" alt="burger"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from -grey-900/25 to-grey-900/5">

                                </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                    Jumbo Burger Bites
                                </h3>
                            </a>
                        </div>



                        

                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 " >
                            <a href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMK__z0W1PYqqXwJ4xjieB2FR0Pg8AlWLMeA1ZztdofPlAv3nnsx49aCPXYUfBQmOdOI&usqp=CAU" alt="noodles" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from -grey-900/25 to-grey-900/5">

                                </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                    Chinese Miso Noodles
                                </h3>
                            </a>

                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2  ">
                                <a href=""
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="
https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg" alt="Biryani"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500  ease-in-out" />
                                    <div className="absolute inset-0  bg-gradient-to-b from-grey-900/25 to-grey-900/5"> </div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                        Spicy Special Biryani
                                    </h3> </a>

                                    


                                <a href=""
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2018/05/mutton-kabab-recipe.jpg" alt="Biryani"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500  ease-in-out" />
                                    <div className="absolute inset-0  bg-gradient-to-b from-grey-900/25 to-grey-900/5"> </div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                        Special Reshmi Kabab
                                    </h3>



                                </a>
                            </div>


                        </div>


                        <div>
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="

https://c.ndtvimg.com/2023-01/9urb16u8_chicken-tikka_625x300_21_January_23.jpg" alt=""
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500  ease-in-out" />
                                    <div className="absolute inset-0  bg-gradient-to-b from-grey-900/25 to-grey-900/5"> </div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                     Chicken Tikka stick
                                    </h3></a>


                                    

                                    


                                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ba/f5/c6/the-best-pizza-we-ever.jpg?w=600&h=400&s=1" alt=""
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500  ease-in-out" />
                                    <div className="absolute inset-0  bg-gradient-to-b from-grey-900/25 to-grey-900/5"> </div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                     Rich Delightful Pizza
                                    </h3></a>

                                    


                        </div>

                        

                        












                    </div>

                </div>

            </section>
        </div>
    )
}
