'use client';

import { useEffect, useRef } from 'react';

export default function VectorField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const mouse = useRef<{ x: number | null; y: number | null; radius: number }>({ x: null, y: null, radius: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas !== null) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let width = window.innerWidth;
        let height = window.innerHeight;

        let particles: { x: number; y: number; age: number; }[] = [];
        const numParticles = 1000;

        canvas.width = width;
        canvas.height = height;


        // window.addEventListener('resize', resize);

        window.addEventListener('mousemove', (e) => {
          if (mouse && mouse.current) {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
          }
        });
    
        window.addEventListener('mouseout', () => {
          mouse.current.x = null;
          mouse.current.y = null;
        });
    

        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            age: Math.random() * 100
          });
        }

        // v1
        // function vectorField(x: number, y: number, t: number) {
        //   const scale = 0.002;
        //   const angle = Math.sin(x * scale + t * 0.0005) * Math.cos(y * scale + t * 0.0003) * Math.PI * 2;
        //   return {
        //     vx: Math.cos(angle),
        //     vy: Math.sin(angle)
        //   };
        // }

        // v2 (lame)
        // function vectorField(x: number, y: number, t: number) {
        //   const scale = 0.002;
        //   const noiseStrength = 3;
        
        //   // Layered trigonometric flow field
        //   const nx = Math.sin((x + t * 0.02) * scale) + Math.cos((y - t * 0.015) * scale * 1.3);
        //   const ny = Math.cos((y + t * 0.025) * scale) + Math.sin((x - t * 0.018) * scale * 0.7);
        
        //   const angle = Math.atan2(ny, nx); // Converts flow to angle
        //   return {
        //     vx: Math.cos(angle) * noiseStrength,
        //     vy: Math.sin(angle) * noiseStrength
        //   };
        // }

        // v3 noise
        function vectorField(x: number, y: number, t: any) {
          const scale = 0.009;
          const eps = 1;
        
          // Add more variation with faster-moving waves
          const scalarField = (x: number, y: number, t: number) =>
            Math.sin((x * scale + t * 0.002)) * Math.cos((y * scale + t * 0.002)) +
            Math.sin((y * scale * 0.7 + t * 0.001)) * Math.cos((x * scale * 0.5 + t * 0.0015));
        
          const dx = scalarField(x + eps, y, t) - scalarField(x - eps, y, t);
          const dy = scalarField(x, y + eps, t) - scalarField(x, y - eps, t);
        
          // Curl vector (perpendicular to gradient)
          return {
            vx: dy * 5, // Amplify result for stronger motion
            vy: -dx * 5
          };
        }

        // v4 wiggles
        // function vectorField(x: number, y: number, t: number) {
        //   const scale = 0.004;
        //   const eps = 1;
        //   const speed = 0.002;
        
        //   // Random-looking coefficients for layered field
        //   const a = 1.37, b = 2.18, c = 0.83, d = 1.11;
        //   const tx = t * speed, ty = t * speed;
        
        //   // Layered pseudo-noise field
        //   const scalar = (x: number, y: number, t: any) =>
        //     Math.sin((x * scale + tx) * a + Math.cos((y * scale + ty) * b)) +
        //     Math.cos((y * scale + ty) * c + Math.sin((x * scale + tx) * d)) +
        //     Math.sin((x * scale - y * scale + tx) * 0.5);
        
        //   // Finite difference to simulate curl
        //   const dx = scalar(x + eps, y, t) - scalar(x - eps, y, t);
        //   const dy = scalar(x, y + eps, t) - scalar(x, y - eps, t);
        
        //   // Return perpendicular gradient vector (like curl)
        //   const angle = 0.0005 * t;
        //   const cosA = Math.cos(angle);
        //   const sinA = Math.sin(angle);
        //   return {
        //     vx: dy * 4 * cosA - (-dx * 4) * sinA,
        //     vy: dy * 4 * sinA + (-dx * 4) * cosA
        //   };
        // }
        
        
        
        // v bursts
        // function vectorField(x, y, t) {
        //   if (!burstActive) return { vx: 0, vy: 0 };
        
        //   const dx = x - burstCenter.x;
        //   const dy = y - burstCenter.y;
        //   const dist = Math.sqrt(dx * dx + dy * dy);
        
        //   if (dist > burstRadius) return { vx: 0, vy: 0 };
        
        //   const scale = 0.002;
        //   const angle = Math.sin(x * scale + t * 0.0005) * Math.cos(y * scale + t * 0.0003) * Math.PI * 2;
        //   const influence = 1 - dist / burstRadius;
        
        //   return {
        //     vx: Math.cos(angle) * influence,
        //     vy: Math.sin(angle) * influence
        //   };
        // }
        

        function applyMouseForce(p: { x: any; y: any; age?: number; }) {
          if (mouse.current.x === null || mouse.current.y === null) return;
    
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
    
          if (dist < mouse.current.radius) {
            const force = (mouse.current.radius - dist) / mouse.current.radius;
            const angle = Math.atan2(dy, dx);
            const strength = force * 2.5; // strength of push
            p.x += Math.cos(angle) * strength;
            p.y += Math.sin(angle) * strength;
          }
        }
        
        // let burstActive = false;
        // let burstCenter = { x: width / 2, y: height / 2 };
        // let burstRadius = 200;

        // function triggerBurst() {
        //   burstActive = true;
        //   burstCenter = {
        //     x: Math.random() * width,
        //     y: Math.random() * height,
        //   };
        
        //   // End the burst after a few seconds
        //   setTimeout(() => {
        //     burstActive = false;
        //   }, 2000); // 2 seconds per burst
        // }
        
        // // Start a burst every 4–6 seconds
        // setInterval(triggerBurst, 4000 + Math.random() * 2000);

        function draw(t: any) {
          if (!ctx) return;

          ctx.globalCompositeOperation = 'destination-out';
          ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
          ctx.fillRect(0, 0, width, height);
          ctx.globalCompositeOperation = 'source-over'; // Reset mode

          // TODO: cleanup ghosting
          // ctx.save();
          // ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset any transforms
          // ctx.clearRect(0, 0, width, height);
          // ctx.restore();

          
          for (let p of particles) {
            const v = vectorField(p.x, p.y, t);
            p.x += v.vx * 25;
            p.y += v.vy * 25;

            applyMouseForce(p);

            p.age++;
            if (p.x < 0 || p.x > width || p.y < 0 || p.y > height || p.age > 100) {
              p.x = Math.random() * width;
              p.y = Math.random() * height;
              p.age = 0;
            }

            if (mouse.current.x && mouse.current.y) {
              const dx = p.x - mouse.current.x;
              const dy = p.y - mouse.current.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              
              // Check if particle is near the cursor
              if (dist < 100) {
                ctx.fillStyle = 'rgba(0, 255, 255, 1)'; // Glow cyan near mouse
              } else {
                ctx.fillStyle = 'rgba(222, 222, 222, 0.8)'; // Default white trails
              }
            } else {
              ctx.fillStyle = 'rgba(128, 128, 128, 0.5)'; // Default white trails
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, 0.8, 0, Math.PI * 2);
            ctx.fill();
          }

          animationRef.current = requestAnimationFrame(draw);
        }

        animationRef.current = requestAnimationFrame(draw);

      }
    }
      return () => {
        // window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', () => {});
        window.removeEventListener('mouseout', () => {});
        if (animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
        }
      };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen -z-40"
    />
  );
}
