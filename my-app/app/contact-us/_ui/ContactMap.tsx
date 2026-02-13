type ContactMapProps = {
  address: string;
  zoom?: number; // optional zoom control
};

const ContactMap = ({ address, zoom = 12 }: ContactMapProps) => {
  if (!address) return null;

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address,
  )}&z=${zoom}&output=embed`;

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
      <iframe
        title="Location Map"
        src={mapSrc}
        width="100%"
        height="420"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  );
};

export default ContactMap;
