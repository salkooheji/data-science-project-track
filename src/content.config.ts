import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { PHASE_IDS } from './data/phases';

// Schema mirrors the shared project page template in PROJECT_BRIEF.md section 8:
// what you'll build, what it teaches, stack, prerequisites, audit checklist,
// and "done right looks like".
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
    stack: z.array(z.string()).optional(),
    // Slugs of earlier project entries that should be done first, if any.
    prerequisites: z.array(z.string()).default([]),
    auditChecklist: z.array(z.string()).optional(),
    doneRightLooksLike: z.string().optional(),
  }),
});

export const collections = { projects };
