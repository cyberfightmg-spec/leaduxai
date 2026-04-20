"use client";

import { useState, useCallback, useRef } from "react";
import html2canvas from "html2canvas";

interface PinData {
  title: string;
  description: string;
  imageUrl: string | null;
}

interface UsePinGeneratorReturn {
  pinData: PinData;
  isGenerating: boolean;
  isDownloading: boolean;
  pinRef: React.RefObject<HTMLDivElement>;
  updatePinData: (data: Partial<PinData>) => void;
  generateAIBackground: () => Promise<void>;
  downloadPin: () => Promise<void>;
  uploadImage: (file: File) => void;
}

export function usePinGenerator(): UsePinGeneratorReturn {
  const pinRef = useRef<HTMLDivElement>(null);
  const [pinData, setPinData] = useState<PinData>({
    title: "Amazing Pinterest Pin",
    description: "Created with LeaduxAI",
    imageUrl: null,
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const updatePinData = useCallback((data: Partial<PinData>) => {
    setPinData((prev) => ({ ...prev, ...data }));
  }, []);

  const uploadImage = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      updatePinData({ imageUrl: event.target?.result as string });
    };
    reader.readAsDataURL(file);
  }, [updatePinData]);

  const generateAIBackground = useCallback(async () => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Create a gradient canvas as AI-generated background
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 900;
    const ctx = canvas.getContext("2d");
    
    if (ctx) {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 600, 900);
      gradient.addColorStop(0, "#3b82f6");
      gradient.addColorStop(0.3, "#9333ea");
      gradient.addColorStop(0.6, "#ec4899");
      gradient.addColorStop(1, "#f43f5e");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 600, 900);
      
      // Add decorative circles
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 2;
      for (let i = 0; i < 15; i++) {
        ctx.beginPath();
        ctx.arc(
          Math.random() * 600,
          Math.random() * 900,
          Math.random() * 150 + 50,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }
      
      // Add noise texture effect
      const imageData = ctx.getImageData(0, 0, 600, 900);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 20;
        data[i] = Math.min(255, Math.max(0, data[i] + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
      }
      ctx.putImageData(imageData, 0, 0);
    }
    
    updatePinData({ imageUrl: canvas.toDataURL("image/png") });
    setIsGenerating(false);
  }, [updatePinData]);

  const downloadPin = useCallback(async () => {
    if (!pinRef.current || !pinData.imageUrl) return;
    
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(pinRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        onclone: (clonedDoc) => {
          // Ensure fonts are loaded in cloned document
          const style = clonedDoc.createElement("style");
          style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
            * { font-family: 'Inter', sans-serif !important; }
          `;
          clonedDoc.head.appendChild(style);
        },
      });
      
      // Convert to blob for better mobile support
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = `leaduxai-pin-${Date.now()}.png`;
          link.href = url;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      }, "image/png");
    } catch (error) {
      console.error("Error generating pin:", error);
    } finally {
      setIsDownloading(false);
    }
  }, [pinData.imageUrl]);

  return {
    pinData,
    isGenerating,
    isDownloading,
    pinRef,
    updatePinData,
    generateAIBackground,
    downloadPin,
    uploadImage,
  };
}
