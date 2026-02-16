import ContactForm from "../contact-us/_ui/ContactForm";

const FreeConsultationPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>;
}) => {
  const { message } = await searchParams;

 

  const content = (
    <ContactForm
      header="Free Consultation | Quote"
      subHeader={`Get your first quote`}
      message={message}
    />
  );

  return content;
};

export default FreeConsultationPage;
