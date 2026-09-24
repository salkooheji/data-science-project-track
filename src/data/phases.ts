// The 5 phases of the project track, in order.
// Colors match PROJECT_BRIEF.md section 8 and the design reference.
export const PHASE_IDS = ['foundations', 'core-ml', 'vision', 'finance', 'llms-and-agents'] as const;

export type PhaseId = (typeof PHASE_IDS)[number];

export interface Phase {
  id: PhaseId;
  number: number;
  label: string;
  color: string;
}

export const PHASES: Phase[] = [
  { id: 'foundations', number: 1, label: 'Foundations', color: '#60a5fa' },
  { id: 'core-ml', number: 2, label: 'Core ML', color: '#22d3ee' },
  { id: 'vision', number: 3, label: 'Vision', color: '#34d399' },
  { id: 'finance', number: 4, label: 'Finance', color: '#fbbf24' },
  { id: 'llms-and-agents', number: 5, label: 'LLMs and Agents', color: '#a78bfa' },
];

export function getPhase(id: PhaseId): Phase {
  const phase = PHASES.find((p) => p.id === id);
  if (!phase) throw new Error(`Unknown phase id: ${id}`);
  return phase;
}
