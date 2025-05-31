# HR Employee Management App 👩‍💼👨‍💼

A Single Page Application (SPA) built with **React** that allows you to view, add, and edit employee profiles. The app connects to a **mock backend API** hosted on **Render** using `json-server`.

---

## 🌐 Live Demo

Backend API: [Render JSON Server](https://hr-app-backend-api-3gc8.onrender.com/employees)  
Frontend: [Load Frontend HR](https://react-hr-app-xi.vercel.app)

---

## 🚀 Features

✅ **View Employees**  
Displays a list of employee cards fetched from the JSON API. Each card shows employee details like name, title, salary, contact, skills, and more.

✅ **Add Employee**  
Navigate to the "Add Employee" page to submit a new employee profile.  
All fields are **mandatory** to ensure complete data.

✅ **Edit Employee**  
Click the **Edit** button on a card to update:

- Department
- Location
- Salary
- Skills

Editing shows an inline form pre-filled with current values.  
You can **Save** (sends a `PATCH` request) or **Cancel** the changes.

✅ **Success Feedback**  
On save, a "Data updated successfully" message appears and disappears after 5 seconds.

✅ **Navigation**  
Use **React Router** to navigate between:

- `/` → Employee List
- `/about` → About Page
- `/add` → Add Employee

---

## 📦 Technologies Used

- React + React Router
- JSON Server (mock backend)
- Axios for API calls
- CSS Modules for Styling
- Hosted backend on **Render**
- Will Host frontend in i think Netlify I will update this field **Update this field You will see latere**
