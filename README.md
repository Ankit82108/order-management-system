# 🧩 Order Management System (OMS)

A modern, responsive, and user-friendly **Order Management System UI** built using **React + Tailwind CSS**.
This project simulates a real-world SaaS product with focus on **UX, design system, and usability**.

---

## 🚀 Live Features
https://ankit82108.github.io/order-management-system/

## 🌐 Live Demo


### 📊 Dashboard

* Overview of total orders
* Status breakdown:

  * Pending
  * In Progress
  * Completed
  * Cancelled
* Visual indicators (chart-style UI)
* Clean card-based layout

---

### 📋 Orders Listing

* 🔍 Search (real-time filtering)
* 🎯 Filters:

  * Status
  * Priority
  * Date
* 🔃 Sorting (Latest / Oldest)
* 🏷 Status & Priority badges
* ⚡ Quick actions (View / Delete)
* 📱 Responsive:

  * Table (Desktop)
  * Card view (Mobile)

---

### 📄 Order Detail (Critical Screen)

* Order summary (top section)
* Status badges
* 📈 Timeline / Progress tracker
* 👤 Customer details
* 🧑 Assigned person
* 📝 Notes section
* 📱 Mobile-friendly timeline (vertical)

---

### ➕ Create Order (Step Form)

* Multi-step form (wizard)
* Validation (error states)
* Logical grouping of inputs
* Smart inputs:

  * Dropdowns
  * Date picker
* Success feedback (toast)
* Redirect after submission

---

### 🔔 Notifications Panel

* Activity-based updates
* Grouped (Today / Earlier)
* Read / unread states
* Clean UI hierarchy

---

## 🎨 Design System

Reusable components:

* Button
* Card
* Badge
* Input
* Modal

Ensures:

* Consistent spacing
* Typography scale
* Color system
* Reusable UI patterns

---

## 🌙 Dark Mode

* Fully supported
* Proper contrast handling
* Not just color inversion
* User preference stored (localStorage)

---

## 📱 Responsive Design

* Mobile-first approach
* Optimized screens:

  * Orders list
  * Order detail
* Sidebar adapts for smaller screens

---

## ⚡ UX States Covered

* Loading state (skeleton UI)
* Empty state
* Error state

---

## ✨ Micro Interactions

* Hover effects
* Button feedback
* Smooth transitions
* Sidebar animations

---

## 🛠 Tech Stack

* React (Next.js App Router)
* Tailwind CSS
* LocalStorage (mock data)

---

## 📦 Data Handling

* Mock data (no backend)
* Persistent using `localStorage`
* Supports:

  * Add order
  * Delete order
  * Filter & sort

---

## ⚙️ How to Run

```bash
git clone <your-repo-link>
cd order-management-system
npm install
npm run dev
```

Open: `http://localhost:3000`

---

## 📁 Project Structure

```
components/
  ui/
    Button.tsx
    Card.tsx
    Badge.tsx
    Input.tsx
    Modal.tsx

pages/
  dashboard
  orders
  order-detail
  create-order
  notifications
```

---

## 🚧 Challenges Faced

* Managing consistent design system across screens
* Handling responsive layouts (table → card view)
* Creating reusable components without breaking flexibility
* Implementing smooth UX without backend

---

## 💡 Future Improvements (Optional)

* Kanban board (drag & drop)
* Grid/List toggle
* Backend integration
* Advanced analytics charts

---

## 🎯 Goal

This project was built to demonstrate:

* Real-world SaaS UI thinking
* Strong UX & design skills
* Clean and scalable frontend architecture

---

## 🙌 Author

**Ankit Kumar**

---
