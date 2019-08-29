const { app, BrowserWindow, ipcMain, remote } = require('electron');
var robot = require("robotjs");
let result;
let nomeR;

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  function sort() {
    let json = ["Não é a linguagem de programação que define o programador, mas sim sua lógica.", "Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero.", "Faça da sua vida mais \"Responsivo\"\n- Dica para Programadores de Sistemas.", "Programador: “É simples, pode ser composto. Se firma no concreto e torna-se, abstrato.”", "PRECISO MUITO DE UM TRABALHO FORMAL - ATÉ MESMO DE DIGITADOR, AINDA QUE SEJA PROGRAMADOR EM HTML E FLASH, ALÉM DE DESIGNER GRÁFICO COM SÓLIDA FORMAÇÃO PELA SEVEN COMPUTAÇÃO GRÁFICA, ONDE CURSEI COMPUTAÇÃO GRÁFICA POR MAIS DE TRÊS ANOS. TENHO 28 ANOS.", "Imagine um programador de software com idéias pré-estabelecidas... Ele Cria o ambiente, as personagens e a estória, já está com tudo imaginado e pronto, e insere você nisso como um de seus personagens curiosos........", "É certo que um programador saiba unir cabos, melhor quando os corticoides humanos temporais sejam sentidos a dedo.", "A vida ai de due é assim, um louco, um poeta, try alquimista, um louco, um programador se metendo sem poeta, true artista, não importando quem é o, sem coragem não é à ti se vista.", "Mesmo que eu seja um programador, na vida, não acredito em lógica condicional. Mesmo conseguindo escrever o algoritmo, jamais conseguiremos executá-lo e explorar os dois argumentos, pois o tempo não retrocede.", "Aproveite enquanto vive como programador no planeta, pois a tecnologia avança de uma forma gradativamente nos transformando em um ser burro.", "Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão.", "Programador não é astronauta e escritor não é médico e, é melhor agente mesmo o fazer.", "Linguagens não morrem mas sim seus programadores.", "O resultado do programa é relativo o nível de conhecimento do programador.", "Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.", "Em se tratando de Tecnologia da Informação ao teclarmos a barra de espaço, para um mecânico de automóveis, sempre será um espaço vazio. Para um programador é um dado a mais para ser armazenado.\nPara chegar no senso comum, é necessário estar no mesmo patamar de conhecimento.", "Reinventando conteúdo.", "Pra mim, tudo é um desafio que pode ser descoberto."];
    let math = Math.floor(Math.random() * json.length - 2);
    return json[math];
  }

  // function name (){
  //     // ipcMain.on("tes",(event, args)=>{

  //     //     b = args.nome;
  //     //     return "test";

  //     // })
  //     win.webContents.executeJavaScript('clearInterval(interval);var nome = document.querySelectorAll("._1F9Ap"); nome.forEach((value, index)=>{ if(index == nome.length-1){ ipcRenderer.send("test",{nome:value.innerText}); } })');
  //     // return "ok"

  //     }

  function rec() {
    ipcMain.on("tes", (event, args) => {
      if (args.status) {
        args.status = false;
        result = sort() || "error";
        robot.typeString(result);
        robot.keyTap("enter");
      }
    })
    win.loadURL('https://web.whatsapp.com/send?phone=5541992058894&amp&text=', { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36' })
    win.webContents.executeJavaScript('const {ipcRenderer, remote} = require("electron");let interval = setInterval(() => {let all = document.querySelectorAll("._12pGw span");all.forEach((value,index)=>{ if(index== all.length-1){ let spli = value.innerHTML; spli = spli.split("-");if(spli[0] == "Ergobot"){ ipcRenderer.send("tes",{status:true,nome:"te"})} } }); }, 3000)');

  }



  //   function tesst(){
  //     // win = new BrowserWindow({
  //     //   width: 800,
  //     //   height: 600,
  //     //   webPreferences: {
  //     //     nodeIntegration: true
  //     //   }
  //     // });
  //     result = sort() || "error";
  //     win.loadURL('https://web.whatsapp.com/send?phone=5541992058894&amp&text=',+result,{userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'})
  //     win.webContents.executeJavaScript('const {ipcRenderer, remote} = require("electron"); function rep(){ setTimeout(() => { ipcRenderer.send("testt",{status:true}); }, 1000); } setInterval(() => { let test = document.querySelector("._3M-N-"); let text = document.querySelector("._3u328"); let all = document.querySelectorAll("._12pGw span"); test.click(); rep(); }, 5000);')

  // }
  rec();
  //    ipcMain.on("testt",(event, arg)=>{
  //       if(arg.status){
  //         arg.status = false;
  //           rec()
  //         // win.on('closed',()=>{
  //         //   rec();
  //         // });
  //         // win.on('hide',()=>{
  //         //   win.webContents.executeJavaScript('window.alert("test")');
  //         //   win.close();
  //         // }); 
  //         // win.hide();
  //       }
  //   })
}
app.on('ready', createWindow);
