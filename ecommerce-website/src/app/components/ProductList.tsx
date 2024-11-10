import React from "react";
const product = [
    {
        id: 1,
        title: "Chicken Cheese Burger",
        category: "",
        price: "399.00",
        imageUrl: "https://png.pngtree.com/png-vector/20230417/ourmid/pngtree-food-delicious-burger-png-image_6712851.png",
        bgcolor: "bg-orange-500"
    },

    {
        id: 2,
        title: "French Fries",
        category: "",
        price: "199.00",
        imageUrl:"https://static.vecteezy.com/system/resources/thumbnails/036/290/866/small/ai-generated-french-fries-with-dipping-sauce-on-a-transparent-background-ai-png.png",
        bgcolor: "bg-pink-500"
    },


    {
        id: 3,
        title: "Pasta",
        category: "",
        price: "650.00",
        imageUrl: "https://png.pngtree.com/png-clipart/20210418/original/pngtree-cooking-gourmet-snack-pasta-png-image_6241443.jpg",
        bgcolor: "bg-orange-500"
    },
    


]
export default function ProductList() {
    return (
        <div className="p-1 flex flex-wrap items-center justify-center mb-6 ">{
            product.map((product) => (
                <div key={product.id} className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgcolor} rounded-lg shadow-lggroup max-w-sm`}>

                    <svg className="absolute bottom-0 left- mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" style={{ opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>


                    <div className="relative pt-20 px-10 flex item-center justify-center group-hover:scale-110 transition-transform ">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24  ml-3" style={{ background: "radial-gradient(black,  transparent 50%", transform: "rotate3d(0,0,1, 20deg) scale3d (1,0.6, 1", opacity: 0.2 }}>


                        </div>
                        <img className="relativ w-50" src={product.imageUrl} alt={product.title} />

                    </div>
                    <div className="absolute text-white px-6 pb-6 mt-6 ">
                        <span className="block opacity-75 -mb-1">
                            {product.category}
                        </span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">
                                {product.title}
                            </span>

                            <span className="block bg-white rounded-s-sm ml-5 mb-5 mr-7 text-pink-500 text-x5 font-bold px-7 py-2  leading-none  items-center">
                                {product.price}
                            </span>

                        </div>

                    </div>

                </div>

            ))
        }












        </div>
    )
}

