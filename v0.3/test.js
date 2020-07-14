/** Todo: 
 *      1: Name/degree section needs work, details in that section
 *      2: Redo sizing & placement options to reflect a new smaller default size
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

var badgeOverride = 0;
function badgeAdd() {
    var badgeselect = document.getElementById('badgeselect');
    var showoutput = document.getElementById('userfile');
    if (badgeselect.checked == true) {
        badgeOverride = 1;
        showoutput.style.display = 'block';
    }
    else {
        badgeOverride = 0;
        showoutput.style.display = 'none';
    }
}        


function badgeGetter() {

    var userBadge = document.getElementById('badgeout');
    userBadge.src = URL.createObjectURL(event.target.files[0]);

}

var makeDegree = '0';
function addDegree() {
    var degreeBox = document.getElementById('degreecheck');
    var degreeinput = document.getElementById('degreeinput');
    if (degreeBox.checked == true) {
        degreeinput.style.display = 'block';
        var makeDegree = '1';
    }
    else {
        degreeinput.style.display = 'none'
        var makedegree = '0'
        document.getElementById('degreeinput').value = '';
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
    var degree = document.getElementById('degreeinput').value;

    //check for various inputs and set flags to handle later
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

    var degreeexists = '0';
    if (degree != '') {
        degreeexists = '1';
    }
    else {

    }

    
    
        switch (schoolid) {                                         //Constructs the school object
            case 'WHS':
                school.address = '4200 32nd St W PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-0967 ' + extension;
                school.logo = document.getElementById('whslogo');
                school.name = 'Williston High School';
                break;
            case 'ASB Innovation Academy':
                school.address = '1204 4th Ave W';
                school.address2 = 'Williston, ND 58801';
                school.phone = '701-713-7200' + extension;
                school.logo = document.getElementById('IAlogo');
                school.name = 'ASB Innovation Academy';
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
                school.address = '2501 29th St W PO BOX 1407';
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
                school.address = '501 14th St W PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-572-5618 ' + extension;
                school.logo = document.getElementById('whslogo');
                school.name = 'Williston Middle School';
                break;
            case 'Tech':
                school.address = '501 14th St W PO BOX 1407';
                school.address2 = 'Williston, ND 58802';
                school.phone = '701-713-7490 ' + extension;
                school.logo = document.getElementById('DOlogo');
                school.name = 'Tech Services';
                break;
            case 'CFound':
                school.address = 'PO Box 1407';
                school.address2 = 'Williston, ND 58801';
                school.phone = '701-572-8797' + extension;
                school.logo = document.getElementById('DOlogo');
                school.name = 'Williston Coyote Foundation';
                break;
            default:
                school.address = 'ERROR';
                school.address2 = 'Williston, ND 58802';
                school.phone = 'ERROR ' + extension; 
                school.logo = 'ERROR';
                school.name = 'ERROR';
        }



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
            hordiv2size: {x:134, y:25, h:800, v:17},
            infoboxsize: {x:135, y:0, h:700, v:82},
            unamesize: {p:name, x:145, y:35},
            unamesize2: {p:name, x:145, y:20},
            degreesize: {p:degree, x:148, y:38},
            titlesize: {p:jobtitle, x:148, y:55},
            sitenamesize: {p:school.name, x:148, y:78},
            add1size: {p:school.address, x:148, y:94},
            add2size: {p:school.address2, x:148, y:110},
            phonesize: {p:school.phone, x:148, y:126},
            cellsize: {p:cellnumber, x:396, y:126},
            resizefactor: {a: 12,b: 14,},
            social1: {p:s1item, /*l:s1logo,*/ x:396, y:127, h:16, v:16, o:12},
            social2: {p:s2item, /*l:s2logo,*/ x:396, y:109, h:16, v:16, o:12},
            social3: {p:s3item, /*l:s3logo,*/ x:396, y:92,  h:16, v:16, o:12},
            sitelogo: {p:school.logo, x:525, y:66, h:66, v:66},
        };

            // Eventually below this line there will be an if/else or switch
            // Size selection
        var size = defaultsize;

            //    Sizing section ends here

        if (badgeOverride == 1) {
            userLogo = document.getElementById('badgeout');
            size.sitelogo.p = userLogo;
            } 
            else {
            size.sitelogo.p = school.logo;
            }

    console.log(size.sitelogo.p)

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

                /* var hbar3 = canvas.getContext('2d');
                hbar3.fillStyle = colors.orange;
                hbar3.fillRect(size.hordiv2size.x, size.hordiv2size.y, size.hordiv2size.h, size.hordiv2size.v); */

                //school logo
                var slogo = canvas.getContext('2d');
                slogo.drawImage(size.sitelogo.p, size.sitelogo.x, size.sitelogo.y, size.sitelogo.h, size.sitelogo.v);

                //Name
                var cty = canvas.getContext('2d');
                var cty2 = canvas.getContext('2d');
                var hbar3 = canvas.getContext('2d');
                cty.fillStyle = colors.orange;
                cty2.fillStyle = colors.black; //todo: fix the color issue - why doesn't this line do anything, but the others do?
                hbar3.fillStyle = colors.orange; 
                if ((longname == '0') && (degreeexists == '0')) {
                    cty.font = size.namefont1;
                    cty.fillText(size.unamesize.p, size.unamesize.x, size.unamesize.y);
                }
                else if ((longname == '0') && (degreeexists == '1')) { //todo: scaling text properly - do I even need 4 options here? Longname already shrinks the name. I guess some math on the Y axis might be necessary? 
                    hbar3.fillRect(size.hordiv2size.x, size.hordiv2size.y, size.hordiv2size.h, size.hordiv2size.v);
                    cty.font = size.namefont2;
                    cty2.font = size.titlefont;
                    cty2.fillStyle = colors.black;
                    cty.fillText(size.unamesize2.p, size.unamesize2.x, size.unamesize2.y);
                    cty2.fillText(size.degreesize.p, size.degreesize.x, size.degreesize.y);
                    
                }
                else if ((longname == '1') && (degreeexists == '0')) {
                    cty.font = size.namefont2;
                    cty.fillText(size.unamesize2.p, size.unamesize.x, size.unamesize.y);
                }
                else{
                    hbar3.fillRect(size.hordiv2size.x, size.hordiv2size.y, size.hordiv2size.h, size.hordiv2size.v);
                    cty.font = size.namefont2;
                    cty2.font = size.titlefont;
                    cty2.fillStyle = colors.black;
                    cty.fillText(size.unamesize2.p, size.unamesize2.x, size.unamesize2.y);
                    cty2.fillText(size.degreesize.p, size.degreesize.x, size.degreesize.y);
                    
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
                
                //Vertical separator
                var vsep = canvas.getContext('2d');
                vsep.fillStyle = colors.black; 
                vsep.fillRect(size.vertdivsize.x, size.vertdivsize.y, size.vertdivsize.h, size.vertdivsize.v);

			}
    
}