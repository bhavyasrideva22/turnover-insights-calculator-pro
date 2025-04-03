
import { jsPDF } from 'jspdf';
import { formatIndianRupee } from './currencyFormatter';

// Add autotable plugin
import 'jspdf-autotable';

interface TurnoverResults {
  replacementCost: number;
  recruitmentCost: number;
  trainingCost: number;
  productivityLoss: number;
  totalCost: number;
  costPerEmployee: number;
  annualCost: number;
  retentionSavings: number;
}

interface TurnoverInputs {
  totalEmployees: number;
  annualTurnoverRate: number;
  averageSalary: number;
}

export const generatePDF = async (results: TurnoverResults, inputs: TurnoverInputs) => {
  // Create new PDF document
  const doc = new jsPDF();
  
  // Set document properties
  doc.setProperties({
    title: 'Employee Turnover Cost Report',
    subject: 'Employee Turnover Cost Analysis',
    author: 'Turnover Insights Calculator Pro',
    keywords: 'employee turnover, retention, cost analysis',
    creator: 'Turnover Insights Calculator Pro'
  });
  
  // Add header
  doc.setFillColor(36, 94, 79); // #245e4f (primary color)
  doc.rect(0, 0, 210, 30, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text('Employee Turnover Cost Report', 105, 15, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text('Turnover Insights Calculator Pro', 105, 24, { align: 'center' });
  
  // Add date
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  const today = new Date().toLocaleDateString('en-IN');
  doc.text(`Generated: ${today}`, 20, 40);
  
  // Add organization details
  doc.setFontSize(14);
  doc.text('Organization Overview', 20, 50);
  
  doc.setFontSize(12);
  doc.text(`Total Employees: ${inputs.totalEmployees}`, 25, 60);
  doc.text(`Annual Turnover Rate: ${inputs.annualTurnoverRate}%`, 25, 68);
  doc.text(`Average Annual Salary: ${formatIndianRupee(inputs.averageSalary)}`, 25, 76);
  
  // Calculate number of employees leaving
  const employeesLeaving = Math.round(inputs.totalEmployees * (inputs.annualTurnoverRate / 100));
  doc.text(`Employees Leaving Annually: ${employeesLeaving}`, 25, 84);
  
  // Cost breakdown table
  doc.setFontSize(14);
  doc.text('Turnover Cost Breakdown', 20, 100);
  
  const tableData = [
    ['Cost Category', 'Amount (₹)'],
    ['Recruitment Cost', formatIndianRupee(results.recruitmentCost)],
    ['Training Cost', formatIndianRupee(results.trainingCost)],
    ['Productivity Loss', formatIndianRupee(results.productivityLoss)],
    ['Replacement Cost', formatIndianRupee(results.replacementCost)],
    ['Total Cost', formatIndianRupee(results.totalCost)]
  ];
  
  // @ts-ignore
  doc.autoTable({
    startY: 105,
    head: [tableData[0]],
    body: tableData.slice(1),
    theme: 'striped',
    headStyles: { fillColor: [36, 94, 79], textColor: [255, 255, 255] },
    styles: { halign: 'left' },
    columnStyles: { 1: { halign: 'right' } }
  });
  
  // Add per-employee cost
  doc.setFontSize(12);
  const currentY = doc.lastAutoTable?.finalY || 160;
  doc.text(`Cost Per Lost Employee: ${formatIndianRupee(results.costPerEmployee)}`, 20, currentY + 10);
  
  // Add retention opportunity
  doc.setFontSize(14);
  doc.text('Retention Opportunity', 20, currentY + 30);
  
  doc.setFontSize(12);
  doc.text('If turnover rate is reduced by just 5%:', 20, currentY + 40);
  doc.text(`Potential Annual Savings: ${formatIndianRupee(results.retentionSavings)}`, 25, currentY + 50);
  
  // Add recommendations
  doc.setFontSize(14);
  doc.text('Recommendations', 20, currentY + 70);
  
  doc.setFontSize(12);
  const recommendations = [
    'Implement employee engagement programs to improve satisfaction',
    'Review compensation and benefits packages regularly',
    'Develop clear career paths and growth opportunities',
    'Provide ongoing training and professional development',
    'Conduct regular exit interviews to identify turnover causes'
  ];
  
  let yPos = currentY + 80;
  recommendations.forEach(rec => {
    doc.text(`• ${rec}`, 25, yPos);
    yPos += 8;
  });
  
  // Add footer
  doc.setFillColor(36, 94, 79); // #245e4f (primary color)
  doc.rect(0, 285, 210, 12, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('www.turnoverinsightscalculatorpro.com', 105, 292, { align: 'center' });
  
  // Save the PDF
  doc.save('Employee_Turnover_Cost_Report.pdf');
};
