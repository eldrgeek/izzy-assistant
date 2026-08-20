/* Izzy primers — named opening messages, addressable by URL.
 *
 *   https://izzy-assistant.netlify.app/?prime=<key>
 *
 * Opening the link drops the primer into the composer, ready to read and send.
 * Nothing is sent automatically — the whole point is that the reader looks it
 * over, edits if they want, and fires it themselves. One tap, no copy-paste.
 *
 * To change what a link says, edit the text here and push — the URL is stable,
 * so a primer can be revised after it has already been sent to someone.
 *
 * Ad-hoc alternative: ?ask=<url-encoded text> seeds arbitrary text with no
 * entry here. Keep primers for anything that gets sent to a person.
 *
 * Formatting: one paragraph per line, no hard wrapping — the composer soft-wraps
 * and hard breaks mid-sentence read badly in the sent message.
 *
 * Authorship: Mike Wolf (directive) + Claude (Opus 5, CCc), 2026-08-20.
 */

window.IzzyPrimers = {

  /* The Making Of — commissioning the episode series.
     Replaces the single 2-hour Eric x Izzy sit-down (Trello Playmaker #37)
     with a season of short episodes. Izzy designs the season; she is the one
     who knows the play. Episode 1 is the origin story, Eric's own pick. */
  'making-of-season': [
    "Izzy — new project, and I want you to run this one.",

    "We're making a \"making of\" for Witness Projection: a series of recorded conversations between you and me, cut into short clips that go out on social. The original plan was one two-hour sit-down. I don't want that. Two hours is a slog, and it leaves one big undifferentiated lump to cut from.",

    "Instead — a series of short episodes. Each one 20 to 30 minutes, one subject, done in a single sitting. Each should give us four to six clips that stand on their own. Someone should be able to watch any one episode and get a whole thing, not a fragment of a bigger thing.",

    "The first one is the origin story: where Witness Projection actually came from. Not the theme — the moment. What happened, where I was, what I couldn't stop thinking about afterward. You know this material. You know which thread really starts it, and you know the version I tell at parties isn't necessarily it.",

    "What I want from you now, before we record anything:",

    "1. A season map. Propose the episodes — I'm guessing five or six, but you tell me. For each one: a title, the single question it's really answering, why it earns its own episode instead of being a segment of another, and which ones you think will throw off the most quotable material. Put them in order. Episode 1 is the origin story unless you think that's wrong — if you do, say so and tell me why.",

    "2. Episode 1, in full. The actual questions you'd ask me, in the order you'd ask them, with the follow-ups you'd have ready for when I dodge. Open small and specific — a moment, not a thesis. I answer better when you come at me sideways. Mark the two or three questions you think will get the clip.",

    "3. What you need from me. Anything you want to reread first, anything you're fuzzy on, anything I should dig up before we sit down.",

    "Rules of engagement, so we're clear: you're the interviewer, not the transcriber. Push me. If I hand you a rehearsed answer, tell me it's rehearsed and ask again. If a thread opens that's better than your plan, drop the plan.",

    "Put the season map and the Episode 1 question set in a proposal block — wrap it in <<<PROPOSAL>>> and <<<END PROPOSAL>>> — so I can drop the whole thing into the working document with one click.",
  ].join("\n\n"),

};
