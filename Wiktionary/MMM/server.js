var express=require('express');
var bodyParser=require("body-parser");
var requestapi = require('request'); 
http = require('https')
//mongoose.connect('mongodb://localhost/serverdb');
var app=express();
var router = express.Router()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var resultMeaining;
var word;
var Whole;
var noun="===Noun===";
var adjective="===Adjective===";
var interjection="===Interjection===";
var interjectionStart='|';
var end='.'
var start='#'
var send="";
var result="";
var match="==="
var DATA="";


function insertDB(w,m){

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/Database';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 insertDocuments(db, function() {
    db.close();
  });
  db.close();
});

var insertDocuments = function(db, callback) {
  // Get the documents collection 
  var collection = db.collection('ServerTable');
  // Insert some documents 
  collection.insert([
    {"Word" : w, "Meaning" : m}],
  function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
    console.log("Inserted 2 documents into the document collection");
    callback(result);
  });
}


}

	function getDocument(){
		console.log("1");
		var MongoClient = require('mongodb').MongoClient
		  , assert = require('assert');
		 
		// Connection URL 
		var url = 'mongodb://localhost:27017/Database';
		// Use connect method to connect to the Server 
		MongoClient.connect(url, function(err, db) {
		  assert.equal(null, err);
		  console.log("Connected correctly to server");
		 getDocuments(db, function() {
		    db.close();
		  });
		  db.close();
		});

		var getDocuments= function(db, callback) {
  // Get the documents collection 
  var collection = db.collection('ServerTable');
		 collection.find({},{"Word":1,"_id":0,"Meaning":1}).toArray(function(err, items) {
               // console.log(items);
              // callback(items);
            // DATA=items;
             return items;
             //console.log("items "+items);
            
                
             });



		}

		

}



app.use('/get',function(req,res){
	console.log("I am");
 //  DATA=	getDocument();
 var MongoClient = require('mongodb').MongoClient
		  , assert = require('assert');
		 
		// Connection URL 
		var url = 'mongodb://localhost:27017/Database';
		// Use connect method to connect to the Server 
		MongoClient.connect(url, function(err, db) {
		  assert.equal(null, err);
		  console.log("Connected correctly to server");
		 getDocuments(db, function() {
		    db.close();
		  });
		  db.close();
		});

		var getDocuments= function(db, callback) {
  // Get the documents collection 
  var collection = db.collection('ServerTable');
		 collection.find({},{"Word":1,"_id":0,"Meaning":1}).toArray(function(err, items) {
               // console.log(items);
              // callback(items);
            // DATA=items;
            console.log("NEW "+items)
             res.send(items);
             //console.log("items "+items);
            
                
             });



		}

	//console.log("DATA "+DATA);
	//res.send(DATA);

});


