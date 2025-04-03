
/**
 * Formats a number to Indian Rupee format with commas for thousands
 * e.g., 1234567 to ₹12,34,567
 */
export const formatIndianRupee = (amount: number): string => {
  // Convert to string and split into integer and decimal parts
  const [integerPart, decimalPart] = amount.toFixed(0).split('.');
  
  // Add commas for Indian numbering system (lakhs and crores)
  let formattedInteger = '';
  let counter = 0;
  
  // Process from right to left
  for (let i = integerPart.length - 1; i >= 0; i--) {
    counter++;
    formattedInteger = integerPart[i] + formattedInteger;
    
    if (counter === 3 && i !== 0) {
      formattedInteger = ',' + formattedInteger;
    } else if (counter === 5 && i !== 0) {
      formattedInteger = ',' + formattedInteger;
      counter = 0;
    }
  }
  
  // Add decimal part if it exists
  const formattedAmount = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  
  // Add rupee symbol
  return `₹${formattedAmount}`;
};
