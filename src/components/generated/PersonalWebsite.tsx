import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutSection } from './AboutSection';
import { AwardsSection } from './AwardsSection';
import { PublicationsSection } from './PublicationsSection';
import { BlogsSection } from './BlogsSection';
import { MediaSection } from './MediaSection';
import { NotesSection } from './NotesSection';
type Note = {
  id: string;
  title: string;
  content: React.ReactNode;
};

// Content
const NOTES: Note[] = [{
  id: 'about',
  title: 'About me',
  content: <AboutSection data-magicpath-id="0" data-magicpath-path="PersonalWebsite.tsx" />
}, {
  id: 'publications',
  title: 'Publications',
  content: <PublicationsSection data-magicpath-id="1" data-magicpath-path="PersonalWebsite.tsx" />
}, {
  id: 'awards',
  title: 'Awards',
  content: <AwardsSection data-magicpath-id="2" data-magicpath-path="PersonalWebsite.tsx" />
}, {
  id: 'blogs',
  title: 'Blogs',
  content: <BlogsSection data-magicpath-id="3" data-magicpath-path="PersonalWebsite.tsx" />
}, {
  id: 'media',
  title: 'Media',
  content: <MediaSection data-magicpath-id="4" data-magicpath-path="PersonalWebsite.tsx" />
}, {
  id: 'notes',
  title: 'Notes and projects',
  content: <NotesSection data-magicpath-id="5" data-magicpath-path="PersonalWebsite.tsx" />
}];

// @component: PersonalWebsite
export const PersonalWebsite = () => {
  const [activeNoteId, setActiveNoteId] = useState<string>('about');
  const activeNote = NOTES.find(n => n.id === activeNoteId) || NOTES[0];

  // Render About me with additional section links
  const renderContent = () => {
    if (activeNote.id === 'about') {
      return <>
          {activeNote.content}
          <div className="mt-12 pt-6 space-y-1" data-magicpath-id="6" data-magicpath-path="PersonalWebsite.tsx">
            {NOTES.filter(n => n.id !== 'about').map(note => <div key={note.id} data-magicpath-id="7" data-magicpath-path="PersonalWebsite.tsx">
                <button onClick={() => setActiveNoteId(note.id)} className="text-gray-500 hover:text-gray-900 transition-colors text-left text-sm" data-magicpath-id="8" data-magicpath-path="PersonalWebsite.tsx">
                  {note.title}
                </button>
              </div>)}
          </div>
        </>;
    }
    return activeNote.content;
  };

  // @return
  return <div className="flex h-screen w-full bg-white overflow-hidden font-sans text-gray-900" data-magicpath-id="9" data-magicpath-path="PersonalWebsite.tsx">
      {/* Sidebar */}
      <div className="w-40 border-r border-gray-100 flex flex-col" data-magicpath-id="10" data-magicpath-path="PersonalWebsite.tsx">
        <div className="px-4 py-5" data-magicpath-id="11" data-magicpath-path="PersonalWebsite.tsx">
          <h1 className="text-sm font-normal text-gray-900" data-magicpath-id="12" data-magicpath-path="PersonalWebsite.tsx">Jessica Mustali</h1>
        </div>

        <div className="flex-1 overflow-y-auto" data-magicpath-id="13" data-magicpath-path="PersonalWebsite.tsx">
          {NOTES.map(note => <button key={note.id} onClick={() => setActiveNoteId(note.id)} className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 transition-colors ${activeNoteId === note.id ? 'text-gray-900' : 'text-gray-400'}`} data-magicpath-id="14" data-magicpath-path="PersonalWebsite.tsx">
              {note.title}
            </button>)}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white h-full overflow-hidden" data-magicpath-id="15" data-magicpath-path="PersonalWebsite.tsx">
        <AnimatePresence mode="wait" data-magicpath-id="16" data-magicpath-path="PersonalWebsite.tsx">
          <motion.div key={activeNote.id} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.12
        }} className="flex-1 overflow-y-auto" data-magicpath-id="17" data-magicpath-path="PersonalWebsite.tsx">
            <div className="max-w-xl mx-auto px-6 py-8" data-magicpath-id="18" data-magicpath-path="PersonalWebsite.tsx">
              <div className="flex items-center justify-between mb-6" data-magicpath-id="19" data-magicpath-path="PersonalWebsite.tsx">
                <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wide" data-magicpath-id="20" data-magicpath-path="PersonalWebsite.tsx">
                  {activeNote.title}
                </h2>
                {activeNote.id === 'about' && <div className="flex items-center gap-4 text-xs" data-magicpath-id="21" data-magicpath-path="PersonalWebsite.tsx">
                    <a href="https://www.linkedin.com/in/jessica-mustali/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 underline transition-colors" data-magicpath-id="22" data-magicpath-path="PersonalWebsite.tsx">
                      LinkedIn
                    </a>
                    <a href="https://x.com/JessicaMustali" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 underline transition-colors" data-magicpath-id="23" data-magicpath-path="PersonalWebsite.tsx">
                      X
                    </a>
                  </div>}
                {activeNote.id === 'publications' && <div className="text-xs" data-magicpath-id="24" data-magicpath-path="PersonalWebsite.tsx">
                    <a href="https://scholar.google.com/citations?user=g5BOUx0AAAAJ&hl=it" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 underline transition-colors" data-magicpath-id="25" data-magicpath-path="PersonalWebsite.tsx">
                      Google Scholar
                    </a>
                  </div>}
              </div>
              <div className="text-gray-700 leading-relaxed text-sm" data-magicpath-id="26" data-magicpath-path="PersonalWebsite.tsx">
                {renderContent()}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>;
};