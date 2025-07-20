# 🧩 MF Crypto Host

This repository contains the **host application** of a microfrontend architecture for a cryptocurrency dashboard. It is built using **Rspack**, **React**, and **Sass**, and consumes remote components and pages from a `remote_crypto_app` using **Module Federation**.

---

## 🚀 Technologies

- ⚛️ **React 19**
- 🧬 **Module Federation** via `@module-federation/enhanced/rspack`
- ⚙️ **Rspack** with Zephyr template
- 🎨 **Sass** for scoped modular styling
- 🌐 **React Router DOM** for client-side navigation
- 🛰️ **Remote integration** via exposed modules

---

## 🧭 Available Screens

### `/` – Prices
- Displays a live list of cryptocurrencies with up-to-date prices
- A detailed card shows extended info for the selected item

### `/dashboard` – Price History Dashboard
- Remote screen exposed by the `remote_crypto_app`
- Integrated via Module Federation

---

## 📁 Project Structure

```
/src
  /components             
    /header               # header component
    /content              # content component with router
  /layouts                
    /base                 # Base layout component
  /screens
    /prices               # Main screen with live data
    /dashboard            # Remote dashboard screen
```

---

## 🛠️ Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/your-username/mf-crypto-host.git
cd mf-crypto-host
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
```

### 3. Run locally

```bash
pnpm start
# or
npm start
```

> ⚠️ Make sure the `remote_crypto_app` is running and exposed correctly according to your `module-federation.config.ts`.

---

## 🔌 Remote Modules

The following modules are consumed from the remote app:

- `BackgroundWrapper`
- `CryptoDashboard`
- Shared base components

Configuration is located in:

```
module-federation.config.ts
```

---

## ✨ Features

- Real-time cryptocurrency price monitoring
- Integration with external microfrontend via Rspack
- Fully responsive layout
- Dynamically rendered remote screen
- Sass-powered scoped styles
- Minimal, modern dashboard shell with routing

---

## 🙋‍♂️ Author

Made by [@bruno](https://github.com/patricioB00)

