import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
type Note = {
  id: string;
  title: string;
  content: React.ReactNode;
};

// Content
const NOTES: Note[] = [{
  id: 'about',
  title: 'About me',
  content: <div className="space-y-4" data-magicpath-id="0" data-magicpath-path="PersonalWebsite.tsx">
        <p data-magicpath-id="1" data-magicpath-path="PersonalWebsite.tsx">I'm the cofounder and CEO of Misogi Labs. We work with pharma and CROs to integrate AI agents in preclinical R&D and IP workflows. We believe that by freeing scientists from everything that isn't science and doesn't require human genius, we can significantly augment the pace of discoveries. For more, check our website or reach out at jessica (at) misogilabs (dot) com.</p>
        <p data-magicpath-id="2" data-magicpath-path="PersonalWebsite.tsx">
          I went to university at Politecnico di Milano, where I earned my MSc in Bioengineering, and to University of Padova, where I earned my BSc in Biomedical Engineering. I graduated magna cum laude with highest honors and was awarded several prestigious prizes for scholarly achievements (ranked top 2 among all 7k master's students). During my studies I also had the opportunity and honor to be a Teaching Assistant in Analysis & PDE, Physics, and Biomechanics. I loved teaching and till my early 20s I thought I would continue my career in academia.
        </p>
        <p data-magicpath-id="3" data-magicpath-path="PersonalWebsite.tsx">
          In my last year of BSc I started doing academic research in the lab. I worked on engineering CSP peptides to inhibit communication of bacterial quorum sensing and biofilm formation, under the supervision of Prof. Monica Dettin and Paola Brun. Here is the link to the thesis (in Italian).
        </p>
        <p data-magicpath-id="4" data-magicpath-path="PersonalWebsite.tsx">In my first year of MSc, I was introduced to physics-based biological simulations, first with fundamental CFD and physics of biomass with Professor Gabriele Dubini, then applications in biomedical devices (Gaetano and Costantino), tissues and regenerative medicine (Fiore and Rasponi), cell mechanics (Monica Soncini), and nanomedicine (Cellesi and Gautieri). Under the supervision of Professor Gautieri I started working on protein engineering and molecular dynamics simulations research. In the meantime I developed my passion for AI. I started learning about Deep Learning after neuroengineering classes with Pedrocchi and Cerveri.</p>
        <p data-magicpath-id="5" data-magicpath-path="PersonalWebsite.tsx">
          Under the supervision of Professor Gautieri I started working on protein engineering and molecular dynamics simulations research. In the meantime I developed my passion for AI. I started learning about Deep Learning after neuroengineering classes with Pedrocchi and Cerveri.
        </p>
        <p data-magicpath-id="6" data-magicpath-path="PersonalWebsite.tsx">
          During my last year of MSc, I moved to Japan where I conducted research under the supervision of Prof. Noriyoshi Arai, Kenji Yasuoka, and Alfonso Gautieri. I worked on the application of deep learning to microsecond-scale molecular dynamics simulations. For my thesis I built an ML framework to analyze MD simulations at scale and rank potential drug candidates by predicting strength of dynamic interaction. This felt like a startup project for the pace and breadth of work. I published the work in RSC Advances, presented at the ISMC2023 Osaka, and defended my thesis dissertation.
        </p>
        <p data-magicpath-id="7" data-magicpath-path="PersonalWebsite.tsx">
          I love motorcycles, the ocean, music, and sports. I'm currently obsessed with tennis. I always had a soccer ball at my feet, but committed to volleyball and played on a regional team. I also love traveling and immersing myself in new cultures. I have Italian-Albanian origins. I've lived on 3 continents, made friends in 18 countries, and have friends from 53 countries. One day, I'll travel around the world for a year.
        </p>
      </div>
}, {
  id: 'awards',
  title: 'Awards',
  content: <div className="space-y-2" data-magicpath-id="8" data-magicpath-path="PersonalWebsite.tsx">
        <p data-magicpath-id="9" data-magicpath-path="PersonalWebsite.tsx">Pietro Catelli, Artsana group Scholar</p>
        <p data-magicpath-id="10" data-magicpath-path="PersonalWebsite.tsx">Aurelio Beltrami Scholar</p>
        <p data-magicpath-id="11" data-magicpath-path="PersonalWebsite.tsx">Ermengildo Zegna scholar (turned down to focus on startups)</p>
      </div>
}, {
  id: 'publications',
  title: 'Publications',
  content: <div className="space-y-2" data-magicpath-id="12" data-magicpath-path="PersonalWebsite.tsx">
        <p data-magicpath-id="13" data-magicpath-path="PersonalWebsite.tsx">(preprint) AI agents for drug discovery</p>
        <p data-magicpath-id="14" data-magicpath-path="PersonalWebsite.tsx">paper in japan</p>
        <p data-magicpath-id="15" data-magicpath-path="PersonalWebsite.tsx">MSc thesis</p>
        <p data-magicpath-id="16" data-magicpath-path="PersonalWebsite.tsx">BSc thesis</p>
      </div>
}, {
  id: 'blogs',
  title: 'Blogs',
  content: <div className="space-y-2" data-magicpath-id="17" data-magicpath-path="PersonalWebsite.tsx">
        <p className="text-gray-500" data-magicpath-id="18" data-magicpath-path="PersonalWebsite.tsx">#opens another page</p>
      </div>
}, {
  id: 'media',
  title: 'Media',
  content: <div className="space-y-2" data-magicpath-id="19" data-magicpath-path="PersonalWebsite.tsx">
        <p className="text-gray-500" data-magicpath-id="20" data-magicpath-path="PersonalWebsite.tsx">#opens another page</p>
      </div>
}, {
  id: 'notes',
  title: 'Notes and projects',
  content: <div className="space-y-2" data-magicpath-id="21" data-magicpath-path="PersonalWebsite.tsx">
        <p className="text-gray-500" data-magicpath-id="22" data-magicpath-path="PersonalWebsite.tsx">#opens another page</p>
      </div>
}];

// @component: PersonalWebsite
export const PersonalWebsite = () => {
  const [activeNoteId, setActiveNoteId] = useState<string>('about');
  const activeNote = NOTES.find(n => n.id === activeNoteId) || NOTES[0];

  // @return
  return <div className="flex h-screen w-full bg-white overflow-hidden font-sans text-gray-900" data-magicpath-id="23" data-magicpath-path="PersonalWebsite.tsx">
      {/* Sidebar */}
      <div className="w-48 border-r border-gray-200 flex flex-col" data-magicpath-id="24" data-magicpath-path="PersonalWebsite.tsx">
        <div className="p-4 border-b border-gray-200" data-magicpath-id="25" data-magicpath-path="PersonalWebsite.tsx">
          <h1 className="text-lg font-semibold" data-magicpath-id="26" data-magicpath-path="PersonalWebsite.tsx">Jessica Mustali</h1>
        </div>

        <div className="flex-1 overflow-y-auto" data-magicpath-id="27" data-magicpath-path="PersonalWebsite.tsx">
          {NOTES.map(note => <button key={note.id} onClick={() => setActiveNoteId(note.id)} className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 transition-colors ${activeNoteId === note.id ? 'bg-gray-50' : ''}`} data-magicpath-id="28" data-magicpath-path="PersonalWebsite.tsx">
              {note.title}
            </button>)}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white h-full overflow-hidden" data-magicpath-id="29" data-magicpath-path="PersonalWebsite.tsx">
        <AnimatePresence mode="wait" data-magicpath-id="30" data-magicpath-path="PersonalWebsite.tsx">
          <motion.div key={activeNote.id} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.15
        }} className="flex-1 overflow-y-auto" data-magicpath-id="31" data-magicpath-path="PersonalWebsite.tsx">
            <div className="max-w-2xl mx-auto px-8 py-12" data-magicpath-id="32" data-magicpath-path="PersonalWebsite.tsx">
              <h2 className="text-2xl font-semibold mb-6" data-magicpath-id="33" data-magicpath-path="PersonalWebsite.tsx" style={{
              fontSize: "20px"
            }}>{activeNote.title}</h2>
              <div className="text-gray-800 leading-relaxed" data-magicpath-id="34" data-magicpath-path="PersonalWebsite.tsx">{activeNote.content}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>;
};