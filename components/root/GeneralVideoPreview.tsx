import { PlayCircle } from "lucide-react";

interface PropType {
  title: string;
  videoUrl?: string;
}

function GeneralVideoPreview({ title, videoUrl }: PropType) {
  return (
    <div className="bg-ourProject bg-no-repeat bg-cover h-[85vh]">
      <div className="flex flex-col justify-center items-center  h-full space-y-20">
        <button className=" flex items-center justify-center h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20">
          <PlayCircle className="h-16 w-16 text-white" />
        </button>
        <h1 className="text-white text-5xl font-bold">{title}</h1>
      </div>
    </div>
  );
}

export default GeneralVideoPreview;
