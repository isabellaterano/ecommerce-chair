const Testimonials = () => {
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      text: "Absolutely love my new chair! It’s stylish and comfortable. Highly recommend!",
    },
    {
      id: 2,
      name: "John Smith",
      text: "Fantastic quality and excellent customer service. Will definitely buy again.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      text: "The best purchase I've made this year. The chair fits perfectly in my office.",
    },
  ];

  return (
    <section className="py-12 my-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card bg-white shadow-lg rounded-lg p-6"
            >
              <p className="text-lg text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
