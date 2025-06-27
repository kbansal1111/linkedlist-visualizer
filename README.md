🔗 LinkedList Visualizer

Linked List Visualizer is an interactive web-based tool built using React that allows users to simulate and visualize operations on a Singly Linked List. It is designed for students, educators, and developers to understand and demonstrate how linked lists work through real-time animations and clean UI.


![logo192](https://github.com/user-attachments/assets/90aa3610-2112-4de7-b1da-b406e8d4c7b3)

📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage Guide](#usage-guide)
- [Deployment](#deployment)
- [License](#license)

🚀 Features

- Insert nodes at head, tail, or index
- Delete nodes by index or from ends
- Live updates and smooth animations
- Fully responsive UI with clean layout
- Reset the list for fresh start
- -Reverse the list

🛠 Tech Stack

**Frontend:**  
- React 18+  
- Tailwind CSS  
- React Hooks  
- Custom Hooks 

**Architecture:**  
- Custom LinkedList class  
- Modular and reusable components  

⚙ Installation

```bash
git clone https://github.com/kbansal1111/linkedlist-visualizer.git
cd linkedlist-visualizer
npm install
npm start
```

App runs at: `http://localhost:3000`

🔧 Configuration

All configuration is self-contained. You can adjust UI behavior or styles via:
- `src/utils/constants.js` (optional)
- `tailwind.config.js`

---

📚 Usage Guide

1. Type a value in the input field.
2. Click buttons to insert, delete, or search.
3. See results updated in the display box.

Animations reflect structure changes live.

🚀 Deployment

Netlify (Quick Deploy)
```bash
npm run build
```
Drag and drop the `build/` folder to [https://app.netlify.com/drop](https://app.netlify.com/drop).

📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file.

Built with 💙 for students learning Data Structures.
