import React from 'react';
import Layout from '../layout/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Products() {
  const plants = [
    {
      id: 1,
      name: 'Spider Plant',
      price: 400,
      description: "Spider plants are known for their long, arching leaves and tiny white flowers and distinctive patterns.",
      imageUrl: ['/spider.jpg', '/snake.jpg']
    },
    {
      id: 2,
      name: 'Snake Plant',
      price: 450,
      description: 'Snake plants have tall, sturdy leaves with a striking dark green color and distinctive patterns.',
      imageUrl: ['/snake.jpg','/spider.jpg', '/snake.jpg','/spider.jpg', '/snake.jpg']
    },
    {
      id: 3,
      name: 'Fiddle Leaf Fig',
      price: 550,
      description: 'Fiddle Leaf Figs are popular for their large, glossy, violin-shaped leaves.',
      imageUrl: ['/spider.jpg', '/snake.jpg']
    },
    {
      id: 4,
      name: 'Pothos',
      price: 300,
      description: 'Pothos plants are easy to care for and known for their trailing vines and heart-shaped leaves.',
      imageUrl: ['/spider.jpg', '/snake.jpg']
    },
    {
      id: 5,
      name: 'Monstera',
      price: 600,
      description: 'Monstera plants have large, dramatic leaves with natural leaf holes, also known as fenestrations.',
      imageUrl: ['/monstera.jpg']
    }
  ];
  
  const handleBuy = (plantId) => {
    alert(`You clicked on See More for plant with ID: ${plantId}`);
  };

  return (
    <Layout page="Shops">
      <>
        <div className="flex flex-wrap justify-around bg-white">
          {plants.length > 0 ? (
            plants.map((plant) => (
              <div key={plant.id} className="mb-6 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:px-6">
                <div className="card-compact bg-base-100 shadow-xl">
              
               <div className="carousel w-full">
  {plant.imageUrl.map((imageUrl, index) => (
    <div key={index} id={`slide${plant.id}-${index + 1}`} className="carousel-item relative w-full">
      <img src={imageUrl} className="w-full" alt={`Plant ${index + 1}`} />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${plant.id}-${index === 0 ? plant.imageUrl.length : index}`} className="btn btn-circle">❮</a>
        <a href={`#slide${plant.id}-${index === plant.imageUrl.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
      </div>
    </div>
  ))}
</div>



                  <div className="card-body">
                    <h2 className="card-title">{plant.name}</h2>
                    <p>{plant.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary" onClick={() => handleBuy(plant.id)}>
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
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
