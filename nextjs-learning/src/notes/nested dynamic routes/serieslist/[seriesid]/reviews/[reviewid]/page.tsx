const SeriesReview = ({
  params,
}: {
  params: { seriesid: string; reviewid: string };
}) => {
  const { seriesid, reviewid } = params;
  return (
    <h1>
      Series Review {reviewid} for series {seriesid}
    </h1>
  );
};
export default SeriesReview;
