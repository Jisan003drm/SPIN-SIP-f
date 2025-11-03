# Spin & Sip - Example upload receiver

This is a minimal Node/Express example that accepts multipart/form-data uploads from the contact form.

Install and run:

```powershell
cd "c:\html file\web development\server"
npm install
npm start
```

It serves the static site (parent directory) and provides an endpoint `/upload` that accepts the `file` field and responds with JSON.

Usage notes:
- To test with the included local server set the contact form's `data-endpoint` to `/upload` (this repo already sets that). 
- For production you should replace the endpoint with a secure API (Formspree, Netlify, or your own server) and add virus scanning, auth, and storage (S3, R2, etc.).

Run this server for local testing only; do not use it in production without hardening.
