function validateMessage() {
  const input = document.getElementById('commitInput').value.trim();
  const result = document.getElementById('result');
  const pattern = /^(feat|fix|docs|style|refactor|test|chore)(\([a-zA-Z0-9_-]+\))?: .+/;

  if (pattern.test(input)) {
    result.textContent = '✅ Valid commit message';
    result.className = 'valid';
  } else {
    result.textContent = '❌ Invalid commit message';
    result.className = 'invalid';
  }
}
