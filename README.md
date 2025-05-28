# 🐶 Fetch Dog Matcher

An adorable React app where users can log in, browse adoptable dogs, filter by breed, zip code, or age, and get matched with their perfect pup — powered by Fetch's take-home API and deployed on AWS.

---

## 🔗 Live Site

👉 Deploy via AWS S3 [http://fetch-frontend-yating-yang.s3-website-us-west-2.amazonaws.com/](http://fetch-frontend-yating-yang.s3-website-us-west-2.amazonaws.com/)

👉 Deploy via CloudFront [https://d1m96gqp7t0yzz.cloudfront.net](https://d1m96gqp7t0yzz.cloudfront.net)

> 📱 Works best on **Chrome** and **Firefox**. Safari may block login due to cookie restrictions.

---

## ✨ Features

- 🔐 Login with name & email (session-based authentication)
- 🐕 Search adoptable dogs with filters:
  - Filter by breed, age range, and ZIP code
  - Multi-select support for breed & ZIP
- 📋 Sort alphabetically (A→Z / Z→A)
- 📄 Paginate search results
- ❤️ Favorite your preferred dogs
- 🔮 Click "Get Match" to receive one best-fit dog
- 📱 Responsive UI for desktop and mobile

---

### 🖥️ Desktop View

<table>
  <tbody>
    <tr>
      <th align="left" colspan="2">🔐 Login Page</th>
    </tr>
    <tr>
      <td align="center" colspan="2">
        <div style="border: 1px solid #ccc; border-radius: 8px; padding: 8px; display: inline-block;">
          <img src="./screenshots/desktop-login.png" width="900" />
        </div>
      </td>
    </tr>
    <tr>
      <th align="left" colspan="2">🐶 Dog Search + Filters</th>
    </tr>
    <tr>
      <td align="center" colspan="2">
         <img src="./screenshots/desktop-search.png" width="900" />
      </td>
    </tr>
    <tr>
      <th align="left" colspan="2">🔮 Match Result</th>
    </tr>
    <tr>
      <td align="center" colspan="2">
        <img src="./screenshots/desktop-match.png" width="900" />
      </td>
    </tr>
  </tbody>
</table>

---

### 📱 Mobile View

<table>
  <thead>
    <tr>
      <th align="center">🔐 Login Page</th>
      <th align="center">🐶 Dog Search</th>
      <th align="center">🦴 Filter</th>
      <th align="center">🔮 Match Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <img src="./screenshots/mobile-login.png" width="200" />
      </td>
      <td align="center">
        <img src="./screenshots/mobile-search.png" width="200" />
      </td>
      <td align="center">
        <img src="./screenshots/mobile-filter.png" width="200" />
      </td>
      <td align="center">
        <img src="./screenshots/mobile-match.png" width="200" />
      </td>
    </tr>
  </tbody>
</table>

---

## 🚀 Tech Stack

| Tech              | Purpose                                   |
|------------------|-------------------------------------------|
| React + MUI      | UI and layout components                  |
| React Router     | Route management                          |
| Axios            | API communication                         |
| AWS S3           | Static file hosting                       |
| AWS CloudFront   | CDN delivery + HTTPS                      |
| Fetch API        | `/auth/login`, `/dogs/search`, `/dogs/match` |

---

## 🛠 Local Setup

```bash
git clone https://github.com/your-username/fetch-dog-matcher.git
cd fetch-dog-matcher
npm install
npm start
