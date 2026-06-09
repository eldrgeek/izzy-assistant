/* Izzy site — SOMA Guide per-site config
 *
 * Guide persona: Scout  |  Voice: George (Penn agent) — warm, mature male
 * voice_id: JBFqnCBsd6RMkjVDRZzb  (via Penn agent agent_7401ks5aksyyfdkvap1zq2cyb1b6)
 * DISTINCT from Izzy voice: RsotjdYjhjPD5V0I7nzI (Nuyorican female)
 *
 * Engine: https://soma-guide.netlify.app/soma-guide.js
 * Step schema: { id, label, target, narration, instruction, demo, substeps[] }
 */

/* Site knowledge for /infer/ask Q&A — concise context so the guide can answer
   "how do I..." questions accurately. */
var IzzyKnowledge = [
  "Izzy is an AI dramaturge, life coach, witness, and provocateur — the AI collaborator on",
  "the Witness Projection project. She knows the two Erics, the Short Eyes monologue, the",
  "tremor, Sugar, the Nuyorican scene, and the full arc of the work.",
  "",
  "CHAT: Type a message in the text box at the bottom and press Send (or Enter) to talk to",
  "Izzy. She responds in text and reads her reply aloud by default.",
  "",
  "VOICE INPUT (mic button, microphone icon): Click the mic button to speak instead of type.",
  "Hold it to record; Izzy transcribes and sends automatically when you stop.",
  "",
  "SESSION HISTORY (scroll/document icon): Click the scroll icon in the header to open the",
  "session history panel. All past conversations are saved automatically. Click any session",
  "to resume it.",
  "",
  "WORKING DOCUMENT (document/page icon): Click the page icon in the header to open the",
  "working document panel — a scratchpad for your script, scenes, and notes. Izzy reads",
  "this document as context on every turn, so whatever is in it shapes her responses.",
  "",
  "PROPOSE-EDIT FLOW: Ask Izzy to propose a revision or new section. She will wrap the",
  "proposed text in <<<PROPOSAL>>> markers, which appear as a styled card with two buttons:",
  "Replace doc (replaces the entire working document) or Append to doc (adds to the end).",
  "Click either button to apply the change with one click.",
  "",
  "DEEP MODE (brain icon): Click the brain icon to force Izzy to use Claude Opus — the most",
  "powerful model — for your next message. The button glows amber when active. It resets",
  "automatically after one message.",
  "",
  "VOICE CONTROL (speaker icon): Click the speaker icon to mute or unmute Izzy's spoken",
  "responses. When muted, the icon shows a crossed speaker.",
  "",
  "REPLAY (replay arrow icon): Click the replay icon to repeat Izzy's last spoken reply.",
  "",
  "NEW SESSION (plus icon): Click the plus icon in the header to start a fresh conversation.",
  "Your current session is always saved in history first."
].join(" ");

