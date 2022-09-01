function designerPdfViewer(h: number[], word: string): number {
  // Write your code here

  const heights:any = {};
  for (let i = 0; i < 26; i++) {
      heights[String.fromCharCode(i + 97)] = h[i];
  }

  let max = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (heights[letter] > max) {
      max = heights[letter];
    }
  }

  return max * word.length;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,7], 'zaba'));
