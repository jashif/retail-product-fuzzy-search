function calculateDistance(
  input: string,
  target: string,
  threshold: number = 0.6
): boolean {
  const lowerInput = input.toLowerCase();
  const lowerTarget = target.toLowerCase();

  const getLevenshteinDistance = (str1: string, str2: string): number => {
    const matrix: number[][] = [];
    for (let i = 0; i <= str1.length; i++) {
      matrix[i] = new Array(str2.length + 1);
      for (let j = 0; j <= str2.length; j++) {
        matrix[i][j] = j === 0 ? i : 0;
      }
    }

    for (let j = 0; j <= str2.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= str1.length; i++) {
      for (let j = 1; j <= str2.length; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }

    return matrix[str1.length][str2.length];
  };

  const distance = getLevenshteinDistance(lowerInput, lowerTarget);
  const maxDistanceAllowed = Math.max(3, lowerTarget.length * (1 - threshold));

  if (distance <= maxDistanceAllowed) {
    const startsWithSameCharacter = lowerInput[0] === lowerTarget[0] ? 1 : 0;
    const similarityScore =
      1 -
      distance / Math.max(lowerInput.length, lowerTarget.length) +
      startsWithSameCharacter * 0.2;

    return similarityScore >= threshold;
  }

  return distance / lowerTarget.length <= 1 - threshold;
}

const fuzzyWithCharacterMatching = (str: string, query: string): boolean => {
  str = str.toLowerCase();
  query = query.toLowerCase();

  let i = 0;
  let lastSearched = -1;

  for (const char of query) {
    lastSearched = str.indexOf(char, lastSearched + 1);
    if (lastSearched === -1) return false;
  }
  return true;
};

export { fuzzyWithCharacterMatching, calculateDistance };
