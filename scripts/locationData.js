const nationalParks = [
    {
        id: "0" ,
        name: "Sands Whitewater River" ,
        city: "Jacson" ,
        state: "WY" ,
        region: "northwest",
        type: "lake" ,
        url: "https://www.sandswhitewater.com/",
        image: "https://thenationsvacation.com/wp-content/uploads/2020/07/header-sands-2.jpg"
    } 
    ,
    {
        id: "1" ,
        name: "Crater Lake National Park" ,
        city: "Crater Lake" ,
        state: "OR" ,
        region: "northwest" ,
        type: "lake" ,
        url: "https://www.travelcraterlake.com/",
        image: "https://images.squarespace-cdn.com/content/v1/5daa08ae26975246831fbdc5/1577478955555-U1SBFML3KZQYASULD3XE/crater-lake?format=1000w"    
    }
    ,
    {
        id: "2" ,
        name: "Bushkill Falls",
        city: "Bushkill" ,
        state: "PA" ,
        region: "east" ,
        type: "forest" ,
        url: "https://www.visitbushkillfalls.com/?&mkwid=sdQVa97ds&crid=444966723512&mp_kw=bushkill%20falls&mp_mt=p&gclid=Cj0KCQiAkMGcBhCSARIsAIW6d0APMQm9akkf5dGRXAH2cunpA-9K34EfvhgjKv36uRmTmDvhQ1vcELkaApCCEALw_wcB&&mkwid=sdQVa97ds&crid=444966723512&mp_kw=bushkill%20falls&mp_mt=p&gclid=Cj0KCQiAkMGcBhCSARIsAIW6d0APMQm9akkf5dGRXAH2cunpA-9K34EfvhgjKv36uRmTmDvhQ1vcELkaApCCEALw_wcB",
        image:"https://www.shawneeinn.com/wp-content/uploads/2015/05/Bushkill-Falls-Blog-750x500-1.jpg"
    }
    ,
    {
        id: "3" ,
        name: "Kartchner Caverns",
        city: "Benson" ,
        state: "AZ" ,
        region: "southwest" ,
        type: "cavern" ,
        url: "https://azstateparks.com/kartchner/cave-tours/tours",
        image: "https://southernarizonaguide.com/wp-content/uploads/Karchner-Caverns1.jpg"
    }
    ,
    {
        id: "4" ,
        name: "Lake Mead",
        city: "Lake Mead" ,
        state: "NV" ,
        region: "west" ,
        type: "lake" ,
        url: "https://www.nps.gov/lake/planyourvisit/index.htm",
        image: "https://www.watereducation.org/sites/main/files/imagecache/lightbox/main-images/lake-mead-lighthawk-flight-aug-2020-6-cropped-web.jpg"
    }
    ,
    {
        id: "5" ,
        name: "Glacier Bay National Park",
        city: "Glacier Bay" ,
        state: "AK" ,
        region: "north" ,
        type: "lake" ,
        url: "https://www.visitglacierbay.com/lodging-camping/glacier-bay-lodge/?&mkwid=sSwca6lYm&crid=497981630373&mp_kw=glacier%20bay%20national%20park&mp_mt=b&gclid=Cj0KCQiAkMGcBhCSARIsAIW6d0B-q1lfA3q_JgKG6SMo73cWpLV_iZkqVmGGpC8nHXBtH7fjcRGu08kaAoOqEALw_wcB",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBkQCtiUL7z34JoAxhkwVzMK6RtRfmJqbN6XEMfOQGtZtqyaRQtDxLVtj-3BcXYbWnCfo&usqp=CAU"
    }
    ,
    {
        id: "6" ,
        name: "Denali National Park",
        city: "Denali" ,
        state: "AK" ,
        region: "north" ,
        type: "mountain" ,
        url: "https://www.denaliparkvillage.com/special-offers/specials-packages/?&mkwid=spZwxAFj6&crid=549268773020&mp_kw=denali%20national%20park&mp_mt=e&gclid=Cj0KCQiAkMGcBhCSARIsAIW6d0An4IJsYYgH6TasSxdH5XYu2oxGC9nsGyr1alXjx5jkKm-VmudEaVYaAqhVEALw_wcB",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QqaKRTQyqzfGNhPbmxT1UHiW4IeFhDqg_o-MSE4RYcdiTacz-3KeXhmi1ZETxs-do9Y&usqp=CAU"
    }
    ,
    {
        id: "7" ,
        name: "Asilomar",
        city: "Pacific Grove" ,
        state: "CA" ,
        region: "west" ,
        type: "Beach" ,
        url: "https://www.visitasilomar.com/special-offers/specials-packages?&mkwid=sqJRuQyl3&crid=615856373981&mp_kw=asilomar&mp_mt=b&gclid=Cj0KCQiAkMGcBhCSARIsAIW6d0ArIQgEjETdIvWsPj2mWI1Vstr0r7lf36MpuhdValiKJCwj_CEY8P4aAgV6EALw_wcB",
        image: "https://static.rootsrated.com/image/upload/s--N9u9EVsk--/t_rr_large_traditional/n0ks64cuqwiueupaps6j.jpg"
    }
    ,
    {
        id: "8" ,
        name: "Togwotee",
        city: "Jackson" ,
        state: "WY" ,
        region: "north" ,
        type: "mountain" ,
        url: "https://www.togwoteelodge.com/special-offers/specials-packages?&mkwid=sHgcFoWgs&crid=638203877675&mp_kw=togwotee&mp_mt=b&gclid=CjwKCAiAs8acBhA1EiwAgRFdw-IBelf8eB5yE2XPLZNJ-E0Exwqei4zzkpiacb7QpgJjeUnyeihCrRoCNdMQAvD_BwE",
        image: "https://www.togwoteelodge.com/media/145584/teton-winter-sunrise_1000x667.jpg"
    }
    ,
    {
        id: "9" ,
        name: "Mesa Verde National Park",
        city: "Mesa Verde" ,
        state: "CO" ,
        region: "west" ,
        type: "mountain" ,
        url: "https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/07/GettyImages-645304746-scaled.jpg",
        image: "https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/07/GettyImages-645304746-scaled.jpg"
    }
    ,
    {
        id: "10" ,
        name: "Olympic National Park",
        city: "Quinault" ,
        state: "WA" ,
        region: "northwest" ,
        type: "mountain" ,
        url: "https://www.sandswhitewater.com/",
        image: "https://images.squarespace-cdn.com/content/v1/5a9df9f4a9e028af26f1eb8c/1596934060992-CP3FGIPSV4MWPYAE90JK/uprooted-traveler-weekend-itinerary-olympic-national-park-hurricane-hill-trail.jpg?format=1500w"
    }
    ,
    {
        id: "11" ,
        name: "Zephyr Cove",
        city: "Lake Tahoe" ,
        state: "NV" ,
        region: "west" ,
        type: "lake" ,
        url: "https://www.zephyrcove.com/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTzeCSU20_znYxUJANBF1J1x96j2bZsQjyw&usqp=CAU"
    }
    ,
    {
        id: "12" ,
        name: "Yosemite National Park",
        city: "Yosemite" ,
        state: "CA" ,
        region: "west" ,
        type: "mountain" ,
        url: "https://www.yosemite.com/",
        image: "https://cdn.britannica.com/46/193946-050-853B37E0/Yosemite-National-Park-California.jpg"
    }
    ,
    {
        id: "13" ,
        name: "Lake Powell",
        city: "Lake Powell" ,
        state: "AZ" ,
        region: "west" ,
        type: "lake" ,
        url: "https://www.utah.com/destinations/recreation-areas/lake-powell/",
        image: "https://visitsouthernutah.com/wp-content/uploads/2019/09/Lake-Powell-DS-Reflection-Canyon-01-KCOT.jpg"
    }
    ,
    {
        id: "14" ,
        name: "Lake Tahoe",
        city: "Lake Tahoe" ,
        state: "CA" ,
        region: "west" ,
        type: "lake" ,
        url: "https://visitinglaketahoe.com/",
        image: "https://lp-cms-production.imgix.net/2021-03/Recreation_Lakes_Tahoe_GI.jpg"
    }
] ;