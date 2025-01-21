import logo from './logo.svg'
import service1 from './service1.jpg'
import service4 from './service4.jpg'
import service3 from './service3.png'
import service5 from './service5.jpg'
import service6 from './service6.png'
import service2 from './service2.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.svg'
import About_us from './About_us.jpg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import star_icon from './star_icon.svg'



export const assets = {
    logo,
    service1,
    service3,
    service4,
    service5,
    service6,
    service2,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    menu_icon,
    cross_icon,
    About_us,
    left_arrow,
    right_arrow,
    star_icon,


   
}

export const servicesData = [
  {
    title: "Homes",
    price: "$2,50,000",
    location: "California",
    image:service4
  },
  {
    title: "Housing Society",
    price: "$2,50,000",
    location: "San Francisco",
    image: service3,
  },
  {
    title: "Commercial",
    price: "$2,50,000",
    location: "Chicago",
    image: service5,
  },
  {
    title: "Operation and maintenance",
    price: "$2,50,000",
    location: "Los Angeles",
    image: service1,
  },
  {
    title: "Energy storage",
    price: "$2,50,000",
    location: "San Francisco",
    image: service6,
  },
  {
    title: "Solar Street Lights",
    price: "$2,50,000",
    location: "Chicago",
    image: service2,
  },
  
];

export const testimonialsData = [
  {
      name: "Donald Jackman",
      title: "Marketing Manager",
      image: profile_img_1,
      alt: "Portrait of Donald Jackman",
      rating: 5,
      text: "We had an excellent experience with Solar Sys. Their team was professional, thorough and timely. They walked us through the entire process and helped us to gain a good understanding of the system. Their installation team were quick, thorough and clean. I highly recommend them to anyone considering solar."
  },
  {
      name: "Richard Nelson",
      title: "UI/UX Designer",
      image: profile_img_2,
      alt: "Portrait of Richard Nelson",
      rating: 4,
      text: "They listened to our needs, gave good advice and did a good and timely installation. In the first month our hungry squirrels nibbled away our connection.Solar Sys came back and fixed it, though not covered by their warranty. Great business!"
  },
  {
      name: "James Washington",
      title: "Co-Founder",
      image: profile_img_3,
      alt: "Portrait of James Washington",
      rating: 5,
      text: "They did a very good assessment of our energy needs. The sales representative was very informative and patient when an our question. The technicians were very professional and provided information about the product and its functions. It is very good value for the money."
  }
];