const electron = require('electron');
const url = require('url');
const path = require('path');

const {app,BrowserWindow,Menu,ipcMain}= electron;
//SET env

//process.env.NODE_ENV = 'production';

let mainWindow;
let addWindow;


//listen for the app to be ready
app.on('ready',function(){
//creat the new mainWindow
mainWindow = new BrowserWindow({
width:1200,
height:1000,
minWidth :770,
mixHeight :800,
backgroundColor: '#1D1F21',
darkTheme :true,
frame:false,

});
mainWindow.loadURL(url.format({
pathname: path.join(__dirname,'index.html'),
protocol:'file',
slashes: true
}));
//close all winsows on close
mainWindow.on('closed', function(){
  app.quit();

});


//build menu from mainMenuTemplate
const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
Menu.setApplicationMenu(mainMenu);


});

//handle add new sub window
function createAddWindow()
{
  //creat the new mainWindow
  addWindow = new BrowserWindow({
    width:200,
    height:200,
    title:'add shoping list item'
  });
  //load html into window
  addWindow.loadURL(url.format({
  pathname: path.join(__dirname,'addWindow.html'),
  protocol:'file',
  slashes: true
  }));

  //garbage collection Handle
  addWindow.on('close',function(){
    addWindow= null;
  });
}

//Catch Item:add from the subwindown and send to the main html
ipcMain.on('item:add' , function(e, item){
  console.log(item);
  mainWindow.webContents.send('item:add' , item);
  addWindow.close();

});



// var remote = require('remote');
//      var BrowserWindow2 = remote.require('mainWindow');
//
//      function init() {
//           Mainwindow.getElementById("min-btn").addEventListener("click", function (e) {
//                var lMainwindow = Mainwindow.getFocusedWindow();
//                lMainwindow.minimize();
//           });
//
//           Mainwindow.getElementById("max-btn").addEventListener("click", function (e) {
//                var lMainwindow = Mainwindow.getFocusedWindow();
//                lMainwindow.maximize();
//           });
//
//           Mainwindow.getElementById("Close-btn").addEventListener("click", function (e) {
//                var lMainwindow = Mainwindow.getFocusedWindow();
//                lMainwindow.close();
//           });
//      };
//
//
//               init();







//Creat the menu template
const mainMenuTemplate =[
{
  label:'File',
  submenu:[
    {label:'Add Item',
    click(){
      createAddWindow();
    }
  },
    {
      label:'Clear items',
      click(){
        mainWindow.webContents.send('item:clear');
        console.log('clear click');
      }

    },
    {
      label:'Quit',
    accelerator:process.platform=='darwin'? 'Command+Q' :'Ctrl+Q',
    click(){
      app.quit();
    }
  }
  ]
},

];
//if mac add empty object to the menu to get of the title electron
if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

//add dev tools if not in production
//if (process.env.NODE_ENV !== 'production')
if (process.env.NODE_ENV !== 'development')
{
  mainMenuTemplate.push({
label:'Developer Tools',
submenu :[
  {
    label:'toggle Dev Tools',
    accelerator:process.platform=='darwin'? 'Command+I' :'Ctrl+I',
    click(item , focusedWindow){
      focusedWindow.toggleDevTools();

    }
  },{
role:'reload',


  }
]

  })

}
