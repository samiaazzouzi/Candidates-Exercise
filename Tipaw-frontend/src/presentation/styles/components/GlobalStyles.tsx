import { css, Global, useTheme } from '@emotion/react';

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
        :root {
          --toastify-toast-width: 400px;
          --toastify-text-color-light: ${theme.color.dark.default};
        }
        html,
        body {
          margin: 0;
          word-break: break-word;
          width: 100%;
          height: 100%;
          padding: 0;
          font-weight: 400;
          font-size: 16px;
          font-family: ${theme.font.default};
          color: ${theme.color.dark.default};
          -webkit-font-smoothing: antialiased;
        }
        #root {
          height: 100%;
        }
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        textarea:focus,
        input:focus {
          outline: none;
        }
        input,
        select,
        textarea,
        button {
          font-family: inherit;
          border-radius: 0px;
          background-color: transparent;
          border: none;
          outline: none;
          text-decoration: none;
          display: block;
          box-shadow: none;
          font-weight: 400;

          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          appearance: none !important;
          background-clip: padding-box;
        }

        input:disabled,
        textarea:disabled {
          opacity: 1;
        }

        input {
          color: ${theme.color.dark.default};
          opacity: 1; /* required on iOS */
        }

        *::placeholder {
          color: ${theme.color.medium.default};
        }

        a {
          text-decoration: none;
          cursor: pointer;
          color: ${theme.color.blue.default};
          font-weight: 700;
        }
        .a-reset {
          color: ${theme.color.dark.default};
          font-weight: 400;
        }
        strong {
          font-weight: 600;
        }

        .Toastify__toast-body {
          padding: 20px 10px;
          font-weight: 400;
          font-size: 16px;
          font-family: ${theme.font.default};
          position: relative;
        }

        .Toastify__toast {
          border-radius: 10px !important;
        }

        .highlighter {
          color: ${theme.color.blue.default};
          background: transparent !important;
          text-decoration: underline;
        }

        .read-more-button {
          color: ${theme.color.blue.default};
          font-weight: 500;
          cursor: pointer;
          font-weight: 600;
          margin: 5px;
          display: inline-block;
        }

        .leaflet-popup-content {
          font-family: ${theme.font.default};
          font-weight: 400;
          color: ${theme.color.dark.default};
          font-size: 14px;
          position: relative;
        }

        .pagination {
          display: flex;
          justify-content: center;
          list-style: none;
          margin-top: 20px;
          padding: 0;
         }
         
         .pagination a {
          cursor: default;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #6c7ac9;
          color: #6c7ac9;
          margin-left: 10px;
         }
         
         .pagination li:not(.disabled) a:hover {
          background-color: bisque;
          cursor: pointer;
         }
         
         .pagination li a {
          font-weight: bold;
         }
         
         .pagination li.active a {
          color: #fff;
          background: #6c7ac9;
         }
         
         .pagination li.disabled a {
          pointer-events: none;
          color: rgb(198, 197, 202);
          border: 1px solid rgb(198, 197, 202);
         }
         .prof-image {
          width: 18rem
         }
         .pagniation-container {
           text-align: center
         }
      `}
    />
  );
};
