var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {

        var xmlDocument = xhttp.responseXML;

        var menu = document.getElementById('menu');

        var sections = xmlDocument.getElementsByTagName('section');

        for(i = 0; i < sections.length; i++)
        {
            sectionName = sections[i].getElementsByTagName('sectionname')[0].innerHTML;

            var section = '<div class="section text-center"><h2>'+sectionName+'</h2></div>';

            section += '<div class="section grid-container gap-small g-col-l3 g-col-m2 g-col-s2 g-col-xs-1">';

            sectionArticles = sections[i].getElementsByTagName('sectionarticle');

            for(j = 0;j < sectionArticles.length;j++)
            {
                articleName = sectionArticles[j].getElementsByTagName('articlename')[0].innerHTML;

                articlePrice = sectionArticles[j].getElementsByTagName('articleprice')[0].innerHTML;

                articleAlcohol = sectionArticles[j].getElementsByTagName('articlealcohol')[0].innerHTML;

                if(articleAlcohol==1)
                {
                    section += '<div class="pill midnight-black">'+articleName+' '+articlePrice+' &euro;</div>';
                }
                else
                {
                    section += '<div class="pill leaf-green">'+articleName+' '+articlePrice+' &euro;</div>';
                } 
            }

            section += '</div>';

            menu.innerHTML += section;
        }
    }
};

xhttp.open("GET","include/xml/menu.xml",true);

xhttp.send();