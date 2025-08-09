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
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 3, // higher resolution export
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
        className="print-area bg-white text-gray-900 shadow-xl border border-gray-200 relative"
        style={{ width: '8.5in', height: '11in' }}
        ref={posterRef}
      >
        {/* Margin frame */}
        <div className="absolute inset-6 border-2 border-black/20" />

        {/* Header */}
        <header className="relative z-10 px-10 pt-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/assets/Logo.png"
              alt="Jameson & Company logo"
              className="h-12 w-12 rounded-full object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-xl font-extrabold tracking-wide text-gray-900">Jameson & Company</h1>
              <div className="h-0.5 w-16 bg-red-600 mt-1" />
              <p className="text-sm text-gray-600 mt-1">Dog Grooming</p>
            </div>
          </div>
          <div className="text-right text-xs text-gray-600">
            <p>Established 2020</p>
          </div>
        </header>

        {/* Body */}
        <div className="relative z-10 px-10 mt-10 grid grid-cols-[1fr_auto] gap-8 h-[calc(11in-6rem-6rem)]">
          {/* Left: Vertical callout */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <div className="w-1 h-24 bg-red-600" />
              <div className="tracking-widest text-gray-900 font-semibold rotate-180 [writing-mode:vertical-rl]">
                SCAN ME TO BOOK OR VIEW MENU
              </div>
            </div>
          </div>

          {/* Right: QR block */}
          <div className="flex items-center justify-center">
            <a
              href={bookingUrl}
              className="group block p-6 rounded-2xl border-4 border-black hover:shadow-lg transition-shadow"
            >
              <div className="bg-white p-4 rounded-xl border-2 border-red-600">
                <img
                  src={JCoAtxQR}
                  alt="QR code linking to Jameson & Company booking"
                  className="h-[5.5in] w-[5.5in] object-contain"
                />
              </div>
              <p className="mt-3 text-center font-semibold tracking-wide text-gray-600">
                Point your camera here
              </p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute left-0 right-0 bottom-0 px-10 pb-10">
          <div className="grid grid-cols-2 gap-6 text-sm border-t-2 border-red-600 pt-6">
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

