# Roundware legal documents

The documents that govern roundware.app, in plain English. Each one starts with a short summary, and the detail follows. They're kept here in public, so every change is dated and visible. The site shows them at [roundware.app/legal](https://roundware.app/legal/).

| Document | For |
|---|---|
| [How Roundware is run](how-roundware-is-run.md) | What we do well, what we can't do yet, and what to know before relying on it |
| [Privacy Policy](privacy.md) | Everyone: what Roundware collects, why, and your rights |
| [Terms of Service](terms.md) | Organizations with a Roundware account |
| [Data Processing Agreement](dpa.md) | Organizations: how we handle their participants' data on their behalf |
| [Service providers](subprocessors.md) | The outside companies Roundware uses |
| [Participant terms template](participant-terms.md) | Organizations: a starting point for their own project's terms |

Roundware is run by Halsey Solutions, LLC (Massachusetts, USA). Questions: [privacy@roundware.app](mailto:privacy@roundware.app).

You're welcome to reuse these documents for your own organization, with credit: they're licensed [CC BY 4.0](LICENSE.md).

---

## Status: drafts (started 2026-10-27)

Nothing here is in effect yet. Before publishing:

### Information and accounts (Halsey)

- [x] ~~**Set up privacy@roundware.app**, then test it.~~ Done 2026-10-28 (Halsey), with hello@roundware.app; both arrive.
- [x] ~~A business address.~~ Decided 2026-10-28 (Halsey): none. The documents give Halsey Solutions, LLC, Massachusetts, and the two email addresses; the Terms say notices go by email. A postal address would be needed for marketing email (CAN-SPAM), if that ever starts. For the lawyer: whether an EU representative (GDPR Art. 27) is needed as EU projects grow.
- [x] ~~Sentry: check the account's data region (US or EU) and that "Prevent storing of IP addresses" is on for the web app and admin projects.~~ Verified 2026-10-28 (Halsey).
- [x] ~~Create the public GitHub repository for this folder.~~ They live in roundware-saas-home (public), and the site fills in [GitHub link] with each document's history.
- [ ] A lawyer's review: the DPA's transfer clauses (section 9), the limits of responsibility (Terms section 8), the trademark (Terms section 9, "The name"), and the participant template's broadcast wording.
- [ ] Choose the date they take effect ([DATE]).

### Build, so that the documents are true

The documents describe Roundware as it will be once these are done. Each is marked [Planned] or [Not built yet] where it appears.

1. ~~**Random names for uploaded files.**~~ Done 2026-10-27: what and when, plus a random part (fill in [DEPLOY DATE] in How Roundware is run when deployed).
2. ~~**Delete a participant.**~~ Done 2026-10-27: the participant's page in the admin, "Delete for good", for this project or all of the organization's.
3. ~~**Clear listening history and events.**~~ Done 2026-10-28 (server `51244c3`, admin `7b1b437`): Organization settings › Listening activity, all or older than a date (Privacy §8).
4. ~~**Google Analytics asks first.**~~ Done 2026-10-28 (server `872d324`, web app `03ac1be`, admin `d3a3039`): a plain prompt, GA only on Allow, "Change" in the info panel; Project Settings › Analytics › "We ask visitors for consent ourselves" (Privacy §7).
5. ~~**Record participants' agreement.**~~ Done 2026-10-28 (server `d006859`, `54a1f4f`; framework `60e8133`; web app `a0723e0`; admin `3a9f482`): when, and the exact text shown, for contributions and looping-mode loops; shown on each in the admin.
6. Done 2026-10-27 (Organization settings: the whole organization or one project, and Import beside it). **Export everything, easily.** An organization's data in open formats in one download: contributions and their details as CSV and JSON, projects' settings as JSON, and every original audio file and photo (Terms §7, DPA §8). Today there's a CSV of contributions and single-file downloads. It should load into a self-hosted Roundware (item 14).
7. Done 2026-10-27, with deleting your own account. **Close an account.** Owners close their organization's account. It's held 90 days, then deleted with its media and activity log. Team members can also delete their own accounts (Terms §7).
8. Done 2026-10-27 (deleted with it). **The activity log goes with its organization.** Today it outlives a deleted organization, with team members' emails.
9. ~~**Self-host the map's cluster images.**~~ Done 2026-10-28 (web app `b507852`; live once deployed): served by the web app, not github.com. The permission help video also moved to YouTube's no-cookie address.
10. **Links.** Partly done 2026-10-28: sign-up and accepting an invitation ask "I agree to the Terms of Service and Privacy Policy" and record when and which version (server `51244c3`, admin `7b1b437`); the admin's sign-in page and menu link both; the web app and embed show "Roundware hosts this project. Roundware's Privacy Policy" under each project's terms (web app `7a6fbde`). Still to do: the landing page link once the admin's landing page goes.
11. ~~**The participant terms template offered**~~ Done 2026-10-28 (admin `5e9540d`): "Start from Roundware's template" in the project wizard and Project Settings, from /legal/participant-terms.md.
12. ~~**Pages on roundware.app/legal** showing these files.~~ Done 2026-10-28 (roundware-saas-home); live once the site is deployed.
13. **Backups of uploaded files.** When they're done, update How Roundware is run, Privacy §8 and Terms §6.
14. **Release the v3 server and admin as open source**, with instructions for running your own and importing an export (Terms §7 and §9, How Roundware is run).
15. **Cancelling a paid plan over the free limits** (Terms §5): reminder emails; after 60 days the projects over the limits go offline (the organization picks which, else the most recently changed stay); 90 days later they're deleted; re-subscribing brings everything back.
16. ~~**No tracking in Roundware's emails.**~~ Verified 2026-10-28 (Halsey): open and click tracking are off in Resend for notify.roundware.app. The Privacy Policy says so (§3, from team members).
17. **How long the server keeps visit logs.** The Droplet's logs record each request's IP address. Decide how long they're kept (and make it so: log rotation), then state it in the Privacy Policy (§8, how long things are kept).

### Choices made in drafting (easy to change)

Halsey decided: participants keep ownership by default; they can withdraw going forward; children are the organization's responsibility; deletion 90 days after closing; no analytics of Roundware's own (Sentry only); GA asks first, with an organization opt-out; listening locations kept until the organization clears them.

Drafted as reasonable defaults, for review:

- Account holders must be 18 or older.
- 30 days' notice for changes that matter, and for new service providers.
- Breach notice within 72 hours.
- At least 60 days' notice before closing an inactive account; 90 days' notice if Roundware shuts down.
- Responsibility limited to the greater of 12 months' fees or US$100.
- Massachusetts law and courts.
- Security questionnaires answered once a year; no on-site audits.
- A refund if an organization leaves over a new service provider.
- Paid plans (Halsey): cancel any time; paid features last to the end of the period paid for; no refunds, but "write to us, we're nice and reasonable"; over the free limits: 60 days' grace, then offline, then deleted 90 days later. 30 days' notice of price changes (default).
