export const capitalize = (str: string) => {
  if (!str) return '';

  return str
    // Replace dashes/underscores with spaces
    .replace(/[-_]+/g, ' ')
    // Remove extra spaces
    .trim()
    .replace(/\s+/g, ' ')
    // Convert each word's first char to uppercase, rest lowercase
    .split(' ')
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
};


export function slugify(input: string): string {
  return input
    .toLowerCase() // convert to lowercase
    .trim() // remove leading/trailing spaces
    .normalize("NFD") // normalize accented chars
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[_]+/g, "-") // replace dashes/underscores with spaces
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // collapse multiple hyphens
}