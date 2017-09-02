export const menuText = language => {
    if (language === "nl") {
        return {home: "Voorpagina", practical_info: "Praktische info", map: "Kaart", gift_list: "Cadeau lijst"};
    } else if (language === "no") {
        return {home: "Hjem", practical_info: "Praktisk info", map: "Kart", gift_list: "Gaveliste"};
    } else {
        return {home: "Home", practical_info: "Practical info", map: "Map", gift_list: "Gift list"};
    }
}