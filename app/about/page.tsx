export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We are dedicated to providing the best solutions and services to our customers.
                        Our team is committed to innovation and excellence in everything we do.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed">
                        With years of experience in the industry, we have built a team of talented
                        professionals who are passionate about delivering quality results and creating
                        meaningful impact.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Expert team with proven track record</li>
                        <li>Customer-focused approach</li>
                        <li>Innovative solutions</li>
                        <li>24/7 Support</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}