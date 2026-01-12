interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-40 object-cover rounded"
      />

      <div className="mt-3">
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-sm text-gray-500">{property.location}</p>
        <p className="text-blue-600 font-bold mt-2">
          ₦{property.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