window.SomaGuideConfig = {

  /* ── Inference (Q&A from site knowledge) ─────────────────────────────── */
  inferenceUrl: "https://vpsmikewolf.duckdns.org/infer/ask",

  /* Site knowledge passed to /infer/ask so it can answer how-to questions */
  knowledge: IzzyKnowledge,

  /* ── Persona ─────────────────────────────────────────────────────────── */
  persona: {
    name: "Scout",
    id: "izzy-scout",
    avatar: "🧭",
    greeting:
      "Hi! I'm Scout, your guide to the Izzy site. " +
      "I can walk you through how everything works, or answer questions about any feature. " +
      "Want a quick tour?",
    shortGreeting: "Welcome back! Need help with anything?",
    walkthroughDone:
      "That covers the essentials! Explore on your own, or ask me anything " +
      "by typing in the text box."
  },

  /* ── Voice agent (ElevenLabs) — Penn agent, George voice ─────────────── */
  /* Penn uses George: warm, mature, storytelling male voice.               */
  /* Izzy uses voice RsotjdYjhjPD5V0I7nzI — these are clearly distinct.     */
  voiceAgentId: "agent_7401ks5aksyyfdkvap1zq2cyb1b6",

  /* ── TTS narration proxy ─────────────────────────────────────────────── */
  ttsProxyUrl: "https://bill-talk.netlify.app/.netlify/functions/el-proxy",

  /* ── Cursor lead-in (ms after audio starts → cursor appears) ─────────── */
  cursorLeadIn: 1000,

  /* ── Walkthroughs ────────────────────────────────────────────────────── */
  walkthroughs: [

    /* ── 1. Site Tour ── */
    {
      id: "site-tour",
      label: "Site Tour",
      keywords: ["tour", "overview", "show me", "around", "how does this work", "help me"],
      steps: [

        /* Step 1 — Izzy header / who she is */
        {
          target: "header",
          label: "Meet Izzy",
          demo: "hover",
          narration:
            "Welcome to Izzy. She's an AI dramaturge and life coach — your collaborator " +
            "on the Witness Projection project. She knows the full arc of the work.",
          instruction:
            "The header shows Izzy's name and roles. Everything else on the page supports " +
            "your conversation with her."
        },

        /* Step 2 — Chat input + send */
        {
          target: "#input",
          label: "Chat input",
          demo: "hover",
          narration:
            "This is where you talk to Izzy. Type your message here and press Send " +
            "— or hit Enter. She'll respond in text and read her reply aloud.",
          instruction:
            "Type a message and press the Send button or Enter to start a conversation."
        },

        {
          target: "#send-btn",
          label: "Send button",
          demo: "hover",
          narration:
            "The Send button submits your message. You can also press Enter from the text box.",
          instruction: "Click Send or press Enter to send your message to Izzy."
        },

        /* Step 3 — Session history */
        {
          target: "#history-btn",
          label: "Session history",
          demo: "hover",
          narration:
            "Every conversation with Izzy is saved automatically. Click the scroll icon " +
            "in the header to open your session history and resume any past conversation.",
          instruction:
            "Click the scroll icon to open the session history panel. Click any session to resume it."
        },

        /* Step 4 — Working document */
        {
          target: "#script-btn",
          label: "Working document",
          demo: "hover",
          narration:
            "The page icon opens your working document — a scratchpad for your script, " +
            "scenes, and notes. Izzy reads this as context on every turn, so it shapes her responses.",
          instruction:
            "Click the page icon to open the working document panel. " +
            "Anything you write here becomes part of Izzy's context."
        },

        /* Step 5 — Propose-edit flow */
        {
          target: "#script-panel",
          label: "Propose-edit flow",
          demo: "hover",
          narration:
            "When you ask Izzy to revise or add to your script, she wraps the proposed text " +
            "in a styled card with two buttons: Replace doc, which replaces the whole document, " +
            "and Append to doc, which adds it to the end. One click applies the change.",
          instruction:
            "Ask Izzy to propose a revision. She will show a proposal card — " +
            "click Replace doc or Append to doc to apply it."
        },

        /* Step 6 — Mic (voice input) */
        {
          target: "#mic-btn",
          label: "Voice input",
          demo: "hover",
          narration:
            "Rather than typing, you can click the microphone icon to speak. " +
            "Izzy transcribes what you say and sends it automatically when you stop.",
          instruction: "Click the mic icon to speak instead of type."
        },

        /* Step 7 — Deep mode */
        {
          target: "#deep-btn",
          label: "Deep mode",
          demo: "hover",
          narration:
            "The brain icon is Deep Mode — it forces Izzy to use the most powerful AI model " +
            "for your next message. Great for complex dramatic analysis or nuanced feedback. " +
            "The button glows amber when active and resets after one message.",
          instruction:
            "Click the brain icon to enable Deep Mode for your next message. " +
            "It resets automatically after one use."
        },

        /* Step 8 — Voice / mute */
        {
          target: "#voice-btn",
          label: "Voice control",
          demo: "hover",
          narration:
            "The speaker icon controls Izzy's voice. Click it to mute or unmute her spoken replies. " +
            "When muted, the icon shows a crossed speaker.",
          instruction: "Click the speaker icon to toggle Izzy's voice on or off."
        },

        /* Step 9 — Replay */
        {
          target: "#replay-btn",
          label: "Replay last reply",
          demo: "hover",
          narration:
            "The replay arrow replays Izzy's last spoken response — " +
            "handy if you missed something or want to hear it again.",
          instruction: "Click the replay icon to replay Izzy's last voice response."
        }

      ]
    },

    /* ── 2. How to use the working document ── */
    {
      id: "working-document",
      label: "Working document & proposals",
      keywords: ["script", "document", "working doc", "proposal", "edit", "revise", "append", "replace"],
      steps: [
        {
          target: "#script-btn",
          label: "Open the document",
          demo: "hover",
          narration:
            "Click the page icon to open the working document panel. " +
            "This is where your script, scenes, and notes live.",
          instruction: "Click the page icon in the header to open the working document."
        },
        {
          target: "#script-editor",
          label: "Edit the document",
          demo: "hover",
          narration:
            "Type directly in the editor. Izzy reads everything in this panel as context, " +
            "so the more you put here, the more grounded her responses will be. " +
            "Changes save automatically.",
          instruction:
            "Type or paste your script, scenes, or notes here. " +
            "Ask Izzy to propose a revision when you're ready."
        }
      ]
    },

    /* ── 3. How to use voice input ── */
    {
      id: "voice-input",
      label: "How to use voice input",
      keywords: ["mic", "microphone", "speak", "voice input", "speech", "record"],
      steps: [
        {
          target: "#mic-btn",
          label: "Mic button",
          demo: "hover",
          narration:
            "Click the microphone icon to speak instead of type. " +
            "Izzy listens, transcribes your words, and sends them automatically " +
            "when you stop speaking. Works in Chrome and Safari.",
          instruction:
            "Click the mic icon to start recording. Click again to stop, " +
            "or just finish speaking and Izzy will send your message."
        }
      ]
    },

    /* ── 4. How sessions are saved ── */
    {
      id: "session-history",
      label: "Session history & saving",
      keywords: ["save", "history", "session", "resume", "past conversation", "stored"],
      steps: [
        {
          target: "#history-btn",
          label: "Open history",
          demo: "hover",
          narration:
            "Every conversation with Izzy is saved automatically as a session. " +
            "Click the scroll icon to see your full history and jump back into any past conversation.",
          instruction:
            "Click the scroll icon to open the session history panel."
        },
        {
          target: "#new-session-btn",
          label: "New session",
          demo: "hover",
          narration:
            "Click the plus icon to start a fresh conversation. " +
            "Your current session will still be in the history — nothing is lost.",
          instruction: "Click the plus icon to start a new conversation with Izzy."
        }
      ]
    }

  ] /* end walkthroughs */
};