app.use('/api',function (request, response) {
	Whole=request.body.Whole;
	word=request.body.word;
	console.log("WORD "+word);
	send="";
	result="";
	resultMeaining=" ";
	if(Whole.includes(noun))
	{
		
		var find="Noun";
		var nounIndex=Whole.search(noun);
		//console.log("nounIndex "+nounIndex);
		var nounString=Whole.slice(nounIndex);
		var nounStartIndex=nounString.indexOf(start);
		//console.log("nounString "+nounString);
		var nounString1=nounString.substring(nounStartIndex);
		 if(nounString1.includes(match)){
                    var i2=nounString1.indexOf(match);
                    // System.out.println(i2);
                    var r2=nounString1.substring(i2);//error
                    var main=nounString.substring(nounStartIndex, nounStartIndex+i2);
                    //   System.out.println(main);
                    var i4=main.indexOf(end);
                    //  System.out.println(main.substring(0, i4+1));
                    result=main.substring(0, i4+1);
                }
                else{
                    var i4=nounString1.indexOf(end);
                    //  System.out.println(main.substring(0, i4+1));
                    result=nounString1.substring(0, i4+1);
                }
               // console.log(result)
		//var nounLastIndex=nounString.indexOf(end);
		//console.log("nounLastIndex "+nounLastIndex);
	//	nounString=nounString.slice(nounStartIndex,nounLastIndex+1);

		//console.log(nounString);
		//var xxx=nounString.replace(/[^a-zA-Z0-9.\\[\\]|,;}]/g, "");
		//console.log("XXX "+xxx);

	resultMeaining+=	display(result,find);
	//console.log("ADD1 "+add);
	//	resultMeaining=		resultMeaining.concat(add);
			//console.log("ADD11 "+resultMeaining);
	//console.log("BACK")
	
	}
	 if(Whole.includes(adjective))
            {    
            	var find="Adjective";
            	var result;
                var adjectiveIndex=Whole.indexOf(adjective);
                var r1=Whole.substring(adjectiveIndex);
                var i3=r1.indexOf(start);

                var out=r1.substring(i3);

              /*  int i2=out.indexOf("===");
                //    System.out.println(i2);
                String r2=out.substring(i2);
                String main=r1.substring(i3, i3+i2);

                int i4=main.indexOf(".");
                //  System.out.println(i4);
                //  System.out.println(main.substring(0, i4+1));
                result=main.substring(0, i4+1);*/
                if(out.includes(match)){
                    var i2=out.indexOf(match);
                    // System.out.println(i2);
                    var r2=out.substring(i2);//error
                    var main=r1.substring(i3, i3+i2);
                    //   System.out.println(main);
                    var i4=main.indexOf(end);
                    //  System.out.println(main.substring(0, i4+1));
                    result=main.substring(0, i4+1);
                }
                else{
                    var i4=out.indexOf(end);
                    //  System.out.println(main.substring(0, i4+1));
                    result=out.substring(0, i4+1);
                }
              resultMeaining+=	display(result,find);
		//resultMeaining=	resultMeaining.concat(add);
			
	//console.log("ADD2 "+add);
		
			//console.log("ADD21 "+resultMeaining);

            }

            if(Whole.includes(interjection))
            {   var result;
            	find="Interjection";
                var interjectionIndex=Whole.indexOf(interjection);
                var r1=Whole.substring(interjectionIndex);
                var i3=r1.indexOf(interjectionStart);

                var out=r1.substring(i3);
                //  System.out.println(out);
                if(out.includes(match)){
                    var i2=out.indexOf(match);

                    var r2=out.substring(i2);//error
                    var main=r1.substring(i3, i3+i2);

                    var i4=main.indexOf(end);

                    result=main.substring(0, i4+1);
                }
                else{
                    var i4=out.indexOf(".");

                    result=out.substring(0, i4+1);
                }

               resultMeaining+=	display(result,find);
		//resultMeaining=		resultMeaining.concat(add);
			
	//console.log("ADD3 "+add);
			
			//console.log("ADD31 "+resultMeaining);
            }
            	//console.log("SEND")
            	resultMeaining=resultMeaining.replace(/form/g,"");
            	resultMeaining=resultMeaining.replace(/ofShortened/g,"");
            	//console.log("Wrong "+resultMeaining)
            	if(resultMeaining!=" "){
	 			response.send(resultMeaining);
	 			insertDB(word,resultMeaining);
				}
				else
				{	console.log('HSU');
					response.send("<h4 style=color:red>Word Not Found in DataBase!</h4>")
				}
	// insertDB(word,resultMeaining);
	//console.log("GJU "+resultMeaining);
	//console.log("done");
   

});
function display(result,find){
	send="";
	 var fword;
	 result=result.trim();
	 
        var dump=result;
     	console.log("Result "+result)
        if(result!=""){
        	console.log("Result "+result)
        	send+="<h4>"+find+"</h4>"
            result=result.replace(/lang=en/g,"");
         //	console.log("1 "+result);
            var ts;
            if(result.includes("[[")||result.includes("{{"))
            {	dump=dump.replace(/[^a-zA-Z0-9.\[\]|,;}\s*]/g,"").trim();

          			//console.log("2 "+dump);
                if(dump.startsWith("[["))
                {
                    var i=result.indexOf("[[");
                    var j=result.indexOf("]]");
                    fword=result.substring(i,j);
                    var k=fword.indexOf('|');
                    fword=fword.substring(k+1);
                    //System.out.println("First Word "+fword);
                    //System.out.println("FIND "+result);
                    result=result.substring(j+2);
                    //	System.out.println("FIND "+result);
                    result=fword.concat(result);
                    result=result.replace('|',' ');
                    //	console.log("3 "+result);

                }
                else
                {
                    //System.out.println("Esle called "+result);
                    dump=dump.replace(/[^a-zA-Z0-9.\[\]|,;}\s+]/g,"").trim();
                 //   console.log("4 "+dump);
                    var arr=new Array(dump.split(" "));
                  /*  for(var aa=0;aa<arr.length;aa++)
                    {
                    	console.log(arr[aa]);
                    }*/
                    for(var aa=0;aa<arr.length;aa++)
                    { 

                        if(arr[aa].includes("[[")&&arr[aa].includes("|"))
                        {
                            //System.out.println(arr[aa]);
                            var min=arr[aa];
                            //System.out.println("MINNN "+min);
                            var x=min.indexOf("[[");
                            var y=min.indexOf("|");
                            min=min.substring(y+1);
                            //System.out.println(min);
                            result=result.replace(arr[aa], min);
                        }
                    }
                    result=result.replace('|',' ');
                  //  console.log("5 "+result);
                }
            }

             if(result.includes("}}"))
            {
                var resultindex=result.indexOf("}}");
                //	 System.out.println(resultindex);
                result=result.substring(resultindex);
              //  console.log("6 "+result);
            }

            result = result.replace(/[^a-zA-Z0-9.,;\s+]/g, "");
            result=result.replace(/[;]/g,".\n");
             //console.log("7 "+result);

            //  result.endsWith(".");
            // System.out.println(result);
            var newline=0;
            for(var i=0;i<result.length;i++)
            {
                if(result.charAt(i)=='\n')
                {
                    newline++;
                }
            }

            // System.out.println("New Line "+newline);
            for(var i=0;i<newline;i++)
            {
                var nn=result.indexOf("\n");
                // System.out.println("First line "+nn);
                var res=result.substring(0,nn);
                result=result.substring(nn+1);
                // System.out.println(res);
                send+=res+"<br>";
            }
            var nn=result.indexOf("\n");


            result=result.substring(nn+1);
            send+=result+"<br>";
          //  console.log("SEND "+send);
            // System.out.println(result);
          /*  fword=fword.trim();
                if(!fword.isEmpty())
                {

                    fword=fword.concat(" ");
                   // send=fword+send;
                   send=fword.concat(send);

                   // System.out.println("Called");
                    return send;
                }*/
                 console.log("send "+send);
                 return send;

        }
        else {
           
            return "";
        }

       



	
}




   
  
    





app.listen(13000, function () {
    console.log("Started on PORT 13000");
});