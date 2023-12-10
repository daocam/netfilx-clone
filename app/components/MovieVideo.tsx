import prisma from "../utils/db";
import MovieButtons from "./MovieButtons";

const getData = async () => {
  const data = await prisma.movie.findFirst({
    select: {
      id: true, 
      imageString: true, 
      title: true, 
      age: true, 
      videoSource: true,
      duration: true, 
      overview: true,
      release: true, 
      youtubeString: true, 
    },
  });
  return data
}

export default async function MovieVideo() {
  const data = await getData();

  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video 
        poster={data?.imageString}
        autoPlay
        loop
        muted
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold text-white">{data?.title}</h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>
        <div className="flex gap-x-3 mt-4">
          <MovieButtons 
            age={data?.age as number} 
            duration={data?.duration as number} 
            releaseDate={data?.release as number} 
            id={data?.id as number}
            title={data?.title as string}
            overview={data?.overview as string}
            youtubeUrl={data?.youtubeString as string}
            key={data?.id}
          />
        </div>
      </div>
    </div>
  );
}
