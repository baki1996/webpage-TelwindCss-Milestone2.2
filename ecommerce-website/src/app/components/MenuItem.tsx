import React from "react";


const productCardid = () => {
    const productImage = [
        "https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfFAnACtR2yV7c9LclDsOa9lhp6-KmCNxAg&s"
        ];
    return (
        <div className="relative text-center p-10">
            <div className="absolute inset-0 "
            style={{
                backgroundImage: "url (`https://imgv3.fotor.com/images/share/Free-blue-gradient-pattern-background-from-Fotor.jpg`)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
                opacity: 0.1,
            }}/>
                <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">Most Favourite Items </h1>
               <h1 className="text-3xl text-white z-10 relative "> Order Now!

               </h1>
                 <section
                 id="Projects"
                 className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20  gap-x-14 mt-10 mb-5">
                    {Array.from({length: 6 }).map((_, index) => (
                        <div key={index}
                        className="w-70 bg-slate-600 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
                        <a href="#">
                            <img
                            src={productImage[index]}/>
                        </a>
                        </div>
                    ))}
                    

                 </section>

               
            </div>

      
    )
}
export default productCardid