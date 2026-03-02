import { Bed, Bath, Ruler, LandPlot, Car, Calendar, Phone, Mail, ExternalLink, MapPin, Home, CheckCircle, Thermometer, DoorOpen, Palmtree, KeyRound } from "lucide-react";
import heroImg from "@/assets/photo-kitchen.jpg";
import photoRwOutdoor from "@/assets/rw-outdoor.jpg";
import photo1 from "@/assets/photo-gallery-1.jpg";
import photo2 from "@/assets/photo-gallery-2.jpg";
import photo3 from "@/assets/photo-gallery-3.jpg";
import photoExterior from "@/assets/photo-exterior.jpg";
import photoBedroom from "@/assets/photo-bedroom.jpg";
import photoBathroom from "@/assets/photo-bathroom.jpg";
import photoGarage from "@/assets/photo-garage.jpg";
import photoLiving from "@/assets/photo-living.jpg";
import photoBedroom2 from "@/assets/photo-bedroom-2.jpg";

const stats = [
  { icon: Bed, label: "Bedrooms", value: "3" },
  { icon: Bath, label: "Bathrooms", value: "2" },
  { icon: Ruler, label: "Floor Area", value: "153m²" },
  { icon: LandPlot, label: "Land Area", value: "512m²" },
  { icon: Car, label: "Garage", value: "Double" },
];

const features = [
  { icon: Home, title: "Built 2022", desc: "Modern construction with quality finishes throughout" },
  { icon: CheckCircle, title: "Open-Plan Living", desc: "Relaxed heart of the home where family life unfolds naturally" },
  { icon: Palmtree, title: "Louvered Roof Outdoor", desc: "Sheltered spot for morning coffees and casual entertaining" },
  { icon: DoorOpen, title: "Private Master Retreat", desc: "Spacious master bedroom with generous double wardrobe, sleek ensuite, and direct deck access" },
  { icon: Thermometer, title: "Climate Control", desc: "Heat pump and ceiling fans, double glazing throughout" },
  { icon: KeyRound, title: "Fully Fenced & Gated", desc: "Peace of mind with a welcoming, open feel" },
];

const gallery = [photoLiving, photo1, photo2, photoExterior, photoBedroom, photoBathroom, photo3, photoGarage, photoBedroom2];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={heroImg}
          alt="4 Royal St Annes Drive, Kamo – louvered roof outdoor entertaining area"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-12 md:px-16 lg:px-24">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-foreground/80">
            For Sale
          </p>
          <h1 className="mb-3 text-3xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            4 Royal St Annes Drive
          </h1>
          <p className="mb-4 text-lg font-light text-primary-foreground/90 md:text-xl">
            Kamo, Whangarei
          </p>
          <p className="text-2xl font-semibold text-accent-foreground md:text-3xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Asking Price $789,000
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-6 py-6 md:gap-10 md:py-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-foreground">
              <s.icon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <span className="font-semibold">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tagline */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <h2 className="mb-4 text-2xl md:text-4xl">
          Relaxed, Modern, and Ready to Go
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Built in 2022 and designed with modern life in mind, this sunny, low-maintenance home
          is all about comfort, ease, and everyday practicality.
        </p>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-lg ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Property photo ${i + 1}`}
                className="aspect-[16/10] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Description & Features */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          {/* Description */}
          <div>
            <h2 className="mb-6 text-2xl md:text-3xl">About this Home</h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Open-plan living forms the heart of the home, creating a relaxed space where family
                life can unfold naturally. There are three well-proportioned bedrooms and two
                bathrooms, including a master with ensuite, making mornings easier and weekends slower.
              </p>
              <p>
                Step outside to the louvered roof outdoor living area — a sheltered spot for morning
                coffees, relaxed evenings, and casual entertaining. With great privacy and easy-care
                grounds, there's more time to enjoy your surroundings and less time spent on upkeep.
              </p>
              <p>
                The fully fenced section with gated entry adds peace of mind, without taking away
                from the home's open, welcoming feel. Modern, comfortable, and family-friendly — this
                is a home that makes everyday living feel easy.
              </p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="mb-6 text-2xl md:text-3xl">Key Features</h2>
            <div className="space-y-5">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <f.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Home & Contact */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Open Home */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex items-center gap-3">
              <Calendar className="h-6 w-6 text-accent" />
              <h2 className="text-2xl">Open Home</h2>
            </div>
            <div className="mb-2 text-lg font-semibold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Sunday, 8 March
            </div>
            <p className="mb-6 text-muted-foreground">11:30am – 12:00pm</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>4 Royal St Annes Drive, Kamo, Whangarei</span>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl">Get in Touch</h2>
            <div className="mb-1 text-lg font-semibold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Warrick Harkness
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Licensee Salesperson · Ray White Whangarei
            </p>
            <div className="space-y-3">
              <a
                href="tel:+64274474057"
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-foreground transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+64 27 447 4057</span>
              </a>
              <a
                href="mailto:warrick.harkness@raywhite.com"
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-foreground transition-colors hover:bg-secondary"
              >
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">warrick.harkness@raywhite.com</span>
              </a>
              <a
                href="https://rwwhangarei.co.nz/properties/residential-for-sale/whangarei-district/te-kamo-0185/house/3437057"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-foreground transition-colors hover:bg-secondary"
              >
                <ExternalLink className="h-4 w-4 text-accent" />
                <span className="text-sm">View full listing on Ray White</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-6 text-center text-2xl md:text-3xl">Location</h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="4 Royal St Annes Drive, Kamo on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.8!2d174.3157!3d-35.7241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0b4329a8c9fea3%3A0x0!2s4+Royal+St+Annes+Drive%2C+Kamo!5e0!3m2!1sen!2snz!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=4+Royal+St+Annes+Drive,+Kamo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              <MapPin className="h-4 w-4" /> Get directions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-6 py-8 text-center text-xs text-muted-foreground">
        <p>
          Listed by Ray White Whangarei · Listing #WHC38426 ·{" "}
          <a
            href="https://rwwhangarei.co.nz/properties/residential-for-sale/whangarei-district/te-kamo-0185/house/3437057"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            View on Ray White website
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
