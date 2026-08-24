// Source of truth for MedEvolution's 14 product lines across 4 divisions.
// Shared by the nav mega menu (short names) and the product ledger section
// (full names + product codes) so the canonical order/wording lives in one place.
export const productDivisions = [
  {
    id: 'A',
    navHeading: 'DIV A — DIAGNOSTICS & IMAGING',
    ledgerHeading: 'DIVISION A — DIAGNOSTICS & IMAGING',
    range: 'LINES 01–03',
    blurb: 'Lab equipment, medical imaging machines, and nuclear medicine equipment for diagnostic and screening programs.',
    lines: [
      { num: '01', navName: 'Diagnostic & Laboratory Equipment', name: 'Diagnostic & Laboratory Equipment', code: 'ME-DL' },
      { num: '02', navName: 'Medical Imaging Equipment', name: 'Medical Imaging Equipment', code: 'ME-MI' },
      { num: '03', navName: 'Nuclear Medicine Equipment', name: 'Nuclear Medicine Equipment', code: 'ME-NM' },
    ],
  },
  {
    id: 'B',
    navHeading: 'DIV B — SURGICAL & INTERVENTIONAL',
    ledgerHeading: 'DIVISION B — SURGICAL & INTERVENTIONAL',
    range: 'LINES 04–07',
    blurb: 'Operating theatre equipment, robotic surgery units, endoscopy and minimally invasive surgery gear, and cardiac catheterization equipment.',
    lines: [
      { num: '04', navName: 'Theatre & Surgical Equipment', name: 'Theatre & Surgical Equipment', code: 'ME-TS' },
      { num: '05', navName: 'Robotic Surgery Units', name: 'Robotic Surgery Units', code: 'ME-RS' },
      { num: '06', navName: 'Endoscopy & MIS Equipment', name: 'Endoscopy & Minimally Invasive Surgery Equipment', code: 'ME-EN' },
      { num: '07', navName: 'Cardiac Cath & Interventional Cardiology', name: 'Cardiac Catheterization & Interventional Cardiology Equipment', code: 'ME-CC' },
    ],
  },
  {
    id: 'C',
    navHeading: 'DIV C — CRITICAL & SPECIALTY CARE',
    ledgerHeading: 'DIVISION C — CRITICAL & SPECIALTY CARE',
    range: 'LINES 08–12',
    blurb: 'ICU equipment, radiotherapy and oncology machines, maternal/neonatal/pediatric equipment, fertility/IVF equipment, and dialysis equipment.',
    lines: [
      { num: '08', navName: 'ICU & Critical Care Equipment', name: 'ICU & Critical Care Equipment', code: 'ME-IC' },
      { num: '09', navName: 'Radiotherapy & Oncology Equipment', name: 'Radiotherapy & Oncology Equipment', code: 'ME-RO' },
      { num: '10', navName: 'Maternal, Neonatal & Pediatric', name: 'Maternal, Neonatal & Pediatric Equipment', code: 'ME-MN' },
      { num: '11', navName: 'Fertility & IVF Equipment', name: 'Fertility & IVF Equipment', code: 'ME-FV' },
      { num: '12', navName: 'Dialysis & Renal Care Equipment', name: 'Dialysis & Renal Care Equipment', code: 'ME-RC' },
    ],
  },
  {
    id: 'D',
    navHeading: 'DIV D — INFRASTRUCTURE & TURNKEY',
    ledgerHeading: 'DIVISION D — INFRASTRUCTURE & TURNKEY SYSTEMS',
    range: 'LINES 13–14',
    blurb: 'Modular operating theatres and cleanrooms, plus medical gas systems — turnkey healthcare infrastructure.',
    lines: [
      { num: '13', navName: 'Modular Operating Theatre & Cleanroom', name: 'Modular Operating Theatre & Cleanroom Units', code: 'ME-MO' },
      { num: '14', navName: 'Medical Gas Systems & Infrastructure', name: 'Medical Gas Systems & Infrastructure', code: 'ME-MG' },
    ],
  },
]
