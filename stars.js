 const space = function (a){
       if(a===0){
           return "";
        }
    return " " + space(a-1);
	};
	const star = function(b) {
	    if (b===0){
 		 return "";
		}
		return star(b-1) + "*";
	};
	const a = function(g,stars,spaces){
	      if(g===0){
	        return;  	  
		  }
		  console.log(space(spaces)+star(stars));
		  a((g-1),(stars+2),(spaces-1));
	};
	const triangleStars = function(n){
	       a(n,1,n-1);
	};
	 triangleStars(5);