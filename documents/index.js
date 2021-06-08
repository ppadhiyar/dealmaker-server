module.exports = ({ firstname, lastname, phonenumber }) => {
  const today = new Date();
  return (
    `
  <!doctype html>
  <html>
     <head>
        <meta charset="utf-8">
        <title>PDF Result Template</title>
        <style>
           .container {
           max-width: 800px;
           margin: auto;
           padding: 30px;
           border: 1px solid #eee;
           box-shadow: 0 0 10px rgba(0, 0, 0, .15);
           font-size: 16px;
           line-height: 24px;
           font-family: 'Helvetica Neue', 'Helvetica',
           color: #555;
           }
           .margin-top {
           margin-top: 50px;
           }
           .justify-center {
           text-align: center;
           }
           .container table {
           width: 100%;
           line-height: inherit;
           text-align: left;
           }
           .container table td {
           padding: 5px;
           vertical-align: top;
           }
           .container table tr td:nth-child(2) {
           text-align: right;
           }
           .container table tr.top table td {
           padding-bottom: 20px;
           }
           .container table tr.top table td.title {
           font-size: 45px;
           line-height: 45px;
           color: #333;
           }
           .container table tr.information table td {
           padding-bottom: 40px;
           }
           .container table tr.heading td {
           background: #eee;
           border-bottom: 1px solid #ddd;
           font-weight: bold;
           }
           .container table tr.details td {
           padding-bottom: 20px;
           }
           .container table tr.item td {
           border-bottom: 1px solid #eee;
           }
           .container table tr.item.last td {
           border-bottom: none;
           }
           .container table tr.total td:nth-child(2) {
           border-top: 2px solid #eee;
           font-weight: bold;
           }
           @media only screen and (max-width: 600px) {
           .container table tr.top table td {
           width: 100%;
           display: block;
           text-align: center;
           }
           .container table tr.information table td {
           width: 100%;
           display: block;
           text-align: center;
           }
           }
        </style>
     </head>
     <body>
        <div class="container">
           <table cellpadding="0" cellspacing="0">
              <tr class="top">
                 <td colspan="2">
                    <table>
                       <tr>
                          <td class="title"><img  src="https://webfiles.thecse.com/dealmaker-logo-dark.png?5dYKZSfwKxnBbKmFOgG29f37bn64mvZ5"
                             style="width:100%; max-width:156px;"></td>
                          <td>
                             Date: ${`${today.getDate()}. ${
                               today.getMonth() + 1
                             }. ${today.getFullYear()}`}
                          </td>
                       </tr>
                    </table>
                 </td>
              </tr>
              <tr class="information">
                 <td colspan="2">
                    <table>
                       <tr>
                          <td>
                             First name: ` +
    firstname +
    `</td>
                       </tr>
                       <tr>
                          <td>
                             Last name: ` +
    lastname +
    `</td>
                       </tr>
                       <tr>
                          <td>
                             Phone Number: ` +
    phonenumber +
    `</td>
                       </tr>
                    </table>
                 </td>
              </tr>
           </table>
           <br />
        </div>
     </body>
  </html>
  `
  );
};
