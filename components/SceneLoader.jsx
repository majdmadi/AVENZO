'use client';

import dynamic from 'next/dynamic';

// WebGL never renders on the server. Kept in its own client component so the
// page above it can stay a server component and read the dictionary directly.
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function SceneLoader() {
  return <Scene />;
}
