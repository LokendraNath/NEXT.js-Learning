import { series } from "@/data/series";
import { Calendar, PenLine, StarIcon, Video } from "lucide-react";
const MainSeriesPage = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  const [category, seriesSlug] = slug;

  const matchSeries = series.find(
    (s) => s.slug === seriesSlug && s.category === category
  );

  if (!matchSeries) <h1>Series Not Found</h1>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Game Banner */}
      <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          src={matchSeries?.image}
          alt={matchSeries?.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Game Details */}
      <div className="mt-8 space-y-6">
        <h1 className="text-5xl text-center sm:text-start font-bold text-white">
          {matchSeries?.title}
        </h1>
        <p className="text-lg text-center sm:text-start text-gray-300 leading-relaxed">
          {matchSeries?.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
          <div className="flex items-center bg-gray-800 p-4 rounded-lg space-x-2">
            <StarIcon className="text-yellow-500 " fill="yellow" />
            <span>Rating: {matchSeries?.rating}/10</span>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <Calendar className="mr-2 text-purple-600" />
            <span>Release Date: {matchSeries?.releaseDate}</span>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <PenLine className="mr-2 text-green-600" />
            <span>Creator: {matchSeries?.creator}</span>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <Video className="mr-2 text-red-600" />
            <span>Platforms: {matchSeries?.network}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainSeriesPage;
