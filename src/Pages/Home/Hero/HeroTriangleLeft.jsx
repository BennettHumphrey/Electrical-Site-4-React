const HeroTriangleLeft = ({ size }) => {
  return (
    <svg className="z-10" width={size + size} height={size}>
      {/* Triangle */}
      <path d={`M ${size} ${size} L ${size} 0 L ${size + size} ${size} Z`} fill="white" />
      {/* Square */}
      <rect x={0} y={0} width={size+1} height={size} fill="white" />
    </svg>
  );
};

export default HeroTriangleLeft;