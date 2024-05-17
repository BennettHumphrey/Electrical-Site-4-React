






const HeroTriangleRight = ({ size }) => {
    return (
      <svg className="z-10" width={size + size} height={size}>
        {/* Triangle */}
        <path d={`M ${size} ${size} L ${size} 0 L 0 ${size} Z`} fill="white" />
        
        {/* Square */}
        <rect x={size-1} y={0} width={size} height={size} fill="white" />
      </svg>
    );
  };
  
  export default HeroTriangleRight;