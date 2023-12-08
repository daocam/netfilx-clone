"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
  id: number;
  title: string;
  overview: string;
  youtubeUrl: string;
  age: number;
  duration: number;
  releaseDate: number;
}
export default function MovieButtons({ 
  id, 
  title, 
  overview, 
  youtubeUrl, 
  age, 
  duration, 
  releaseDate 
}: iAppProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 w-6 h-6" /> Play
      </Button>
      <Button 
        onClick={() => setOpen(true)} 
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 w-6 h-6" /> Learn More
      </Button>

      <PlayVideoModal 
        state={open} 
        changeState={setOpen} 
        key={id}
        title={title} 
        overview={overview} 
        youtubeUrl={youtubeUrl} 
        age={age} 
        duration={duration} 
        release={releaseDate} 
      />
    </>
  );
};
