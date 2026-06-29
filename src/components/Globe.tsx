import { useEffect, useRef, useState } from 'react';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 320);
    let height = (canvas.height = 320);
    const radius = 120;
    const cx = width / 2;
    const cy = height / 2;

    // Rotation angles
    let angleX = 0.3; // Tilt
    let angleY = 0;   // Rotation speed

    // Delhi coordinates: 28.61° N, 77.20° E
    const delhiLat = (28.61 * Math.PI) / 180;
    const delhiLng = (77.2 * Math.PI) / 180;

    // Beacon variables
    let pulseScale = 0;

    const render = () => {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, width, height);

      // 1. Atmosphere / Outer Glow
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 15, 0, Math.PI * 2);
      const glow = ctx.createRadialGradient(cx, cy, radius - 10, cx, cy, radius + 15);
      if (isDark) {
        glow.addColorStop(0, 'rgba(214, 175, 55, 0)');
        glow.addColorStop(0.8, 'rgba(214, 175, 55, 0.05)');
        glow.addColorStop(1, 'rgba(214, 175, 55, 0)');
      } else {
        glow.addColorStop(0, 'rgba(22, 33, 62, 0)');
        glow.addColorStop(0.8, 'rgba(22, 33, 62, 0.03)');
        glow.addColorStop(1, 'rgba(22, 33, 62, 0)');
      }
      ctx.fillStyle = glow;
      ctx.fill();

      // 2. Base Sphere Circle Backing
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? 'rgba(30, 30, 30, 0.4)' : 'rgba(253, 252, 251, 0.6)';
      ctx.fill();
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Slow down or speed up on hover
      angleY += hovered ? 0.003 : 0.006;

      // 3. Render Latitude Lines (Grid)
      const gridCount = 9;
      for (let i = 1; i < gridCount; i++) {
        const lat = (Math.PI / gridCount) * i - Math.PI / 2;
        const sinLat = Math.sin(lat);
        const cosLat = Math.cos(lat);

        ctx.beginPath();
        for (let j = 0; j <= 60; j++) {
          const lng = (Math.PI * 2 / 60) * j + angleY;
          
          // 3D Spherical Coordinates
          const x3d = cosLat * Math.sin(lng);
          const y3d = sinLat;
          const z3d = cosLat * Math.cos(lng);

          // Rotate around X-axis (Tilt)
          const rx = x3d;
          const ry = y3d * Math.cos(angleX) - z3d * Math.sin(angleX);
          const rz = y3d * Math.sin(angleX) + z3d * Math.cos(angleX);

          // Only draw points on the front hemisphere (z > 0)
          if (rz > 0) {
            const screenX = cx + rx * radius;
            const screenY = cy + ry * radius;
            if (j === 0) {
              ctx.moveTo(screenX, screenY);
            } else {
              ctx.lineTo(screenX, screenY);
            }
          }
        }
        ctx.strokeStyle = isDark ? 'rgba(214, 175, 55, 0.07)' : 'rgba(22, 33, 62, 0.06)';
        ctx.stroke();
      }

      // 4. Render Longitude Lines (Grid)
      for (let i = 0; i < 12; i++) {
        const lng = (Math.PI * 2 / 12) * i + angleY;

        ctx.beginPath();
        for (let j = 0; j <= 60; j++) {
          const lat = (Math.PI / 60) * j - Math.PI / 2;
          const sinLat = Math.sin(lat);
          const cosLat = Math.cos(lat);

          const x3d = cosLat * Math.sin(lng);
          const y3d = sinLat;
          const z3d = cosLat * Math.cos(lng);

          const rx = x3d;
          const ry = y3d * Math.cos(angleX) - z3d * Math.sin(angleX);
          const rz = y3d * Math.sin(angleX) + z3d * Math.cos(angleX);

          if (rz > 0) {
            const screenX = cx + rx * radius;
            const screenY = cy + ry * radius;
            if (j === 0) {
              ctx.moveTo(screenX, screenY);
            } else {
              ctx.lineTo(screenX, screenY);
            }
          }
        }
        ctx.strokeStyle = isDark ? 'rgba(214, 175, 55, 0.07)' : 'rgba(22, 33, 62, 0.06)';
        ctx.stroke();
      }

      // 5. Delhi Location Beacon (GPS Point)
      // We overlay Delhi's latitude and longitude on our rotating sphere
      const dLng = delhiLng + angleY;
      const dx3d = Math.cos(delhiLat) * Math.sin(dLng);
      const dy3d = Math.sin(delhiLat);
      const dz3d = Math.cos(delhiLat) * Math.cos(dLng);

      const drx = dx3d;
      const dry = dy3d * Math.cos(angleX) - dz3d * Math.sin(angleX);
      const drz = dy3d * Math.sin(angleX) + dz3d * Math.cos(angleX);

      if (drz > 0) {
        const dScreenX = cx + drx * radius;
        const dScreenY = cy + dry * radius;

        // Draw glowing concentric rings (Pulse)
        pulseScale = (pulseScale + 0.035) % 1;
        ctx.beginPath();
        ctx.arc(dScreenX, dScreenY, 6 + pulseScale * 14, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(214, 175, 55, ${1 - pulseScale})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw core beacon dot
        ctx.beginPath();
        ctx.arc(dScreenX, dScreenY, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = '#D4AF37'; // Accent Soft Gold
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Subtle Label (Delhi)
        ctx.font = '10px JetBrains Mono';
        ctx.fillStyle = isDark ? '#F5F5F7' : '#1A1A1A';
        ctx.fillText('New Delhi (HQ)', dScreenX + 10, dScreenY + 4);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hovered]);

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="DRAG"
    >
      <canvas
        ref={canvasRef}
        className="w-[320px] h-[320px] filter drop-shadow-xl select-none"
      />
    </div>
  );
}
