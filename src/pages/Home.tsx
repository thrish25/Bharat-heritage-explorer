import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { HeritageGrid } from '../components/HeritageGrid';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { ViewerModal } from './ViewerModal';
import { ARViewerModal } from '../components/AR/ARViewerModal';
import { GalleryModal } from '../components/GalleryModal';
import { HeritageStoryModal } from '../components/HeritageStory/HeritageStoryModal';
import { Monument } from '../types';
import { MONUMENTS } from '../data/monuments';

export const Home: React.FC = () => {
  const [activeViewerMonument, setActiveViewerMonument] = useState<Monument | null>(null);
  const [activeCaveId, setActiveCaveId] = useState<'cave_10' | 'cave_16' | undefined>(undefined);
  const [openReconstructionInitial, setOpenReconstructionInitial] = useState(false);
  const [initialReconstructionType, setInitialReconstructionType] = useState<'vishwakarma' | 'kailasa' | undefined>(undefined);
  const [activeARMonument, setActiveARMonument] = useState<Monument | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [storyMonument, setStoryMonument] = useState<Monument>(MONUMENTS[0]);

  const handleOpenMonument = (
    monument: Monument,
    caveId?: 'cave_10' | 'cave_16',
    openReconstruction?: boolean,
    reconstructionType?: 'vishwakarma' | 'kailasa'
  ) => {
    setActiveCaveId(caveId);
    setOpenReconstructionInitial(openReconstruction === true);
    setInitialReconstructionType(reconstructionType);
    setActiveViewerMonument(monument);
  };

  const scrollToExplore = () => {
    const el = document.getElementById('explore-destinations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#151719] text-[#F3EBDD] font-body selection:bg-[#C6A15B]/30 selection:text-[#F3EBDD]">
      {/* 1. Master BHARAT ROYALE Navigation Header */}
      <Header
        onExploreClick={scrollToExplore}
        onAboutClick={scrollToAbout}
        onHomeClick={scrollToTop}
        onGalleryClick={() => setIsGalleryOpen(true)}
        onStoryClick={() => setIsStoryModalOpen(true)}
        onOpenMonument={(monumentId, caveId) => {
          const mon = MONUMENTS.find((m) => m.id === monumentId);
          if (mon) handleOpenMonument(mon, caveId);
        }}
      />

      <main className="flex-1">
        {/* 2. Elevated Cinematic Hero Section */}
        <Hero onExploreClick={scrollToExplore} />

        {/* 3. Curated Heritage Sanctuaries Grid */}
        <HeritageGrid
          onExploreMonument={(monument, caveId, openRecon, reconstructionType) => handleOpenMonument(monument, caveId, openRecon, reconstructionType)}
          onOpenARMonument={(monument) => setActiveARMonument(monument)}
        />

        {/* 4. Scholarly Digital Preservation Archive (About Section) */}
        <AboutSection onLearnMoreClick={scrollToExplore} />
      </main>

      {/* 5. Museum Heritage Footer */}
      <Footer
        onHomeClick={scrollToTop}
        onExploreClick={scrollToExplore}
        onAboutClick={scrollToAbout}
        onGalleryClick={() => setIsGalleryOpen(true)}
      />

      {/* 6. Dark Immersive 360° Virtual Exploration Interface Modal */}
      {activeViewerMonument && (
        <ViewerModal
          initialMonument={activeViewerMonument}
          initialCaveId={activeCaveId}
          initialOpenReconstruction={openReconstructionInitial}
          initialReconstructionType={initialReconstructionType}
          onClose={() => {
            setActiveViewerMonument(null);
            setActiveCaveId(undefined);
            setOpenReconstructionInitial(false);
            setInitialReconstructionType(undefined);
          }}
        />
      )}

      {/* 7. Interactive 3D & Augmented Reality Interface Modal */}
      {activeARMonument && (
        <ARViewerModal
          monument={activeARMonument}
          onClose={() => setActiveARMonument(null)}
          onOpenVirtualTour={(mon) => {
            setActiveARMonument(null);
            handleOpenMonument(mon);
          }}
          onOpenReconstruction={(mon, target) => {
            setActiveARMonument(null);
            handleOpenMonument(mon, undefined, true, target);
          }}
        />
      )}

      {/* 8. Archival Gallery Lightbox */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />

      {/* 9. HeritageStory AI Modal */}
      <HeritageStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        activeMonument={storyMonument}
        onSelectMonument={(mon) => setStoryMonument(mon)}
      />
    </div>
  );
};
