# 📝 TextVault

> A modern, minimal note management web application with beautiful dark/light theme support

TextVault is a sleek and intuitive note-taking application built with Node.js, Express, and EJS. It features a modern UI with seamless dark/light theme switching, allowing you to create, edit, and organize your notes with ease.

## ✨ Features

- 🌙 **Dark/Light Theme Toggle** - Seamless theme switching with no flash
- 📝 **Create Notes** - Intuitive note creation with floating labels
- 👁️ **View Notes** - Clean, readable note viewing with sidebar navigation
- ✏️ **Edit Notes** - Full-featured editor with real-time character/word count
- 🗑️ **Delete Notes** - Safe deletion with confirmation prompts
- 📱 **Responsive Design** - Works beautifully on all devices
- 🎨 **Modern UI** - Clean, minimal design with smooth animations
- 💾 **File-based Storage** - Each note is stored as a text file
- 🔍 **Smart Navigation** - Easy switching between notes with sidebar

## 🎨 UI Highlights

- **Floating Labels**: Smart input labels that move gracefully
- **Gradient Accents**: Beautiful gradient elements throughout
- **Card-based Layout**: Modern card design with hover effects
- **Smooth Transitions**: Fluid animations and transitions
- **Typography**: Clean Inter font for readability
- **Monospace Content**: JetBrains Mono for note content
- **Icon Integration**: Lucide icons for a cohesive look

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, Tailwind CSS
- **Icons**: Lucide Icons
- **Fonts**: Inter (UI), JetBrains Mono (Content)
- **Storage**: File system (.txt files)

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/CrayFish0/text-vault.git
   cd text-vault
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the application**

   ```bash
   npm start
   ```
   
   Or for development with auto-reload:

   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```text
text-vault/
├── 📁 files/              # Notes storage directory
├── 📁 views/              # EJS templates
│   ├── index.ejs         # Main dashboard
│   ├── show.ejs          # Note viewer
│   └── edit.ejs          # Note editor
├── 📁 Screenshots/        # UI screenshots
├── index.js              # Express server
├── package.json          # Dependencies
└── README.md            # This file
```

## 🎯 Usage Guide

### Creating a Note

1. Enter a title and content in the form on the homepage
2. Click "Create Note" to save
3. Your note will appear in the notes grid below

### Viewing a Note

1. Click "Read Note" on any note card
2. Use the sidebar to navigate between notes
3. Toggle the sidebar with the menu button

### Editing a Note

1. Click the edit icon on a note card, or
2. Click "Edit Note" while viewing a note
3. Modify the name and/or content
4. Click "Save Changes" to update

### Deleting a Note

1. Click the delete icon on a note card, or
2. Click "Delete" while editing a note
3. Confirm the deletion in the prompt

### Theme Switching

- Click the sun/moon icon in the top-right corner
- Your theme preference is automatically saved
- Dark mode is the default theme

## 🔧 API Routes

| Method | Route | Description |
|--------|--------|-------------|
| GET | `/` | Main dashboard with notes list |
| GET | `/files/:filename` | View specific note |
| GET | `/edit/:filename` | Edit form for specific note |
| POST | `/create` | Create new note |
| POST | `/edit` | Update existing note |
| POST | `/delete` | Delete note |

## 🎨 Theme System

TextVault features a sophisticated theme system:

- **Default Theme**: Dark mode for better eye comfort
- **Auto-saving**: Theme preference stored in localStorage
- **No Flash**: Instant theme application on page load
- **Consistent**: Theme maintained across all pages

## 🔒 File Storage

- Notes are stored as `.txt` files in the `files/` directory
- Filenames are auto-generated from note titles
- Content is preserved exactly as entered
- Safe file operations with error handling

## 📸 Screenshots

![Main Dashboard](Screenshots/Pic1.png)
*Modern dashboard with note cards*

![Note Viewer](Screenshots/Pic2.png)
*Clean note viewing with sidebar navigation*

![Note Editor](Screenshots/Pic3.png)
*Full-featured editor with floating labels*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework
- [EJS](https://ejs.co/) - Templating engine
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Inter Font](https://rsms.me/inter/) - UI typography
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) - Code font

---

Built with ❤️ for better note-taking

[Report Bug](https://github.com/CrayFish0/text-vault/issues) · [Request Feature](https://github.com/CrayFish0/text-vault/issues)
