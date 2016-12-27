<%@page import="java.util.Map.Entry"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Set"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.util.HashMap"%>
<%@page import="org.apache.catalina.connector.Request"%>
<%@page import="java.util.Map" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
    
       $(document).ready(function(){
   	    $('.list-group-item').click(function(){
   	        var x = $(this).index();
   	         alert(x);
   	        var y=$(this).text();
   	        alert(y);
   	    });
   	});
      

       </script>

  </head>

      
 <body >
  <header>
  <div class="jumbotron text-center">
  <h1 style="color: red"><b>Wiktionary Data Storage</b></h1> </div></header>
 
 <%!				              // observe, declaration
   String meaning;
   String word;
   int i;
   String assgin;
   TreeMap map;
%>
  <script type="text/javascript">
  function set(w){
	 alert(w);
	
  }
  
  </script>
   <div class="form-btn">
        <input type="button" name="show" value="back" class="btn btn-success" onclick="validate()"  style="float: left;margin-left:20px ">
       </div>
       	  <br>
       	  <br>
	<%
	
	map=(TreeMap)request.getAttribute("Data");
	
		/* 	//out.print(map); */
			Set mapset=map.entrySet();
			i=0;
			Iterator mapIterator =mapset.iterator();
			while(mapIterator.hasNext())
			{
				
			  Map.Entry m=(Entry) mapIterator.next(); 
			   word=(String) m.getKey();
			  meaning=(String) m.getValue();
			  i++;
			  %>

 <div class="panel-group" id="accordion">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse<%=i%>"><%=word %></a>
        </h4>
      </div>
      <div id="collapse<%=i%>" class="panel-collapse collapsing">
        <div class="panel-body"><%=meaning %></div>
      </div>
    </div>
</div>		
			 <%}%>
		
 	  
  </body>
</html>