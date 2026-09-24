// Per-browser progress tracking (audit checklist ticks and "marked as done"
// projects), stored in localStorage. Every read and write is wrapped in
// try/catch: private browsing, blocked storage, or a full quota should
// degrade to "nothing saved", not break the page.
const CHECKLIST_PREFIX = 'pt:checklist:';
const DONE_PREFIX = 'pt:done:';

export function getChecklistState(slug: string): boolean[] {
  try {
    const raw = localStorage.getItem(CHECKLIST_PREFIX + slug);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(Boolean) : [];
  } catch {
    return [];
  }
}

export function setChecklistState(slug: string, state: boolean[]): void {
  try {
    localStorage.setItem(CHECKLIST_PREFIX + slug, JSON.stringify(state));
  } catch {
    // Storage unavailable; the checklist still works for this page view.
  }
}

export function clearChecklistState(slug: string): void {
  try {
    localStorage.removeItem(CHECKLIST_PREFIX + slug);
  } catch {
    // Nothing to clean up if storage never accepted the write.
  }
}

export function isProjectDone(slug: string): boolean {
  try {
    return localStorage.getItem(DONE_PREFIX + slug) === '1';
  } catch {
    return false;
  }
}

export function setProjectDone(slug: string, done: boolean): void {
  try {
    if (done) {
      localStorage.setItem(DONE_PREFIX + slug, '1');
    } else {
      localStorage.removeItem(DONE_PREFIX + slug);
    }
  } catch {
    // Storage unavailable; the toggle just won't persist this session.
  }
}
