# 🔗 LinkedList Visualizer

**Linked List Visualizer is an interactive web-based tool built using React that allows users to simulate and visualize operations on a Linked List. It is designed for students, educators, and developers to understand and demonstrate how linked lists work through real-time animations and clean UI.**


![logo192](https://github.com/user-attachments/assets/90aa3610-2112-4de7-b1da-b406e8d4c7b3)

# 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage Guide](#usage-guide)
- [Deployment](#deployment)
- [License](#license)

# 🚀 Features

- Insert nodes at head, tail, or index
- Delete nodes by index or from ends
- Live updates and smooth animations
- Fully responsive UI with clean layout
- Reset the list for fresh start
- -Reverse the list

# 🛠 Tech Stack

**Frontend:**  
- React 18+  
- Tailwind CSS  
- React Hooks  
- Custom Hooks 

**Architecture:**  
- Custom LinkedList class  
- Modular and reusable components  

# ⚙ Installation

```bash
git clone https://github.com/kbansal1111/linkedlist-visualizer.git
cd linkedlist-visualizer
npm install
npm start
```

App runs at: `http://localhost:3000`

#🔧 Configuration
All configuration is self-contained. You can adjust UI behavior or styles via:
src/App.css - Main styling and component styles
src/data/linkedlistclass.js - Data structure implementation
src/components/LinkedListSimulator.js - UI component configuration
package.json - Project dependencies and scripts

# 📁 Project Structure

```LinkedList Simulator/
│
├── linkedlist_simulator/                    # Main project directory
│   ├── package.json                         # Node.js dependencies and scripts
│   ├── package-lock.json                    # Locked versions of dependencies
│   ├── README.md                            # Project documentation
│
│   ├── public/                              # Static assets (served directly)
│   │   ├── index.html                       # Main HTML template
│   │   ├── favicon.ico                      # Browser tab icon
│   │   ├── logo192.png                      # App logo (192x192)
│   │   ├── logo512.png                      # App logo (512x512)
│   │   ├── manifest.json                    # PWA configuration
│   │   ├── robots.txt                       # Search engine instructions
│   │   └── github-logo.jpg                  # GitHub repository link icon
│
│   └── src/                                 # Source code directory
│       ├── App.js                           # Main React component (app entry point)
│       ├── App.css                          # Global styles and component styles
│       ├── index.js                         # React app initialization
│
│       ├── components/                      # React components directory
│       │   └── LinkedListSimulator.js       # Main simulator UI component
│       │                                     # (handles user interactions and display)
│
│       └── data/                            # Data structures and algorithms
│           └── linkedlistclass.js           # Custom LinkedList class implementation
│                                              (Node class + LinkedList methods)
```

# 📚 Usage Guide

1. Type a value in the input field.
2. Click buttons to insert, delete, or search.
3. See results updated in the display box.

Animations reflect structure changes live.

# 🚀 Deployment

**Netlify (Quick Deploy)**
```bash
npm run build
```
Drag and drop the `build/` folder to [https://app.netlify.com/drop](https://app.netlify.com/drop).

# 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file.

# 🙏 Acknowledgments

- **React.js** for the powerful UI framework  
- **JavaScript (ES6+)** for modern language features  
- **CSS3** for styling and layout  
- **GitHub** for code hosting and collaboration  
- **Stack Overflow Community** for helpful solutions and advice  
- **Open Source Community** for inspiration and best practices  

# 📞 Support

If you encounter any issues or have questions:

- Check the **Troubleshooting** section in the README  
- Create an **issue on GitHub**  
- Start a **discussion** or contact the **project maintainer** via GitHub
  

**⭐ Star the Repo: Show your support by starring this project**

**Built with 💙 for students learning Data Structures.**
