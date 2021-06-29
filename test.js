/** Todo: 
 *      1: Refactor size/placement values - values should be placed in a variable section before the generator portion for ease of redefinition / future possible sizing options
 *      2: Redo sizing & placement options to reflect a new smaller default size
 *      3: Add new site for C.F., change "Schools" to "Site"
 */
function cellMaker() {
    var cellBox = document.getElementById("cellcheck");
    var cellinput = document.getElementById("cellnumber");
    if (cellBox.checked == true) {
        cellinput.style.display = 'block';
    }
    else {
        cellinput.style.display = 'none';
        cellinput.value = '';
    }
}
function twitterMaker() {
    var twitterBox = document.getElementById("twittercheck");
    var twitterinput = document.getElementById("twitterid");
    if (twitterBox.checked == true) {
        twitterinput.style.display = 'block';
    }
    else {
        twitterinput.style.display = 'none';
        twitterinput.value = '';
    }
}
function igMaker() {
    var igBox = document.getElementById("IGCheck");
    var iginput = document.getElementById("igid");
    if (igBox.checked == true) {
        iginput.style.display = 'block';
    }
    else {
        iginput.style.display = 'none';
        iginput.value = '';
    }
}

function draw() {
    var canvas = document.getElementById('signature');
    var wpsdlogo = document.getElementById('logo');
    var twitlogo = document.getElementById('twitlogo');
    var iglogo = document.getElementById('iglogo');

    var s1item = '';
    var s2item = '';
    var s3item = '';

    //Colors used in draw commands
    var colors = {
        white:'rgb(255, 255, 255)', 
        black:'rgb(0, 0, 0)', 
        orange:'rgb(254, 80, 0)', 
        ltgray:'rgb(220, 220, 220)',};

//    var typeselect = document.getElementById('sigstyle').value;     //chooses signature style

    //Here's where I get all the stuff they filled in
    var school = {address:'error', phone:'error', logo:'error', name:'error'};
    var name = document.getElementById('staffname').value;
    var jobtitle = document.getElementById('jobtitle').value;
    var extension = document.getElementById('ext').value;
    var schoolid = document.getElementById('school').value;
    var cellnumber = document.getElementById('cellnumber').value;
    var twitterid = document.getElementById('twitterid').value;
    var igid = document.getElementById('igid').value;

    if (extension != '') {
        extension = 'ext. ' + extension;
    }
    else {

    }

    if (cellnumber != '') {
        cellnumber = 'Cell:  ' + cellnumber;
        var cellexists = 1;
    }
    else {
        var cellexists = 0;
    }
    if (twitterid != '' && igid != '') {
        var superSocial = 1;
    }
    else {
        var superSocial = 0;
    }

    if (twitterid != ''){
        twitterid = '@' + twitterid;
        var twitexists = 1;
    }
    else {
        
    }

    if (igid != ''){
        var igexists = 1;
    }
    else {

    }

    var longname = '0';
    if (name.length > 26) {
        longname = '1';
    } 
    else {

    }
    var xlongname = '0';
    if (name.length > 30) {
        xlongname = '1';
    }
    else {

    }

    
    
        switch (schoolid) {                                         //Constructs the school object
            case 'WHS':
                school.address = '4200 32nd St. W PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-0967 ' + extension;
                school.logo = document.getElementById('whslogo');
                school.name = 'Williston High School';
                break;
            case 'Bakken':
                school.address = '502 W Highland Dr PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-713-7300 ' + extension;
                school.logo = document.getElementById('bakkenlogo');
                school.name = 'Bakken Elementary'
                break;
            case 'DelEast':
                school.address = '2304 11th Ave W PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-1055 ' + extension;
                school.logo = document.getElementById('whslogo');
                school.name  = 'Del Easton Alternative High School';
                break;
            case 'DO':
                school.address = '1201 9th Ave NW PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-1580 ' + extension;
                school.logo = document.getElementById('DOlogo');
                school.name = 'Williston Public School District #1';
                break;
            case 'Hagan':
                school.address = '2501 29th St. W PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-4960 ' + extension;
                school.logo = document.getElementById('haganlogo');
                school.name = 'Hagan Elementary';
                break;
            case 'LC':
                school.address = '704 17th Ave W PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-6331 ' + extension;
                school.logo = document.getElementById('lclogo');
                school.name = 'Lewis and Clark Elementary';
                break;
            case 'McVay':
                school.address = '420 University Ave PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-9104 ' + extension;
                school.logo = document.getElementById('mcvaylogo');
                school.name = 'McVay Elementary';
                break;
            case 'Rickard':
                school.address = '1224 1st Ave E PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-5412 ' + extension;
                school.logo = document.getElementById('rickardlogo');
                school.name = 'Rickard Elementary';
                break;
            case 'Wilkinson':
                school.address = '1200 9th Ave NW PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-6532 ' + extension;
                school.logo = document.getElementById('wilklogo');
                school.name = 'Wilkinson Elementary'
                break;
            case 'WMS':
                school.address = '501 14th St. W PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-5618 ' + extension;
                school.logo = document.getElementById('whslogo');
                school.name = 'Williston Middle School';
                break;
            case 'Tech':
                school.address = '501 14th St. W PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-713-7490 ' + extension;
                school.logo = document.getElementById('DOlogo');
                school.name = 'Tech Services';
                break;
            case 'MoRidge':
                school.address = '5640 140th Ave. NW';
                school.address2 = 'Williston, ND 58801';
                school.phone = '701-875-2041';
                school.logo = document.getElementById('MoRidgelogo');
                school.name = 'Missouri Ridge';
                break;
            case 'Garden':
                school.address = '13565 60th St. NW';
                school.address2 = 'Williston, ND 58801';
                school.phone = '701-826-4261';
                school.logo = document.getElementById('DOlogo');
                school.name = 'Garden Valley Elementary';
                break;
            case 'Round':
                school.address = '5098 151st Ave NW';
                school.address2 = 'Williston, ND 58801';
                school.phone = '701-875-4346';
                school.logo = document.getElementById('DOlogo');
                school.name = 'Round Prairie Elementary';
                break;
            default:
                school.address = 'ERROR';
                school.address2 = 'Williston, ND 58802';
                school.phone = 'ERROR ' + extension; 
                school.logo = 'ERROR';
                school.name = 'ERROR';
        }
        //IF/ELSE for social stuff should go HERE so I can define item & logo


        //    Sizing section starts here
        var defaultsize = {
            // fonts
            namefont1: '32px arcon' ,
            namefont2: '20px arcon' ,
            titlefont: '13px arcon' ,
            sitenamefont: '20px lato' , 
            addressfont: '14px lato' ,
            twitfont: '14px lato' ,
            // end fonts
            // elements
            bgsize: {x:0, y:0, h:600, v:133},
            wpsdsize: {p:wpsdlogo, x:0, y:0, h:133, v:133},
            vertdivsize: {x:134, y:0, h:2, v:133},
            nameplate: {x:134, y:0, h:800, v:40},
            hordivsize: {x:134, y:40, h:800, v:20},
            infoboxsize: {x:135, y:0, h:700, v:82},
            unamesize: {p:name, x:145, y:35},
            unamesize2: {p:name, x:145, y:20},
            titlesize: {p:jobtitle, x:148, y:55},
            sitenamesize: {p:school.name, x:148, y:78},
            add1size: {p:school.address, x:148, y:94},
            add2size: {p:school.address2, x:148, y:110},
            phonesize: {p:school.phone, x:148, y:126},
            cellsize: {p:cellnumber, x:396, y:126},
            sitelogo: {p:school.logo, x:525, y:66, h:66, v:66},
            
            resizefactor: {a: 12,b: 14,},
            social1: {p:s1item, /*l:s1logo,*/ x:396, y:127, h:16, v:16, o:12},
            social2: {p:s2item, /*l:s2logo,*/ x:396, y:109, h:16, v:16, o:12},
            social3: {p:s3item, /*l:s3logo,*/ x:396, y:92,  h:16, v:16, o:12},
        };
        

            // Eventually below this line there will be an if/else or switch
            // Size selection
        var size = defaultsize;
        //    Sizing section ends here
    

            if (canvas.getContext) {   
                //background
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = colors.ltgray;
                ctx.fillRect(size.bgsize.x, size.bgsize.y, size.bgsize.h, size.bgsize.v,);

                //logo
                var ctz = canvas.getContext('2d');
                ctz.drawImage(size.wpsdsize.p, size.wpsdsize.x, size.wpsdsize.y, size.wpsdsize.h, size.wpsdsize.v);
                
                //horizontal bg element
                var horizbar = canvas.getContext('2d');
                horizbar.fillStyle = colors.white;
                horizbar.fillRect(size.nameplate.x, size.nameplate.y, size.nameplate.h, size.nameplate.v);

                //horizontal job title background
                var hbar2 = canvas.getContext('2d');
                hbar2.fillStyle = colors.black;
                hbar2.fillRect(size.hordivsize.x, size.hordivsize.y, size.hordivsize.h, size.hordivsize.v);

                //Vertical separator
                var vsep = canvas.getContext('2d');
                vsep.fillStyle = colors.black; 
                vsep.fillRect(size.vertdivsize.x, size.vertdivsize.y, size.vertdivsize.h, size.vertdivsize.v);

                //school logo
                var slogo = canvas.getContext('2d');
                slogo.drawImage(size.sitelogo.p, size.sitelogo.x, size.sitelogo.y, size.sitelogo.h, size.sitelogo.v);

                //Name
                var cty = canvas.getContext('2d');
                cty.fillStyle = colors.orange;
                if (longname == '0') {
                    cty.font = size.namefont1;
                    cty.fillText(size.unamesize.p, size.unamesize.x, size.unamesize.y);
                }
                else {
                    cty.font = size.namefont2;
                    cty.fillText(size.unamesize2.p, size.unamesize2.x, size.unamesize2.y);
                }

                //Job title
                var puttitle = canvas.getContext('2d');
                puttitle.fillStyle = colors.white;
                puttitle.font = size.titlefont;
                puttitle.fillText(size.titlesize.p, size.titlesize.x, size.titlesize.y);

                //School name
                var sname = canvas.getContext('2d');
                sname.fillStyle = colors.black;
                sname.font = size.sitenamefont;
                sname.fillText(size.sitenamesize.p, size.sitenamesize.x, size.sitenamesize.y);

                //Address and phone number
                var addressphone = canvas.getContext('2d');
                addressphone.fillStyle = colors.black;
                addressphone.font = size.addressfont;
                addressphone.fillText(size.add1size.p, size.add1size.x, size.add1size.y);
                addressphone.fillText(size.add2size.p, size.add2size.x, size.add2size.y);
                addressphone.fillText(size.phonesize.p, size.phonesize.x, size.phonesize.y);

                //Here's where the social parts get added

                var socialarray = [];
                if (cellexists == 1) {
                    socialarray.push('cell');
                    socialarray.push(cellnumber);
                }

                if (twitexists == 1) {
                    socialarray.push('tw');
                    socialarray.push(twitterid);
                }

                if (igexists == 1) {
                    socialarray.push('ig');
                    socialarray.push(igid);
                }

                if (socialarray.length >=5) {
                    size.social3.p = socialarray[5]
                    var s1 = canvas.getContext('2d');
                    s1.fillStyle = colors.black;
                    s1.font = size.addressfont;
                    
                    if (socialarray[4] == 'ig') {
                        var logo3 = iglogo;
                        s1.drawImage(logo3, size.social3.x - (size.social3.h + 3) , size.social3.y - (size.social3.v - 2), size.social3.h, size.social3.v);
                        } else if (socialarray [4] == 'tw') {
                        var logo3 = twitlogo;
                        s1.drawImage(logo3, size.social3.x - (size.social3.h + 3) , size.social3.y - (size.social3.v - 2), size.social3.h, size.social3.v);
                        } else {
                            size.social3.x = size.social3.x - 32;
                            }
                        s1.fillText(size.social3.p, size.social3.x, size.social3.y);
    
                }

                if (socialarray.length >=3) {
                    size.social2.p = socialarray[3]
                    var s1 = canvas.getContext('2d');
                    s1.fillStyle = colors.black;
                    s1.font = size.addressfont;
                    
                    if (socialarray[2] == 'ig') {
                        var logo2 = iglogo;
                        console.log(logo2);
                        s1.drawImage(logo2, size.social2.x - (size.social2.h + 3) , size.social2.y - (size.social2.v - 2), size.social2.h, size.social2.v);
                        } else if (socialarray [2] == 'tw') {
                        var logo2 = twitlogo;
                        console.log(logo2);
                        s1.drawImage(logo2, size.social2.x - (size.social2.h + 3) , size.social2.y - (size.social2.v - 2), size.social2.h, size.social2.v);
                        }else {
                            size.social2.x = size.social2.x - 32;
                            }
                        s1.fillText(size.social2.p, size.social2.x, size.social2.y);
                            
    
                }

                if (socialarray.length >=1) {
                    size.social1.p = socialarray[1]
                    var s1 = canvas.getContext('2d');
                    s1.fillStyle = colors.black;
                    s1.font = size.addressfont;
                    
                    if (socialarray[0] == 'ig') {
                        var logo1 = iglogo;
                        s1.drawImage(logo1, size.social1.x - (size.social1.h + 3) , size.social1.y - (size.social1.v - 2) , size.social1.h, size.social1.v);
                        } else if (socialarray [0] == 'tw') {
                        var logo1 = twitlogo;
                        s1.drawImage(logo1, size.social1.x - (size.social1.h + 3) , size.social1.y - (size.social1.v - 2) , size.social1.h, size.social1.v);
                        } else {
                        size.social1.x = size.social1.x - 32;
                        }
                        s1.fillText(size.social1.p, size.social1.x, size.social1.y);
                        
                        
                }
                /*social2
                social3*/


                /*//cell phone number
                if (cellexists == 1) {
                var cell = canvas.getContext('2d');
                cell.fillStyle = colors.black;
                cell.font = size.addressfont;
                cell.fillText(size.cellsize.p, size.cellsize.x, size.cellsize.y); 
                } */



                //Twitter & ig
                
                /*
                var twit = canvas.getContext('2d');
                twit.fillStyle = colors.black
                twit.font = size.twitfont;
                if (superSocial == 1) {
                    if (cellexists == 1) {
                        var twitY = 92;
                        var igY = 109;
                    }
                    else {
                        var twitY = 109;
                        var igY = 127;
        
                    }
                    twit.fillText(twitterid, 625, twitY);
                    twit.drawImage(twitlogo, 600, twitY - 18, 22, 22);
                    twit.fillText(igid, 625, igY);
                    twit.drawImage(iglogo, 600, igY - 18, 22, 22);
                }
                else {
                    if (cellexists == 1) {
                        var twitY = 165;
                    }
                    else {
                        var twitY = 192;
                    }
                    
                    if (twitterid != '') {
                        twit.fillText(twitterid, 625, twitY);
                        twit.drawImage(twitlogo, 600, twitY - 18, 22, 22);
                    }
                    else if (igid != '') {
                        twit.fillText(igid, 625, twitY);
                        twit.drawImage(iglogo, 600, twitY - 18, 22, 22);
                    }
                    else {

                    }

                } */

			}
    
}