# 🏥 Aura Clinic AI Assistant
## A Professional Healthcare Intake & Booking Solution

Built by Parnab Ganguli, this project demonstrates a production-ready AI integration using the latest Gemini 2.5/3.1 infrastructure. It is designed to reduce clinic administrative load by handling patient intake, providing physician summaries, and offering seamless WhatsApp escalation.

### 🚀 Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **AI Engine:** Google Gemini 2.5 Flash (v1 Stable Endpoint)
- **Styling:** Tailwind CSS (Glassmorphism & Medical Clean UI)
- **Language Support:** Bilingual (English & Bengali)
- **Deployment:** Vercel

### 🧠 Model Training & Logic
The AI is configured with a strict medical protocol rather than just generic chat:
- **Context Prepend Pattern:** Uses a custom prompt injection to bypass legacy "systemInstruction" errors on the stable v1 API.
- **Patient Intake Logic:** Programmed to gather Name, Age, and Concern before concluding.
- **Automated Summarization:** Generates a formatted "Physician Brief" at the end of every successful intake.
- **Safety Guardrails:** Automatically detects emergency keywords (chest pain, bleeding) and triggers immediate human escalation.

### 📂 Project Structure
```plaintext
aura-clinic/
├── app/
│   ├── api/chat/route.ts   <-- AI logic & 2026 API Protocol
│   ├── page.tsx            <-- Glassmorphism Landing & Chat UI
│   └── layout.tsx          <-- Global Fonts (Inter/Roboto)
├── components/
│   ├── ChatWindow.tsx      <-- Real-time message rendering
│   └── WhatsAppButton.tsx  <-- Fixed escalation component
├── public/                 <-- Clinic assets & branding
└── .env.local              <-- API Key (Secured)
```

### 🛠️ How to Run the Project
**Clone the Repo:**
```bash
git clone https://github.com/parnabganguli/clinic-lab-and-chatbot.git
```
**Install Dependencies:**
```bash
npm install
```
**Set Environment Variables:**
Create a `.env.local` file and add your key:
`GOOGLE_GENERATIVE_AI_API_KEY=your_key_here`

**Launch:**
```bash
npm run dev
```
Open `http://localhost:3000` to view the demo.

### 👤 Author Details
- **Author:** Parnab Ganguli
- **Domain:** Machine Learning | Deep Learning | Full-Stack Development
- **Project Type:** Professional / Learning Project (Healthcare Focus)
- **Location:** Asansol, West Bengal, India

### 🎯 Conclusion
The Aura Clinic Assistant is a prime example of how generative AI can be transitioned from a playground to a practical, money-saving business tool. By solving modern API challenges and focusing on a niche, high-trust UI, this project stands as a testament to my ability to deliver end-to-end AI solutions in 2026.
