import { useMemo } from "react";

const getDisplayedType = (type) => {
  const parts = type.split(/[-\s]+/);
  parts.pop();

  const formattedParts = parts.map(
    (part) => part.charAt(0).toUpperCase() + part.slice(1)
  );

  return formattedParts.join(" ");
};

const SessionTypeChip = ({ type }) => {
  const chipCode = useMemo(() => {
    const normalizedType = type.toLowerCase();

    switch (true) {
      case normalizedType.includes("gold"):
        return "bg-amber-300";
      case normalizedType.includes("silver"):
        return "bg-zinc-600";
      case normalizedType.includes("bronze"):
        return "bg-amber-600";
      default:
        return "bg-gray-400"; // Default color if no match
    }
  }, [type]);

  const displayedType = getDisplayedType(type);

  return (
    <p
      className={`px-3 py-1 font-semibold text-sm rounded-xl leading-relaxed font-medium text-white ${chipCode}`}
    >
      {displayedType}
    </p>
  );
};

export default SessionTypeChip;
