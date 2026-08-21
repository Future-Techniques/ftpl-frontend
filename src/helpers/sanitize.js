import DOMPurify from 'dompurify';

/**
 * Sanitizes an untrusted HTML string to prevent XSS vulnerabilities.
 * Allows standard HTML tags and attributes while stripping scripts, dangerous handlers (onload/onerror), and javascript: URIs.
 * 
 * @param {string} html - Raw HTML content
 * @returns {string} Sanitized HTML safe for dangerouslySetInnerHTML
 */
export function sanitizeHtml(html) {
    if (!html) return '';
    return DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true }
    });
}

export default sanitizeHtml;
