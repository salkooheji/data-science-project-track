// Renders plain text that may contain `backtick` spans as safe inline HTML,
// so things like `train.py` show up as code in prose and list items.
export function renderInline(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
}
