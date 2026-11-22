/**
 * Type declarations for <model-viewer> Custom Element in React TypeScript
 */

import React from 'react';

export interface ModelViewerElement extends HTMLElement {
  loaded: boolean;
  canActivateAR: boolean;
  autoRotate: boolean;
  cameraOrbit: string;
  minCameraOrbit: string;
  maxCameraOrbit: string;
  fieldOfView: string;
  src: string | null;
  alt: string | null;
  activateAR: () => void;
  resetTurntableRotation?: () => void;
  jumpCameraToGoal?: () => void;
  dismissPoster?: () => void;
}

export interface ModelViewerJSXProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
  poster?: string;
  loading?: 'auto' | 'lazy' | 'eager';
  reveal?: 'auto' | 'interaction' | 'manual';
  ar?: boolean;
  'ar-modes'?: string;
  'ar-scale'?: 'auto' | 'fixed';
  'ar-placement'?: 'floor' | 'wall';
  'camera-controls'?: boolean;
  'touch-action'?: string;
  'auto-rotate'?: boolean;
  'auto-rotate-delay'?: number | string;
  'rotation-per-second'?: string;
  'camera-orbit'?: string;
  'min-camera-orbit'?: string;
  'max-camera-orbit'?: string;
  'field-of-view'?: string;
  'min-field-of-view'?: string;
  'max-field-of-view'?: string;
  'shadow-intensity'?: number | string;
  'shadow-softness'?: number | string;
  exposure?: number | string;
  'environment-image'?: string;
  'tone-mapping'?: string;
  'interaction-prompt'?: 'auto' | 'when-focused' | 'none';
  ref?: React.Ref<any>;
  slot?: string;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSXProps;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSXProps;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'model-viewer': ModelViewerJSXProps;
      }
    }
  }
}
