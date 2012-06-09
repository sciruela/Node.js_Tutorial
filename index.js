var server=require("./server");
var router=require("./router");
var requesthandlers=require("./requesthandlers");

var handle={}
handle["/"]=requesthandlers.iniciar;
handle["/iniciar"]=requesthandlers.iniciar;
handle["/subir"]=requesthandlers.subir;

server.iniciar(router.route,handle);
