const today: Date = new Date();

export const currentYear: number = today.getFullYear();

export function getAge(birthDateString: string) {
  const birthDate: Date = new Date(birthDateString);
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const month: number = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}