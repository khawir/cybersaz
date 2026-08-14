Build a production-ready corporate website for a **cybersecurity firm** using the following architecture.

## 1. Core Stack

Use:

- **Next.js**, current stable version, App Router
- **TypeScript**
- **Tailwind CSS**
- **MariaDB**
- **mysql2** for database access
- **Nodemailer** for email
- **Namecheap Stellar Plus Shared Hosting**
- Namecheap **Node.js Application** runtime
- Namecheap **cPanel email/SMTP**

Do not use:

- WordPress
- Laravel/PHP for the application
- Firebase
- Supabase
- external CMS
- external database
- external backend services
- Vercel-specific functionality
- Docker
- Redis
- persistent queue workers
- unnecessary third-party services

The entire application must be deployable on **Namecheap Stellar Plus shared hosting**.

---

# 2. Project Context

The website content is already available.

The following are also already defined:

- brand/theme
- logo
- website content
- company identity

Do not invent replacement branding, copy, services, company claims, certifications, statistics, client names, testimonials, or security credentials.

Use the supplied content, logo, brand assets, and theme as the source of truth.

If content for a section is missing, use a clearly identifiable placeholder rather than inventing factual company information.

---

# 3. Overall Architecture

Build a single full-stack Next.js application:

```text
Next.js Application
│
├── Public Website
│
├── Admin Panel
│
├── Content Management
│
├── Contact Form
│
├── Email Sending
│
└── MariaDB
```

Do not create a separate frontend and backend application.

Use:

- Server Components by default
- Client Components only where browser-side interactivity is necessary
- Server Actions for admin/content operations where appropriate
- Route Handlers for endpoints such as contact form submission where appropriate

Avoid unnecessary REST APIs between parts of the same application.

---

# 4. Public Website

Create a polished, modern, premium cybersecurity-company website using the supplied theme and branding.

Use the supplied content to construct the required pages.

The architecture should readily support pages such as:

```text
/
├── about
├── services
│   └── [slug]
├── industries
│   └── [slug]
├── case-studies
│   └── [slug]
├── insights
│   └── [slug]
├── careers
└── contact
```

Only create sections and pages supported by the supplied content.

The website must be:

- responsive
- mobile-first
- accessible
- SEO-friendly
- fast
- professional
- visually consistent
- suitable for a cybersecurity company

Avoid excessive animation or stereotypical "hacker" effects unless specifically required by the supplied theme.

The design should communicate:

- trust
- competence
- technical sophistication
- security
- professionalism

---

# 5. Content Management

The website content must be editable through an internal administration interface.

Create:

```text
/admin
```

The administration system should support the content types actually required by the supplied website content.

Likely modules include:

```text
Dashboard

Content
├── Pages
├── Services
├── Industries
├── Case Studies
├── Insights
├── Careers
└── Team

Website
├── Navigation
├── Footer
├── SEO
└── Site Settings

Enquiries
└── Contact Enquiries

Administration
└── Users
```

Do not overbuild the CMS. Only implement modules that the website actually requires.

---

# 6. Editing Experience

Content administrators must be able to:

- create content
- edit content
- save content
- publish/unpublish content
- change display order where relevant
- edit SEO metadata
- upload/select images where required

Prefer structured fields over unrestricted page builders.

For example, a Service should have fields such as:

```text
Title
Slug
Short Description
Main Content
Hero Image
Icon/Image if applicable
Display Order
Published Status
Meta Title
Meta Description
```

The admin system should protect the website's visual design.

Content editors should be able to modify content without being able to accidentally destroy the overall theme, typography, spacing, or layout.

---

# 7. Database

Use the MariaDB database available through Namecheap cPanel.

Use `mysql2`.

Create a clean relational schema based on the actual website content.

Potential tables include:

```text
users
pages
services
industries
case_studies
insights
careers
team_members
contact_enquiries
site_settings
```

Do not create tables that are not required.

Use database migrations or an equivalent reproducible schema-management mechanism.

Use parameterized queries everywhere.

Never construct SQL from unsanitized user input.

---

# 8. Admin Authentication

