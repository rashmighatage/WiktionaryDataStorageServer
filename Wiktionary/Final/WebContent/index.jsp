<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html >
  <head>
    
    <title>Wiktionary Data Storage</title>
    <link rel="stylesheet" type="text/css" href="css//pro.css">
     <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
     <script type="text/javascript">
       function validate(){
    	//   window.location="Show.jsp";
    	   document.location.href="/Final/ShowServlet1";
   		   //window.location="Show.jsp";
         }
       function validate1(){


   		window.location="Search.jsp";
       }
       </script>
    
  </head>
  
 <body >

  <header>
  <div class="jumbotron text-center">
  <h1 style="color: red"><b>Wiktionary Data Storage</b></h1></header>
  </div>
  </header>
  

  
  <div class="form-btn">
  <form action="Show.jsp" >
    <input type="button" name="show" value="My vocabulary" class="btn btn-success" onclick="validate()">
    </form>
    <br>
    
    <input type="button" name="query" value="Search Word" class="btn btn-success" onclick="validate1()">
</div>
  </body>
</html>