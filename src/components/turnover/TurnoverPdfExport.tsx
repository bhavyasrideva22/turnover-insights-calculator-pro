
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Download } from 'lucide-react';
import { generatePDF } from '@/utils/pdfGenerator';

interface TurnoverPdfExportProps {
  results: {
    replacementCost: number;
    recruitmentCost: number;
    trainingCost: number;
    productivityLoss: number;
    totalCost: number;
    costPerEmployee: number;
    annualCost: number;
    retentionSavings: number;
  };
  inputs: {
    totalEmployees: number;
    annualTurnoverRate: number;
    averageSalary: number;
  };
}

const TurnoverPdfExport: React.FC<TurnoverPdfExportProps> = ({ results, inputs }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      await generatePDF(results, inputs);
      toast.success("PDF generated successfully");
    } catch (error) {
      console.error('PDF generation error:', error);
      toast.error("Failed to generate PDF");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button 
      onClick={handleDownload} 
      variant="secondary" 
      className="w-full"
      disabled={isGenerating}
    >
      <Download className="h-4 w-4 mr-2" />
      {isGenerating ? "Generating..." : "Download PDF Report"}
    </Button>
  );
};

export default TurnoverPdfExport;
