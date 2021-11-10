const template = (name: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>Belike</title>
      <style>
        #header {
          overflow: hidden;
          height: 150px;
          padding: 0px 50px;
        }
  
        #logo {
          float: left;
          width: 300px;
          height: 150px;
        }
  
        #menu {
          float: right;
          width: 600px;
          height: 99px;
        }
  
        #menu a {
          float: right;
          margin: 0px;
          padding: 70px 0px 0px 0px;
          list-style: none;
          line-height: normal;
          display: block;
          letter-spacing: 2px;
          text-decoration: none;
          text-transform: uppercase;
          font-family: 'Archivo Narrow', sans-serif;
          font-size: 1.10em;
          font-weight: 600;
          color: #B6B6B6;
        }
      </style>
    </head>
    <body>
      <div id="header" class="container">
        <div id="logo">
          <img src="https://www.belikesoftware.com/wp-content/uploads/2018/09/belikelogo_.png" />
        </div>
        <div id="menu">
          <a href="#" title="">${name}</a>
        </div>
      </div>
    </body>
  </html>
  `;
};

export default template;
