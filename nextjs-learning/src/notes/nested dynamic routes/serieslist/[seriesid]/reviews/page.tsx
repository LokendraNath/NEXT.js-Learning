const ReviewsPage = async ({ params }: { params: { seriesid: string } }) => {
  // Example: static dummy reviews
  const reviews = [
    { id: "1", content: "Amazing series! Must watch." },
    { id: "2", content: "Good but slow pacing in middle." },
    { id: "3", content: "Overrated, but acting was great." },
  ];

  return (
    <div>
      <h1>Reviews for Series {params.seriesid}</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <a href={`/serieslist/${params.seriesid}/reviews/${review.id}`}>
              {review.content}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsPage;
