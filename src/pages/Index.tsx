import { useState } from "react";
import confetti from "canvas-confetti";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ResultCard from "@/components/ResultCard";

const Index = () => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [resultKey, setResultKey] = useState(0);

  const handleGenerate = () => {
    if (!name.trim() || !rollNumber.trim()) return;
    setShowResult(false);
    setTimeout(() => {
      setResultKey((k) => k + 1);
      setShowResult(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#7c3aed", "#f43f5e", "#fbbf24", "#22c55e", "#3b82f6"],
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-lg mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            🎉 Exam Result Portal
          </h1>
          <p className="text-muted-foreground">
            Enter your details to check your <span className="text-primary font-semibold">"official"</span> result
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-lg space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">Student Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="roll" className="text-foreground font-medium">Roll Number</Label>
            <Input
              id="roll"
              placeholder="Enter your roll number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="bg-background"
            />
          </div>
          <Button
            onClick={handleGenerate}
            disabled={!name.trim() || !rollNumber.trim()}
            className="w-full"
            size="lg"
          >
            🎯 Generate Result
          </Button>
        </div>

        {/* Result */}
        {showResult && <ResultCard key={resultKey} name={name} rollNumber={rollNumber} />}

        {/* Footer disclaimer */}
        <p className="text-center text-xs text-muted-foreground">
          Made for laughs only 😄 • No real data is used or stored
        </p>
      </div>
    </div>
  );
};

export default Index;
