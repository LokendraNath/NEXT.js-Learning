const Series = ({ params }: { params: { seriesid: string } }) => {
  console.log(params);
  return <h1>Series Nomber: {params.seriesid}</h1>;
};
export default Series;
