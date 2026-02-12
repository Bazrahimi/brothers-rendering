import ContactForm from "./_ui/ContactForm";

import ContactDetails from "./_ui/ContactDetails";
import ContactIntro from "./_ui/ContactIntro";

const ContactUsPage = () => {
  return (
    <main>
      <div className="min-h-screen bg-white/60 backdrop-blur-[1px]">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <ContactIntro />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-10">
            {/* LEFT — FORM (Primary) */}
            <section className="lg:col-span-5 order-1">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-5 sm:p-7">
                <ContactForm />
              </div>
            </section>

            {/* RIGHT — INFO (Secondary) */}
            <aside className="lg:col-span-7 order-2">
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
