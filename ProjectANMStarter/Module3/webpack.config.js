var path = require('path');
var SRC_DIR3 = path.join(__dirname, './client/src');
var DIST_DIR3 = path.join(__dirname, './client/src/dist');

// var SRC_DIR2 = path.join(__dirname, './Module2/client/src');
// var DIST_DIR2 = path.join(__dirname, './Module2/client/src/dist');

// var SRC_DIR3 = path.join(__dirname, './Module3/client/src');
// var DIST_DIR3 = path.join(__dirname, './Module3/client/src/dist');

module.exports =[
  // { 
  // mode: 'development',
  // entry: `${SRC_DIR1}/index.jsx`,
  // output: {
  //   filename: 'bundle.js',
  //   path: DIST_DIR1
  // },
  // module: {
  //   loaders : [
  //     {
  //       test : /\.jsx?/,
  //       include : SRC_DIR1, //??
  //       loader : 'babel-loader',      
  //       query: {
  //         presets: ['react', 'es2015']
  //       }
  //     }
  //   ]
  // }}];
// }, {
//   mode: 'development',
//   entry:`${SRC_DIR2}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR2
//   },
//   module: {
//     loaders : [
//       {
//         test : /\.jsx?/,
//         include : SRC_DIR2, //??
//         loader : 'babel-loader',      
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// },
  {
    mode: 'development',
    entry: `${SRC_DIR3}/index.jsx`,
    output: {
      filename: 'bundle.js',
      path: DIST_DIR3
    },
    module: {
      loaders : [
        {
          test : /\.jsx?/,
          include : SRC_DIR3, //??
          loader : 'babel-loader',      
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
  }}]


  
