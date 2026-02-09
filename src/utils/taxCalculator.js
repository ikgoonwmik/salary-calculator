export function calculateNetSalary(annualSalary) {
  const monthlySalary = annualSalary / 12;

  // ✅ 4대보험 (2025 기준 요율)
  const 국민연금 = monthlySalary * 0.0475;
  const 건강보험 = monthlySalary * 0.03595;
  const 장기요양보험 = 건강보험 * 0.1314;
  const 고용보험 = monthlySalary * 0.009;

  const socialInsurance = 국민연금 + 건강보험 + 장기요양보험 + 고용보험;

  // ✅ 근로소득 간이세액표 "비슷하게" 구현 (1인 기준)
  let incomeTax = 0;

  if (monthlySalary <= 1060000) incomeTax = 0;
  else if (monthlySalary <= 1500000) incomeTax = 10680;
  else if (monthlySalary <= 2000000) incomeTax = 28910;
  else if (monthlySalary <= 2500000) incomeTax = 48070;
  else if (monthlySalary <= 3000000)
    incomeTax = 56800; // ⭐ 3600만원 구간
  else if (monthlySalary <= 3500000) incomeTax = 76800;
  else if (monthlySalary <= 4000000) incomeTax = 100130;
  else if (monthlySalary <= 5000000) incomeTax = 157980;
  else if (monthlySalary <= 6000000) incomeTax = 231980;
  else incomeTax = monthlySalary * 0.06; // 고연봉은 대략 처리

  const localTax = incomeTax * 0.1;

  const netMonthly = monthlySalary - socialInsurance - incomeTax - localTax;

  return Math.round(netMonthly);
}
