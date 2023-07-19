import ListingCard, { ListingCardProp } from "../../components/ListingCard";
import ProductSlider from "../../components/ProductSlider";

const FeaturedListings = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <ProductSlider title="Featured Listings">
          {listings.map((item, index) => <ListingCard key={index} {...item} />)}
        </ProductSlider>
      </div>
    </section>
  );
};

export default FeaturedListings;

const listings: ListingCardProp[] = [
  {
    img: "hero.jpg",
    location: "Lekki, Lagos",
    name: "Luxury 5 Bedroom Detached House",
    price: "250,000,000",
    rooms: {
      bathroom: 4,
      bedroom: 5,
      toilet: 5
    }
  },
  {
    img: "hero.jpg",
    location: "Lekki, Lagos",
    name: "Luxury 5 Bedroom Detached House",
    price: "250,000,000",
    rooms: {
      bathroom: 4,
      bedroom: 5,
      toilet: 5
    }
  },
  {
    img: "hero.jpg",
    location: "Lekki, Lagos",
    name: "Luxury 5 Bedroom Detached House",
    price: "250,000,000",
    rooms: {
      bathroom: 4,
      bedroom: 5,
      toilet: 5
    }
  },
  {
    img: "hero.jpg",
    location: "Lekki, Lagos",
    name: "Luxury 5 Bedroom Detached House",
    price: "250,000,000",
    rooms: {
      bathroom: 4,
      bedroom: 5,
      toilet: 5
    }
  },
  {
    img: "hero.jpg",
    location: "Lekki, Lagos",
    name: "Luxury 5 Bedroom Detached House",
    price: "250,000,000",
    rooms: {
      bathroom: 4,
      bedroom: 5,
      toilet: 5
    }
  },
  {
    img: "hero.jpg",
    location: "Lekki, Lagos",
    name: "Luxury 5 Bedroom Detached House",
    price: "250,000,000",
    rooms: {
      bathroom: 4,
      bedroom: 5,
      toilet: 5
    }
  },
  {
    img: "hero.jpg",
    location: "Lekki, Lagos",
    name: "Luxury 5 Bedroom Detached House",
    price: "250,000,000",
    rooms: {
      bathroom: 4,
      bedroom: 5,
      toilet: 5
    }
  }
];
