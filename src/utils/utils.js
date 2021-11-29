const today = new Date();

export const currentYear = today.getFullYear();

export function getAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}