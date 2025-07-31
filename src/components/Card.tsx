// src/components/Card.tsx
export default function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="p-6 bg-white/90 backdrop-blur-sm
                 rounded-3xl shadow-lg hover:shadow-2xl
                 transition-shadow duration-300"
    >
      <h3 className="text-sm text-secondaryOrange">{title}</h3>
      <p className="mt-2 text-3xl font-extrabold text-primaryBlue">
        {value}
      </p>
    </div>
  );
}
