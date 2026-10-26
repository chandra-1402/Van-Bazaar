# 🌿 Van Bazaar (वन बाज़ार)

> **From Tribal Wisdom to Tribal Wealth**  
> *A Voice-First, Multilingual Fair-Price & Collective Selling Platform Empowering Tribal Forest-Produce Collectors.*

[![Status](https://img.shields.io/badge/Status-Active%20Production%20Ready-2ea44f.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#)
[![Tech Stack](https://img.shields.io/badge/Built%20With-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-F16529.svg)](#)
[![Accessibility](https://img.shields.io/badge/Voice--First-Hindi%20%7C%20English%20%7C%20Santhali-0B6B2E.svg)](#)
[![Initiative](https://img.shields.io/badge/Aligned%20With-TRIFED%20%7C%20Van%20Dhan%20Vikas%20Kendra-darkgreen.svg)](#)

---

## 📌 Overview

**Van Bazaar** is an inclusive digital and voice-first portal engineered for tribal forest-produce collectors (particularly women Self Help Groups - SHGs) in Jharkhand and across forest corridors in India.

Minor Forest Produce (MFP / NTFP) such as **Mahua**, **Kusmi Lac**, **Wild Tamarind**, and **Sal Seeds** form the economic backbone of tribal households. However, remote collectors often face severe informational asymmetry, predatory middleman discounting (25%–40% under-pricing), non-standard weights, and payment delays.

**Van Bazaar bridges this divide** by delivering:
- 🎙️ **Voice-First Accessibility:** Natural speech queries and audio responses in **Hindi**, **English**, and **Santhali** (with Ol Chiki and Devanagari script support).
- ⚖️ **Transparent Live MSP Rates:** Up-to-date Minimum Support Price tracking with transparent comparisons against middleman market rates.
- 🤝 **"Sell Together" Aggregation Hub:** Collective pooling for SHGs to unlock bulk transport incentives and higher bargaining power.
- 🧮 **Fair Payout Calculator:** Instant profit breakdown comparing middleman offers vs. government Van Kendra procurement + group bonuses.
- 📢 **Grievance Redressal:** Quick voice and text ticketing to report under-weighing, below-MSP pricing, or depot bottlenecks.
- 👑 **Leader Access Portal:** Administrative monitoring dashboard for SHG federations and Van Dhan Kendra managers with real-time KPI metrics and audit logs.

---

## 🌟 Key Features

### 1. 🎙️ Voice-First Interface & Tribal Languages
- Built with the native **Web Speech API** (`SpeechRecognition` & `SpeechSynthesis`).
- Full trilingual support:
  - **Hindi (हिंदी)**
  - **English**
  - **Santhali (ᱥᱟᱱᱛᱟᱲᱤ / संथाली)** with authentic Ol Chiki font support and Devanagari phonetics.
- Audio playbacks of daily prices, announcements, and step-by-step guidance designed for non-literate and semi-literate forest collectors.

### 2. 📊 Live Minimum Support Price (MSP) Tracker
- Real-time catalog of major Minor Forest Produce (MFP):
  - *Mahua Flowers (Dried)*
  - *Kusmi Lac (लाह / ᱞᱟᱦᱟ)*
  - *Wild Tamarind (De-seeded)*
  - *Sal Seeds (सखुआ)*
  - *Chironji, Harra, Baheda, Wild Forest Honey, and more.*
- Interactive percentage delta calculations showing exact profit gains over open-market middleman pricing.
- Search and filter by category (Resins & Gums, NTFP, Oilseeds, Medicinal Herbs).

### 3. 🤝 "Sell Together" (Collective Selling Aggregator)
- Enables individual women collectors to aggregate produce lots into cooperative truckloads.
- Automatically calculates:
  - Combined weight (Quintals / Metric Tons).
  - Estimated collective MSP value.
  - Pro-rata household payout + bulk transport subsidy.
- Live status tracking of community selling lots (Initiated, Weighing in Progress, Dispatched to Kendra).

### 4. 🧮 Household Profit & MSP Aggregation Calculator
- Interactive modal tool allowing collectors to select produce, input quantity, and specify group size.
- Outputs transparent comparison:
  $$\text{Net Gain} = (\text{MSP Payout} + \text{Bulk Incentive}) - \text{Trader Offer}$$
- Encourages collective bargaining over distress sales to village intermediaries.

### 5. 🚨 Grievance & Accountability Redressal
- One-click voice or text grievance filing with unique incident token generation.
- Covers common ground hurdles:
  - Under-weighing / faulty scales
  - Refusal to buy at MSP
  - Delay in direct bank transfers (DBT)
- Directly flags incidents to the local Van Kendra supervisor and TRIFED grievance cell.

### 6. 🔐 Real Phone SMS OTP Authentication (Google Firebase)
- Direct verification to physical mobile phones via standard 6-digit SMS OTP.
- Uses **Google Firebase Phone Authentication** with client-side invisible reCAPTCHA.
- Zero-backend setup: credentials can be set directly in [`Idea tribe/js/firebase-config.js`](Idea%20tribe/js/firebase-config.js) or via the in-app `⚙️ Firebase Keys` modal.
- Built-in preview/demo mode when Firebase credentials are not yet configured.

### 7. 👑 SHG Leader & Kendra Admin Dashboard
- Secured OTP-based management access for SHG leaders and Kendra supervisors.
- Key Performance Indicators (KPIs):
  - Total Active Collectors
  - Open Collective Selling Groups
  - Total Pooled Produce Weight (KG)
  - Pending & Resolved Grievances
- Tabbed tables with instant search, status filtering, and **CSV / Data Export** functionality.

---

## 📂 Project Structure

```text
van bazaar/
├── Idea tribe/                    # Core Web Application
│   ├── index.html                 # Main single-page application & layouts
│   ├── css/
│   │   └── style.css              # Custom styling, dark forest theme, responsive UI
│   ├── js/
│   │   ├── app.js                 # App state, voice handlers, modals, calculations
│   │   ├── data.js                # Centralized MSP datasets, translations, audio scripts
│   │   └── firebase-config.js     # Firebase Phone Auth configuration & storage helper
│   └── assets/
│       ├── images/                # High-definition imagery & visual assets
│       └── icons/                 # SVG icons and visual cues
├── server.ps1                     # Lightweight standalone Windows PowerShell HTTP server
├── start-localhost.bat            # One-click Windows launch script
├── .gitignore                     # Git exclusions (.DS_Store, .lnk, logs, etc.)
└── README.md                      # Comprehensive project documentation
```

---

## 🚀 Quick Start Guide

Van Bazaar is engineered using vanilla HTML5, CSS3, and modern JavaScript—requiring **zero build steps or heavy dependencies**.

### Option 1: macOS / Linux (Built-in Python Server)

Open your terminal in the repository root directory and run:

```bash
# Navigate to the web root and start a local server
cd "Idea tribe"
python3 -m http.server 8000
```
Open **[http://localhost:8000/](http://localhost:8000/)** in your browser.

---

### Option 2: Windows (One-Click Batch or PowerShell)

- **Method A:** Double-click [`start-localhost.bat`](start-localhost.bat). It automatically starts the server and opens your browser.
- **Method B:** Open PowerShell in the root directory:
  ```powershell
  powershell -ExecutionPolicy Bypass -File server.ps1
  ```
  Visit **[http://localhost:8000/](http://localhost:8000/)**.

---

### Option 3: Node.js / npx serve

```bash
npx serve "Idea tribe" -l 8000
```

---

### Option 4: VS Code / IDE Live Server
Right-click [`Idea tribe/index.html`](Idea%20tribe/index.html) and select **"Open with Live Server"**.

---

## 🛠️ Technology Stack

| Domain | Technology / Specification |
| :--- | :--- |
| **Markup & Semantics** | HTML5 (Semantic landmarks, WAI-ARIA accessibility, SEO meta tags) |
| **Styling & Theme** | Modern Vanilla CSS3 (Custom design tokens, CSS Grid, Flexbox, Glassmorphism, Micro-interactions) |
| **Application Logic** | JavaScript (ES6+ modular logic, async state handling) |
| **Voice Engine** | Web Speech API (`webkitSpeechRecognition` & `speechSynthesis`) |
| **Typography** | Inter, Plus Jakarta Sans, and Ol Chiki system support |
| **Local Hosting** | Zero-dependency .NET `HttpListener` (`server.ps1`) & Python `http.server` |

---

## 🎯 Target Beneficiaries & Impact

- **Tribal Women SHGs:** Eliminates middleman deductions, ensuring ₹8–₹80 extra gain per kilogram depending on the forest produce.
- **Van Dhan Vikas Kendras (VDVKs):** Streamlines procurement scheduling and digitizes aggregation data.
- **Local Forest Economy:** Increases transparency, formal banking adoption (DBT), and fair-trade forest harvesting practices.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free for educational, governmental, and open-source tribal empowerment initiatives.
