
Its a tool that validates Git commit messages using the **Conventional Commits standard**.  
This project helps developers maintain a clean and meaningful Git history by ensuring every commit message follows a predefined format.

---

## 📖 Project Overview

In software development, commit messages are used to describe the changes made in the codebase.  
Poorly written commit messages make it difficult to track project history.

This project validates commit messages before they are committed to Git.

### ✅ Accepted Format

```text
<type>[(scope)][!]: <subject>
```

### Examples

```text
feat: add login functionality
fix(auth): resolve JWT token issue
docs: update installation guide
feat!: remove deprecated API
```

---

## ✨ Features

- ✅ Regex-based validation engine
- ✅ Command Line Interface (CLI)
- ✅ Git hook integration
- ✅ JSON / YAML configuration support
- ✅ Custom commit types
- ✅ Logging support
- ✅ Unit tests using pytest
- ✅ GitHub-ready project structure
- ✅ Professional documentation

---

## 📁 Project Structure

```text
git-commit-message-validator/
│
├── validator.py
├── cli.py
├── test_validator.py
├── config.json
├── install_hook.py
├── requirements.txt
├── setup.py
├── pyproject.toml
├── README.md
```

---

## 🚀 How It Works

The project checks commit messages against the **Conventional Commits pattern**.

### Supported Types

- `feat` → New feature
- `fix` → Bug fix
- `docs` → Documentation update
- `style` → Formatting changes
- `refactor` → Code restructuring
- `test` → Test cases
- `chore` → Maintenance tasks
- `perf` → Performance improvement
- `ci` → CI/CD changes
- `build` → Build configuration

---

## 💻 Usage

Run the validator from terminal:

```bash
python cli.py "feat: add login page"
```

### Output

```text
✅ Valid commit message
```

For invalid input:

```bash
python cli.py "updated file"
```

```text
❌ Invalid commit message
```

---

## ⚙️ Installation

Install dependencies:

```bash
pip install -r requirements.txt
```

Run tests:

```bash
pytest -v
```

---

## 🎯 Objective

The main objective of this project is to **improve version control practices** by enforcing meaningful and standardized commit messages.

---

## 🛠 Technologies Used

- Python
- Regex
- argparse
- pytest
- Git
- GitHub

---

## 👨‍💻 Author

**Gaurish Bhaskar**
