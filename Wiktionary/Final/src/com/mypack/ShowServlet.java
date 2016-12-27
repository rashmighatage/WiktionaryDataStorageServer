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

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Servlet implementation class ShowServlet
 */
public class ShowServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
	HttpSession s;
	String word;
    public ShowServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String title=request.getParameter("search");
		word=request.getParameter("search").toLowerCase();
		String xwiki=getData(word);
		//System.out.println("XWIKI "+xwiki);
			//System.out.println(word);
			BufferedWriter bw=null;
	        BufferedReader br=null;
	       StringBuilder res = new StringBuilder();
	        //String res="";
	       
	        try {

	        String 	posturl="http://172.16.50.19:13000/api";
	            JSONObject datasend = new JSONObject();
	            datasend.put("Whole", xwiki);
	            datasend.put("word",word);
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
	           OutputStream outputStream = urlConnection.getOutputStream();
	            bw = new BufferedWriter(new OutputStreamWriter(outputStream));
	            bw.write(datasend.toString());
	            bw.flush();
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
	          
	           
	            
	            System.out.println(res.toString());
	            
	        } catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
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
		try{  
			  
	        HttpSession session=request.getSession();  
	       
	        session.setAttribute("uname",res.toString());  
	        request.setAttribute("w", title);
	          RequestDispatcher rd = getServletContext().getRequestDispatcher("/Search.jsp");
		      rd.forward(request, response);
	  
	                }catch(Exception e){System.out.println(e);
	                }  
		finally
		{
			res=null;
		}
	    }  
		
		
	public String getData(String word) {
		String checkWordBR;
		String urlResult="";
		//System.out.println("CALLED"+word);
		String  wikiAPIUrl="https://en.wiktionary.org/w/api.php?action=query&prop=revisions&titles="+word+"&rvprop=content&format=json&utf8=";
		 try {
             URL url=new URL(wikiAPIUrl);
             //  Log.i("search1",word);
             HttpURLConnection con=(HttpURLConnection) url.openConnection();//open connection for url
             con.setRequestMethod("GET");//request method is get
             con.connect();
             BufferedReader bf= new BufferedReader(new InputStreamReader(con.getInputStream()));//read data as String
             while ((checkWordBR = bf.readLine()) != null)
             {
                 urlResult+=checkWordBR;

             }
          //  System.out.println("\n"+urlResult);
             //Log.i("Result",jsd);
         }
         catch (Exception ex)
         {

         }
         return urlResult;
		
		
	}
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
