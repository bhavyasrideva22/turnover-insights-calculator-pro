
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';
import TurnoverVisualization from './TurnoverVisualization';
import TurnoverPdfExport from './TurnoverPdfExport';
import TurnoverEmailShare from './TurnoverEmailShare';
import { 
  Download, 
  Mail, 
  Calculator, 
  ArrowDown,
  ChartBar,
  ChartPie
} from 'lucide-react';
import { formatIndianRupee } from '@/utils/currencyFormatter';

type ResultsType = {
  replacementCost: number;
  recruitmentCost: number;
  trainingCost: number;
  productivityLoss: number;
  totalCost: number;
  costPerEmployee: number;
  annualCost: number;
  retentionSavings: number;
};

const initialResults: ResultsType = {
  replacementCost: 0,
  recruitmentCost: 0,
  trainingCost: 0,
  productivityLoss: 0,
  totalCost: 0,
  costPerEmployee: 0,
  annualCost: 0,
  retentionSavings: 0,
};

const TurnoverCalculator = () => {
  const [totalEmployees, setTotalEmployees] = useState<number>(100);
  const [annualTurnoverRate, setAnnualTurnoverRate] = useState<number>(15);
  const [averageSalary, setAverageSalary] = useState<number>(720000); // ₹60,000 monthly * 12
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<ResultsType>(initialResults);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const calculateResults = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      try {
        // Number of employees leaving annually
        const employeesLeaving = Math.round(totalEmployees * (annualTurnoverRate / 100));
        
        // Cost calculations based on industry standards
        const recruitmentCost = averageSalary * 0.20 * employeesLeaving;
        const trainingCost = averageSalary * 0.25 * employeesLeaving;
        const productivityLoss = averageSalary * 0.50 * employeesLeaving;
        const replacementCost = averageSalary * 0.15 * employeesLeaving;
        
        const totalCost = recruitmentCost + trainingCost + productivityLoss + replacementCost;
        const costPerEmployee = employeesLeaving > 0 ? totalCost / employeesLeaving : 0;
        const annualCost = totalCost;
        
        // Potential savings if turnover rate is reduced by 5%
        const improvedTurnoverRate = Math.max(annualTurnoverRate - 5, 0);
        const improvedEmployeesLeaving = Math.round(totalEmployees * (improvedTurnoverRate / 100));
        const improvedTotalCost = (recruitmentCost + trainingCost + productivityLoss + replacementCost) * 
                                 (improvedEmployeesLeaving / employeesLeaving);
        
        const retentionSavings = totalCost - improvedTotalCost;
        
        setResults({
          replacementCost,
          recruitmentCost,
          trainingCost,
          productivityLoss,
          totalCost,
          costPerEmployee,
          annualCost,
          retentionSavings,
        });
        
        setShowResults(true);
        setIsCalculating(false);
        toast.success("Calculation completed successfully!");
      } catch (error) {
        console.error("Calculation error:", error);
        toast.error("Error calculating results. Please check your inputs.");
        setIsCalculating(false);
      }
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateResults();
  };

  const handleReset = () => {
    setTotalEmployees(100);
    setAnnualTurnoverRate(15);
    setAverageSalary(720000);
    setShowResults(false);
    setResults(initialResults);
    toast.info("Calculator has been reset");
  };

  return (
    <div className="container mx-auto py-8 animate-fade-in" id="calculator">
      <div className="max-w-4xl mx-auto">
        <Card className="calculator-card mb-8">
          <div className="flex items-center mb-6">
            <Calculator className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-2xl font-bold text-primary">Employee Turnover Cost Calculator</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="totalEmployees" className="text-sm font-medium">
                  Total Number of Employees
                </Label>
                <div className="flex items-center mt-1">
                  <Input
                    id="totalEmployees"
                    type="number"
                    min="1"
                    className="input-field"
                    value={totalEmployees}
                    onChange={(e) => setTotalEmployees(parseInt(e.target.value) || 1)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="annualTurnoverRate" className="text-sm font-medium">
                  Annual Employee Turnover Rate (%)
                </Label>
                <div className="mt-1">
                  <div className="flex items-center gap-4">
                    <Slider
                      defaultValue={[annualTurnoverRate]}
                      min={0}
                      max={100}
                      step={1}
                      className="flex-1"
                      onValueChange={(value) => setAnnualTurnoverRate(value[0])}
                    />
                    <span className="w-12 text-center">{annualTurnoverRate}%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Label htmlFor="averageSalary" className="text-sm font-medium">
                  Average Annual Salary (₹)
                </Label>
                <div className="flex items-center mt-1">
                  <Input
                    id="averageSalary"
                    type="number"
                    min="1"
                    className="input-field"
                    value={averageSalary}
                    onChange={(e) => setAverageSalary(parseInt(e.target.value) || 0)}
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Current value: {formatIndianRupee(averageSalary)}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button 
                type="submit" 
                className="btn-accent flex-1"
                disabled={isCalculating}
              >
                {isCalculating ? "Calculating..." : "Calculate Cost"}
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={handleReset}
                className="flex-1"
              >
                Reset
              </Button>
            </div>
          </form>
        </Card>

        {showResults && (
          <div className="space-y-8 animate-fade-in">
            <Card className="calculator-card">
              <div className="flex items-center mb-6">
                <ChartBar className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-primary">Turnover Cost Analysis</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Cost Breakdown</h3>
                    <ul className="mt-2 space-y-2">
                      <li className="flex justify-between">
                        <span>Recruitment Cost:</span>
                        <span className="font-medium">{formatIndianRupee(results.recruitmentCost)}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Training Cost:</span>
                        <span className="font-medium">{formatIndianRupee(results.trainingCost)}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Productivity Loss:</span>
                        <span className="font-medium">{formatIndianRupee(results.productivityLoss)}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Replacement Cost:</span>
                        <span className="font-medium">{formatIndianRupee(results.replacementCost)}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Annual Cost:</span>
                      <span className="text-primary">{formatIndianRupee(results.totalCost)}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span>Cost Per Lost Employee:</span>
                      <span className="font-medium">{formatIndianRupee(results.costPerEmployee)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Retention Opportunity</h3>
                    <div className="mt-2 p-4 bg-secondary bg-opacity-20 rounded-lg">
                      <p className="mb-2">If you reduce turnover by just 5%:</p>
                      <div className="text-lg font-bold flex justify-between">
                        <span>Potential Savings:</span>
                        <span className="text-primary">{formatIndianRupee(results.retentionSavings)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-medium mb-2">Share Results</h3>
                    <div className="flex gap-3">
                      <TurnoverPdfExport results={results} inputs={{
                        totalEmployees,
                        annualTurnoverRate,
                        averageSalary
                      }} />
                      
                      <TurnoverEmailShare results={results} inputs={{
                        totalEmployees,
                        annualTurnoverRate, 
                        averageSalary
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="calculator-card">
              <div className="flex items-center mb-6">
                <ChartPie className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-primary">Visualization</h2>
              </div>
              <TurnoverVisualization results={results} />
            </Card>

            <div className="flex justify-center">
              <ArrowDown className="animate-bounce h-8 w-8 text-primary" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TurnoverCalculator;
