export type Property = {
    image: string;
    price: string;
    title: string;
    location: string;
    beds: number;
    baths: number;
};

export const properties: Property[] = [
    {
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        price: "$120,000",
        title: "Modern Family House",
        location: "Addis Ababa, Bole",
        beds: 3,
        baths: 2,
    },
    {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        price: "$95,000",
        title: "Luxury Villa",
        location: "Addis Ababa, CMC",
        beds: 4,
        baths: 3,
    },

];