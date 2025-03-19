import React from 'react'

const data = [
         
   {
      id: 1,
      name: "Samsung",
      price: "39000",
      description: "The Samsung Galaxy S23 is a series of high-end Android-based smartphones developed, manufactured, and marketed by Samsung Electronics as part of its flagship Galaxy S series. The phones were announced and unveiled on 1 February 2023 at the Galaxy Unpacked in-person event and were released on 17 February 2023.[4][5][6][7][8] They collectively serve as the successor to the Samsung Galaxy S22 series and the S21 FE. It was succeeded by the Samsung Galaxy S24 series.",
      image: "https://m.media-amazon.com/images/I/61D3EdXKG5L._SL1500_.jpg",
   },

   {
      id: 2,
      name: "Iphone",
      price: "53000",
      description: "The devices were announced on September 12, 2023, during the Apple Event at Apple Park in Cupertino, California alongside the higher-priced iPhone 15 Pro and 15 Pro Max. Pre-orders began on September 15, 2023, and the devices were made available on September 22, 2023.",
      image: "https://m.media-amazon.com/images/I/61D3EdXKG5L._SL1500_.jpg",
   },

   {
      id: 3,
      name: "Moto",
      price: "26000",
      description: "Even a year after its launch, the Motorola Edge 40 manages to hold up well with its clean software, curved display and slim design. It is one of the few phones with an IP68 rating, NFC and wireless charging support in this range, which is usually found on flagship phones.",
      image: "https://m.media-amazon.com/images/I/61D3EdXKG5L._SL1500_.jpg",
   },

   {
      id: 4,
      name: "Googlepixel",
      price: "49000",
      description: "Whether a Google Pixel or an iPhone is better depends on your preference for the operating system, iOS or Android. Both phones have great specs and software, and can get you through a full day of use. ",
      image: "https://m.media-amazon.com/images/I/61D3EdXKG5L._SL1500_.jpg",
   
  }

 ];


const Card = () => {
   
  
   return (
      <div className=' grid grid-cols-1 gap-4 lg:grid-cols-4 '>
        {data.map((ele) => (
          <div key={ele.id} className="bg-gray-50 text-black border-2 text-center border-black rounded-xl">
            <div className='flex justify-center items-center'> 
               <img src={ele.image} className='object-contain w-[70%] rounded-2xl'/>
            </div>
           <h1 className='text-emerald-500 text-left'> {ele.name}</h1>
         <p className='text-left'>   {ele.price}</p>
            <p>{ele.description}</p>
          </div>
        ))}
      </div>
    );
  };


export default Card;