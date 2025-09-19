import Link from "next/link";

const SeriesList = () => {
  const series = [
    { id: "100", title: "Breaking Bad" },
    { id: "200", title: "Stranger Things" },
    { id: "300", title: "Game of Thrones" },
  ];

  return (
    <div>
      <ul>
        {series.map((s) => (
          <Link key={s.id} href={`/serieslist/${s.id}`}>
            {s.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default SeriesList;
