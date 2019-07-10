/** Todo: 
 *      School logos
 *      "upper third" style for name/job title
 *      Multiple designs?
 */

function draw() {
    var canvas = document.getElementById('signature');
    var wpsdlogo = document.getElementById('logo');
    var typeselect = document.getElementById('sigstyle').value;     //chooses signature style

    //Here's where I get all the stuff they filled in
    var school = {address:'error', phone:'error', logo:'error', name:'error'};
    var name = document.getElementById('staffname').value;
    var jobtitle = document.getElementById('jobtitle').value;
    var extension = document.getElementById('ext').value;
    var schoolid = document.getElementById('school').value;

    //Colors used in draw commands
    var colors = {
        white:'rgb(255, 255, 255)', 
        black:'rgb(0, 0, 0)', 
        orange:'rgb(254, 80, 0)', 
        ltgray:'rgb(220, 220, 220)',};

    var longname = '0';
    if (name.length > 21) {
        longname = '1';
    } 
    else {

    }
    var xlongname = '0';
    if (name.length > 26) {
        xlongname = '1';
    }
    else {

    }
    
        switch (schoolid) {                                         //Constructs the school object
            case 'WHS':
                school.address = '4200 32nd St W PO BOX 1407';
                school.phone = '701-572-0967 ext. ' + extension;
                school.logo = document.getElementById('whslogo');
                school.name = 'Williston High School';
                break;
            case 'Bakken':
                school.address = '502 W Highland Dr PO BOX 1407';
                school.phone = '701-713-7300 ext. ' + extension;
                school.logo = document.getElementById('bakkenlogo');
                school.name = 'Bakken Elementary'
                break;
            case 'DelEast':
                school.address = '2304 11th Ave W PO BOX 1407';
                school.phone = '701-572-1055 ext. ' + extension;
                school.logo = document.getElementById('deleastlogo');
                school.name  = 'Del Easton Alternative High School';
                break;
            case 'DO':
                school.address = '1201 9th Ave NW PO BOX 1407';
                school.phone = '701-572-3547 ext. ' + extension;
                school.logo = document.getElementById('whslogo');
                school.name = 'District Office';
                break;
            case 'Hagan':
                school.address = '2501 29th St W PO BOX 1407';
                school.phone = '701-572-3147 ext. ' + extension;
                school.logo = document.getElementById('haganlogo');
                school.name = 'Hagan Elementary';
                break;
            case 'LC':
                school.address = '704 17th Ave W PO BOX 1407';
                school.phone = '701-572-0171 ext. ' + extension;
                school.logo = document.getElementById('lclogo');
                school.name = 'Lewis and Clark Elementary';
                break;
            case 'McVay':
                school.address = '420 University Ave PO BOX 1407';
                school.phone = '701-572-9114 ext. ' + extension;
                school.logo = document.getElementById('mcvaylogo');
                school.name = 'McVay Elementary';
                break;
            case 'Rickard':
                school.address = '1224 1st Ave E PO BOX 1407';
                school.phone = '701-572-0347 ext. ' + extension;
                school.logo = document.getElementById('rickardlogo');
                school.name = 'Rickard Elementary';
                break;
            case 'Wilkinson':
                school.address = '1200 9th Ave NW PO BOX 1407';
                school.phone = '701-572-0384 ext. ' + extension;
                school.logo = document.getElementById('wilklogo');
                school.name = 'Wilkinson Elementary'
                break;
            case 'WMS':
                school.address = '501 14th St W PO BOX 1407';
                school.phone = '701-774-3109 ext. ' + extension;
                school.logo = document.getElementById('wmslogo');
                school.name = 'Williston Middle School';
                break;
            default:
                school.address = 'ERROR';
                school.phone = 'ERROR ext. ' + extension; 
                school.logo = 'ERROR';
        }

    switch (typeselect) {
        
        case 'style1':
            if (canvas.getContext) {
                //background
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = colors.white;
                ctx.fillRect(0, 0, 900, 200);

                //logo
                var ctz = canvas.getContext('2d');
                ctz.drawImage (wpsdlogo, 0, 0, 200, 200);

                //horizontal bg element
                var horizbar = canvas.getContext('2d');
                horizbar.fillStyle = colors.black;
                horizbar.fillRect(202, 0, 700, 82);
                                                                
                //horizontal job title background
                var hbar2 = canvas.getContext('2d');
                hbar2.fillStyle = colors.ltgray;
                hbar2.fillRect(410, 62, 500, 30);

                //Vertical separator
                var vsep = canvas.getContext('2d');
                vsep.fillStyle = colors.orange; 
                vsep.fillRect(201, 0, 2, 200);

                //school logo
                var slogo = canvas.getContext('2d');
                slogo.drawImage (school.logo, 795, 100, 100, 100);

                //Name
                var cty = canvas.getContext('2d');
                cty.fillStyle = colors.white;
                if (longname == '0') {
                    cty.font = '48px arcon';
                    cty.fillText(name, 220, 53);
                }
                else {
                    cty.font = '30px arcon'
                    cty.fillText(name, 220, 43);
                }
                

                //Job title
                var puttitle = canvas.getContext('2d');
                puttitle.fillStyle = colors.black;
                puttitle.font = '18px arcon';
                puttitle.fillText(jobtitle, 420, 83);

                //School name
                var sname = canvas.getContext('2d');
                sname.fillStyle = colors.black;
                sname.font = '30px arcon';
                sname.fillText(school.name, 225, 115);

                //Address and phone number
                var addressphone = canvas.getContext('2d');
                addressphone.fillStyle = colors.black;
                addressphone.font = '22px arcon';
                addressphone.fillText(school.address, 225, 140);
                addressphone.fillText('Williston, ND 58802', 225, 165)
                addressphone.fillText(school.phone, 225, 192);
        
            }
            break; 
        case 'style2':
            if (canvas.getContext) {
                //background
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = colors.white;
                ctx.fillRect(0, 0, 900, 200);

                //logo
                //var ctz = canvas.getContext('2d');
                //ctz.drawImage (wpsdlogo, 0, 0, 200, 200);

                //horizontal bg element
                var horizbar = canvas.getContext('2d');
                horizbar.fillStyle = colors.ltgray;
                horizbar.fillRect(0, 0, 900, 62);

                //horizontal job title background
                //var hbar2 = canvas.getContext('2d');
                //hbar2.fillStyle = colors.black;
                //hbar2.fillRect(410, 62, 500, 30);

                //Vertical separator
                var vsep = canvas.getContext('2d');
                vsep.fillStyle = colors.orange; 
                vsep.fillRect(449, 81, 2, 100);

                //school logo
                var slogo = canvas.getContext('2d');
                if (xlongname == '0'){
                    slogo.drawImage (school.logo, 334, 81, 100, 100);
                }
                else {
                    slogo.drawImage (school.logo, 350, 100, 80, 80);
                }

                //Top text
                var distname = canvas.getContext('2d');
                distname.fillStyle = colors.black;
                distname.font = '40px arcon';
                distname.fillText ('WILLISTON PUBLIC SCHOOL DISTRICT #1', 75, 45);

                //Name
                var cty = canvas.getContext('2d');
                cty.fillStyle = colors.black;
                if (longname == '0') {
                    cty.font = '32px arcon';
                    cty.fillText(name, 15, 100);
                }
                else {
                    cty.font = '25px arcon';
                    cty.fillText(name, 15, 100);
                }

                //Job title
                var puttitle = canvas.getContext('2d');
                puttitle.fillStyle = colors.black;
                puttitle.font = '18px arcon';
                if (longname == '0') {
                    puttitle.fillText(jobtitle, 15, 130);
                }
                else {
                    puttitle.fillText(jobtitle, 15, 125);
                }

                //School name
                var schoolname = canvas.getContext('2d');
                schoolname.fillStyle = colors.black;
                schoolname.font ='30px arcon';
                schoolname.fillText(school.name, 476, 100);

                //Address and phone number
                var addressphone = canvas.getContext('2d');
                addressphone.fillStyle = colors.black;
                addressphone.font = '25px arcon';
                addressphone.fillText(school.address, 476, 138);
                addressphone.fillText('Williston, ND 58802', 476, 173)
                addressphone.fillText(school.phone, 15, 170);
            }
            break;
        case 'style3':
            if (canvas.getContext) {   
                //background
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = colors.ltgray;
                ctx.fillRect(0, 0, 900, 200);

                //logo
                var ctz = canvas.getContext('2d');
                ctz.drawImage (wpsdlogo, 0, 0, 200, 200);

                //horizontal bg element
                var horizbar = canvas.getContext('2d');
                horizbar.fillStyle = colors.white;
                horizbar.fillRect(202, 0, 700, 82);

                //horizontal job title background
                var hbar2 = canvas.getContext('2d');
                hbar2.fillStyle = colors.black;
                hbar2.fillRect(201, 61, 800, 30);

                //Vertical separator
                var vsep = canvas.getContext('2d');
                vsep.fillStyle = colors.black; 
                vsep.fillRect(201, 0, 2, 200);

                //school logo
                var slogo = canvas.getContext('2d');
                slogo.drawImage (school.logo, 795, 100, 100, 100);

                //Name
                var cty = canvas.getContext('2d');
                cty.fillStyle = colors.orange;
                if (longname == '0') {
                    cty.font = '48px arcon';
                    cty.fillText(name, 220, 53);
                }
                else {
                    cty.font = '30px arcon'
                    cty.fillText(name, 220, 43);
                }

                //Job title
                var puttitle = canvas.getContext('2d');
                puttitle.fillStyle = colors.white;
                puttitle.font = '18px arcon';
                puttitle.fillText(jobtitle, 225, 83);

                //School name
                var sname = canvas.getContext('2d');
                sname.fillStyle = colors.black;
                sname.font = '30px arcon';
                sname.fillText(school.name, 225, 115);

                //Address and phone number
                var addressphone = canvas.getContext('2d');
                addressphone.fillStyle = colors.black;
                addressphone.font = '22px arcon';
                addressphone.fillText(school.address, 225, 140);
                addressphone.fillText('Williston, ND 58802', 225, 165)
                addressphone.fillText(school.phone, 225, 192);
                break;
        }

        default:
            if (canvas.getContext) {
                //background
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = colors.ltgray;
                ctx.fillRect(0, 0, 900, 200);

                //logo
                var ctz = canvas.getContext('2d');
                ctz.drawImage (wpsdlogo, 0, 0, 200, 200);

                //horizontal bg element
                var horizbar = canvas.getContext('2d');
                horizbar.fillStyle = colors.white;
                horizbar.fillRect(202, 0, 700, 82);

                //horizontal job title background
                var hbar2 = canvas.getContext('2d');
                hbar2.fillStyle = colors.black;
                hbar2.fillRect(201, 61, 800, 30);

                //Vertical separator
                var vsep = canvas.getContext('2d');
                vsep.fillStyle = colors.black; 
                vsep.fillRect(201, 0, 2, 200);

                //school logo
                var slogo = canvas.getContext('2d');
                slogo.drawImage (school.logo, 795, 100, 100, 100);

                //Name
                var cty = canvas.getContext('2d');
                cty.fillStyle = colors.orange;
                if (longname == '0') {
                    cty.font = '48px arcon';
                    cty.fillText(name, 220, 53);
                }
                else {
                    cty.font = '30px arcon'
                    cty.fillText(name, 220, 43);
                }

                //Job title
                var puttitle = canvas.getContext('2d');
                puttitle.fillStyle = colors.white;
                puttitle.font = '18px arcon';
                puttitle.fillText(jobtitle, 225, 83);

                //School name
                var sname = canvas.getContext('2d');
                sname.fillStyle = colors.black;
                sname.font = '30px arcon';
                sname.fillText(school.name, 225, 115);

                //Address and phone number
                var addressphone = canvas.getContext('2d');
                addressphone.fillStyle = colors.black;
                addressphone.font = '22px arcon';
                addressphone.fillText(school.address, 225, 140);
                addressphone.fillText('Williston, ND 58802', 225, 165)
                addressphone.fillText(school.phone, 225, 192);
        
            }

    }
    
}