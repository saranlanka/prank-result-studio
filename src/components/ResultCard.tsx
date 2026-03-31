import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const funnyComments = [
  "Your teacher fainted while checking your paper 😵",
  "NASA called — they want to study your brain 🧠",
  "Even Google couldn't find your answers 🔍",
  "Your handwriting was so good, the examiner cried 😭",
  "You passed because the examiner was in a good mood 😂",
  "Legend says your answer sheet is still being searched for 📜",
  "You wrote your name correctly — that's 10 marks right there ✍️",
  "The examiner gave you grace marks out of pity 🥺",
  "Your paper was used as a comedy script 🎭",
  "You scored more in sleeping than in studying 😴",
];

interface ResultCardProps {
  name: string;
  rollNumber: string;
}

const ResultCard = ({ name, rollNumber }: ResultCardProps) => {
  const comment = funnyComments[Math.floor(Math.random() * funnyComments.length)];

  const handleShare = async () => {
    const text = `🎓 Exam Result for ${name} (Roll No: ${rollNumber})\n\n✅ Status: Pass with Legendary Luck\n📊 Grade: A++ in Timepass\n🏆 Rank: 1st in Last Benchers\n💬 ${comment}\n\n⚠️ This is a prank. Not an official result.`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Exam Result 😂", text });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard! Share it with your friends 😂");
    }
  };

  return (
    <div className="animate-bounce-in w-full max-w-md mx-auto">
      <div className="rounded-xl border-2 border-primary/30 bg-card shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-4 text-center">
          <h2 className="text-xl font-bold text-primary-foreground">🎓 JNTUK Exam Result</h2>
          <p className="text-sm text-primary-foreground/80 mt-1">*Not really official at all</p>
        </div>

        {/* Student Info */}
        <div className="p-5 space-y-4">
          <div className="flex justify-between border-b border-border pb-2">
            <span className="text-muted-foreground font-medium">Name</span>
            <span className="font-bold text-foreground">{name}</span>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <span className="text-muted-foreground font-medium">Roll No</span>
            <span className="font-bold text-foreground">{rollNumber}</span>
          </div>

          {/* Results */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 rounded-lg bg-success/10 p-3">
              <span className="text-2xl">✅</span>
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="font-bold text-success">Pass with Legendary Luck</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-3">
              <span className="text-2xl">📊</span>
              <div>
                <p className="text-xs text-muted-foreground">Grade</p>
                <p className="font-bold text-foreground">A++ in Timepass</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-primary/10 p-3">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-xs text-muted-foreground">Rank</p>
                <p className="font-bold text-foreground">1st in Last Benchers</p>
              </div>
            </div>
          </div>

          {/* Comment */}
          <div className="rounded-lg bg-accent/10 border border-accent/20 p-4 text-center">
            <p className="text-sm font-medium text-foreground">{comment}</p>
          </div>

          {/* Disclaimer */}
          <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-center">
            <p className="text-sm font-bold text-destructive">
              ⚠️ This is a prank. Not an official result.
            </p>
          </div>

          {/* Share */}
          <Button onClick={handleShare} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
            <Share2 className="mr-2 h-4 w-4" />
            Share with Friend 😂
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
