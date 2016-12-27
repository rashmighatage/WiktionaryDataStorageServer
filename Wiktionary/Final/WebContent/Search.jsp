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

       
   		window.location="index.jsp";
         }
       function check()
       {
    	   document.getElementById("div1").innerHTML="";
       }
       </script>
  </head>
  
 <body >

  <header>
  <div class="jumbotron text-center">
  <h1 style="color: red"><b>Wiktionary Data Storage</b></h1></header>
  </div>
  </header>
  
<form action="ShowServlet" method="get">
  <% 
  String w=(String)request.getAttribute("w");
  
  %>
    <div class="form-group">
    <label for="searchword">Enter Word:</label>
    <input type="text" class="form-control" name="search" onkeydown="check()"   value=<%if(w!=null){ %><%=w %><%} %>>
    </div>
  <div class="form-btn">
  <input type="submit" class="btn btn-success" value="Search"  onclick="" >
  <input type="button" name="show" value="Back" class="btn btn-success" onclick="validate()">
 </div>
<%--  <div>
  <%
  
  String n=(String)session.getAttribute("uname");  
 
   %>
  
  <% if(n!=null){ %>
  
    <table>
 <tr>
              
            <td><%=n %></td>
        </tr>
        </table> 
   <%} %>
</div> --%>

<div class="container">
    <%
  
  String n=(String)session.getAttribute("uname");  
 
   %>        
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Result</th>
        
      </tr>
    </thead>
    <tbody>
      <tr><% if(n!=null){ %>
        <td align="left"><div id="div1"><%=n %></div></td>  <%} %>
      </tr>
    </tbody>
  </table>
</div>
<%session.invalidate(); %>
</form>
  </body>
</html>