"use client";

import { useRef, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";
import { Upload, Download, Type, Image as ImageIcon, Wand2, Check } from "lucide-react";

interface PinFormData {
  title: string;
  description: string;
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PinFormData>({
    defaultValues: {
      title: "Amazing Pinterest Pin",
      description: "Created with LeaduxAI",
    },
  });

  const title = watch("title");
  const description = watch("description");

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
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Create a gradient canvas
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 900;
    const ctx = canvas.getContext("2d");
    
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 600, 900);
      gradient.addColorStop(0, "#3b82f6");
      gradient.addColorStop(0.5, "#9333ea");
      gradient.addColorStop(1, "#ec4899");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 600, 900);
      
      // Add some patterns
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.lineWidth = 2;
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.arc(
          Math.random() * 600,
          Math.random() * 900,
          Math.random() * 100 + 50,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }
    }
    
    setUploadedImage(canvas.toDataURL());
    setIsGenerating(false);
  }, []);

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
      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="glass rounded-2xl p-6 space-y-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-blue-500" />
            Create Your Pin
          </h3>

          {/* Image Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Background Image
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-muted-foreground/30 hover:border-blue-500/50 hover:bg-blue-500/5 transition-colors"
              >
                <Upload className="w-5 h-5" />
                <span className="text-sm">Upload Image</span>
              </button>
              <button
                onClick={generateAIBackground}
                disabled={isGenerating}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl gradient-bg text-white disabled:opacity-50 transition-opacity"
              >
                {isGenerating ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Wand2 className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <Wand2 className="w-5 h-5" />
                )}
                <span className="text-sm">AI Generate</span>
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

          {/* Title Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Type className="w-4 h-4" />
              Pin Title
            </label>
            <input
              {...register("title", { required: true, maxLength: 100 })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter pin title..."
            />
            {errors.title && (
              <p className="text-sm text-red-500">Title is required</p>
            )}
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Description
            </label>
            <textarea
              {...register("description", { maxLength: 200 })}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Enter description..."
            />
          </div>

          {/* Download Button */}
          <button
            onClick={downloadPin}
            disabled={!uploadedImage || isDownloading}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-bg text-white font-semibold disabled:opacity-50 hover:shadow-lg transition-all"
          >
            {isDownloading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Wand2 className="w-5 h-5" />
                </motion.div>
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
      </motion.div>

      {/* Preview Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center"
      >
        <div className="relative">
          {/* Pinterest Pin Preview */}
          <div
            ref={pinRef}
            className="relative w-[300px] sm:w-[350px] rounded-2xl overflow-hidden pin-shadow bg-white"
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
              <div className="absolute inset-0 gradient-bg flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium opacity-80">
                    Upload or generate an image
                  </p>
                </div>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-xl font-bold mb-2 line-clamp-2">
                {title || "Your Pin Title"}
              </h4>
              <p className="text-sm text-white/80 line-clamp-2">
                {description || "Description will appear here"}
              </p>
              
              {/* Pinterest logo */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl" />
        </div>
      </motion.div>
    </div>
  );
}
