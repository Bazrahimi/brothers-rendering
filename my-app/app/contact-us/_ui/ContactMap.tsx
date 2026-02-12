type ContactMapProps = {
  address: string;
};

const ContactMap = ({ address }: ContactMapProps) => {
  if (!address) return null;

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address,
  )}&output=embed`;

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
      <iframe
        title="Location Map"
        src={mapSrc}
        width="100%"
        height="220"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  );
};

export default ContactMap;
