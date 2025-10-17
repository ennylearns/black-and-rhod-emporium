import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Our Story</h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg md:text-xl leading-relaxed mb-12">
              Black&Rhood is a Nigerian streetwear brand rooted in pride, identity, and the power of Black culture. We represent survival, resilience, and unity through fashion that tells the story of excellence and originality.
            </p>

            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg opacity-90">
                To empower individuals through authentic streetwear that celebrates Black culture, identity, and the spirit of the hood. We create fashion that speaks to the heart of our community.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Pride</h3>
                <p className="text-muted-foreground">
                  Celebrating Black excellence and cultural heritage in every design.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Authenticity</h3>
                <p className="text-muted-foreground">
                  Staying true to our roots and the stories of the streets.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Unity</h3>
                <p className="text-muted-foreground">
                  Building a community that stands together through fashion.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Resilience</h3>
                <p className="text-muted-foreground">
                  Honoring the strength and survival of our people.
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl font-bold text-center py-8 border-y border-border">
              "We don't just make clothes. We craft stories of resilience, pride, and power."
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
