# Roundware legal documents

The documents that govern roundware.app, in plain English. Each one starts with a short summary, and the detail follows. They're kept here in public, so every change is dated and visible.

| Document | For |
|---|---|
| [Privacy Policy](privacy.md) | Everyone: what Roundware collects, why, and your rights |
| [Terms of Service](terms.md) | Organizations with a Roundware account |
| [Data Processing Agreement](dpa.md) | Organizations: how we handle their participants' data on their behalf |
| [Service providers](subprocessors.md) | The outside companies Roundware uses |
| [How Roundware is run](how-roundware-is-run.md) | What we do well, what we can't do yet, and what to know before relying on it |
| [Participant terms template](participant-terms.md) | Organizations: a starting point for their own project's terms |

Roundware is run by Halsey Solutions, LLC (Massachusetts, USA). Questions: [privacy@roundware.app](mailto:privacy@roundware.app).

---

## Status: drafts (started 2026-10-27)

Nothing here is in effect yet. Before publishing:

### Information and accounts (Halsey)

- [ ] **Set up privacy@roundware.app** (DreamHost forwarding, like admin@), then **test it**: send a message from an outside address and check that it arrives.
- [ ] A business address for [ADDRESS]. It will be public, so a PO box or the registered agent's address is fine.
- [ ] Sentry: check the account's data region (US or EU) and that "Prevent storing of IP addresses" is on for the web app and admin projects.
- [ ] Create the public GitHub repository for this folder, and fill in [GitHub link].
- [ ] A lawyer's review: the DPA's transfer clauses (section 9), the limits of responsibility (Terms section 8), and the participant template's broadcast wording.
- [ ] Choose the date they take effect ([DATE]).

### Build, so that the documents are true

The documents describe Roundware as it will be once these are done. Each is marked [Planned] or [Not built yet] where it appears.

1. ~~**Random names for uploaded files.**~~ Done 2026-10-27: what and when, plus a random part (fill in [DEPLOY DATE] in How Roundware is run when deployed).
2. ~~**Delete a participant.**~~ Done 2026-10-27: the participant's page in the admin, "Delete for good", for this project or all of the organization's.
3. **Clear listening history and events.** Organizations can delete these for a project (Privacy §8).
4. **Google Analytics asks first.** A plain prompt; GA loads only on yes. A project setting lets an organization handle consent itself (Privacy §7).
5. **Record participants' agreement.** When, and to which version of the project's terms (How Roundware is run).
6. Done 2026-10-27 (Organization settings: the whole organization or one project, and Import beside it). **Export everything, easily.** An organization's data in open formats in one download: contributions and their details as CSV and JSON, projects' settings as JSON, and every original audio file and photo (Terms §7, DPA §8). Today there's a CSV of contributions and single-file downloads. It should load into a self-hosted Roundware (item 14).
7. Done 2026-10-27, with deleting your own account. **Close an account.** Owners close their organization's account. It's held 90 days, then deleted with its media and activity log. Team members can also delete their own accounts (Terms §7).
8. Done 2026-10-27 (deleted with it). **The activity log goes with its organization.** Today it outlives a deleted organization, with team members' emails.
9. **Self-host the map's cluster images.** They're loaded from github.com, which then sees visitors' IP addresses.
10. **Links.** These documents linked from the landing page, sign-up (with an "I agree to the Terms" checkbox), the admin, and the web app and embed (a Privacy link beside the project's terms).
11. **The participant terms template offered** when an organization writes its project's terms.
12. **Pages on roundware.app/legal** showing these files.
13. **Backups of uploaded files.** When they're done, update How Roundware is run, Privacy §8 and Terms §6.
14. **Release the v3 server and admin as open source**, with instructions for running your own and importing an export (Terms §7 and §9, How Roundware is run).
15. **Cancelling a paid plan over the free limits** (Terms §5): reminder emails; after 60 days the projects over the limits go offline (the organization picks which, else the most recently changed stay); 90 days later they're deleted; re-subscribing brings everything back.

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
