/* eslint-disable @next/next/no-img-element */
import { series } from "@/data/series";
import Link from "next/link";

const SeriesPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Lokendra Favorite Series
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {series.map((s) => (
          <Link
            key={s.id}
            href={`/series/${s.category}/${s.slug}`}
            className="group relative bg-gray-900 p-5 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                className="w-full h-52 object-cover rounded-lg group-hover:opacity-80 transition"
                src={s.image}
                alt={s.title}
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            <h1 className="text-2xl font-semibold text-white mt-4">
              {s.title}
            </h1>
            <p className="text-gray-400 mt-2 text-sm">{s.description}</p>
            <p className="text-yellow-400 font-medium mt-3">✨{s.rating}/10</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default SeriesPage;
