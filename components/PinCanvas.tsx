"use client";

import { useRef, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import html2canvas from "html2canvas";
import { Upload, Download, Type, Image as ImageIcon, Wand2 } from "lucide-react";

interface PinFormData {
  title: string;
  description: string;
  prompt: string;
}

interface PinCanvasProps {
  className?: string;
}

export function PinCanvas({ className }: PinCanvasProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const [promptMode, setPromptMode] = useState(false);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PinFormData>({
    defaultValues: {
      title: "Amazing Pinterest Pin",
      description: "Created with LeaduxAI",
      prompt: "",
    },
  });

  const title = watch("title");
  const description = watch("description");
  const prompt = watch("prompt");

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const generateAIBackground = useCallback(async () => {
    if (!prompt && promptMode) return;
    
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 900;
    const ctx = canvas.getContext("2d");
    
    if (ctx) {
      if (prompt && promptMode) {
        ctx.fillStyle = "#2a2a2a";
        ctx.fillRect(0, 0, 600, 900);
        
        ctx.fillStyle = "rgba(255,255,255,0.08)";
        ctx.font = "24px sans-serif";
        ctx.textAlign = "center";
        const words = prompt.split(" ");
        let line = "";
        let y = 450;
        const maxWidth = 500;
        
        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " ";
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && n > 0) {
            ctx.fillText(line, 300, y);
            line = words[n] + " ";
            y += 35;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, 300, y);
      } else {
        ctx.fillStyle = "#1a1a1a";
        ctx.fillRect(0, 0, 600, 900);
        
        ctx.fillStyle = "rgba(255,255,255,0.05)";
        for (let i = 0; i < 20; i++) {
          ctx.beginPath();
          ctx.arc(
            Math.random() * 600,
            Math.random() * 900,
            Math.random() * 100 + 50,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }
    }
    
    setUploadedImage(canvas.toDataURL());
    setIsGenerating(false);
  }, [prompt, promptMode]);

  const downloadPin = useCallback(async () => {
    if (!pinRef.current) return;
    
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(pinRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });
      
      const link = document.createElement("a");
      link.download = `leaduxai-pin-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error("Error generating pin:", error);
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return (
    <div className={`grid lg:grid-cols-2 gap-8 ${className}`}>
      <div className="space-y-6">
        <div className="p-6 border border-[hsl(var(--border))] space-y-6">
          <h3 className="text-xl font-medium flex items-center gap-2 text-[hsl(var(--foreground))]">
            <Wand2 className="w-5 h-5" />
            Create Your Pin
          </h3>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[hsl(var(--muted-foreground))]">
              Background Image
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-[hsl(var(--border))] hover:bg-[hsl(var(--accent))] transition-colors"
              >
                <Upload className="w-5 h-5" />
                <span className="text-sm">Upload</span>
              </button>
              <button
                onClick={() => {
                  if (promptMode && prompt) {
                    generateAIBackground();
                  } else {
                    setPromptMode(!promptMode);
                  }
                }}
                disabled={isGenerating}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 border transition-colors ${
                  promptMode 
                    ? "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]" 
                    : "border-[hsl(var(--border))] hover:bg-[hsl(var(--accent))]"
                } disabled:opacity-50`}
              >
                {isGenerating ? (
                  <Wand2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Wand2 className="w-5 h-5" />
                )}
                <span className="text-sm">{promptMode ? "Generate" : "AI"}</span>
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {promptMode && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-[hsl(var(--muted-foreground))] flex items-center gap-2">
                <Wand2 className="w-4 h-4" />
                AI Prompt
              </label>
              <textarea
                {...register("prompt")}
                rows={3}
                className="w-full px-4 py-3 bg-[hsl(var(--background))] border border-[hsl(var(--border))] outline-none transition-all resize-none"
                placeholder="Describe the image you want to generate..."
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-[hsl(var(--muted-foreground))] flex items-center gap-2">
              <Type className="w-4 h-4" />
              Pin Title
            </label>
            <input
              {...register("title", { required: true, maxLength: 100 })}
              className="w-full px-4 py-3 bg-[hsl(var(--background))] border border-[hsl(var(--border))] outline-none transition-all"
              placeholder="Enter pin title..."
            />
            {errors.title && (
              <p className="text-sm text-red-500">Title is required</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[hsl(var(--muted-foreground))] flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Description
            </label>
            <textarea
              {...register("description", { maxLength: 200 })}
              rows={3}
              className="w-full px-4 py-3 bg-[hsl(var(--background))] border border-[hsl(var(--border))] outline-none transition-all resize-none"
              placeholder="Enter description..."
            />
          </div>

          <button
            onClick={downloadPin}
            disabled={!uploadedImage || isDownloading}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-medium disabled:opacity-50 hover:opacity-90 transition-opacity"
          >
            {isDownloading ? (
              <>
                <Wand2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Download PNG
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <div
            ref={pinRef}
            className="relative w-[300px] sm:w-[350px] overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))]"
            style={{ aspectRatio: "2/3" }}
          >
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Pin background"
                className="absolute inset-0 w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            ) : (
              <div className="absolute inset-0 bg-[hsl(var(--muted))] flex items-center justify-center">
                <div className="text-center p-8 text-[hsl(var(--muted-foreground))]">
                  <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium opacity-80">
                    Upload or generate an image
                  </p>
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-xl font-medium mb-2 line-clamp-2">
                {title || "Your Pin Title"}
              </h4>
              <p className="text-sm text-white/80 line-clamp-2">
                {description || "Description will appear here"}
              </p>
              
              <div className="absolute top-4 right-4 w-8 h-8 bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
