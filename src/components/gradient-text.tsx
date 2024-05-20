interface GradientTextProps {
  text: string;
  from?: string;
  via?: string;
  to?: string;
  size?: string;
}

export default function GradientTextAnimated({
  text,
  from,
  via,
  to,
  size,
}: GradientTextProps) {
  const fromParam = from || "from-teal-500";
  const viaParam = via || "via-purple-500";
  const toParam = to || "to-orange-500";
  const sizeParam = size || "";

  return (
    <span
      className={`bg-gradient-to-br ${fromParam} ${viaParam} ${toParam} ${sizeParam} text-transparent bg-clip-text bg-300% animate-gradient`}
    >
      {text}
    </span>
  );
}
