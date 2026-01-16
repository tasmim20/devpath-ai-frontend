import Image from "next/image";

const testimonials = [
  {
    name: "Makima Smith",
    image: "/assets/pic3.jpg",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
  {
    name: "Andnew Smith",
    image: "/assets/pic4.png",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
  {
    name: "Max Makina",
    image: "/assets/pic5.png",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <h2
          style={{ color: "#3e94e4" }}
          className="text-center text-sm font-semibold mb-2"
        >
          Clients Testimonials
        </h2>
        <h3 className="text-center text-4xl font-bold mb-4">
          Your Success, Our Inspiration
        </h3>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          There are many variations of passages available, but the majority have
          suffered some form, by injected humour, or look even slightly
          believable.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-[#fff4ef]  p-8 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-orange-300 animate-spin-slow"></div>
                  <div className="w-20 h-20 rounded-full bg-oranage-100 p-1 absolute top-0 left-0 right-0 bottom-0 m-auto">
                    <Image
                      width={150}
                      height={150}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="text-purple-600 text-4xl font-serif absolute top-4 left-4"></div>
              <h4 className="text-xl font-semibold text-center mt-12 mb-2">
                {testimonial.name}
              </h4>
              <p className="text-sm text-orange-400 text-center mb-4">
                One Year With Us
              </p>
              <p className="text-gray-600 text-center">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
