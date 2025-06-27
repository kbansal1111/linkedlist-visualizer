# 🔗 LinkedList Visualizer

A professional-grade interactive React web app that lets users visualize operations on a singly linked list. Ideal for students and educators to understand how linked lists work step-by-step.

[![View on GitHub](./public/github-logo.jpg)](https://github.com/kbansal1111/linkedlist-visualizer)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage Guide](#usage-guide)
- [Deployment](#deployment)
- [License](#license)

---

## 🚀 Features

- Insert nodes at head, tail, or index
- Delete nodes by index or from ends
- Search and highlight a node
- Live updates and smooth animations
- Fully responsive UI with clean layout
- Reset the list for fresh start

---

## 🛠 Tech Stack

**Frontend:**  
- React 18+  
- Tailwind CSS  
- React Hooks  
- Framer Motion (optional for animation)  

**Architecture:**  
- Custom LinkedList class  
- Modular and reusable components  

---

## ⚙️ Installation

```bash
git clone https://github.com/kbansal1111/linkedlist-visualizer.git
cd linkedlist-visualizer
npm install
npm start
```

App runs at: `http://localhost:3000`

---

## 🔧 Configuration

All configuration is self-contained. You can adjust UI behavior or styles via:
- `src/utils/constants.js` (optional)
- `tailwind.config.js`

---

## 📚 Usage Guide

1. Type a value in the input field.
2. Click buttons to insert, delete, or search.
3. See results updated in the display box.

Animations reflect structure changes live.

---

## 🚀 Deployment

### Netlify (Quick Deploy)
```bash
npm run build
```
Drag and drop the `build/` folder to [https://app.netlify.com/drop](https://app.netlify.com/drop).

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file.

---

Built with 💙 for students learning Data Structures.