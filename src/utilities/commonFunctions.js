import EN_JSON from "./EN.json";

// Get Component Text
export function getComponentTexts(path) {
  const splittedPath = path?.split(".");
  let answer = EN_JSON[`${splittedPath[0]}`];
  for (let i = 1; i < splittedPath?.length; i++) {
    answer = answer[`${splittedPath[i]}`];
  }
  return answer;
}

// Replacement content
export function replaceContentDynamic(content, replacement) {
  return content.replaceAll(/{{(.*?)}}/g, (_, p1) => {
    return replacement[p1] || "";
  });
}

// Image Prefix handler
export function imagePrefixHandler(imageUrl, prefix) {
  return `${prefix}${imageUrl}`;
}
