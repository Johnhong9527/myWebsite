// import { access } from 'fs';
('use strict');
// email
// import nodemailer from 'nodemailer';
// import config from '../../config';
const nodemailer = require('nodemailer');
const config = require('../../../config');
module.exports = function(data) {
  return new Promise((resolve, reject) => {
    nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
        // host: '',
        // port: '',
        // secure: '',
        service: 'gmail',
        auth: config.auth,
      });
      let mailOptions = {
        from: config.auth.user,
        to: data.email,
        subject: data.name,
        text: data.name,
        html: '',
        attachments: [
          {
            filename: '',
            path: '../Downloads/' + data.name,
            cid: '00000001',
          },
        ],
      };
      transporter.sendMail(mailOptions, function(err, msg) {
        if (err) {
          // console.log(err);
          reject(err);
          // res.render('index', { title: err });
        } else {
          // console.log(msg);
          resolve(msg);
          // res.render('index', { title: '已接收：' + msg.accepted });
        }
      });
    });
  });
};

// 可行部分

/* */
// console.log('准备发送电子邮件');
// var mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: '',
//     pass: '',
//   },
// });
// var options = {
//   from: '',
//   to: '',
//   // cc         : ''  //抄送
//   // bcc      : ''    //密送
//   subject: '改成你的附件名',
//   text: '改成你的附件名',
//   html: '<h1>改成你的附件名</h1>',
//   attachments: [
//     {
//       filename: 'doc.html', // 改成你的附件名
//       path: 'public/doc.html', // 改成你的附件路径
//       cid: '00000001', // cid可被邮件使用
//     } /*,
//       {
//         filename: 'img2.png',            // 改成你的附件名
//         path: 'public/images/img2.png',  // 改成你的附件路径
//         cid: '00000002'                 // cid可被邮件使用
//       },*/,
//   ],
// };

// mailTransport.sendMail(options, function(err, msg) {
//   if (err) {
//     console.log(err);
//     res.render('index', { title: err });
//   } else {
//     console.log(msg);
//     res.render('index', { title: '已接收：' + msg.accepted });
//   }
// });

// return;
/* */
