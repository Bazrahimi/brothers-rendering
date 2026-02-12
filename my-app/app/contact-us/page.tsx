import ContactDetails from "./_ui/ContactDetails";
import ContactForm from "./_ui/ContactForm";
import ContactIntro from "./_ui/ContactIntro";

const ContactUsPage = () => {
  return (
    <main>
      <div className="relative min-h-screen">
        {/* background layer (blur) */}
        <div className="pointer-events-none absolute inset-0 bg-white/60 backdrop-blur-[1px]" />

        {/* content layer */}
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <ContactIntro />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-10">
            <section className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start h-fit">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-5 sm:p-7">
                <ContactForm />
              </div>
            </section>

            <aside className="lg:col-span-7 space-y-8">
              <div className="rounded-2xl border border-white/70 bg-white/80 shadow-sm backdrop-blur p-6 sm:p-8">
                <ContactDetails />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;