The `/admin` area must not be publicly accessible without authentication.

Implement secure authentication suitable for a small corporate CMS.

Requirements:

- passwords stored using a strong password-hashing algorithm
- secure server-side authentication
- HttpOnly cookies
- Secure cookies in production
- SameSite cookie policy
- session expiration
- rate limiting on login attempts
- authorization enforced on the server
- logout functionality

Never rely only on client-side route protection.

All admin permissions must be validated server-side.

Structure the authentication implementation so that MFA can be added without redesigning the system.

---

# 9. Contact Form and Email

Implement the Contact page inside Next.js.

Flow:

```text
Visitor
   ↓
Contact Form
   ↓
Server-side validation
   ↓
Store enquiry in MariaDB
   ↓
Send notification email
   ↓
Namecheap SMTP
```

Use **Nodemailer** with the Namecheap/cPanel SMTP account.

SMTP credentials must come from environment variables.

Example environment variables:

```text
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
CONTACT_RECIPIENT=
```

Never place SMTP credentials in source code.

Use the authenticated company's mailbox as the sender.

Example:

```text
From:
website@company-domain.com

To:
CONTACT_RECIPIENT

Reply-To:
visitor's supplied email address
```

Do not use the visitor's email address as the SMTP `From` address.

This is important for SPF, DKIM, DMARC, and deliverability.

---

# 10. Contact Form Security

Implement at minimum:

- server-side schema validation
- field length restrictions
- email-address validation
- input normalization
- honeypot spam field
- rate limiting
- protection against header injection
- appropriate output escaping
- rejection of malformed requests

Do not trust client-side validation.

If additional CAPTCHA functionality is required later, structure the form so that it can be introduced without substantial redesign.

When an enquiry is successfully submitted:

1. save it to MariaDB first
2. attempt to send the notification email
3. retain the enquiry even if SMTP delivery fails

The admin should therefore have:

```text
/admin/enquiries
```

where submitted enquiries can be viewed.

---

# 11. Security Requirements

Because this is a cybersecurity firm's website, apply strong security defaults throughout the implementation.

### Application

- no secrets in Git
- `.env` excluded from source control
- `NODE_ENV=production`
- disable verbose production errors
- do not expose stack traces
- validate all untrusted input server-side
- escape output
- parameterize all SQL
- perform authorization server-side
- prevent unrestricted file uploads
- validate uploaded file type, size, extension, and MIME type
- generate safe filenames for uploaded files

### HTTP

Configure appropriate headers including:

```text
Content-Security-Policy
Strict-Transport-Security
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Avoid unsafe inline scripts where practical.

### Sessions

Use:

```text
HttpOnly
Secure
SameSite
```

cookies appropriately.

### Admin

Apply rate limiting to:

```text
/admin/login
```

Do not expose unnecessary diagnostic or development routes.

---

# 12. SEO

Use Next.js metadata capabilities properly.

Support per-page:

- title
- meta description
- canonical URL
- Open Graph metadata
- social sharing image where available

Generate:

```text
robots.txt
sitemap.xml
```

Use appropriate structured data where it genuinely applies.

Do not fabricate structured-data claims, reviews, ratings, certifications, addresses, or organisational information.

Public content pages should render meaningful HTML on the server and must not depend on client-side JavaScript for basic SEO content.

---

# 13. Performance

Optimize for Namecheap shared hosting.

Use Server Components wherever possible.

Minimize JavaScript sent to the browser.

Do not mark components with `"use client"` unless genuinely necessary.

Optimize images using an approach compatible with self-hosted Next.js on Namecheap.

Avoid:

- huge JavaScript bundles
- unnecessary animation libraries
- excessive dependencies
- polling
- WebSockets
- server-intensive real-time features
- long-running background processes

The site is primarily a corporate content website, not a highly interactive SaaS application.

---

# 14. Namecheap Deployment Constraints

The finished application must run on **Namecheap Stellar Plus Shared Hosting** through cPanel's **Setup Node.js App** functionality.

Do not assume:

- Docker
- root access
- systemd
- Supervisor
- Redis
- persistent custom daemons
- VPS-level process control

Do not architect functionality around persistent background workers.

The application should operate as a normal Next.js Node application supported by Namecheap.

Prepare production deployment accordingly.

---

# 15. Production Build

The normal development workflow should be:

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run start
```

