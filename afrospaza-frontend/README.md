# AfroSpaza Frontend

Autonomous micro-commerce, inventory replenishment, and decentralized settlement infrastructure for South African township spaza shops powered by **XRPL (RLUSD)** and autonomous AI agents.

---

## ⚡ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Glassmorphism (`glass.css`)
- **State Management**: Zustand
- **Icons**: Lucide React
- **Settlement**: XRP Ledger (RLUSD, Payment Channels, Escrow, x402 Micropayments)
- **Security & Guard**: Client & Server pre-flight mandate validations, Adversarial Attack simulator

---

## 🏗️ Architecture

- `src/app/(marketing)`: High-conversion landing page
- `src/app/(app)/dashboard`: Real-time Spaza Control Plane with agent activity & budget metrics
- `src/app/(app)/demo`: Adversarial attack & defense simulation visualizer (prompt injection, fake supplier, overspend interceptor)
- `src/app/(app)/orders`: On-chain order ledger with verified XRPL transaction hashes
- `src/app/(app)/sellers`: Vetted township supplier directory with ratings & delivery stats
- `src/app/(app)/settings`: Autonomous mandate editor & emergency kill-switch
- `src/app/api`: BFF API routes proxying agent triggers, mandate enforcement, and XRPL queries

---

## 🚀 Getting Started

```bash
cd afrospaza-frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
