// Shared, render-free scroll + pointer state.
// Written by SmoothScroll, read inside useFrame so the 3D scene can follow the
// page without triggering a single React re-render.
export const scrollState = {
  progress: 0, // 0 -> 1 across the whole document
  velocity: 0,
  pointerX: 0, // -1 -> 1
  pointerY: 0,
};

export const SECTIONS = ['hero', 'services', 'about', 'contact'];
