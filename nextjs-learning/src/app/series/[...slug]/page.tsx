const Series = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h1>All Routes</h1>
      <ul>
        {slug.map((s) => (
          <li key={s}>-{s}</li>
        ))}
      </ul>
    </div>
  );
};
export default Series;
