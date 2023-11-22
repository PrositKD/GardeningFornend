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
        "লোকেরা প্রায়শই তাদের বাড়িতে মানি প্ল্যান্ট লাগায়, তবে আপনি যদি মানি প্ল্যান্টের সঙ্গে স্পাইডার প্ল্যান্ট লাগান তবে আপনি বহুগুণ বেশি সুবিধা পাবেন।"+
        "Do not water too frequently. Let the soil mostly dry out between waterings."+
        "Tip: To know when it’s time to water, don’t just rely on how the surface of the soil looks. Instead, carefully stick your finger or a wooden chopstick a couple of inches into the soil. Hold off on watering if you feel any moisture or see soil stick to the chopstick."+
       "Water from the bottom of the pot, if possible. This encourages the roots to grow downward and deep, helping to stabilize the thick, tall leaves."+ 
        "During the winter, while the plant isn’t actively growing, water less often than you would in spring and summer.",
      imageUrl: '/spider.jpg',
      date: "3 Days ago"
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
      date: "10-01-2017",
    },
    // Add more plant objects here...
  ];
  const handleSeeMore = (plantId) => {
    alert(`You clicked on See More for plant with ID: ${plantId}`);
  };

  return (
    
<Layout page={Indoor}>
<>
<div>
  {plants.length > 0 ? (
    plants.map((plant) => (
      <div key={plant.id} className="bg-white rounded-md shadow-lg p-6 mb-4">
        <div className="flex items-center mb-4">
          <img src={plant.imageUrl} alt={plant.name} className="w-10 h-10 rounded-full" />
          <div className="ml-4">
            <div className="font-bold">{plant.name}</div>
            <div className="text-gray-500">Posted on {plant.date}</div>
          </div>
        </div>

        <div className="text-gray-700 mb-4">
          {plant.description.substring(0, 200)}
        </div>

        {/* For mobile view, make the image full-screen */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-700 mb-4">{`${plant.description.substring(0, 300)}`}</p>
          <img
          src={plant.imageUrl}
          alt={plant.name}
          className="w-full mx-auto mb-4 rounded-lg"
          style={{ maxWidth: '90%', height: 'auto' }}
        />
          <div className="text-gray-500">Latin Name: {plant.latinName}</div>
          </div>
        <div className="text-gray-700 mb-4">
          {`${plant.description.substring(200, 500)}...`}
        </div>

        {plant.description.length > 500 && (
          <Link href={`/user/${plant.id}`} className="text-blue-500">
            See More
          </Link>
        )}
      </div>
    ))
  ) : (
    <div>No plants to display.</div>
  )}
</div>

    </>
</Layout>

  
  
  );
}
