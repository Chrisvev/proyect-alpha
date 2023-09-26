import React, { useState } from "react";
import "../stylesheets/Home.css";

function Home() {
  return (
    <div className="container-home">
      <div className="container-logo">
        <svg
          fill="black"
          className="svg-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="25.278 135.433 1248.358 453.222"
        >
          <path
            d="M208.6 135.5c3 1.4 4.9 4.3 7.3 6.6 3.9 3.4 6.801 7.9 10.601 11.4 4.7 4.5 7.7 10.2 11.6 15.3 6.8 10.3 12.8 21.3 15.9 33.3 3.2 8.2 3.7 17.1 3.5 25.9.2 8-2 15.9-5.601 23.1-6.199 10.9-17.399 18.2-29.1 22.1-14.6 3.5-30.7 4.1-44.8-2.1-5.101-2.8-10.9-4.7-15-9.1-9.5-7.8-15-20.5-13.2-32.8 2.8-21.9 15.9-40.7 29.9-56.9 1.3 2.4.199 5.2 1.1 7.7 1.2 5.3 3.1 10.9 7.1 14.7 4.9-4.5 10.101-9 14.301-14.2 3.8-5.6 6.899-11.8 8.199-18.4.301-8.4 1.101-17.2-2.1-25.2l.3-1.4zM25.4 235.4c23.4.2 46.9-.2 70.301.2 0 23.3.199 46.6-.101 69.9 16.601.3 33.2.1 49.9.1.2 1.8.3 3.6.3 5.4-.2 19.2.1 38.3-.2 57.5-16.7.2-33.3 0-50 .1.3 34.5-.1 68.9.2 103.4.6 3 1 6 .9 9.1-.301 2.801 1.399 5.101 2 7.7 1.3 6 4.6 11.4 8.399 16.101 5.601 5.6 12.8 9.5 20.5 11.199 7 1.101 14 1.7 21.101 1.2.399 1.2.6 2.4.6 3.7-.1 18-.1 36 0 53.9 0 2.5-.5 5-.9 7.399-10.1 0-20.199.7-30.3 0-6-1.3-12.399-.7-18.2-3.3-16.1-3.8-31.5-11.8-43-23.9C40 538.8 30.9 515.8 27.2 493c-1-2.5-.4-5.4-.801-8.1-1.399-5.5-.8-11.301-1-16.9-.099-77.5-.099-155.1.001-232.6zM367 300.2c4.199-1.1 8.699-.3 12.899-1.2 8.8-1.1 17.5.3 26.2.6 6.1-.1 12 1.7 18 2.9 22.3 5.4 43.4 17.3 58.7 34.7 2.7 4.5 6.8 7.8 9.399 12.4 6.5 10.3 10.801 21.8 14.5 33.4 2.301 8.5 3.5 17.3 4.601 26 .5 19.3.2 38.7.3 58-.1 38.5.1 77-.1 115.5-23.4-.3-46.7-.1-70-.2-.2-.1-.7-.5-.9-.7-.1-53.899 0-107.8 0-161.6.1-6.6-1.1-13-2.5-19.3-2.5-6.4-5.7-12.5-10.1-17.7-2.601-3.1-6.2-5.1-9.101-7.8-4.5-3-9.8-4.4-14.899-5.8-2.7-.2-5.4 0-7.9-.9-10.7-.7-21.6.2-31.6 4.3-7.301 3.5-14.101 8.3-18.9 15-7.9 9.4-10.5 22.2-10.3 34.2 0 53.4.1 106.9 0 160.3-23.601.2-47.2-.1-70.8.2-.4-51.5 0-103.1-.2-154.6.1-6.601-.1-13.2.4-19.801 1.3-3.3.399-6.899 1.399-10.1 1.8-12.2 6.4-23.8 11.5-34.9 5-9.7 11-19 18.8-26.7 6.101-6.2 12.4-12.7 20.101-17C331.4 309 349 302.7 367 300.2zM1205 299.6c8.699-.2 17.3-1.9 26-.5 4.699.6 9.5.5 14.199.7.9 8.7.2 17.5.4 26.2v35c0 2.2.3 4.5-.6 6.6-2.301-1.699-5.4-1.1-8-1.8-10.601-.899-21.5-.399-31.5 3.601-11.9 4.1-22.301 12.8-28.101 24.1-1.7 2.1-1.7 5.1-3.6 7.1-3.101 11.2-3.3 22.9-3.101 34.4-.1 49.2.301 98.3-.199 147.5-23.301-.3-46.7 0-70.101-.2-.2-.2-.5-.6-.7-.8v-160.5c-.3-6.7 1.2-13.2 1.101-19.8 1.6-3.2 1.2-6.9 2.2-10.2 5-25.3 18.3-49.2 38.5-65.5 3.899-4.4 9.5-6.5 14.1-10C1170.5 306.4 1187.8 302 1205 299.6zM168.5 305.5c23.6.4 47.2-.1 70.8.2 0 91.5-.1 182.899 0 274.3 0 .9 0 2.7-1.4 2.4h-69.199c-.601-15.1-.101-30.3-.301-45.4.1-77.1 0-154.3.1-231.5zM909 491.1c6-2.3 11.8-5.3 17.899-7.399 8.8-3.4 17.4-7.5 26.2-10.9 18.2-8.399 37-15.399 55.4-23.3 4.399-2.4 9.399-3.5 13.699-6.1 4.9-1.9 9.801-3.601 14.601-5.801 4.2-2.5 9-3.5 13.3-5.699 5.7-2.301 11.2-4.9 17-7 5.9-3.301 12.5-4.9 18.4-8.101 1.6-1.1 4.199-.8 5.199-2.7-1.699-2.399-.8-5.399-1.699-8-1.301-4.699-2.601-9.3-3.7-13.899-4.5-13.9-11-27.2-19.8-38.8-10.7-15.5-25.4-28-41.7-37.2-10.7-6.5-22.7-10.2-34.7-13.4-7.4-.9-14.5-3.5-22-3.4-6.8-.9-13.8-1.3-20.5-.1-11.9.2-23.3 3.1-34.6 6.4-19.7 6.9-38.4 17.4-53.5 31.9-4.5 4.2-8.2 9.1-12.5 13.4-6.7 8.6-12.801 17.7-17.4 27.5-6.5 14.7-12.7 30.1-13.4 46.4-2.199 7.8-1.5 16-1.6 24-.2 5.1.6 10.1 1.6 15-.3 5.199 1.7 10 2.4 15 1.7 10.6 6.4 20.399 10.7 30.199 11.8 24.2 30.399 45.2 53.7 58.9 15.3 9.4 32.3 16.1 50.1 18.6 14.5 2.301 29.4 2.7 44 .801 5 .399 9.8-1.801 14.8-2.101 21.3-5 42.2-14 58.3-29.1 4.801-3.8 9.301-8.3 13.101-13.101 6.399-6.5 11-14.399 15.6-22.199 4.4-8.301 8-17.101 10.601-26.2-1.4-.601-3-.4-4.4-.4-23.4.101-46.7-.1-70.1 0-2.2 0-2.2 3-3.601 4.2-4 5.8-9.1 10.7-14.5 15.3-7.8 5.601-17 8.601-26.1 11.3-2.4.301-4.7.2-6.9 1.101-5.6.399-11.3.2-17 .1-6.3-1.2-12.6-2.6-18.7-4.6-9.399-4.8-18.6-10.3-25.699-18.101-1.801-2.199-4.7-3.899-5.301-6.8 1.601-.7 3.101-1.8 4.9-2.1 2.9-.5 5.099-2.8 7.9-3.6zm-28.801-50.6c-1.399-3.5-.1-7.6-.3-11.3 1.601-5.101 2.101-10.5 4-15.601 4.8-11.3 10.7-22.399 19.3-31.3 4-3.3 7.4-7.3 12-9.8 3.4-1.8 6.7-3.8 10.2-5.4 6.5-1.899 12.8-4.899 19.601-4.899 6.199-1.5 12.6-.7 18.899-.601 16.5 2.301 33.101 9.4 43.8 22.5 1.101 2.601-2.6 2.801-4.1 3.801-6.5 3.6-13.8 5.399-20.3 9.1-2.9.5-5.4 2.3-8.2 3.2-20.7 9-41.8 16.899-62.3 26.3-10.999 4.3-21.899 8.9-32.6 14zM805.699 183.3c-21.899-.2-43.8 0-65.699-.1-1.601.2-3.5-.5-4.801.7.2 47 0 94.1.101 141.1-.101 1.7.3 3.4-.4 5-2-.3-3-2.2-4.5-3.3-10.1-8.7-21.399-16.1-34-20.4-8.5-3.3-17.399-5-26.399-6.6-10.2-.2-20.5-.5-30.801.1-1.1.3-2.1.6-3.199.7-22.9 3.2-44.301 13.9-61.9 28.6-9.8 9.2-19.6 18.8-26.5 30.4-8.1 11.5-13.3 24.7-18.3 37.7-2.3 8.2-4.601 16.3-5.601 24.7-1.9 12.9-1.1 26.1-.9 39.1.5 3.4 1.6 6.6 1.7 10 1.8 11 5 21.8 9.399 32.1 3.7 9.9 9.7 18.9 15.2 27.9 3.9 5 7.7 10.2 12.4 14.6 7 6.9 13.899 14.4 22.699 19.2 10.4 7.9 22.7 12.601 34.7 17.2 4.4.8 8.5 3.3 13 3.4 3.8.3 7.3 2.1 11.101 1.899 2-.2 3.8 1.2 5.899 1 9.7.3 19.5.3 29.2 0 1.6 0 3.2-.7 4.9-.8 6.699.1 12.899-2.5 19.399-3.4 8.5-3.1 17.601-5.1 25.5-9.699 11.7-5.4 22.3-13 31.8-21.601 12-10.399 21.7-23.399 28.9-37.6 3.1-6.3 6.6-12.4 8.6-19.2 3.801-9.4 5.5-19.4 6.801-29.3 2.199-8.7 1.5-17.8 1.699-26.8.002-85.499.002-170.999.002-256.599zM734.6 454.1c-.6 10.601-4.6 20.7-9.3 30.2-7.9 14.9-21.2 26.3-36.3 33.5-2.301 1.2-5.301 1.101-6.9 3.3-2.8 0-5.6.101-8.3 1.101-8.601.2-17.5 1-25.9-1.4-3.6-1.7-7.6-2.399-11.2-4.3-4.5-2.5-9.6-4.2-13.3-8-7-4.9-12.399-11.6-17.3-18.5-3.9-6.7-7.8-13.6-9.6-21.2-2-4-1.801-8.5-2.9-12.7-.3-10.699-.9-21.699 1.6-32.1 1.101-3.3 1.801-6.8 3-10.1 2.9-5.301 4.7-11.2 8.5-16 2-4.2 5.5-7.301 8.301-10.9 7.5-8.6 17.8-14.1 28.199-18.4 3.9-.899 7.7-2.899 11.801-2.899 8.3-2.101 16.899-.4 25.1 1.1 10.8 3.9 21.5 9.3 29.9 17.3 3.1 2.9 5.399 6.5 8.5 9.4C731.3 410.7 737.199 432.8 734.6 454.1zM1204.4 547.3h26.2c.1 2 .1 4 0 6-3 .4-6-.1-8.9.3-.399 9 0 17.9-.199 26.9-2.7-.2-5.4-.2-8-.1-.301-7.101-.2-14.301-.101-21.4 0-1.9.4-4.1-1.3-5.4-2.6-.399-5.2.101-7.8-.3-.101-2-.101-4 .1-6zM1235.4 547.4c3.7-.101 7.4-.301 11.101.199-.2 2.9 2.199 4.9 2.899 7.601 1 3.399 2.5 6.6 3.5 10 .8 1.5 2.2 2.8 1.7 4.7 2-7.801 5.1-15.2 8.2-22.5 3.5-.101 7.1-.2 10.7 0 .199 10.699 0 21.6 0 32.3-2.4.2-4.801.2-7.301 0 .101-7.5 0-15 .2-22.4-.899.8-1.8 1.5-2.5 2.5-1.3 6.8-4.8 13-6.5 19.8-2 .301-3.899.301-5.899.101-.601-3.8-3.301-6.9-3.301-10.8-2.699-3.301-2.8-8-4.899-11.7-1.4 2.7-.3 5.899-.601 8.8-.399 4.7.5 9.5-.399 14.2-2.4 0-5.101.8-7-.9.3-10.601 0-21.201.1-31.901z"
            fill="#df4723"
            stroke="#df4723"
            stroke-width=".094"
          />
        </svg>
      </div>
      <div id="profile">
        <ul>
          <li>
            <a href="#">
              <img
                src="https://static-00.iconduck.com/assets.00/bust-in-silhouette-emoji-1963x2048-3pisyxs1.png"
                alt="Profile"
                onClick={toggleProfile}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://img.freepik.com/free-icon/chat_318-886151.jpg?w=360"
                alt="Messages"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
