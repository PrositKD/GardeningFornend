import React from 'react';
import Layout from '../layout/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Indoor() {
  const plants = [
    {
      id: 1,
      name: 'Spider Plant',
      latinName: 'Chlorophytum comosum',
      description:
        "Spider plants are known for their long, arching leaves and tiny white flowers"+
        "They are easy to care for and can thrive in a variety of indoor conditions."+
        "লোকেরা প্রায়শই তাদের বাড়িতে মানি প্ল্যান্ট লাগায়, তবে আপনি যদি মানি প্ল্যান্টের সঙ্গে adadk aksasla saksaskka aslskalsk salskaks slasklaks slasklask alskals as  salksla slaksa sa sklaskal salska slaskl sals askalskaska d smcsd fsdfksd f fdskf sf sak a a স্পাইডার প্ল্যান্ট লাগান তবে আপনি বহুগুণ বেশি সুবিধা পাবেন।",
      imageUrl: '/spider.jpg',
    },
    {
      id: 2,
      name: 'Snake Plant',
      latinName: 'Sansevieria trifasciata',
      description:
        'Snake plants have tall, sturdy leaves with a striking dark green color and distinctive patterns. They are low-maintenance and excellent for improving indoor air quality.One of the most common problems encountered with snake plants (and other succulents) is overwatering. These plants do not tolerate soggy soil; they tend to develop root rot. To avoid this, follow these watering practices'+

        "Do not water too frequently. Let the soil mostly dry out between waterings."+
        "Tip: To know when it’s time to water, don’t just rely on how the surface of the soil looks. Instead, carefully stick your finger or a wooden chopstick a couple of inches into the soil. Hold off on watering if you feel any moisture or see soil stick to the chopstick."+
       "Water from the bottom of the pot, if possible. This encourages the roots to grow downward and deep, helping to stabilize the thick, tall leaves."+ 
        "During the winter, while the plant isn’t actively growing, water less often than you would in spring and summer.",
      imageUrl: '/snake.jpg',
    },
    // Add more plant objects here...
  ];
  const handleSeeMore = (plantId) => {
    alert(`You clicked on See More for plant with ID: ${plantId}`);
  };

  return (
    
<Layout page={Indoor}>
  {plants.length > 0 ? (
    plants.map((plant) => (
      <div key={plant.id} className="min-h-screen flex flex-col bg-gray-100 p-8">
        <div className="text-xl font-bold mb-2 flex flex-col justify-center items-center">
          {plant.name}
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="text-gray-700 mb-2">
            {`${plant.description.substring(0, 300)}`}
          </div>
          <img
            src={plant.imageUrl}
            alt={plant.name}
            className="w-3/4 object-cover"
          />
          <div className="text-gray-700 mb-2">
            {`${plant.description.substring(300, 600)}...`}
          </div>
          {plant.description.length > 200 && (
             <Link href={`/user/${plant.id}`}  className="text-blue-500">
            See More
           </Link>
           
          )}
        </div>
      </div>
    ))
  ) : (
    <li></li>
  )}
</Layout>

  
  
  );
}
