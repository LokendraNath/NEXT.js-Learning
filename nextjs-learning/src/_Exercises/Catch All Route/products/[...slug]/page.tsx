const Product = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  return (
    <div>
      <h1>{slug.join("/")}</h1>
    </div>
  );
};
export default Product;
