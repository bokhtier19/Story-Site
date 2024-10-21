import React from "react";
import Poster from "../imports/marathonPoster.webp";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homescreen bg-[#F8F8F8] flex justify-center">
      <div className="box flex flex-col gap-4 w-[80%] my-10">
        <div className="headings">
          <h1 className="font-bold text-4xl text-nowrap">
            Read English Stories
          </h1>
          <h2 className="text-2xl text-gray-500">A world of stories</h2>
        </div>

        <div className="topseries">
          <Link to={"/"}>
            <div className="categories flex justify-between">
              <h1 className="mb-0 font-bold hover:cursor-pointer">
                Top Trending Series
              </h1>
              <button>
                <KeyboardArrowRight />
              </button>
            </div>
          </Link>

          <div className="cards grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="topupdatedseries">
          <Link to={"/"}>
            <div className="categories flex justify-between">
              <h1 className="mb-0 font-bold hover:cursor-pointer">
                Top Recently Updated Series
              </h1>
              <button>
                <KeyboardArrowRight />
              </button>
            </div>
          </Link>

          <div className="cards grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rommance">
          <Link to={"/"}>
            <div className="categories flex justify-between">
              <h1 className="mb-0 font-bold hover:cursor-pointer">
                Drama Series
              </h1>
              <button>
                <KeyboardArrowRight />
              </button>
            </div>
          </Link>

          <div className="cards grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="categories">
          <Link to={"/categories"}>
            <div className="categories flex justify-between">
              <h1 className="mb-0 font-bold hover:cursor-pointer">
                Explore Categories
              </h1>
              <button>
                <KeyboardArrowRight />
              </button>
            </div>
          </Link>

          <div className="cards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="singleCard relative mt-5 h-40">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">Horror</h2>
              </div>
            </div>
            <div className="singleCard relative mt-5 h-40">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">Horror</h2>
              </div>
            </div>
            <div className="singleCard relative mt-5 h-40">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">Horror</h2>
              </div>
            </div>
            <div className="singleCard relative mt-5 h-40">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">Horror</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="sciencefiction">
          <Link to={"/"}>
            <div className="categories flex justify-between">
              <h1 className="mb-0 font-bold hover:cursor-pointer">
                Science Fiction
              </h1>
              <button>
                <KeyboardArrowRight />
              </button>
            </div>
          </Link>

          <div className="cards grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="YouthLove">
          <Link to={"/"}>
            <div className="categories flex justify-between">
              <h1 className="mb-0 font-bold hover:cursor-pointer">
                Youth Love Series
              </h1>
              <button>
                <KeyboardArrowRight />
              </button>
            </div>
          </Link>

          <div className="cards grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
            <div className="singleCard relative max-w-48 mx-auto mt-5">
              <img
                className="h-72 w-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
                alt="Random-image"
              />
              <div className="details flex flex-col gap-2 p-2">
                <h4 className="font-bold">The Girl Second Floor</h4>
                <p>10 hours</p>
                <p>73k+ Total Readers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="poster md:p-10 w-full mt-10">
          <img src={Poster} alt="" className="w-full h-80 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
