export default function edit(s1, s2) {
  const dp = new Array(s1.length + 1);
  let i;
  let j;

  for (i = 0; i < s1.length + 1; i++) {
    dp[i] = new Array(s2.length + 1);
    dp[i][0] = i;
  }
  for (j = 1; j < s2.length + 1; j++) {
    dp[0][j] = j;
  }

  for (i = 0; i < s1.length; i++) {
    for (j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        dp[i + 1][j + 1] = dp[i][j];
      } else {
        dp[i + 1][j + 1] = 1 + Math.min(
          dp[i][j],
          dp[i + 1][j],
          dp[i][j + 1]
        );
      }
    }
  }

  const moves = [];
  // now we travel back up the tree
  while (j > 0 && i > 0) {
    if (s1[i - 1] === s2[j - 1]) {
      moves.push(`leave`);
      i--;
      j--;
    } else if (dp[i][j] === dp[i][j - 1] + 1) {
      moves.push(`add ${s2[j - 1]}`);
      j--;
    } else if (dp[i][j] === dp[i - 1][j - 1] + 1) {
      moves.push(`replace ${s2[j - 1]}`);
      i--;
      j--;
    } else {
      moves.push(`remove`);
      i--;
    }
  }

  while (j-- > 0) { moves.push(`add ${s2[j]}`); }
  while (i-- > 0) { moves.push(`remove`); }

  return moves.reverse();
}
