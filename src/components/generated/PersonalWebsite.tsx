import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutSection } from './AboutSection';
import { PublicationsSection } from './PublicationsSection';
import { NotesSection } from './NotesSection';
import { useIsMobile } from '../../hooks/use-mobile';
type Note = {
  id: string;
  title: string;
  content: React.ReactNode;
};

// Content
const NOTES: Note[] = [{
  id: 'about',
  title: 'About me',
  content: <AboutSection />
}, {
  id: 'publications & awards',
  title: 'Publications & Awards',
  content: <PublicationsSection />
}, {
  id: 'notes',
  title: 'Notes and projects',
  content: <NotesSection />
}];

// @component: PersonalWebsite
export const PersonalWebsite = () => {
  const [activeNoteId, setActiveNoteId] = useState<string>('about');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const activeNote = NOTES.find(n => n.id === activeNoteId) || NOTES[0];

  const handleNoteClick = (noteId: string) => {
    setActiveNoteId(noteId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Render About me with additional section links
  const renderContent = () => {
    if (activeNote.id === 'about') {
      return <>
          {activeNote.content}
          <div className="mt-12 pt-6 space-y-1">
            {NOTES.filter(n => n.id !== 'about').map(note => <div key={note.id}>
                <button onClick={() => handleNoteClick(note.id)} className="text-gray-500 hover:text-gray-900 transition-colors text-left text-sm">
                  {note.title}
                </button>
              </div>)}
          </div>
        </>;
    }
    return activeNote.content;
  };

  // @return
  return <div className="flex h-screen w-full bg-white overflow-hidden font-sans text-gray-900">
      <div className="flex h-full mx-auto relative max-w-[60rem]">
        {/* Mobile Overlay */}
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

      {/* Sidebar */}
        <div className={`${isMobile ? 'fixed left-0 top-0 h-full w-full z-50 transform transition-transform duration-300' : 'relative'} ${sidebarOpen ? 'translate-x-0' : isMobile ? '-translate-x-full' : ''} ${isMobile ? '' : 'w-40'} flex flex-col bg-white ${isMobile ? 'shadow-lg' : ''}`}>
          {isMobile && (
            <div className="px-4 pt-12 pb-5">
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          <div className={`px-4 ${isMobile ? 'pt-0' : 'pt-20'} pb-5`}>
          <h1 className="text-sm font-normal text-gray-900">Jessica Mustali</h1>
        </div>

          <div className="flex-1 overflow-y-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {NOTES.map(note => <button key={note.id} onClick={() => handleNoteClick(note.id)} className={`w-full text-left px-4 py-2 text-xs hover:text-gray-900 transition-colors ${activeNoteId === note.id ? 'text-gray-900' : 'text-gray-400'}`}>
              {note.title}
            </button>)}
        </div>
      </div>

      {/* Main Content */}
        <div className={`flex-1 flex flex-col bg-white h-full overflow-hidden ${isMobile ? 'ml-0 w-full' : 'ml-24'}`}>
        <AnimatePresence mode="wait">
          <motion.div key={activeNote.id} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.12
        }} className="flex-1 overflow-y-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className={`${isMobile ? 'w-full px-4 pt-12' : 'max-w-[40rem] pl-6 pr-6 pt-20'} pb-8`}>
              {/* Mobile: Menu icon and Jessica Mustali header */}
              {isMobile && (
                <div className="mb-6 flex items-center justify-between">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                    aria-label="Open menu"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <span className="text-sm font-normal text-gray-900">Jessica Mustali</span>
                </div>
              )}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {activeNote.id === 'publications & awards' ? 'Publications' : activeNote.title}
                </h2>
                {activeNote.id === 'about' && <div className="flex items-center gap-4 text-xs">
                    <a href="https://www.linkedin.com/in/jessica-mustali/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 underline transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://x.com/JessicaMustali" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 underline transition-colors">
                      X
                    </a>
                  </div>}
                {activeNote.id === 'publications & awards' && <div className="text-xs">
                    <a href="https://scholar.google.com/citations?user=g5BOUx0AAAAJ&hl=it" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 underline transition-colors">
                      Google Scholar
                    </a>
                  </div>}
              </div>
              <div className="text-gray-700 leading-relaxed text-sm">
                {renderContent()}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </div>;
};