
import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

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

interface TurnoverVisualizationProps {
  results: ResultsType;
}

const TurnoverVisualization: React.FC<TurnoverVisualizationProps> = ({ results }) => {
  const { recruitmentCost, trainingCost, productivityLoss, replacementCost, totalCost, retentionSavings } = results;

  const pieData = [
    { name: 'Recruitment', value: recruitmentCost },
    { name: 'Training', value: trainingCost },
    { name: 'Productivity Loss', value: productivityLoss },
    { name: 'Replacement', value: replacementCost },
  ];

  const barData = [
    { name: 'Current Cost', cost: totalCost },
    { name: 'With 5% Reduction', cost: totalCost - retentionSavings },
    { name: 'Potential Savings', cost: retentionSavings },
  ];

  const COLORS = ['#245e4f', '#7ac9a7', '#e9c46a', '#4a8fe7'];

  const formatLargeNumber = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    } else if (value >= 1000) {
      return `₹${(value / 1000).toFixed(0)}K`;
    }
    return `₹${value}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-medium mb-4 text-center">Cost Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => formatLargeNumber(value)} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4 text-center">Retention Savings Opportunity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={barData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatLargeNumber} />
            <Tooltip formatter={(value: number) => formatLargeNumber(value)} />
            <Legend />
            <Bar dataKey="cost" fill="#245e4f" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TurnoverVisualization;
