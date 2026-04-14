type Testimonial = {
    name: string;
    text: string;
    role?: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Abel K.",
        text: "The process was smooth and fast. I found my dream home in just a few days!",
        role: "Home Buyer",
    },
    {
        name: "Hana T.",
        text: "Very professional service. The listings were accurate and trustworthy.",
        role: "Real Estate Investor",


    },
    {
        name: "Dawit M.",
        text: "They helped me find the best deal within my budget. Highly recommended!",
        role: "First-time Home Buyer",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                        Trusted by people who found their perfect home with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="text-amber-400 text-lg leading-none mb-4" aria-label="5 star rating">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <p className="text-gray-600 mb-5">{testimonial.text}</p>
                            <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                            {testimonial.role && (
                                <p className="text-sm text-gray-500 mt-1">{testimonial.role}</p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}