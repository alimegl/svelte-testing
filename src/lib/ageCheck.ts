let age = 0;

export function setAge(newAge: number) {
  age = newAge;
}

export function isAdult() {
  return age >= 18;
}