"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";

function PinterestPin3D() {
  const meshRef = useRef<THREE.Group>(null);
  const pinRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  // Pin cylinder geometry
  const pinGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2.5, 32);
  const pinHeadGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  
  // Metal material
  const metalMaterial = new THREE.MeshStandardMaterial({
    color: 0xc41e3a,
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 1,
  });

  const headMaterial = new THREE.MeshStandardMaterial({
    color: 0xe11d48,
    metalness: 0.8,
    roughness: 0.15,
    envMapIntensity: 1,
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group ref={meshRef} scale={viewport.width > 6 ? 1.5 : 1}>
        {/* Pin head */}
        <mesh position={[0, 1.25, 0]} material={headMaterial}>
          <sphereGeometry args={[0.5, 32, 32]} />
        </mesh>
        
        {/* Pin body */}
        <mesh 
          ref={pinRef}
          position={[0, 0, 0]} 
          material={metalMaterial}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.25, 0.08, 2.5, 32]} />
        </mesh>

        {/* Glowing ring */}
        <mesh position={[0, 1.25, 0]}>
          <torusGeometry args={[0.6, 0.02, 16, 100]} />
          <meshBasicMaterial color="#ec4899" transparent opacity={0.6} />
        </mesh>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin((i / 6) * Math.PI * 2) * 2,
              Math.cos((i / 6) * Math.PI * 2) * 2,
              0.5,
            ]}
          >
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.8} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function AnimatedBackground() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const particlesCount = 100;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export function Hero3D() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title cascade animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.5 }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.7 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-20" />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#9333ea" />
          <spotLight
            position={[0, 10, 0]}
            angle={Math.PI / 6}
            penumbra={1}
            intensity={1}
            color="#3b82f6"
          />
          
          <AnimatedBackground />
          <PinterestPin3D />
          
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span className="text-sm font-medium">AI-Powered Pinterest Automation</span>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Публикуй пины</span>
          <br />
          <span className="text-foreground">в 1 клик</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Автоматическая генерация, оптимизация и публикация контента в Pinterest 
          с помощью искусственного интеллекта
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={scrollToDemo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Try Free
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass font-semibold text-lg hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
          >
            Watch Demo
          </motion.button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
