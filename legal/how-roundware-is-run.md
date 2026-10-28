# How Roundware Is Run

**Draft — not yet in effect.** Last updated: [DATE].

Roundware is a small operation. It's run by one person, with no outside funding, for community, art and education projects. This page says plainly what we do well, what we can't do (yet), and what you should know so you can decide for yourself whether Roundware fits your project.

## The short version

- **Good:**
  - Encrypted connections everywhere and scrambled passwords.
  - Limits on abuse.
  - No tracking, ads or data sales.
  - The code is open source, so anyone can check it.
- **Limited:**
  - One person runs it, and there's no 24/7 support or guaranteed uptime.
  - Uploaded files aren't backed up yet.
  - Everything is hosted in the USA.
  - Contributions' files are reachable by anyone with their link.
- **Never locked in:** you can export everything in open formats, and because Roundware is open source, you can run it yourself if roundware.app ever stops.
- **Your call:** if your project needs guarantees we can't give, such as a support contract, certifications or European hosting, Roundware may not be right for it yet. Tell us; we'd rather say so up front.

---

## What we do

- **Encrypted connections.** Every page, the admin, the API and file downloads use HTTPS. The database only accepts encrypted connections from our own server.
- **Passwords** are stored only as argon2 hashes, a scrambled form that can't be turned back into the password.
- **Sign-ins** expire after 8 hours in the admin. Password-reset links last 1 hour, and invitations 7 days.
- **Limits on abuse:** caps on how fast anyone can try to sign in, sign up, reset passwords or send contributions. These apply per account, per participant and per IP address.
- **Server access** is limited to one person, with a security key rather than a password.
- **Error reports** remove names, emails, IP addresses, cookies and form contents before they leave the browser or server.
- **Photos** are stored without their hidden location and camera data.
- **No visitor IP addresses** are kept in our logs.
- **Open source:** the code that runs Roundware is public, so what it does with data can be checked by anyone.

## What we can't do yet, and what it means for you

**One person.** Roundware isn't a company with a support team. Problems get fixed, but not around the clock, and nobody is on call at night or on holidays. *What it means:* don't rely on Roundware for something where an hour's outage would be serious.

**No guaranteed uptime.** We don't offer a service level agreement (SLA) or credits for downtime. Our hosting is reliable, but there's no promise.

**Backups.** Our database provider (DigitalOcean) backs up the database daily and keeps each backup for 7 days. **Uploaded files (audio, photos) aren't backed up yet.** If the file storage itself lost data, those files couldn't be restored. Ideally there would be a second copy elsewhere; it's planned, but not done. *What it means:* keep your own copy of contributions that matter to you. You can download them from the admin.

**Files are reachable by link.** Contribution files are stored at web addresses that anyone with the link can open, without signing in. That's what lets them play on a project's map, a share page or a podcast's website. Each address includes a long random part, so it can't be guessed or worked out from another one, and the list of files isn't public. *What it means:* anyone who's been given a file's link can open it, until the contribution is deleted along with its files. (Files uploaded before [DEPLOY DATE] have older, more predictable names.)

**Deleting a contribution keeps its file by default.** When a team member deletes a contribution, the file is kept unless they choose "delete for good". This protects against mistakes; recordings can't be re-made. If you want a file gone, choose "delete for good", or ask us.

**Hosted in the USA.** Everything is stored in New York. European and UK organizations can use Roundware under the transfer protections in our [Data Processing Agreement](dpa.md), but if you need your data to stay in Europe, we can't offer that yet.

**No certifications.** Roundware has no SOC 2, ISO 27001 or similar certification; they cost more than a project this size can carry. We're glad to answer security questionnaires honestly, and the code is open for review.

**Google Maps sees visitors.** Maps are central to most projects, and they come from Google. When a map loads, Google sees the visitor's IP address. There's no practical alternative right now that's as good, but we say so here and in the [Privacy Policy](privacy.md).

**Embedded recorders and browser privacy.** Inside another website, some browsers (Safari especially) keep Roundware's storage apart or block it. Recording still works; the project just sees each visit as a new participant.

**Participants' agreement isn't recorded yet.** Participants agree to a project's terms before they contribute, but Roundware doesn't yet store a record of when they agreed, or to which version. [Planned.]

## If roundware.app stops

A one-person service could end one day, through illness, money, or something else. Ideally there'd be a company behind it with a succession plan; there isn't. This is what we've done instead:

- **Everything can be exported**, in formats any software can read: spreadsheets (CSV) and JSON for contributions and settings, and the original audio files and photos. An export can be imported into any Roundware server.
- **The software is open source.** Anyone can run their own Roundware server and load an export into it. [Planned: the current version is being prepared for public release, with instructions.]
- **At least 90 days' notice** before roundware.app shuts down, to export.

## If something goes wrong

If there's a security problem that affects your data, we'll tell affected organizations as soon as we know what happened, within 72 hours at most, along with what we're doing about it. Organizations then decide how to tell their participants, and we'll help.

## Questions

Write to [privacy@roundware.app](mailto:privacy@roundware.app). If you're weighing Roundware for a project and want to know whether it fits, ask. We'll give you a straight answer.
