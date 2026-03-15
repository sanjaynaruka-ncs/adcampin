export const GST_RATE = 0.18;

export function calculateGST(amount: number): number {
  return Math.round(amount * GST_RATE);
}

export function calculateTotalWithGST(amount: number): number {
  const gst = calculateGST(amount);
  return amount + gst;
}

export function getTaxBreakdown(amount: number) {
  const gst = calculateGST(amount);
  const total = amount + gst;

  return {
    subtotal: amount,
    gst,
    total
  };
}

/*
Convert amount to smallest currency unit
Needed for payment gateways
Razorpay expects paise
Stripe expects cents
*/
export function toSmallestUnit(amount: number): number {
  return amount * 100;
}