import React from "react";
import image from "../../images/doctor2.jpg";
interface CarouselItem {
  heading: string;
  text: string;
  buttonText: string;
  image: string;
}

const News: React.FC = () => {
  const carouselItems: CarouselItem[] = [
    {
      heading: "Automate your communication workload with Botbat",
      text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
      buttonText: "Click One",
      image: image,
    },
    {
      heading: "Automate your communication workload with Botbat",
      text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
      buttonText: "Click One",
      image: image,
    },
    {
      heading: "Automate your communication workload with Botbat",
      text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
      buttonText: "Click One",
      image: image,
    },
  ];

  return (
    <div>
      {/* Header of the page */}
      <div className='text-center mt-10 md:mt-44'>
        <p className='text-lg md:text-xl lg:text-2xl font-extrabold'>
          News and Articles
        </p>
        <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight'>
          See what's new with Botbat
        </h1>
        <p className='text-base md:text-lg lg:text-xl mt-5 flex w-3/4 m-auto'>
          Stay up to date with the latest news and articles from Botbat.
        </p>
      </div>

      {/* Carousel Section */}
      <div className='carousel-item'>
        <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-12'>
          <div className='flex flex-wrap -m-2 my-5'>
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2 my-8'
              >
                <img
                  alt='gallery' // Provide meaningful alt text
                  className='block h-2/3 w-full rounded-lg object-cover object-center my-5'
                  src={item.image}
                />
                <h1 className='text-center text-3xl font-bold py-4 '>
                  {item.buttonText}
                </h1>
                <p className='text-lg text-center py-2 '>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
