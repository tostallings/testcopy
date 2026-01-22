// Initialize marked with CommonMark compliance
marked.setOptions({
    breaks: false,      // CommonMark: only hard line breaks with 2+ spaces or backslash
    gfm: false,         // Disable GFM extensions to stay CommonMark compliant
    headerIds: false,   // CommonMark doesn't include header IDs
    mangle: false,
    pedantic: false,    // Use modern parsing, but stay CommonMark compliant
    sanitize: false     // We'll use DOMPurify instead
});

// Get DOM elements
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const fileInput = document.getElementById('fileInput');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');
const lineCount = document.getElementById('lineCount');
const syncScrollCheckbox = document.getElementById('syncScroll');

let currentFileName = 'untitled.md';

// Initialize with sample content
updatePreview();
updateStats();

// Event listeners
editor.addEventListener('input', () => {
    updatePreview();
    updateStats();
});

editor.addEventListener('scroll', () => {
    if (syncScrollCheckbox.checked) {
        const scrollPercentage = editor.scrollTop / (editor.scrollHeight - editor.clientHeight);
        preview.scrollTop = scrollPercentage * (preview.scrollHeight - preview.clientHeight);
    }
});

preview.addEventListener('scroll', () => {
    if (syncScrollCheckbox.checked) {
        const scrollPercentage = preview.scrollTop / (preview.scrollHeight - preview.clientHeight);
        editor.scrollTop = scrollPercentage * (editor.scrollHeight - editor.clientHeight);
    }
});

// Handle file input change
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            editor.value = event.target.result;
            currentFileName = file.name;
            updatePreview();
            updateStats();
        };
        reader.readAsText(file);
    }
});

// Update preview with parsed markdown
function updatePreview() {
    const markdownText = editor.value;
    const html = marked.parse(markdownText);
    // Sanitize HTML to prevent XSS attacks
    const cleanHtml = DOMPurify.sanitize(html);
    preview.innerHTML = cleanHtml;
}

// Update statistics
function updateStats() {
    const text = editor.value;
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text.split('\n').length;
    
    charCount.textContent = chars.toLocaleString();
    wordCount.textContent = words.toLocaleString();
    lineCount.textContent = lines.toLocaleString();
}

// File operations
function newDocument() {
    if (editor.value && !confirm('Are you sure? Any unsaved changes will be lost.')) {
        return;
    }
    editor.value = '';
    currentFileName = 'untitled.md';
    updatePreview();
    updateStats();
}

function openFile() {
    fileInput.click();
}

function saveFile() {
    const content = editor.value;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentFileName;
    a.click();
    URL.revokeObjectURL(url);
}

// Formatting functions
function insertAtCursor(before, after = '', placeholder = '') {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const text = editor.value;
    const selectedText = text.substring(start, end) || placeholder;
    
    const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
    editor.value = newText;
    
    // Set cursor position
    const newCursorPos = start + before.length + selectedText.length;
    editor.setSelectionRange(newCursorPos, newCursorPos);
    editor.focus();
    
    updatePreview();
    updateStats();
}

function insertBold() {
    insertAtCursor('**', '**', 'bold text');
}

function insertItalic() {
    insertAtCursor('*', '*', 'italic text');
}

function insertHeading() {
    const start = editor.selectionStart;
    const text = editor.value;
    const lineStart = text.lastIndexOf('\n', start - 1) + 1;
    const beforeLine = text.substring(0, lineStart);
    const afterLine = text.substring(lineStart);
    
    editor.value = beforeLine + '# ' + afterLine;
    editor.setSelectionRange(start + 2, start + 2);
    editor.focus();
    
    updatePreview();
    updateStats();
}

function insertLink() {
    insertAtCursor('[', '](url)', 'link text');
}

function insertImage() {
    insertAtCursor('![', '](image-url)', 'alt text');
}

function insertCode() {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const text = editor.value;
    const selectedText = text.substring(start, end);
    
    if (selectedText.includes('\n')) {
        // Multi-line code block
        insertAtCursor('```\n', '\n```', 'code here');
    } else {
        // Inline code
        insertAtCursor('`', '`', 'code');
    }
}

function insertList() {
    const start = editor.selectionStart;
    const text = editor.value;
    const lineStart = text.lastIndexOf('\n', start - 1) + 1;
    const beforeLine = text.substring(0, lineStart);
    const afterLine = text.substring(lineStart);
    
    editor.value = beforeLine + '- ' + afterLine;
    editor.setSelectionRange(start + 2, start + 2);
    editor.focus();
    
    updatePreview();
    updateStats();
}

function insertOrderedList() {
    const start = editor.selectionStart;
    const text = editor.value;
    const lineStart = text.lastIndexOf('\n', start - 1) + 1;
    const beforeLine = text.substring(0, lineStart);
    const afterLine = text.substring(lineStart);
    
    editor.value = beforeLine + '1. ' + afterLine;
    editor.setSelectionRange(start + 3, start + 3);
    editor.focus();
    
    updatePreview();
    updateStats();
}

