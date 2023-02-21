import Carousel from 'react-bootstrap/Carousel';
import './homepage.css';

function Homepage() {
  return (
    <>
    <Carousel slide={true} >
      <Carousel.Item >
        <img
            className=" img-fluid d-block w-100  img-3"

            //1600 x 900
            src='https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1643403830.jpg'
          alt="First slide"
          // style={{ height: "600px" }}
        />
        <Carousel.Caption>
          <h2 className='carousel-par'>Italian Cuisine</h2>
          <p className= "carousel-par">Italian cuisine is known for its diversity, simplicity, and use of fresh, high-quality ingredients. It is often characterized by its emphasis on pasta, tomato-based sauces, and a variety of cheeses, cured meats, and seafood. ......</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  img-3"
         src='https://images.lifestyleasia.com/wp-content/uploads/sites/3/2021/06/03202147/Bibimbap-with-Kimchi-1600x900.jpg'
          alt="Second slide"
          // style={{  height: "600px" }}
          
        />

        <Carousel.Caption>
          <h2 className='carousel-par'>Asian Cuisine</h2>
          <p  className= "carousel-par">Asian cuisine is a diverse and complex collection of regional cuisines from various countries and cultures throughout Asia. It is often characterized by the use of rice, noodles, and a wide range of spices, herbs, and sauces.. ..., </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block w-100  img-3"
            src='https://www.teahub.io/photos/full/253-2538486_slider3-restaurant-food-pic-hd.jpg'
            alt="Third slide" 
            // style={{  height: "600px" }}
            />

        <Carousel.Caption>
          <h2 className='carousel-par'>American cuisine</h2>
          <p  className= "carousel-par">
          American cuisine is a blend of different culinary traditions from around the world. It has been influenced by Native American, European, African, and Asian cultures, among others. American cuisine often includes dishes such as hamburgers, hot dogs, ... </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<div className="features mt -1 m-5 p-5">
    <hr class="featurette-divider"/>
<div className="row featurette">
<div className="col-md-7">
  <h2 className="featurette-heading fw-normal lh-1">Adobo is a popular dish in the Philippines and is well-loved by locals and foreigners alike for several reasons: <span class="text-muted">"Why is adobo beloved by both locals and foreigners?".</span></h2>
  <p class="lead">Versatility: Adobo can be made with different types of meat such as pork, chicken, beef, or even seafood. It can also be adjusted to suit different tastes by varying the amount of vinegar, soy sauce, and other spices.

Flavor: Adobo is known for its unique and delicious flavor, which comes from the combination of vinegar, soy sauce, garlic, and other spices. It has a slightly tangy and savory taste that is both comforting and satisfying.

History and Culture: Adobo has a rich history in Philippine cuisine and is considered a staple dish in many households. It is also a dish that has been passed down through generations, making it a significant part of Filipino culture and tradition.

Easy to make: Adobo is relatively easy to prepare and requires minimal ingredients. It can be made in large batches and is perfect for meal prep or feeding a large group of people.

Longevity: Adobo is also known for its longevity. The dish can be kept in the refrigerator for several days, and the flavor actually improves over time.</p>
</div>
<div className="col-md-5">
  <img className="d-block w-100" src="https://gttp.imgix.net/257818/x/0/philippine-adobo-3.jpg" alt=""/> 
</div>
</div>
<hr class="featurette-divider"/>
<div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1"> "What are some popular and iconic dishes in American cuisine?" <span class="text-muted">It's subjective to determine the "best" in American cuisine since it is diverse and varies depending on the region and cultural influences. However, some popular and iconic dishes that are often associated with American cuisine include:</span></h2>
              <p class="lead">Hamburgers: a sandwich consisting of a beef patty, typically served on a bun with various toppings such as cheese, lettuce, tomato, and condiments.

Hot dogs: a type of sausage served in a bun with various toppings such as ketchup, mustard, relish, and onions.

Barbecue: a method of cooking meat (usually pork or beef) over an open flame or in a smoker, often served with a tangy sauce.

Fried chicken: chicken that has been seasoned and breaded before being fried until golden and crispy.

Macaroni and cheese: a dish made from macaroni pasta and a cheese sauce, often baked with a breadcrumb topping.

Apple pie: a dessert made from apples that have been baked in a pastry crust, often served with whipped cream or ice cream.</p>
            </div>
            <div class="col-md-5 order-md-1">
              <img class="d-block w-100" src="https://www.thespruceeats.com/thmb/gwtKeNKbXW9zyHvymWGU6DjDEus=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-ultimate-cheeseburger-530744755-589cfb5b3df78c475878c4da.jpg" alt=""/> "
            </div>
          </div>
<hr class="featurette-divider"/>

<div className="row featurette mb-5">
<div className="col-md-7">
  <h2 className="featurette-heading fw-normal lh-1">What makes Italian cuisine so popular?<span class="text-muted">Italian food's popularity can be attributed to a combination of factors, including the quality and flavor of its ingredients, the simplicity and versatility of its dishes, its ability to accommodate a range of dietary preferences, and its rich cultural tradition.</span></h2>
  <p class="lead ">Italian cuisine is popular for several reasons, including its flavorful ingredients, its simplicity, and its versatility. Italian dishes are often made with fresh and high-quality ingredients, such as tomatoes, olive oil, garlic, and herbs, which give them a delicious and authentic taste. Italian cuisine is also known for its simplicity, as many dishes have only a few ingredients, yet they come together to create rich and complex flavors. Additionally, Italian food is versatile and can accommodate a range of dietary preferences, including vegetarian, gluten-free, and dairy-free diets. Finally, Italian food is associated with a rich culinary tradition and culture, which has helped to popularize it around the world.</p></div>
<div className="col-md-5">
  <img className="d-block w-100" src="https://plus.unsplash.com/premium_photo-1667540791706-a123bf631f0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/> 
</div>
</div>
</div>

</>
  );
}

export default Homepage;