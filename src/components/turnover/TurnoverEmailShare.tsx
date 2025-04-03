
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';
import { formatIndianRupee } from '@/utils/currencyFormatter';

interface TurnoverEmailShareProps {
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

const TurnoverEmailShare: React.FC<TurnoverEmailShareProps> = ({ results, inputs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // In a real implementation, this would connect to a backend API
    // For now, we'll simulate the email sending process
    
    setTimeout(() => {
      toast.success(`Report sent to ${email}`);
      setIsOpen(false);
      setEmail('');
      setIsSending(false);
    }, 1500);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="outline" className="w-full">
        <Mail className="h-4 w-4 mr-2" />
        Email Report
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Email Turnover Cost Report</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSendEmail}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="recipient@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Report Summary</Label>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p><strong>Organization Size:</strong> {inputs.totalEmployees} employees</p>
                  <p><strong>Turnover Rate:</strong> {inputs.annualTurnoverRate}%</p>
                  <p><strong>Annual Turnover Cost:</strong> {formatIndianRupee(results.totalCost)}</p>
                  <p><strong>Potential Savings:</strong> {formatIndianRupee(results.retentionSavings)}</p>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send Report"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TurnoverEmailShare;
