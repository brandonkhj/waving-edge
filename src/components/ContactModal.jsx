import { useCallback, useEffect, useRef, useState } from 'react';
import WaveLogo from './WaveLogo.jsx';
import { useContactModal } from '../ContactModalContext.jsx';

const EMAIL = 'hello@wavingedge.com';
const TOAST_MS = 2200;

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const dialogRef = useRef(null);
  const emailRef = useRef(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    else if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // The dialog closes itself on Esc, so mirror that back into React state.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    dialog.addEventListener('close', close);
    return () => dialog.removeEventListener('close', close);
  }, [close]);

  useEffect(() => {
    if (!isOpen) {
      setToast(null);
      return undefined;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), TOAST_MS);
    return () => clearTimeout(timer);
  }, [toast]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast('Copied to clipboard');
    } catch {
      // Clipboard access can be refused (permissions, insecure context, older
      // browsers) — select the address so the keyboard shortcut still works.
      const node = emailRef.current;
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setToast('Press ⌘C / Ctrl+C to copy');
    }
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="contact-modal"
      aria-labelledby="contact-modal-title"
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
    >
      <div className="contact-modal-inner">
        <button
          type="button"
          className="contact-modal-close"
          onClick={close}
          aria-label="Close"
        >
          &times;
        </button>

        <WaveLogo />

        <h2 id="contact-modal-title">Let&apos;s talk about your project</h2>
        <p className="contact-modal-copy">
          Email us what you&apos;re trying to build, improve or automate. We&apos;ll come
          back to you within a day.
        </p>

        <div className="email-row">
          <span className="email-address" ref={emailRef}>
            {EMAIL}
          </span>
          <button type="button" className="copy-btn" onClick={copyEmail}>
            Copy
          </button>
        </div>

        <a className="mail-app-link" href={`mailto:${EMAIL}`}>
          Open in mail app →
        </a>

        <div className="contact-toast-slot" role="status" aria-live="polite">
          {toast ? <span className="contact-toast">{toast}</span> : null}
        </div>
      </div>
    </dialog>
  );
}
