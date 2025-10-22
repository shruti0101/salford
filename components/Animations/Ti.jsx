"use client";
import React from "react";

const TiO2Animation = ({ size = 680 }) => {
  return (

    <section className="hidden md:block">

    <div
      className="  transform transition-transform duration-4000 hover:rotate-[360deg]"
      style={{
        width: size,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <style>{`
        @keyframes glow {
          0% { text-shadow: 0 0 2px #fff, 0 0 5px #4e9cff; opacity: 0.8; }
          50% { text-shadow: 0 0 10px #fff, 0 0 20px #4e9cff; opacity: 1; }
          100% { text-shadow: 0 0 2px #fff, 0 0 5px #4e9cff; opacity: 0.8; }
        }
      `}</style>

      <svg
        width={size}
        height={size}
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Titanium atom (center) */}
        <circle cx="150" cy="150" r="20" fill="#00353F">
          <animate
            attributeName="r"
            values="20;25;20"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="150"
          y="155"
          textAnchor="middle"
          fontSize="12"
          fill="white"
          fontWeight="bold"
        >
          Ti
        </text>

        {/* Oxygen orbit paths */}
        <ellipse
          cx="150"
          cy="150"
          rx="90"
          ry="60"
          fill="none"
          stroke="#a2bfff"
          strokeDasharray="4 6"
        />
        <ellipse
          cx="150"
          cy="150"
          rx="60"
          ry="90"
          fill="none"
          stroke="#a2bfff"
          strokeDasharray="4 6"
        />

        {/* Oxygen atoms with "O" inside */}
        <g>
          {/* First Oxygen */}
          <g>
            <circle r="15" fill="#FFAC18">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M150,150 m-90,0 a90,60 0 1,1 180,0 a90,60 0 1,1 -180,0"
              />
            </circle>
            <text
              dy="5"
              textAnchor="middle"
              fontSize="12"
              fill="white"
              fontWeight="bold"
            >
              O
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M150,150 m-90,0 a90,60 0 1,1 180,0 a90,60 0 1,1 -180,0"
              />
            </text>
          </g>

          {/* Second Oxygen */}
          <g>
            <circle r="15" fill="#ff4e4e">
              <animateMotion
                dur="6s"
                begin="3s"
                repeatCount="indefinite"
                path="M150,150 m0,-90 a60,90 0 1,1 0,180 a60,90 0 1,1 0,-180"
              />
            </circle>
            <text
              dy="5"
              textAnchor="middle"
              fontSize="12"
              fill="white"
              fontWeight="bold"
            >
              O
              <animateMotion
                dur="6s"
                begin="3s"
                repeatCount="indefinite"
                path="M150,150 m0,-90 a60,90 0 1,1 0,180 a60,90 0 1,1 0,-180"
              />
            </text>
          </g>
        </g>

        {/* Sparkles */}
        <g>
          <circle cx="250" cy="80" r="3" fill="white">
            <animate
              attributeName="r"
              values="3;7;3"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="60" cy="230" r="3" fill="white">
            <animate
              attributeName="r"
              values="3;7;3"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
    </section>
  );
};

export default TiO2Animation;
