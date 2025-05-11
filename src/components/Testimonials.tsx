
export function Testimonials() {
  const reviews = [
    { id: 1, title: "Review 1" },
    { id: 2, title: "Review 2" },
    { id: 3, title: "Review 3" },
    { id: 4, title: "Review 4" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg font-medium">Loved by thousands of people</p>
          <p className="text-gray-600">Here's what some of our users have to say</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="review-card border border-gray-300 rounded-lg p-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
              <p className="text-center">{review.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
