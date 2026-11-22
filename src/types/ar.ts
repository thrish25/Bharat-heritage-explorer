/**
 * AR Monument Configuration Types
 * Royal Indian Heritage Platform
 */

export interface ARMonumentConfig {
  id: string;
  normalizedId: 'hampi' | 'taj-mahal' | 'konark' | 'ellora';
  audioPrefix: 'hampi' | 'taj' | 'konark' | 'ellora';
  subtitleKey: 'hampi' | 'taj' | 'konark' | 'ellora';
  modelSrc: string;
  posterSrc?: string;
  name: {
    en: string;
    kn: string;
    hi: string;
  };
  subtitle: {
    en: string;
    kn: string;
    hi: string;
  };
  location: {
    en: string;
    kn: string;
    hi: string;
  };
  era: {
    en: string;
    kn: string;
    hi: string;
  };
  cameraOrbit: string;
  minCameraOrbit: string;
  maxCameraOrbit: string;
  fieldOfView: string;
  altText: string;
  dimensionsNote?: string;
  exposure?: string;
  toneMapping?: string;
  environmentImage?: string;
  shadowIntensity?: string;
  shadowSoftness?: string;
  arScale?: 'auto' | 'fixed';
  suggestedQuestions: {
    en: string;
    kn: string;
    hi: string;
  }[];
}
