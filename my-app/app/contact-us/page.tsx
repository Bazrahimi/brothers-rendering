import ContactDetails from "./_ui/ContactDetails";
import ContactForm from "./_ui/ContactForm";
import ContactIntro from "./_ui/ContactIntro";

const ContactUsPage = () => {
  return (
    <main>
      <div className="relative min-h-screen">
        {/* background layer (blur) */}
        <div className="pointer-events-none absolute inset-0 backdrop-blur-[1px]" />

        {/* content layer */}
        <div className="relative space-y-5 ">
          <div className="bg-gray-50 rounded-b-2xl pb-5">
            <ContactIntro />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
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
