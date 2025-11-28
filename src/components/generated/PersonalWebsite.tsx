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
  id: 'awards',
  title: 'Awards',
  content: <AwardsSection data-magicpath-id="1" data-magicpath-path="PersonalWebsite.tsx" />
}, {
  id: 'publications',
  title: 'Publications',
  content: <PublicationsSection data-magicpath-id="2" data-magicpath-path="PersonalWebsite.tsx" />
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
          <div className="mt-8 pt-8 border-t border-gray-200 space-y-2" data-magicpath-id="6" data-magicpath-path="PersonalWebsite.tsx">
            {NOTES.filter(n => n.id !== 'about').map(note => <div key={note.id} data-magicpath-id="7" data-magicpath-path="PersonalWebsite.tsx">
                <button onClick={() => setActiveNoteId(note.id)} className="text-gray-800 underline hover:text-gray-600 transition-colors text-left" data-magicpath-id="8" data-magicpath-path="PersonalWebsite.tsx">
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
      <div className="w-48 border-r border-gray-200 flex flex-col" data-magicpath-id="10" data-magicpath-path="PersonalWebsite.tsx">
        <div className="p-4 border-b border-gray-200" data-magicpath-id="11" data-magicpath-path="PersonalWebsite.tsx">
          <h1 className="text-lg font-semibold" data-magicpath-id="12" data-magicpath-path="PersonalWebsite.tsx">Jessica Mustali</h1>
        </div>

        <div className="flex-1 overflow-y-auto" data-magicpath-id="13" data-magicpath-path="PersonalWebsite.tsx">
          {NOTES.map(note => <button key={note.id} onClick={() => setActiveNoteId(note.id)} className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 transition-colors ${activeNoteId === note.id ? 'bg-gray-50' : ''}`} data-magicpath-id="14" data-magicpath-path="PersonalWebsite.tsx">
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
          duration: 0.15
        }} className="flex-1 overflow-y-auto" data-magicpath-id="17" data-magicpath-path="PersonalWebsite.tsx">
            <div className="max-w-2xl mx-auto px-8 py-12" data-magicpath-id="18" data-magicpath-path="PersonalWebsite.tsx">
              <h2 className="text-2xl font-semibold mb-6" style={{
              fontWeight: "700",
              fontSize: "16px"
            }} data-magicpath-id="19" data-magicpath-path="PersonalWebsite.tsx">
                {activeNote.title}
              </h2>
              <div className="text-gray-800 leading-relaxed" data-magicpath-id="20" data-magicpath-path="PersonalWebsite.tsx">{renderContent()}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>;
};