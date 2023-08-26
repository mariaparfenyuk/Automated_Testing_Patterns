export function checkUserAge(age) {
  if (age >= 18) {
    return "Allowed";
  } else {
    return "Blocked";
  }
}