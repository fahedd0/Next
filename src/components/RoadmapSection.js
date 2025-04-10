/* eslint-disable @next/next/no-img-element */
'use client';

export default function RoadmapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            ROADMAP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Roadmap to Success</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Charting a course to revolutionize the insurance industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-600 text-center">
            Our journey began with a simple mission: to empower insurers with cutting-edge
            technology that would help them adapt and thrive in the digital age. Since our inception,
            we have continuously expanded our platform capabilities and collaborated with our
            clients to develop innovative insurance solutions. We are dedicated to maintaining our
            position at the forefront of insurance technology and providing unparalleled value to our
            partners.
          </p>
        </div>

        <div className="max-w-5xl mx-auto reveal">
          <img src="/path.png" alt="Click2Secure Roadmap" className="w-full" />
        </div>
      </div>
    </section>
  );
}
