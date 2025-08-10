import React, { useRef } from 'react';
import { toPng } from 'html-to-image';

import JCoAtxQR from '../../assets/JCoAtxQR.png';

const bookingUrl = 'https://booking.moego.pet/ol/book?name=jamesonandcompanydoggrooming';

export default function QRPoster() {
  const posterRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPng = async () => {
    const node = posterRef.current;
    if (!node) return;
    try {
      const exportWidth = 2550; // 8.5in * 300dpi
      const exportHeight = 3300; // 11in * 300dpi
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 1,
        width: exportWidth,
        height: exportHeight,
        style: { width: `${exportWidth}px`, height: `${exportHeight}px` },
        backgroundColor: '#ffffff',
      });
      const link = document.createElement('a');
      link.download = 'jameson-qr-poster.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export PNG', err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      {/* Controls (hidden on print) */}
      <div className="no-print mb-4 flex items-center gap-3">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-500"
        >
          Open Booking Link
        </a>
        <button
          type="button"
          onClick={handlePrint}
          className="px-4 py-2 rounded-md bg-black text-white font-semibold hover:bg-gray-900"
        >
          Save as PDF
        </button>
        <button
          type="button"
          onClick={handleDownloadPng}
          className="px-4 py-2 rounded-md bg-gray-700 text-white font-semibold hover:bg-gray-800"
        >
          Download PNG
        </button>
      </div>

      {/* Printable Area */}
      <section
        className="print-area relative w-full max-w-[8.5in] aspect-[8.5/11] bg-white text-gray-900 shadow-xl border border-gray-200 grid grid-rows-[auto,1fr,auto] overflow-hidden"
        ref={posterRef}
      >
        {/* Margin frame */}
        <div className="absolute inset-3 sm:inset-6 border-2 border-black/20" />

        {/* Header */}
        <header className="relative z-10 px-4 sm:px-10 pt-6 sm:pt-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/assets/Logo.png"
              alt="Jameson & Company logo"
              className="h-12 w-12 rounded-full object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-lg sm:text-xl font-extrabold tracking-wide text-gray-900">Jameson & Company</h1>
              <div className="h-0.5 w-16 bg-red-600 mt-1" />
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Dog Grooming</p>
            </div>
          </div>
          <div className="text-right text-[10px] sm:text-xs text-gray-600">
            <p>Established 2020</p>
          </div>
        </header>

        {/* Body */}
        <div className="relative z-10 row-start-2 px-4 sm:px-10 mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-8 h-full place-items-center">
          {/* Left: Vertical callout */}
          <div className="hidden sm:flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <div className="w-1 h-16 sm:h-24 bg-red-600" />
              <div className="tracking-widest text-gray-900 font-semibold rotate-180 [writing-mode:vertical-rl] text-[10px] sm:text-sm">
                SCAN ME TO BOOK OR VIEW MENU
              </div>
            </div>
          </div>

          {/* Right: QR block */}
          <div className="flex items-center justify-center">
            <a
              href={bookingUrl}
              className="group block p-2 sm:p-6 rounded-2xl border-2 sm:border-4 border-black hover:shadow-lg transition-shadow w-[70%] sm:w-auto max-w-full sm:max-w-[6.5in] mx-auto mb-4"
            >
              <div className="bg-white p-2 sm:p-4 rounded-xl border-[1.5px] sm:border-2 border-red-600">
                <img
                  src={JCoAtxQR}
                  alt="QR code linking to Jameson & Company booking"
                  className="w-full h-auto object-contain max-h-[50vh] sm:max-h-none"
                />
              </div>
              <p className="mt-2 sm:mt-3 text-center font-semibold tracking-wide text-gray-600 text-xs sm:text-sm">
                Point your camera here
              </p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 row-start-3 px-4 sm:px-10 pb-4 sm:pb-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm border-t-2 border-red-600 pt-4 sm:pt-6">
            <div>
              <p className="font-semibold text-gray-900">Contact</p>
              <p>(737) 263-7002</p>
              <p>info@jcoatx.com</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">Online</p>
              <p>jcoatx.com</p>
              {/* <p className="text-gray-600">Book: booking.moego.pet</p> */}
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

