# Markdown Editor & Viewer

A comprehensive and robust markdown editor with live HTML preview and PDF export capabilities.

## Features

### 📝 Editor
- **Live Preview**: See your markdown rendered in real-time as you type
- **CommonMark Compliant**: Strictly follows the CommonMark specification
- **Statistics**: Track characters, words, and lines in real-time
- **Synchronized Scrolling**: Optional synchronized scrolling between editor and preview

### 🎨 Formatting Toolbar
- **Text Formatting**: Bold, Italic
- **Headings**: Quick heading insertion
- **Links & Images**: Easy link and image insertion
- **Code**: Inline code and code blocks
- **Lists**: Ordered and unordered lists
- **Quotes**: Blockquote insertion
- **Tables**: Quick table template insertion

### 💾 File Operations
- **New Document**: Start fresh
- **Open File**: Load .md, .markdown, or .txt files
- **Save File**: Save your markdown to disk
- **Export to PDF**: Convert your markdown to a beautifully formatted PDF
- **Export to HTML**: Generate standalone HTML files

### ⌨️ Keyboard Shortcuts
- `Ctrl/Cmd + S`: Save file
- `Ctrl/Cmd + B`: Bold
- `Ctrl/Cmd + I`: Italic
- `Ctrl/Cmd + K`: Insert link
- `Tab`: Insert 4 spaces

### 🔒 Security
- **XSS Protection**: Uses DOMPurify to sanitize HTML output
- **Safe Rendering**: Prevents malicious code execution

## Getting Started

### Quick Start
1. Open `index.html` in a modern web browser
2. Start typing in the editor pane
3. See your formatted markdown in the preview pane
4. Use toolbar buttons for quick formatting
5. Export to PDF or HTML when ready

### Opening a File
1. Click the "📂 Open" button
2. Select a markdown file (.md, .markdown, or .txt)
3. The file content will load into the editor

### Saving Your Work
1. Click the "💾 Save" button
2. Choose a location and filename
3. Your markdown will be saved

### Exporting to PDF
1. Click the "📥 Export PDF" button
2. Your document will be converted to a professionally formatted PDF
3. The PDF will be saved with the same name as your file

### Exporting to HTML
1. Click the "🌐 Export HTML" button
2. A standalone HTML file will be generated
3. The HTML file includes all styling and can be opened in any browser

## Technology Stack

- **HTML5**: Modern semantic markup
- **CSS3**: Responsive design with custom properties
- **JavaScript**: Vanilla JS for optimal performance
- **Libraries**:
  - [Marked.js](https://marked.js.org/): Markdown parsing
  - [html2pdf.js](https://github.com/eKoopmans/html2pdf.js): PDF generation
  - [DOMPurify](https://github.com/cure53/DOMPurify): HTML sanitization

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Features Overview

### Markdown Support
- Headings (H1-H6)
- Bold and italic text
- Links and images
- Ordered and unordered lists
- Code blocks and inline code
- Blockquotes
- Horizontal rules
- Hard line breaks (2 spaces or backslash at end of line)
- **CommonMark Compliant**: Follows the CommonMark specification for consistent rendering

### Preview Features
- Live rendering with CommonMark compliance
- Syntax highlighting for code blocks
- Responsive layout
- Styled blockquotes
- Image support

### Export Features
- **PDF Export**: High-quality PDF generation with proper formatting, margins, and styling
- **HTML Export**: Standalone HTML files with embedded CSS, perfect for sharing or hosting

## Usage Examples

### Creating a Document
```markdown
# My Document

## Introduction
This is a **markdown** document with *formatting*.

### Features
- Easy to write
- Easy to read
- Converts to HTML

### Code Example
```javascript
console.log('Hello, World!');
```

### Table
| Feature | Status |
|---------|--------|
| Editor  | ✓      |
| Preview | ✓      |
| Export  | ✓      |
```

## License

MIT License - Feel free to use this project for any purpose.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
