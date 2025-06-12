"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const getGlobeConfig = (isDark: boolean): COBEOptions => ({
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: isDark ? 1 : 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [],
});

export function Globe({ className }: { className?: string }) {
  const { theme, systemTheme } = useTheme();
  const isDarkRef = useRef(false);

  // テーマの状態を更新
  const currentIsDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");
  isDarkRef.current = currentIsDark;

  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    // マウスインタラクションを無効化
    // pointerInteracting.current = value;
    // if (canvasRef.current) {
    //   canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    // }
  };

  const updateMovement = (clientX: number) => {
    // マウス移動による回転を無効化
    // if (pointerInteracting.current !== null) {
    //   const delta = clientX - pointerInteracting.current;
    //   pointerInteractionMovement.current = delta;
    //   r.set(r.get() + delta / MOVEMENT_DAMPING);
    // }
  };

  useEffect(() => {
    const config = getGlobeConfig(false); // 初期値として false を使用

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        // リアルタイムでテーマの状態を反映
        state.dark = isDarkRef.current ? 1 : 0;

        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
        canvasRef.current.style.cursor = "default";
      }
    }, 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs]);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}>
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        style={{ cursor: "default" }}
        ref={canvasRef}
        // マウスインタラクションを無効化
        // onPointerDown={(e) => {
        //   pointerInteracting.current = e.clientX;
        //   updatePointerInteraction(e.clientX);
        // }}
        // onPointerUp={() => updatePointerInteraction(null)}
        // onPointerOut={() => updatePointerInteraction(null)}
        // onMouseMove={(e) => updateMovement(e.clientX)}
        // onTouchMove={(e) =>
        //   e.touches[0] && updateMovement(e.touches[0].clientX)
        // }
      />
    </div>
  );
}
