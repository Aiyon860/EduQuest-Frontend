export const capitalize = (str: string) => {
  return str
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export function slugify(input: string): string {
  return input
    .toLowerCase() // convert to lowercase
    .trim() // remove leading/trailing spaces
    .normalize("NFD") // normalize accented chars
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // collapse multiple hyphens
}