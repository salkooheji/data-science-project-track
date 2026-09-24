import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { PHASE_IDS } from './data/phases';

// Schema mirrors the shared project page template in PROJECT_BRIEF.md section 8:
// what you'll build, what it teaches, stack, prerequisites, choosing your data,
// the deliverable, how long it takes, the "Learn it with AI" prompt, the audit
// checklist, sharing your work, and "done right looks like".
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().min(1).max(12),
    phase: z.enum(PHASE_IDS),
    // One short line shown on the roadmap card (Home) and in nav/meta contexts.
    summary: z.string(),
    // The remaining fields are the actual page write-up, authored one project
    // at a time in the project-pages build phase. Optional for now so stub
    // entries (title/order/phase/summary only) can back the Home roadmap
    // before every page is written. Tighten these to required once all 12
    // project pages exist.
    whatYouWillBuild: z.string().optional(),
    whatItTeaches: z.array(z.string()).optional(),
    stack: z.string().optional(),
    // Prose note on what to do first, if anything. Not a project link list:
    // some projects need none, others point back to earlier ones in words.
    prerequisites: z.string().optional(),
    // Heading override for the "choosing your data" section, since some
    // projects frame it as a dataset choice and others as a competition
    // choice. Falls back to "Choosing your data" when not set.
    choosingYourDataHeading: z.string().optional(),
    choosingYourData: z.string().optional(),
    deliverable: z.array(z.string()).optional(),
    howLongItTakes: z.string().optional(),
    // The full "Learn it with AI" prompt, verbatim, meant to be copied as-is.
    learnWithAIPrompt: z.string().optional(),
    auditChecklist: z.array(z.string()).optional(),
    shareYourWork: z.string().optional(),
    doneRightLooksLike: z.string().optional(),
  }),
});

export const collections = { projects };
