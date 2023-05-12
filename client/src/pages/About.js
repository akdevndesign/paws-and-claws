// Importing the CSS file for styling
import "../styles/styles.css";

export default function About() {
  return (
    <div className="about-container">
    <h1>About Paws & Claws </h1>
    <p>Our website is dedicated to helping pets find loving homes. We provide a platform for animal shelters
      and rescue groups to showcase their adoptable pets and connect with potential adopters.</p>
    <div className="section-break"></div>
    <h2>How to Adopt a Pet</h2>
    <p>Browse our website to find pets that match your lifestyle and preferences. You can search for pets by breed, age, 
      and location. Once you find a pet you're interested in, create a profile to save your favorite pets and apply for adoption.</p>
    <p>Adoption requirements vary by shelter and rescue group, but generally, you will need to complete an application, provide references, and 
      possibly have a home visit. Once your application is approved, you can take your new pet home!</p>
    <div className="section-break"></div>
    <h2>Why Adopt a Pet</h2>
    <p>Adopting a pet is a great way to add joy and companionship to your life, while also giving an animal in need a second chance. 
      Pets from shelters and rescue groups are often already spayed or neutered, vaccinated, and microchipped, saving you time and money on these services.</p>
  </div>
);
}