function insertQuote() {
    const start = editor.selectionStart;
    const text = editor.value;
    const lineStart = text.lastIndexOf('\n', start - 1) + 1;
    const beforeLine = text.substring(0, lineStart);
    const afterLine = text.substring(lineStart);
    
    editor.value = beforeLine + '> ' + afterLine;
    editor.setSelectionRange(start + 2, start + 2);
    editor.focus();
    
    updatePreview();
    updateStats();
}

// Export functions
function exportToPDF() {
    // Create a styled version of the preview for PDF
    const element = document.createElement('div');
    element.innerHTML = preview.innerHTML;
    element.style.padding = '40px';
    element.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif';
    element.style.fontSize = '14px';
    element.style.lineHeight = '1.6';
    element.style.color = '#1e293b';
    element.style.backgroundColor = 'white';
    
    // Apply styling to elements
    const styles = `
        <style>
            h1 { font-size: 32px; margin-top: 20px; margin-bottom: 10px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
            h2 { font-size: 28px; margin-top: 18px; margin-bottom: 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
            h3 { font-size: 24px; margin-top: 16px; margin-bottom: 8px; }
            h4 { font-size: 20px; margin-top: 14px; margin-bottom: 8px; }
            h5 { font-size: 18px; margin-top: 12px; margin-bottom: 8px; }
            h6 { font-size: 16px; margin-top: 12px; margin-bottom: 8px; }
            p { margin-bottom: 12px; }
            code { background: #f1f5f9; padding: 2px 4px; border-radius: 3px; font-family: 'Consolas', monospace; font-size: 13px; }
            pre { background: #1e293b; color: #e2e8f0; padding: 16px; border-radius: 6px; overflow-x: auto; margin-bottom: 16px; }
            pre code { background: none; padding: 0; color: inherit; }
            blockquote { border-left: 4px solid #2563eb; padding-left: 16px; margin: 16px 0; color: #64748b; font-style: italic; }
            ul, ol { margin-bottom: 12px; padding-left: 30px; }
            li { margin-bottom: 4px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
            table th, table td { border: 1px solid #e2e8f0; padding: 8px; text-align: left; }
            table th { background: #f8fafc; font-weight: 600; }
            img { max-width: 100%; height: auto; border-radius: 6px; margin: 16px 0; }
            a { color: #2563eb; text-decoration: none; }
        </style>
    `;
    
    const opt = {
        margin: 0.5,
        filename: currentFileName.replace(/\.md$/, '.pdf'),
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Add styles to element
    const styledElement = document.createElement('div');
    styledElement.innerHTML = styles + element.outerHTML;
    
    html2pdf().set(opt).from(styledElement).save();
}

function exportToHTML() {
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${currentFileName.replace(/\.md$/, '')}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            line-height: 1.6;
            color: #1e293b;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #f8fafc;
        }
        .content {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3, h4, h5, h6 {
            margin-top: 24px;
            margin-bottom: 12px;
            font-weight: 600;
            line-height: 1.25;
        }
        h1 { font-size: 32px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
        h2 { font-size: 28px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
        h3 { font-size: 24px; }
        h4 { font-size: 20px; }
        h5 { font-size: 18px; }
        h6 { font-size: 16px; }
        p { margin-bottom: 16px; }
        a { color: #2563eb; text-decoration: none; }
        a:hover { text-decoration: underline; }
        ul, ol { margin-bottom: 16px; padding-left: 32px; }
        li { margin-bottom: 4px; }
        code {
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 14px;
        }
        pre {
            background: #1e293b;
            color: #e2e8f0;
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
            margin-bottom: 16px;
        }
        pre code {
            background: none;
            padding: 0;
            color: inherit;
        }
        blockquote {
            border-left: 4px solid #2563eb;
            padding-left: 16px;
            margin: 16px 0;
            color: #64748b;
            font-style: italic;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 16px 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 16px;
        }
        table th, table td {
            border: 1px solid #e2e8f0;
            padding: 12px;
            text-align: left;
        }
        table th {
            background: #f8fafc;
            font-weight: 600;
        }
        table tr:hover {
            background: #f8fafc;
        }
        hr {
            border: none;
            border-top: 2px solid #e2e8f0;
            margin: 32px 0;
        }
    </style>
</head>
<body>
    <div class="content">
        ${preview.innerHTML}
    </div>
</body>
</html>`;
    
    const blob = new Blob([htmlTemplate], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentFileName.replace(/\.md$/, '.html');
    a.click();
    URL.revokeObjectURL(url);
}

// Keyboard shortcuts
editor.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key.toLowerCase()) {
            case 's':
                e.preventDefault();
                saveFile();
                break;
            case 'b':
                e.preventDefault();
                insertBold();
                break;
            case 'i':
                e.preventDefault();
                insertItalic();
                break;
            case 'k':
                e.preventDefault();
                insertLink();
                break;
        }
    }
    
    // Tab key support
    if (e.key === 'Tab') {
        e.preventDefault();
        insertAtCursor('    ', '');
    }
});