Ensure the project can be deployed to Namecheap without requiring development tooling to remain running.

Document any required Namecheap startup-file configuration if the deployment requires a custom `server.js`.

Do not introduce a custom Next.js server unless it is actually required by the Namecheap runtime.

---

# 16. Environment Configuration

Provide:

```text
.env.example
```

containing variable names but no real credentials.

Likely variables:

```text
NODE_ENV=
APP_URL=

DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
CONTACT_RECIPIENT=

SESSION_SECRET=
```

Validate required environment variables at application startup.

---

# 17. Code Quality

Use:

- strict TypeScript
- reusable components
- sensible folder structure
- clear naming
- minimal dependencies
- server/client separation
- centralized database utilities
- centralized validation schemas
- centralized authentication logic
- reusable UI components

Avoid abstractions that provide no practical benefit.

Prefer simple, readable implementation over unnecessary architectural patterns.

---

# 18. Suggested Project Structure

Use a structure broadly along these lines, adapting it where appropriate:

```text
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── services/
│   │   ├── case-studies/
│   │   ├── insights/
│   │   └── contact/
│   │
│   ├── admin/
│   │   ├── login/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── insights/
│   │   ├── enquiries/
│   │   └── settings/
│   │
│   └── api/
│       └── contact/
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── admin/
│
├── lib/
│   ├── auth/
│   ├── db/
│   ├── email/
│   ├── security/
│   └── validation/
│
├── types/
└── styles/

public/
├── images/
├── logo/
└── icons/
```

Do not follow this structure mechanically if the actual project has a cleaner organization.

---

# 19. Supplied Assets and Content

Before implementing individual pages:

1. inspect all supplied content
2. inspect the supplied logo
3. inspect the theme/design references
4. identify the actual page hierarchy
5. identify reusable design components
6. identify editable content types
7. map those content types to the database
8. implement the shared design system
9. build the public website
10. implement the admin editing system
11. implement contact/email functionality
12. harden and test the application
13. prepare it for Namecheap deployment

Do not redesign the supplied brand unless explicitly instructed.

---

# 20. Content Migration

Since the website content is already prepared, create a sensible method for loading the initial content into MariaDB.

Prefer one of:

- database seed script
- migration/seed combination
- structured import script

Do not require the initial website content to be entered manually through `/admin` unless there is no practical alternative.

After import, all appropriate content should be editable through the admin interface.

---

# 21. Testing

Before considering the project complete, verify:

### Public website

- all links work
- responsive at common viewport widths
- navigation works
- mobile menu works
- images load
- 404 page works
- metadata is correct
- sitemap works
- robots.txt works

### Admin

- unauthorized users cannot access admin pages
- login works
- logout works
- content can be created
- content can be edited
- publishing/unpublishing works
- image upload restrictions work
- server-side authorization cannot be bypassed

### Contact form

Test:

- valid submission
- invalid email
- empty fields
- oversized fields
- spam honeypot
- repeated submissions/rate limiting
- SMTP success
- SMTP failure
- enquiry remains stored when email delivery fails

### Security

Check:

- no secrets are exposed
- no stack traces in production
- SQL injection attempts fail safely
- stored/displayed content is handled safely
- admin endpoints enforce authentication
- headers are present
- production cookies have appropriate security attributes

---

# 22. Design Principle

Keep the solution deliberately simple.

The target architecture is:

```text
                 Next.js
                    │
        ┌───────────┼───────────┐
        │           │           │
     Website      Admin       Contact
        │           │           │
        └───────────┼───────────┘
                    │
                 MariaDB
                    │
              Namecheap SMTP
                    │
                    ▼
           Namecheap Stellar Plus
```

Do not introduce additional platforms or architectural layers unless they solve a demonstrated requirement.

The objective is a **fast, secure, professional, maintainable cybersecurity-company website that one developer can understand and operate easily on Namecheap Stellar Plus**.