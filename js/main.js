/**
                ARRAYS
            **/
            
            var lettuce=[
            	['a',"111101111101101"],
            	['i',"111010010010111"],
            	['m',"101111101101101"],
            	['h',"101101111101101"],
            	['o',"111101101101111"],
            	['s',"111100111001111"],
            	['k',"101101110101101"],
            	['e',"111100111100111"],
            	['l',"100100100100111"],
            	['z',"111001010100111"],
            	['w',"101101101111101"],
            	['y',"101101010010010"],
            	['b',"111101111101111"],
            	['u',"101101101101111"],
            	['c',"111100100100111"],
            	['n',"111101101101101"],
            	['t',"111010010010010"],
            	['v',"101101101101010"],
            	['3',"111001011001111"]];

            /**
                WHAT IT DOES: generates random colours, duh!
            **/
            function makeHeader(word){
            	console.log("makeHeader called");
                var wordLength = word.length;
                for(var x=0;x<wordLength;x++){
                	var letter = word.charAt(x);
                	for(var y=0;y<lettuce.length;y++){
                		if(letter==lettuce[y][0]){
                			
                			var codeblock = "<div class='letter' letter='"+lettuce[y][0]+"'>" + build8Bit(lettuce[y][1],word) + '</div>';
                			var id="#"+word+"-title";
                			oldHtml = $(id).html();
                			$(id).html(oldHtml+codeblock);
                		};
                	};
                    /*var ancestor = document.getElementById('id'),
                        descendents = ancestor.getElementsByTagName('*'),
                        i, e, d;
                        for (i = 0; i < descendents.length; ++i) {
                            e = descendents[i];
                            console.log("e: " + e);
                        }
                    */
                }
            }
            function rand(min, max) {
    			return Math.floor(min + Math.random() * (max - min));
			}
            /**
                WHAT IT DOES: generates random colours, duh!
            **/
            function getRandomColour(){
            	switch(range) {
    				case 0: //red
        				var h = rand(1, 16);
        				break;
    				case 1: //blue
        				var h = rand(196, 230);
        				break;
        			case 2: //green
        				var h = rand(79, 121);
        				break;
        			case 3: //yellow
        				var h = rand(30, 61);
        				break;
        			case 4: //orange
        				var h = rand(14, 41);
        				break;		
        			case 5: //light blue
        				var h = rand(180, 208);
        				break;
        			case 6: //purple
        				var h = rand(257, 288);
        				break;
    				default: //random
        				var h = rand(1, 360);
				}
    			var s = rand(60, 80);
    			var l = rand(35, 60);
    			return 'hsl(' + h + ',' + s + '%,' + l + '%)';
            }
            function build8Bit(binary,word){
            	//console.log("build8Bit");
				var threeCount=0;
				var string = "";
				string= string+'<div class="block-row">';
				for(var a=0;a<binary.length;a++){
					
					if(binary.charAt(a)=='1'){
					    var colour = getRandomColour();
						string= string+'<div class="block" data-0="background:'+getRandomColour()+'" data-700p="background:'+getRandomColour()+'">' + binary.charAt(a) + '</div>';
					}else{
						string= string+'<div class="block">' + binary.charAt(a) + '</div>';
					}
					threeCount =threeCount +1;
					if(threeCount<3){}else{
						threeCount=0;
						string= string+'</div><div class="block-row">';
					}
					//$(id).html=string;
					//console.log("a:"+a+", " + binary.charAt(a));
				}
				return string;
            }