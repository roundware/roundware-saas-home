# Roundware Privacy Policy

**Draft — not yet in effect.** Last updated: [DATE]. Earlier versions and every change: [GitHub link].

## The short version

- Roundware is run by Halsey Solutions, LLC, a small company in Massachusetts, USA.
- We don't sell your data, show ads, or use your recordings to train AI. We don't do anything with what you send except run Roundware.
- We don't own what you upload. Recordings belong to the people who made them, under the terms of the project they contributed to.
- **If you contributed to a project**, the organization running that project decides what happens to your contribution. We store it and play it for them. Ask them, or us, if you want something changed or removed.
- **If you run a project** (you have a Roundware account), we're responsible for your account details.
- Contributions are usually public: anyone visiting the project can hear them and see where on the map they were made. Your name and email, if you give them, are seen only by the project's team.
- We use a few outside services to run Roundware (hosting, maps, email, error reports). They're listed below.
- Roundware itself doesn't track you. A project can add Google Analytics; if it does, we ask you first.
- Everything is stored in the USA.
- Write to [privacy@roundware.app](mailto:privacy@roundware.app) with any question or request.

The rest of this page gives the detail.

---

## 1. Who we are

Roundware is a platform for participatory audio projects: people record sounds, stories and comments, and others listen to them, often on a map. Roundware is run by **Halsey Solutions, LLC**, a company in Massachusetts, USA ("we"). You can reach us at [privacy@roundware.app](mailto:privacy@roundware.app).

