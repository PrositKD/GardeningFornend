import React, { useState } from 'react';
import Layout from '../layout/layout';
import CommentForm from './CommentForm';
import { useRouter } from 'next/router';

export default function ViewPost() {
  const router = useRouter();
  const { viewpost } = router.query;

  const plant = {
    name: 'Snake Plant',
    latinName: 'Sansevieria trifasciata',
    description:
      "Snake plants have tall, sturdy leaves with a striking dark green color and distinctive patterns. They are low-maintenance and excellent for improving indoor air quality. One of the most common problems encountered with snake plants (and other succulents) is overwatering. These plants do not tolerate soggy soil; they tend to develop root rot. To avoid this, follow these watering practices: " +
      "- Do not water too frequently. Let the soil mostly dry out between waterings. " +
      "- Tip: To know when it’s time to water, don’t just rely on how the surface of the soil looks. Instead, carefully stick your finger or a wooden chopstick a couple of inches into the soil. Hold off on watering if you feel any moisture or see soil stick to the chopstick. " +
      "- Water from the bottom of the pot, if possible. This encourages the roots to grow downward and deep, helping to stabilize the thick, tall leaves. " +
      "- During the winter, while the plant isn’t actively growing, water less often than you would in spring and summer." +
      "They are easy to care for and can thrive in a variety of indoor conditions.",
    imageUrl: '/snake.jpg',
  };

  // State to manage comments
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <Layout page="Gardening">
      <div className="">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="mb-4">Your plant's ID is {viewpost !== undefined ? viewpost : 'ID is undefined'}</p>
        <div className="flex items-center mb-4">
              <img src={plant.imageUrl} alt={plant.name} className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <div className="font-bold">{plant.name}</div>
                <div className="text-gray-500">Posted on {plant.date}</div>
              </div>
            </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-700 mb-4">{`${plant.description.substring(0, 300)}`}</p>
          <img
          src={plant.imageUrl}
          alt={plant.name}
          className="w-full mx-auto mb-4 rounded-lg"
          style={{ maxWidth: '90%', height: 'auto' }}
        />
          <div className="text-gray-500">Latin Name: {plant.latinName}</div>
          <p className="text-gray-700">{`${plant.description.substring(300)}`}</p>
        </div>
      

      <div className="mt-8 bg-gray-200 p-2 rounded-md">
        <h2 className="text-2xl font-semibold mb-4 ">Comments and Questions</h2>
        <CommentForm onCommentSubmit={handleCommentSubmit} />
        </div>
        <div className="mt-4 space-y-2">
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-md">
           
             <div className="ml-4">
                <div className="font-bold"> {plant.name}</div>
                <div className="text-gray-500"> {comment}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
    </Layout>
  );
}
