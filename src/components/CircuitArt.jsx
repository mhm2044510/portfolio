export function CircuitArt() {
  return (
    <div className="max-w-[400px] mx-auto aspect-square w-full">
      <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="traceGrad" x1="0" y1="0" x2="400" y2="400">
            <stop offset="0%" stopColor="#d9822b" />
            <stop offset="100%" stopColor="#35d0c0" />
          </linearGradient>
        </defs>
        <g stroke="#1e2530" strokeWidth="2" fill="none">
          <path d="M40 60 H160 V140 H260 V60 H360" />
          <path d="M40 140 H100 V220 H220 V300 H360" />
          <path d="M40 220 H60 V340 H200 V300" />
          <path d="M160 140 V220" />
          <path d="M260 200 V300" />
        </g>
        <g
          stroke="url(#traceGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        >
          <path
            d="M40 60 H160 V140 H260 V60 H360"
            strokeDasharray="14 500"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-560"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M40 140 H100 V220 H220 V300 H360"
            strokeDasharray="14 560"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-620"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M40 220 H60 V340 H200 V300"
            strokeDasharray="10 400"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-460"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        <g fill="#0a0c10" stroke="#d9822b" strokeWidth="2">
          <circle cx="40" cy="60" r="6" />
          <circle cx="360" cy="60" r="6" />
          <circle cx="360" cy="300" r="6" />
        </g>
        <g fill="#0a0c10" stroke="#35d0c0" strokeWidth="2">
          <circle cx="40" cy="140" r="6" />
          <circle cx="40" cy="220" r="6" />
          <circle cx="200" cy="340" r="6" />
        </g>
        <rect
          x="150"
          y="160"
          width="100"
          height="60"
          rx="4"
          fill="#10141b"
          stroke="#1e2530"
          strokeWidth="2"
        />
        <text
          x="200"
          y="195"
          textAnchor="middle"
          fill="#8b93a1"
          fontFamily="JetBrains Mono, monospace"
          fontSize="13"
        >
          MN-01
        </text>
      </svg>
    </div>
  );
}
