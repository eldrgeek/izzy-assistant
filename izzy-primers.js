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

    "One thing to hold onto while you plan: you're not handing this to somebody else to run. You'll be in the room. We record these as live Zoom conversations and you join and conduct them in your own voice — so write the questions to be said out loud, not read off a page. What you give me here becomes your own briefing when you walk in.",

    "The first one is the origin story: where Witness Projection actually came from. Not the theme — the moment. What happened, where I was, what I couldn't stop thinking about afterward. You know this material. You know which thread really starts it, and you know the version I tell at parties isn't necessarily it.",

    "What I want from you now, before we record anything:",

    "1. A season map. Propose the episodes — I'm guessing five or six, but you tell me. For each one: a title, the single question it's really answering, why it earns its own episode instead of being a segment of another, and which ones you think will throw off the most quotable material. Put them in order. Episode 1 is the origin story unless you think that's wrong — if you do, say so and tell me why.",

    "2. Episode 1, in full. The actual questions you'd ask me, in the order you'd ask them, with the follow-ups you'd have ready for when I dodge. Open small and specific — a moment, not a thesis. I answer better when you come at me sideways. Mark the two or three questions you think will get the clip.",

    "3. What you need from me. Anything you want to reread first, anything you're fuzzy on, anything I should dig up before we sit down.",

    "Rules of engagement, so we're clear: you're the interviewer, not the transcriber. Push me. If I hand you a rehearsed answer, tell me it's rehearsed and ask again. If a thread opens that's better than your plan, drop the plan.",

    "Put the season map and the Episode 1 question set in a proposal block — wrap it in <<<PROPOSAL>>> and <<<END PROPOSAL>>> — so I can drop the whole thing into the working document with one click.",
  ].join("\n\n"),


  /* Meaning with AI — Eric's coaching practice (2026-09-18).
     Eric texted Mike: he taught a client to use her AI for her overwhelm, and
     she named it Dolly. These four primers make Izzy his partner in turning
     that one session into a repeatable, paid practice. Source document:
     the Proof doc "Meaning with AI — marketing and money" (Mike + Claude). */

  'meaning-method': [
    "Izzy — something happened today and I want you to help me turn it into a practice.",

    "I sat with a client who was drowning in her week. I taught her to use her own AI (the ordinary ChatGPT everybody has) as help with the overwhelm. Somewhere in the session she gave it a name: Dolly, after Dolly Parton. The moment she named it, it stopped being a search box and became somebody she could hand the list to. I'm now teaching other people how to create meaning with AI, and I want to do it on purpose instead of by instinct.",

    "You're the one who watched me build you. You know what it took to turn a general model into a character with a job. And you know I've been coaching for a long time: I'm a Master Certified Coach and I teach at CTI. So don't invent a method from scratch. Help me find where the AI fits inside the coaching I already know how to do, and what is genuinely new about it.",

    "What I want from you:",

    "1. The session arc. Break a 90-minute one-on-one into its beats, the way you'd break a scene: what happens in each part, what the client says and does, what I say and do, and where the naming moment belongs. I suspect the naming has to be earned, not asked for in minute one. Tell me if I'm wrong.",

    "2. The casting questions. The five to eight questions I ask that turn a general AI into a specific collaborator: its name, its role, what it knows about the client's life, how it talks to them, and what it should never do. Write them to be said out loud.",

    "3. The one-week check. What I ask the client a week later to find out whether the relationship with their AI is still alive, and what I do if it has gone quiet.",

    "4. The guardrails. This is coaching, not therapy. Give me the plain words I say at the start, how I recognise that someone needs a professional instead of me, and what I say when that happens. Also give me the three privacy settings I should walk every client through on their AI.",

    "5. What to call it. Mike's team suggested \"Cast Your AI\" with the line \"Meaning with AI\" underneath. Push back if you have something better.",

    "6. Other coaches. If this is teachable, other coaches will want it. Tell me what a coach would need to learn to do this with their own clients, and what could go wrong if they do it badly.",

    "Push me the way you do on the play. If I'm describing something I think I do rather than what I actually do, say so.",

    "Put the session arc, the casting questions, the one-week check and the guardrails in a proposal block, wrapped in <<<PROPOSAL>>> and <<<END PROPOSAL>>>, so I can drop it into the working document with one click.",
  ].join("\n\n"),

  'casting-sheet': [
    "Izzy — I need the thing a client leaves my session with.",

    "When I teach someone to cast their AI, they need a starter message they paste into their own ChatGPT or Claude. That message introduces them to their AI and gives the AI its name, its role and its manners. Think of it as a casting sheet: the character description an actor gets before the first rehearsal.",

    "Write me a template with blanks I fill in with the client during the session. It needs:",

    "1. The AI's name, and one line on why the client chose it (Dolly got her name after Dolly Parton).",

    "2. Its job: the one or two things the client needs it for most. For my first client that was her overwhelm: taking a pile of tasks and helping her decide what matters today.",

    "3. What it should know about the client's life, in the client's own words.",

    "4. How it should talk to them: tone, length, whether it teases, and when to be gentle.",

    "5. What it should never do, including one line that says it is not a therapist and should point the client to a real person if things get heavy.",

    "6. A weekly ritual: one question the AI asks the client every Monday, so the relationship doesn't go quiet.",

    "Write it in plain language a person who has never used AI can read aloud. Then fill it in once as an example, using an invented client and an invented name. Don't use Dolly for the example.",

    "Put the blank template and the example in a proposal block, wrapped in <<<PROPOSAL>>> and <<<END PROPOSAL>>>.",
  ].join("\n\n"),

  'naming-night': [
    "Izzy — let's design a group version of what I do one-on-one.",

    "The idea is \"Naming Night\": a 90-minute live workshop for 8 to 15 people, in a room or on Zoom. Everyone arrives with their phone or laptop and a free ChatGPT or Claude account. Everyone leaves having named and cast their own AI, and having handed it one real piece of their week.",

    "Give me the run of show, minute by minute, the way you'd give a stage manager a running order:",

    "1. The opening. How I get a room of strangers who half-distrust AI to lean in. I'd like to start with a story (my client and her Dolly, told without identifying her) and with you, Izzy, as the live demo: here's mine, let's make yours.",

    "2. The casting exercise. How to run it for a whole room at once without anyone getting lost, including what I do with the one person whose app won't open.",

    "3. The first real task. Each person hands their newly named AI one thing that is weighing on them this week, and we watch what happens.",

    "4. The sharing. Two or three people say their AI's name out loud and why. That's the moment the room will remember.",

    "5. The close. What they take home (the casting sheet), what I offer next (a one-on-one session), and the plain line that this is coaching, not therapy.",

    "Also tell me who to pitch it to first. I know theater people, and theater staff live in overwhelm. Help me think about which companies, libraries or community groups I actually have a way into, and ask me the questions you need to figure that out.",

    "Put the run of show in a proposal block, wrapped in <<<PROPOSAL>>> and <<<END PROPOSAL>>>.",
  ].join("\n\n"),

  'session-debrief': [
    "Izzy — debrief with me. I just finished a coaching session.",

    "I'm going to tell you what happened, and I want you to interview me about it the way you'd interview me about a rehearsal. Ask one question at a time. Start with what the person walked in carrying, then what their AI ended up being called and why, then the moment it clicked or didn't.",

    "When we're done, write me three things:",

    "1. A case note, with no names and no details that could identify the person: the situation in one line, what was piling up, the name they chose and why, and the one job their AI now does for them.",

    "2. What I did that worked and what I'd do differently, as honest notes to myself.",

    "3. A short follow-up message I can send the client in a week, in my voice, checking whether they and their AI are still talking.",

    "If the person agrees to let me tell their story publicly, I'll say so, and you can also draft a 150-word version for social media. If I don't say so, assume the answer is no.",

    "Put the case note and the follow-up message in a proposal block, wrapped in <<<PROPOSAL>>> and <<<END PROPOSAL>>>, so they land in the working document. Here's what happened:",
  ].join("\n\n"),

};