The Roundware software is open source. You can read exactly what it does with data at [github.com/roundware](https://github.com/roundware).

## 2. Two kinds of people, two kinds of responsibility

**Organizations and their team members.** Museums, artists, schools, podcasts and others create projects on Roundware. Their team members have accounts and use the Roundware admin. For account details, we are responsible for how they're used (in European law, the "controller").

**Participants and listeners.** People who record for a project, or listen to one, use the project's site or a recorder embedded on the organization's own website. They don't need an account. For their data, the **organization running the project** is responsible and decides what happens to it. We store and process it on the organization's behalf and on their instructions (in European law, we are the "processor"). Our agreement with organizations ([Data Processing Agreement](dpa.md)) sets out what we may and may not do.

So if you contributed to a project, the organization is the first place to go with questions about your contribution. You're always welcome to write to us too, and we'll help or pass your request on.

## 3. What we collect

### From team members (account holders)

- Your email address, name, and password. We never store the password itself, only a scrambled version of it (an argon2 hash) that can't be turned back into the password.
- Which organizations and projects you belong to, and your role.
- A log of changes made in the admin (for example "Jane edited Project X"), so a team can see who did what. It shows your email address to your team.
- The email we send you: account emails (confirming your address, resetting your password, invitations) and the notifications you choose. They carry no tracking: we don't know whether you opened them or what you clicked.

### From participants and listeners

- **A random device ID** stored in a cookie on your device, so the project can tell your visits apart. It doesn't identify you by name.
- **What you send**: recordings, photos (with their hidden location and camera data removed before they're stored), text, and your answers to the project's questions.
- **Where**: the place you chose on the map, or your device's location if you allowed it. Many projects are about places, so this is usually part of the contribution.
- **Your name and email, only if you choose to give them.** Only the project's team sees them, and the team may get them in an email when you contribute. We keep the most recent ones you gave.
- **How you used the project**: when you visited, what you listened to and for how long, and, if the project uses your location while you listen, where you were while listening. Organizations use this to understand how their project is used.
- **A short description of your browser**, like "Safari on iPhone", to help with problems.

**What we don't collect:** we don't keep your IP address. Our server sees it briefly, as every website does, and uses it only to limit abuse (for example, too many sign-in attempts). That count is held in memory and forgotten within the hour. We don't log it, and we don't combine your data with anything from other sources.

## 4. What's public

Most projects are public, and that's the point: contributions are meant to be heard.

- Anyone who visits a project can hear its contributions, see their photos and text, and see where on the map they were made.
- Each contribution can have a share page with a link that can be passed around.
- The files themselves (audio and photos) are stored at web addresses that anyone with the link can open.
- Contributions an organization is holding back (for example, to review first) aren't shown to the public.
- **Your name and email are never public.**

## 5. How we use data

Only to:

- run Roundware and the projects on it;
- send the emails you asked for, or that an account needs;
- keep Roundware safe and working (limiting abuse, and finding and fixing errors);
- help you when you ask us to.

We **don't**:

- sell or rent data to anyone;
- show ads or build advertising profiles;
- use recordings, photos or text to train AI;
- look at a project's contributions, except when the organization asks us to help, or to keep Roundware safe or follow the law.

## 6. Outside services we use

We use a small number of companies to run Roundware. They handle data only to provide their service to us. The current list, with what each one sees, is on the [Service providers](subprocessors.md) page. In brief:

- **DigitalOcean** (USA): our servers, database and file storage.
- **Netlify** (USA): hosts the admin website.
- **Google Maps** (USA): the maps, and place search. Google sees your IP address and map activity when a map loads.
- **Resend** (USA): sends our emails.
- **Sentry** (USA): error reports, with personal details removed before they're sent.
- **Google Analytics**: only on projects that turn it on, and only after you say yes (see the next section).

## 7. Cookies and storage on your device

Roundware itself doesn't track you and uses no advertising cookies.

**On a project's site and the embedded recorder:**

| What | Why | How long |
|---|---|---|
| `deviceId` cookie | Your random device ID (section 3) | 1 year |
| `rw_participant_token` | Proves to our server that a contribution came from your device | Until you clear it |
| `rw-language` | The language you chose | Until you clear it |
| Tooltips seen | So hints aren't shown twice | Until you clear it |
| Listening history | Lets you find again what you heard; stays on your device | Until you clear it |

**In the admin:** your sign-in (it lasts 8 hours), which organization you're working in, and a few display preferences.

These are all needed for Roundware to work, or they remember your own choices, so we don't ask for consent for them. You can clear them at any time in your browser's settings.

**Google Analytics.** A project can choose to use Google Analytics to count its visitors. When it does, we ask you first and load it only if you say yes. An organization can instead tell us it handles consent itself (for example, through its own website's cookie notice). In that case asking you is the organization's responsibility. [Not built yet: see README.]

**In an embedded recorder,** your browser may keep Roundware's storage separate from the website around it, or block it. If it does, the project sees each visit as a new participant. Nothing else changes.

## 8. How long we keep data

- **Accounts:** until you or your organization delete them.
- **A project's contributions and activity:** for as long as the organization keeps the project. Organizations can delete contributions, activity and whole projects at any time.
- **Your name and email as a participant:** until you ask to have them removed, or the organization clears them.
- **When an organization closes its account:** we keep its data for 90 days, so it can be exported or the account reopened, and then delete it for good.
- **Backups:** our database provider keeps daily backups for 7 days, so deleted data is fully gone within 7 days of being deleted. (Uploaded files aren't backed up yet; see [How Roundware is run](how-roundware-is-run.md).)

## 9. Your choices and rights

Wherever you live, you can ask us to:

- tell you what data we have about you, and give you a copy;
- correct it;
- delete it;
- stop using it for a particular purpose.

**Participants can withdraw a contribution at any time.** Once withdrawn, it stops being used from then on. Anything already broadcast or published (for example, a comment aired on a podcast) can't be taken back.

**How to ask:** write to the organization running the project, or to us at [privacy@roundware.app](mailto:privacy@roundware.app). Because participants don't have accounts, we may need a detail from you to find your contributions (when and where you made them, or the email address you gave). If your request is about a project, we'll work with its organization, since they decide about their project. We'll answer within 30 days, and we never charge for this.

**In Europe and the UK,** these are your rights under the GDPR, and you can also complain to your local data protection authority. **In California and other US states with privacy laws,** you have similar rights. We don't sell or share personal data in the sense those laws mean, and we won't treat you differently for using your rights.

## 10. Children

Roundware isn't aimed at children. Some organizations, such as schools and museums, run projects with young people. When they do, they're responsible for getting permission from a parent or the school first. In the USA that means for children under 13; in parts of Europe, under 16. If you think a child's data was collected without that permission, tell the organization or us and we'll help remove it.

## 11. Security

We protect data with encrypted connections everywhere, scrambled passwords, limits on repeated attempts, and access to the servers limited to one person. Roundware is run by a very small team. We're open about what we do and what we can't yet do on the [How Roundware is run](how-roundware-is-run.md) page.

If something goes wrong that affects your data, we'll tell the affected organizations promptly, and you directly where we can, as the law requires.

## 12. Where data is stored

Everything is stored in the USA (DigitalOcean's New York data centers). If you're in Europe or the UK, that means your data leaves your region. For organizations there, our [Data Processing Agreement](dpa.md) includes the standard legal protections for such transfers.

## 13. Changes to this policy

We'll post every change here, with its date. The full history is public on [GitHub link]. If a change matters, for example one that affects how your data is used, we'll tell organizations at least 30 days ahead.

## 14. Contact

Halsey Solutions, LLC — Roundware
Massachusetts, USA
Privacy and your data: [privacy@roundware.app](mailto:privacy@roundware.app)
Everything else: [hello@roundware.app](mailto:hello@roundware.app)
