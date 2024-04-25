import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <div className='flex flex-col lg:flex-row w-full h-lvh lg:items-center'>
      <div className='absolute z-1 flex items-centerjustify-items-center text-gray-50 w-144 h-44 text-4xl lg:text-7xl p-12 rounded-sm pointer-events-none'>
        <span> Hello there 👋 is </span>
      </div>
      <Suspense fallback={<div className='absolute flex w-full items-center place-content-center text-gray-50 text-7xl'>...</div>}>
        <Spline scene="https://prod.spline.design/H5MjA0Gq5MXYlhZw/scene.splinecode" />
      </Suspense>
    </div>
  );
}
