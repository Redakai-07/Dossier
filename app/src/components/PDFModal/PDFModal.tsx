import React, { useEffect } from 'react';

interface Certificate {
  id: string;
  title: string;
  platform: string;
  year: string;
  filename: string;
  domain: 'AI' | 'Web';
}

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate;
  onDownload: () => void;
}

const PDFModal: React.FC<PDFModalProps> = ({ isOpen, onClose, certificate, onDownload }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfUrl = certificate.filename;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-secondary)' }}>
          <div>
            <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>{certificate.title}</h2>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{certificate.platform} • {certificate.year}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onDownload}
              className="px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
              style={{ background: 'var(--accent-primary)', color: 'white' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 h-full">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            className="w-full h-full border-0"
            title={certificate.title}
          />
        </div>
      </div>
    </div>
  );
};

export default PDFModal; 