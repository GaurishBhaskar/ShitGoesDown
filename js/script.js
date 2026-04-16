function validateMessage() {
    let message = document.getElementById("commitInput").value;
    let result = document.getElementById("result");

    let pattern = /^(feat|fix|docs|style|refactor|test|chore): .+/;

    if (pattern.test(message)) {
        result.innerHTML = "✅ Valid commit message";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Invalid commit message";
        result.style.color = "red";
    }
}
