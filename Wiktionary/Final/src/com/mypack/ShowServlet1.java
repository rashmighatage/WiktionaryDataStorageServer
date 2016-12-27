package com.mypack;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.TreeMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.simple.parser.JSONParser;

/**
 * Servlet implementation class ShowServlet1
 */
public class ShowServlet1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	TreeMap<String,String> map=new TreeMap<String, String>();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShowServlet1() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BufferedWriter bw=null;
        BufferedReader br=null;
       StringBuilder res = new StringBuilder();
       
        //String res="";
       
        try {

        String 	posturl="http://172.16.50.19:13000/get";
            JSONObject datasend = new JSONObject();
         //   datasend.put("Whole",);
         //   datasend.put("word",word);
            //datasend.put("meaning", main_result);
            URL url = new URL(posturl);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setReadTimeout(10000);
            urlConnection.setConnectTimeout(10000);
            urlConnection.setRequestMethod("POST");
            urlConnection.setDoOutput(true);
            urlConnection.setRequestProperty("Content-Type", "application/json");
            urlConnection.connect();
            //write data to database
        //   OutputStream outputStream = urlConnection.getOutputStream();
         //   bw = new BufferedWriter(new OutputStreamWriter(outputStream));
          //  bw.write(datasend.toString());
         //   bw.flush();
            //response from server
            InputStream is = urlConnection.getInputStream();
            br = new BufferedReader(new InputStreamReader(is));
            String line;
      
            while ((line = br.readLine()) != null) {
            	//System.out.println(line);
            	res.append(line).append("\n");
            	//res.concat("\n");
            //	 System.out.println(i);
            	// i++;
            }
            line=null;
            br.close();
          
           
           /* response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            out.println("<html>");
            out.println("<head>");
            out.println("<title>Hola</title>");
            out.println("</head>");
            out.println("<body bgcolor=\"white\">");
            out.println("</body>");
            out.println("</html>");

           
            */
           // System.out.println(res.toString());
        }
        finally {
            //Connection close
            if(br!=null)
            {
                br.close();
            }
            if(bw!=null)
            {
                bw.close();
            }
           
        }
        
        String listData=res.toString();
       // listData=listData.replace("[","");
       // listData=listData.replace("]","");
    //  System.out.println("List" +listData);
        try{
        	JSONArray j=new JSONArray(listData);
        	//System.out.println("Array "+j);
        //	System.out.println(j.length());
        	for(int i=0;i<j.length();i++)
        	{
	        JSONObject jsonObj = j.getJSONObject(i);
	        //System.out.println(jsonObj);
	    String  Meaning=(String) jsonObj.get("Meaning");
	    String  Word=(String) jsonObj.get("Word");
	    //  System.out.println("Word "+jsonObj.get("Word"));
	        
        	
        	map.put(Word,Meaning);
        	}
        }
        catch (Exception e) {
			
        	// TODO: handle exception
		}
       System.out.println(map);
        Set mapset=map.entrySet();
        Iterator mapIterator =mapset.iterator();
       while(mapIterator.hasNext())
       {
    	  Map.Entry m=(Entry) mapIterator.next(); 
    	  String word=(String) m.getKey();
    	  String meaning=(String) m.getValue();
    	 // System.out.println(word+"  "+meaning);
    	  
       }
       
       RequestDispatcher rd = request.getRequestDispatcher("/Show.jsp");
       while(mapIterator.hasNext())
       {
    	  Map.Entry m=(Entry) mapIterator.next(); 
    	  String word=(String) m.getKey();
    	  String meaning=(String) m.getValue();
    	 
    	  
    	 
    	//  System.out.println(word+"  "+meaning);
    	  
       } 
       request.setAttribute("Data", map);
       
       rd.forward(request, response);
        
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
