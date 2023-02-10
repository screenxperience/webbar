var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {

        var xmlDocument = xhttp.responseXML;

        var carousel = document.getElementById('carousel');

        var cocktails = xmlDocument.getElementsByTagName('cocktail');

        for(i = 0;i < cocktails.length;i++)
        {
            var cocktailName = cocktails[i].getElementsByTagName('cocktailname')[0].innerHTML;

            var cocktailPrice = cocktails[i].getElementsByTagName('cocktailprice')[0].innerHTML;
            
            var cocktailDescription = cocktails[i].getElementsByTagName('cocktaildescription')[0].innerHTML;

            var cocktailImage = cocktails[i].getElementsByTagName('cocktailimage')[0].innerHTML;

            var cocktailIngredients = cocktails[i].getElementsByTagName('cocktailingredients')[0].innerHTML;

            var cocktailIngredientsObj = cocktailIngredients.split(',');

            var cocktail = 
            '<div class="carouselitem">'+
            '<div class="flex-container rw ac">'+
            '<div class="col-l4 col-m12 col-s12 col-xs12">'+
            '<div class="text-center">'+
            '<img class="col-l12 col-m7 col-s8 col-xs12 drop-shadow" src="'+cocktailImage+'" alt="pina_colada"/>'+
            '</div>'+
            '</div>'+
            '<div class="col-l8 col-m12 col-s12 col-xs12">'+
            '<div class="flex-container rw ac jse">'+
            '<h1>'+cocktailName+'</h1>'+
            '<div class="circle-medium text-medium leaf-green">'+cocktailPrice+' &euro;</div>'+
            '</div>'+
            '<div class="text-center">'+
            '<p class="text-medium">'+cocktailDescription+'</p>'+
            '<h1>Zutaten</h1>'+
            '</div>'+
            '<div class="section grid-container gap-small g-col-l3 g-col-m2 g-col-s2 g-col-xs1">';
            
            for(j = 0;j < cocktailIngredientsObj.length;j++)
            {
                cocktail += '<div class="pill light-midnight-black">'+cocktailIngredientsObj[j]+'</div>';
            }

            cocktail += 
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>';

            carousel.innerHTML += cocktail;
        }

        var pagination = '<div class="pagination">';

        for(i = 0;i < cocktails.length;i++)
        {
            pagination += '<div class="paginationitem"></div> ';
        }

        pagination += '</div>';

        carousel.innerHTML += pagination;

        var carouselitems,paginations,current,next;

        current = cocktails.length-1;

        const slide = () => {
    
            carouselitems = document.getElementsByClassName('carouselitem');

            paginations = document.getElementsByClassName('paginationitem');

            carouselitems[current].classList.remove('active');

            paginations[current].classList.remove('active');

            next = ++current;

            if(next > carouselitems.length-1)
            {
                next = 0;
            }

            carouselitems[next].classList.add('active');

            paginations[next].classList.add('active');

            current = next;
        }

        slide();

        var interval = window.setInterval(function() {
            slide();
        },10000);
    }
};

xhttp.open("GET","include/xml/carousel.xml",true);

xhttp.send();