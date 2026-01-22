# Markdown Editor - Usage Guide

## Getting Started

### Opening the Editor
1. Open `index.html` in any modern web browser
2. The editor will load with a split-pane interface
3. Left pane: Markdown editor
4. Right pane: Live HTML preview

## Interface Overview

### Toolbar Buttons

#### File Operations
- **📄 New**: Create a new document (warns if unsaved changes exist)
- **📂 Open**: Open an existing markdown file (.md, .markdown, .txt)
- **💾 Save**: Save current markdown to a file

#### Formatting Tools
- **B**: Insert bold text (`**text**`)
- **I**: Insert italic text (`*text*`)
- **H1**: Insert heading at the beginning of current line (`# `)
- **🔗**: Insert a link (`[text](url)`)
- **🖼️**: Insert an image (`![alt](url)`)
- **</>**: Insert code (inline `` `code` `` or block ` ``` `)
- **• List**: Insert unordered list item (`- `)
- **1. List**: Insert ordered list item (`1. `)
- **❝**: Insert blockquote (`> `)

#### Export Options
- **📥 Export PDF**: Convert markdown to PDF
- **🌐 Export HTML**: Generate standalone HTML file

### Editor Features
- **Real-time Statistics**: Character, word, and line count in the editor header
- **Sync Scroll**: Toggle synchronized scrolling between editor and preview
- **Tab Support**: Press Tab to insert 4 spaces

## Keyboard Shortcuts

- `Ctrl/Cmd + S`: Save file
- `Ctrl/Cmd + B`: Bold selected text
- `Ctrl/Cmd + I`: Italic selected text
- `Ctrl/Cmd + K`: Insert link
- `Tab`: Insert 4 spaces

## CommonMark Compliance

This editor strictly follows the CommonMark specification. Key features:

### Supported Markdown Syntax

#### Headings
```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

#### Emphasis
```markdown
*italic text*
**bold text**
```

#### Lists

Unordered:
```markdown
- Item 1
- Item 2
  - Nested item
```

Ordered:
```markdown
1. First item
2. Second item
3. Third item
```

#### Links
```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Title")
```

#### Images
```markdown
![Alt text](image-url.jpg)
![Alt with title](image.jpg "Image title")
```

#### Code

Inline code:
```markdown
Use `code` for inline code
```

Code blocks:
````markdown
```
function hello() {
  console.log("Hello!");
}
```
````

#### Blockquotes
```markdown
> This is a blockquote
> It can span multiple lines
```

#### Horizontal Rules
```markdown
---
***
___
```

#### Hard Line Breaks
Add two or more spaces at the end of a line, or use a backslash:
```markdown
Line one  
Line two

Line one\
Line two
```

## File Operations

### Opening Files
1. Click the **📂 Open** button
2. Select a markdown file from your computer
3. The content will load into the editor
4. The filename will be preserved for saving

### Saving Files
1. Click the **💾 Save** button
2. Choose a location and filename
3. The file will be saved with `.md` extension

### Creating New Documents
1. Click the **📄 New** button
2. Confirm if you have unsaved changes
3. The editor will be cleared

## Export Functions

### PDF Export
1. Click the **📥 Export PDF** button
2. The system will generate a PDF with:
   - Professional formatting
   - Syntax-highlighted code blocks
   - Styled headings and blockquotes
   - Proper margins and pagination
3. The PDF will download automatically

### HTML Export
1. Click the **🌐 Export HTML** button
2. A standalone HTML file will be generated with:
   - Embedded CSS styling
   - All markdown rendered to HTML
   - Responsive design
   - Ready to host or share
3. The HTML file will download automatically

## Tips and Best Practices

### Writing Markdown
1. **Use headings hierarchically**: Start with H1, then H2, etc.
2. **Leave blank lines**: Between different elements for clarity
3. **Preview as you write**: Watch the live preview to see your formatting
4. **Use code blocks**: For multi-line code snippets
5. **Add alt text**: For images for accessibility

### Editor Usage
1. **Save regularly**: Use Ctrl/Cmd+S to save frequently
2. **Use keyboard shortcuts**: For faster formatting
3. **Enable sync scroll**: When editing long documents
4. **Export early**: Test PDF/HTML output during editing

### CommonMark Differences from GFM
- **No tables**: CommonMark doesn't include table syntax (use HTML tables if needed)
- **No strikethrough**: Use `~~text~~` is not supported in strict CommonMark
- **No task lists**: `- [ ]` checkboxes are not part of CommonMark
- **No auto-linking**: URLs must be in `[text](url)` format

## Security

The editor includes security features:
- **DOMPurify**: Sanitizes HTML output to prevent XSS attacks
- **No remote execution**: All processing happens locally in your browser
- **No data collection**: Your files stay on your computer

## Browser Compatibility

Tested and working in:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Troubleshooting

### Preview not updating
- Refresh the page
- Check browser console for errors

### Export not working
- Ensure pop-up blockers are disabled
- Check browser download settings
- Try a different browser

### File won't open
- Ensure the file is a text-based format (.md, .markdown, .txt)
- Check file permissions
- Try opening the file in a text editor first

### Formatting looks wrong
- Verify CommonMark syntax is correct
- Check for missing blank lines between elements
- Use the preview to identify issues

## Advanced Features

### Custom Styling
The exported HTML and PDF use predefined styles. To customize:
1. For HTML: Edit the `exportToHTML()` function in `app.js`
2. For PDF: Edit the `exportToPDF()` function in `app.js`

### Integration
To integrate this editor into another project:
1. Copy `index.html`, `styles.css`, `app.js`, and `libs/` folder
2. Include the files in your HTML
3. Customize styling in `styles.css`

## Support

For issues or questions:
- Check the README.md for documentation
- Review CommonMark specification at https://commonmark.org
- Check browser console for error messages

## License

MIT License - Free to use and modify
