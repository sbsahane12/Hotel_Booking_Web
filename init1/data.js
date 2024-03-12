const sampleListings = [{
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        documents: ["Aadhar Card", "Ration Card", "Passport", "Driver's License", "Utility Bill"]
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New York City",
        country: "United States",
        documents: ["Aadhar Card", "Passport", "Utility Bill", "Property Deed", "Bank Statement"]
    },
    {
        title: "Mountain Retreat",
        description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
        documents: ["Ration Card", "Passport", "Driver's License", "Utility Bill", "Property Deed"]
    },
    {
        title: "Historic Villa in Tuscany",
        description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
        documents: ["Passport", "Visa", "Insurance Document", "Health Certificate", "Property Deed"]
    },
    {
        title: "Secluded Treehouse Getaway",
        description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 800,
        location: "Portland",
        country: "United States",
        documents: ["Passport", "Driver's License", "Utility Bill", "Property Deed", "Lease Agreement"]
    },

    // Listing 6
    {
        title: "Beachfront Paradise",
        description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
        documents: ["Passport", "Visa", "Travel Insurance", "Health Certificate", "Flight Itinerary"]
    },
    // Listing 7
    {
        title: "Rustic Cabin by the Lake",
        description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
        documents: ["Ration Card", "Passport", "Driver's License", "Utility Bill", "Property Deed"]
    },
    // Listing 8
    {
        title: "Luxury Penthouse with City Views",
        description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
        documents: ["Passport", "Visa", "Bank Statement", "Property Deed", "Lease Agreement"]
    },
    // Listing 9
    {
        title: "Ski-In/Ski-Out Chalet",
        description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
        documents: ["Passport", "Visa", "Travel Insurance", "Health Certificate", "Flight Itinerary"]
    },
    // Listing 10
    {
        title: "Safari Lodge in the Serengeti",
        description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        documents: ["Passport", "Visa", "Travel Insurance", "Health Certificate", "Safari Booking Confirmation"]
    },
    // Add similar objects for other listings...

    // Listing 11
    {
        title: "Historic Canal House",
        description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
        documents: ["Passport", "Visa", "Hotel Reservation", "Travel Insurance", "Flight Itinerary"]
    },
    // Listing 12
    {
        title: "Private Island Retreat",
        description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
        documents: ["Passport", "Visa", "Hotel Booking Confirmation", "Travel Insurance", "Flight Itinerary"]
    },
    // Listing 13
    {
        title: "Charming Cottage in the Cotswolds",
        description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
        documents: ["Passport", "Visa", "Hotel Reservation", "Travel Insurance", "Car Rental Confirmation"]
    },
    // Listing 14
    {
        title: "Historic Brownstone in Boston",
        description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Boston",
        country: "United States",
        documents: ["Passport", "Visa", "Hotel Reservation", "Travel Insurance", "City Tour Tickets"]
    },
    // Listing 15
    {
        title: "Oceanview Villa in Santorini",
        description: "Wake up to breathtaking views of the Aegean Sea from this stunning oceanview villa in Santorini.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600133215367-20ebf404d979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbnRvcmluaSUyMHBvdXxlbnwwfHwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2800,
        location: "Santorini",
        country: "Greece",
        documents: ["Passport", "Visa", "Hotel Reservation", "Travel Insurance", "Boat Tour Confirmation"]
    },
    // Add similar objects for other listings...

    // Listing 16
    {
        title: "Modern Villa in Bali",
        description: "Experience luxury living in this contemporary villa nestled in the lush jungles of Bali.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1569115326926-0983036b8a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbGklMjB2aWxsYXxlbnwwfHwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
        documents: ["Passport", "Visa", "Hotel Reservation", "Travel Insurance", "Spa Booking Confirmation"]
    },
    // Listing 17
    {
        title: "Clifftop Retreat in Big Sur",
        description: "Perched on a cliff overlooking the Pacific Ocean, this retreat offers unparalleled views and serenity.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542945718-7c29a1e23036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2t8ZW58MHx8MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Big Sur",
        country: "United States",
        documents: ["Passport", "Visa", "Hotel Reservation", "Travel Insurance", "Restaurant Reservations"]
    },
    // Listing 18
    {
        title: "Mountain View Chalet in Whistler",
        description: "Enjoy stunning mountain views from this cozy chalet in the world-renowned ski resort of Whistler.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512058564366-18510be2db38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjB2aWV3fGVufDB8fDB8fHw%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Whistler",
        country: "Canada",
        documents: ["Passport", "Visa", "Ski Pass", "Equipment Rental Confirmation", "Apres Ski Reservations"]
    },
    // Listing 19
    {
        title: "Safari Lodge in the Serengeti",
        description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        documents: ["Passport", "Visa", "Safari Tour Booking", "Travel Insurance", "Binoculars"]
    },
    // Listing 20
    {
        title: "Historic Castle in Scotland",
        description: "Live like royalty in this majestic castle nestled in the breathtaking Scottish Highlands.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1572650388333-011e48f49bd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        },
        price: 3500,
        location: "Scottish Highlands",
        country: "Scotland",
        documents: ["Passport", "Visa", "Castle Tour Booking", "Travel Insurance", "Highland Games Tickets"]
    }
];


module.exports = sampleListings;