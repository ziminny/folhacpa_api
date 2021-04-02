import https from "https"
interface Message {
  app_id:string,
  contents: {en: string},
  included_segments: [string],
  headings: {
    en: string
  }
};

var sendNotification = function(data:Message) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": " Basic YWRkMTM2YWMtZTY2NS00YTk4LTk0NzAtZWUxYjI1MzgyNTE3"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  

  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};



// export default sendNotification(message);
interface Data {
  data: {
    categoryName:string;
  }
}
export default {
  key: 'sendMessageCategoryAdd',
   handle({data:{categoryName}}:Data) {
    console.log("Enviada");
    try {
      const message:Message = { 
        app_id: "4a64a29e-d4c0-4cd9-9a71-68d5394df668",
        contents: {en: `A categoria ${categoryName} foi adicionada a lista`},
        included_segments: ["Subscribed Users"],
        headings: {
          en: "Novidade 😍"
        }
      };
      sendNotification(message)
      
      
    } catch (error) {
      
      console.log(error);
      
    }
  }
}