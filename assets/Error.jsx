import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      <html>
        <head>
          <link rel="preconnect" href="https://rsms.me/"></link>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" ></link>
        </head>
        <body>
          <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </body>
      </html>
    </motion.main>
  );
}