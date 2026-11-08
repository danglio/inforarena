import React from 'react';
import { CriticalRadarScores } from '../types/arena';

interface RadarChartProps {
  scores: CriticalRadarScores;
  size?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({ scores, size = 320 }) => {
  const center = size / 2;
  const radius = (size / 2) - 45;

  const axes = [
    { label: 'Kháng Bẫy AI', value: scores.aiTrapDefense },
    { label: 'Kháng Thiên Kiến Người', value: scores.humanBiasDefense },
    { label: 'Nhạy Bén Trực Giác', value: scores.intuitionCalibration },
    { label: 'Kỹ Năng Dẫn Chứng', value: scores.factCheckingSkill },
    { label: 'Tốc Độ Quyết Đoán', value: scores.decisiveSpeed },
  ];

  const totalAxes = axes.length;
  const angleStep = (Math.PI * 2) / totalAxes;

  // Grid levels (20%, 40%, 60%, 80%, 100%)
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Calculate polygon points
  const points = axes.map((axis, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (Math.max(10, Math.min(100, axis.value)) / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg width={size} height={size} className="overflow-visible">
        {/* Background Web Grid */}
        {levels.map((lvl, idx) => {
          const gridPoints = Array.from({ length: totalAxes }).map((_, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const r = lvl * radius;
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
          }).join(' ');

          return (
            <polygon
              key={`grid-${idx}`}
              points={gridPoints}
              fill={idx === levels.length - 1 ? 'rgba(15, 23, 42, 0.5)' : 'none'}
              stroke="rgba(56, 189, 248, 0.2)"
              strokeWidth="1"
              strokeDasharray={idx === levels.length - 1 ? 'none' : '3,3'}
            />
          );
        })}

        {/* Axes lines */}
        {axes.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={`axis-${i}`}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(56, 189, 248, 0.3)"
              strokeWidth="1.2"
            />
          );
        })}

        {/* Data Polygon with Glow */}
        <polygon
          points={points}
          fill="rgba(6, 182, 212, 0.25)"
          stroke="#22d3ee"
          strokeWidth="2.5"
          className="transition-all duration-700 ease-out"
        />

        {/* Data Points (Glowing Dots) */}
        {axes.map((axis, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const r = (Math.max(10, Math.min(100, axis.value)) / 100) * radius;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);

          return (
            <g key={`point-${i}`}>
              <circle
                cx={x}
                cy={y}
                r="5"
                fill="#06b6d4"
                stroke="#ffffff"
                strokeWidth="1.5"
                className="filter drop-shadow-[0_0_8px_#22d3ee]"
              />
            </g>
          );
        })}

        {/* Labels */}
        {axes.map((axis, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelDist = radius + 24;
          const x = center + labelDist * Math.cos(angle);
          const y = center + labelDist * Math.sin(angle);

          return (
            <g key={`label-${i}`}>
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[11px] font-semibold fill-cyan-300 drop-shadow"
              >
                {axis.label}
              </text>
              <text
                x={x}
                y={y + 12}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[10px] font-orbitron font-bold fill-white/80"
              >
                {Math.round(axis.value)}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
