// Pracovní dny v Česku: bez víkendů a státních svátků (včetně Velkého pátku
// a Velikonočního pondělí, které se počítají podle data Velikonoc).

// Velikonoční neděle podle gregoriánského kalendáře (anonymní algoritmus)
function easterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

const FIXED_HOLIDAYS = [
  "01-01", // Den obnovy samostatného českého státu, Nový rok
  "05-01", // Svátek práce
  "05-08", // Den vítězství
  "07-05", // Den slovanských věrozvěstů Cyrila a Metoděje
  "07-06", // Den upálení mistra Jana Husa
  "09-28", // Den české státnosti
  "10-28", // Den vzniku samostatného československého státu
  "11-17", // Den boje za svobodu a demokracii
  "12-24", // Štědrý den
  "12-25", // 1. svátek vánoční
  "12-26", // 2. svátek vánoční
];

const pad = (n: number) => String(n).padStart(2, "0");

export function toKey(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function isHoliday(date: Date): boolean {
  if (FIXED_HOLIDAYS.includes(`${pad(date.getMonth() + 1)}-${pad(date.getDate())}`)) return true;
  const easter = easterSunday(date.getFullYear());
  const goodFriday = new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() - 2);
  const easterMonday = new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() + 1);
  const key = toKey(date);
  return key === toKey(goodFriday) || key === toKey(easterMonday);
}

export function isWorkday(date: Date): boolean {
  const day = date.getDay();
  return day !== 0 && day !== 6 && !isHoliday(date);
}

// Nejbližší povolený termín: třetí pracovní den po dnešku
export function earliestDate(today: Date, workdays = 3): Date {
  const d = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let counted = 0;
  while (counted < workdays) {
    d.setDate(d.getDate() + 1);
    if (isWorkday(d)) counted++;
  }
  return d;
}

export function isSelectable(date: Date, today: Date): boolean {
  return isWorkday(date) && date >= earliestDate(today);
}

const WEEKDAYS = ["ne", "po", "út", "st", "čt", "pá", "so"];

// Např. „čt 22. 10. 2026“
export function formatDate(date: Date): string {
  return `${WEEKDAYS[date.getDay()]} ${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
}
