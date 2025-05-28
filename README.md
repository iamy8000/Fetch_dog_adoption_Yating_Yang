# Fetch Dog Matcher

A responsive React app where users can log in, browse adoptable dogs, filter by breed, ZIP, and age, and get matched with their perfect pup — powered by Fetch's take-home API and deployed on AWS.

## 📚 Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Desktop View](#desktop-view)
- [Mobile View](#mobile-view)
- [Tech Stack](#tech-stack)
- [Local Setup](#local-setup)
- [Safari Limitation](#safari-limitation)

## Live Demo

- **S3 URL**: [http://fetch-frontend-yating-yang.s3-website-us-west-2.amazonaws.com/](http://fetch-frontend-yating-yang.s3-website-us-west-2.amazonaws.com/)
- **CloudFront CDN**: [https://d1m96gqp7t0yzz.cloudfront.net](https://d1m96gqp7t0yzz.cloudfront.net)

> ⚠️ Works best on **Chrome** and **Firefox**. Safari on iOS may block login due to cookie restrictions.

## Features

- Login with name & email (session-based authentication)
- Search adoptable dogs by breed, ZIP code, and age range
- Multi-select filters for breed and ZIP
- Sort alphabetically (A→Z / Z→A)
- Paginate through search results
- Select favorites and generate a match
- Responsive UI design for desktop and mobile

## Desktop View

<table>
  <tbody>
    <tr>
      <th align="left" colspan="2">Login Page</th>
    </tr>
    <tr>
      <td align="center" colspan="2">
        <div style="border: 1px solid #ccc; border-radius: 8px; padding: 8px; display: inline-block;">
          <img src="./screenshots/desktop-login.png" width="900" alt="Desktop Login Page" />
        </div>
      </td>
    </tr>
    <tr>
      <th align="left" colspan="2">Dog Search + Filters</th>
    </tr>
    <tr>
      <td align="center" colspan="2">
         <img src="./screenshots/desktop-search.png" width="900" alt="Desktop Dog Search and Filter" />
      </td>
    </tr>
    <tr>
      <th align="left" colspan="2">Match Result</th>
    </tr>
    <tr>
      <td align="center" colspan="2">
        <img src="./screenshots/desktop-match.png" width="900" alt="Desktop Match Result" />
      </td>
    </tr>
  </tbody>
</table>

## Mobile View

<table>
  <thead>
    <tr>
      <th align="center">Login</th>
      <th align="center">Dog Search</th>
      <th align="center">Filter</th>
      <th align="center">Match Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <div style="border: 1px solid #ccc; border-radius: 8px; padding: 6px; display: inline-block;">
          <img src="./screenshots/mobile-login.png" width="200" alt="Mobile Login" />
        </div>
      </td>
      <td align="center">
        <img src="./screenshots/mobile-search.png" width="200" alt="Mobile Search" />
      </td>
      <td align="center">
        <img src="./screenshots/mobile-filter.png" width="200" alt="Mobile Filter" />
      </td>
      <td align="center">
        <img src="./screenshots/mobile-match.png" width="200" alt="Mobile Match Result" />
      </td>
    </tr>
  </tbody>
</table>

## Tech Stack

| Tech            | Purpose                            |
|-----------------|------------------------------------|
| React + MUI     | UI and layout components           |
| React Router    | Page routing                       |
| Axios           | API communication                  |
| AWS S3          | Static file hosting                |
| AWS CloudFront  | CDN delivery + HTTPS               |
| Fetch API       | `/auth/login`, `/dogs/search`, `/dogs/match` |


## Local Setup

```bash
git clone https://github.com/iamy8000/fetch-dog-matcher.git
cd fetch-dog-matcher
npm install
npm start
