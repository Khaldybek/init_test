export async function GET(request: Request, { params }: { params: { id: string } }) {
    const products = [
        {
            id: 1,
            name: "Breed Dry Dog Food",
            price: 100.0,
            rating: 4.5,
            reviews: 38,
            inStock: true,
            description:
                "Breed Dry Dog Food – High quality pet supplies with balanced nutrition for your dog, easy digestible and highly palatable.",
            colors: [],
            sizes: [
                { name: "XS", selected: false },
                { name: "S", selected: false },
                { name: "M", selected: true },
                { name: "L", selected: false },
                { name: "XL", selected: false },
            ],
            images: [
                "/dog.png?height=80&width=80",
                "/dog.png?height=80&width=80",
                "/dog.png?height=80&width=80",
                "/dog.png?height=80&width=80",
            ],
            mainImage: "/dog.png?height=500&width=500",
        },
        {
            id: 2,
            name: "CANON EOS DSLR Camera",
            price: 350.0,
            rating: 4.7,
            reviews: 96,
            inStock: true,
            description:
                "CANON EOS DSLR Camera – Capture stunning photos and videos with full manual control and advanced autofocus system.",
            colors: [],
            sizes: [
                { name: "XS", selected: false },
                { name: "S", selected: false },
                { name: "M", selected: true },
                { name: "L", selected: false },
                { name: "XL", selected: false },
            ],
            images: [
                "/canon.png?height=80&width=80",
                "/canon.png?height=80&width=80",
                "/canon.png?height=80&width=80",
                "/canon.png?height=80&width=80",
            ],
            mainImage: "/canon.png?height=500&width=500",
        },
        {
            id: 3,
            name: "ASUS FHD Gaming Laptop",
            price: 700.0,
            rating: 4.8,
            reviews: 325,
            inStock: true,
            description:
                "ASUS FHD Gaming Laptop – High performance gaming laptop with Full HD display, powerful GPU and fast SSD storage.",
            colors: [],
            sizes: [
                { name: "XS", selected: false },
                { name: "S", selected: false },
                { name: "M", selected: true },
                { name: "L", selected: false },
                { name: "XL", selected: false },
            ],
            images: [
                "/asus.png?height=80&width=80",
                "/asus.png?height=80&width=80",
                "/asus.png?height=80&width=80",
                "/asus.png?height=80&width=80",
            ],
            mainImage: "/asus.png?height=500&width=500",
        },
        {
            id: 4,
            name: "Curology Product Set",
            price: 500.0,
            rating: 4.6,
            reviews: 145,
            inStock: true,
            description:
                "Curology Product Set – Personalized skincare formula with dermatologist-recommended ingredients for clear, healthy skin.",
            colors: [],
            sizes: [
                { name: "XS", selected: false },
                { name: "S", selected: false },
                { name: "M", selected: true },
                { name: "L", selected: false },
                { name: "XL", selected: false },
            ],
            images: [
                "/baleler.png?height=80&width=80",
                "/baleler.png?height=80&width=80",
                "/baleler.png?height=80&width=80",
                "/baleler.png?height=80&width=80",
            ],
            mainImage: "/baleler.png?height=500&width=500",
        },
        {
            id: 5,
            name: "Kids Electric Car",
            price: 850.0,
            rating: 4.9,
            reviews: 65,
            inStock: true,
            description:
                "Kids Electric Car – Battery-powered ride-on toy car with realistic design, safe for ages 3+ and easy assembly.",
            colors: [
                { name: "Red", value: "#FF0000" },
                { name: "Black", value: "#000000" },
            ],
            sizes: [
                { name: "XS", selected: false },
                { name: "S", selected: false },
                { name: "M", selected: true },
                { name: "L", selected: false },
                { name: "XL", selected: false },
            ],
            images: [
                "/car.png?height=80&width=80",
                "/car.png?height=80&width=80",
                "/car.png?height=80&width=80",
                "/car.png?height=80&width=80",
            ],
            mainImage: "/car.png?height=500&width=500",
        },
        {
            id: 6,
            name: "Jr. Zoom Soccer Cleats",
            price: 150.0,
            rating: 4.5,
            reviews: 35,
            inStock: true,
            description:
                "Jr. Zoom Soccer Cleats – Lightweight and durable soccer cleats for junior players, designed for comfort and traction.",
            colors: [
                { name: "Yellow", value: "#FFFF00" },
                { name: "Green", value: "#00FF00" },
            ],
            sizes: [
                { name: "XS", selected: false },
                { name: "S", selected: false },
                { name: "M", selected: true },
                { name: "L", selected: false },
                { name: "XL", selected: false },
            ],
            images: [
                "/cleats.png?height=80&width=80",
                "/cleats.png?height=80&width=80",
                "/cleats.png?height=80&width=80",
                "/cleats.png?height=80&width=80",
            ],
            mainImage: "/cleats.png?height=500&width=500",
        },
        {
            id: 7,
            name: "GP11 Shooter USB Gamepad",
            price: 550.0,
            rating: 4.8,
            reviews: 55,
            inStock: true,
            description:
                "GP11 Shooter USB Gamepad – Ergonomic gamepad with responsive buttons and vibration feedback for PC gaming.",
            colors: [
                { name: "Black", value: "#000000" },
                { name: "Red", value: "#FF0000" },
            ],
            sizes: [
                { name: "XS", selected: false },
                { name: "S", selected: false },
                { name: "M", selected: true },
                { name: "L", selected: false },
                { name: "XL", selected: false },
            ],
            images: [
                "/gamepad.png?height=80&width=80",
                "/gamepad.png?height=80&width=80",
                "/gamepad.png?height=80&width=80",
                "/gamepad.png?height=80&width=80",
            ],
            mainImage: "/gamepad.png?height=500&width=500",
        },
        {
            id: 8,
            name: "Quilted Satin Jacket",
            price: 650.0,
            rating: 4.7,
            reviews: 55,
            inStock: true,
            description:
                "Quilted Satin Jacket – Stylish and warm satin jacket with diamond quilting, perfect for cool weather.",
            colors: [
                { name: "DarkGreen", value: "#006400" },
                { name: "DarkRed", value: "#8B0000" },
            ],
            sizes: [
                { name: "XS", selected: false },
                { name: "S", selected: false },
                { name: "M", selected: true },
                { name: "L", selected: false },
                { name: "XL", selected: false },
            ],
            images: [
                "/jacket.png?height=80&width=80",
                "/jacket.png?height=80&width=80",
                "/jacket.png?height=80&width=80",
                "/jacket.png?height=80&width=80",
            ],
            mainImage: "/jacket.png?height=500&width=500",
        },
    ];

    const product = products.find((product) => product.id === parseInt(params.id));

    if (!product) {
        return new Response(JSON.stringify({ error: "Product not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify(product), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}